import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const FORM_TYPES = [
  "newsletter",
  "membership",
  "partnership",
  "contact",
  "training",
  "event",
  "testimonial",
  "opportunity",
] as const;

export type FormType = (typeof FORM_TYPES)[number];

export const formSubmissionSchema = z
  .object({
    formType: z.enum(FORM_TYPES),
    lang: z.enum(["en", "fr"]).default("en"),
    fullName: z.string().trim().max(120).optional(),
    email: z.string().trim().email("Please enter a valid email address.").max(255),
    organization: z.string().trim().max(160).optional(),
    country: z.string().trim().max(100).optional(),
    phone: z.string().trim().max(50).optional(),
    subject: z.string().trim().max(200).optional(),
    message: z.string().trim().max(2000).optional(),
    metadata: z.record(z.string(), z.string()).optional(),
  })
  .superRefine((val, ctx) => {
    if (val.formType !== "newsletter" && (!val.fullName || val.fullName.length < 2)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["fullName"],
        message: val.lang === "fr" ? "Veuillez indiquer votre nom complet." : "Please enter your full name.",
      });
    }
    if (
      (val.formType === "contact" || val.formType === "partnership" || val.formType === "testimonial") &&
      (!val.message || val.message.length < 10)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["message"],
        message:
          val.lang === "fr"
            ? "Veuillez rédiger un message d'au moins 10 caractères."
            : "Please enter a message of at least 10 characters.",
      });
    }
  });

export type FormSubmissionInput = z.infer<typeof formSubmissionSchema>;

export const submitIapaForm = createServerFn({ method: "POST" })
  .inputValidator((input: FormSubmissionInput) => formSubmissionSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row, error } = await supabaseAdmin
      .from("form_submissions")
      .insert({
        form_type: data.formType,
        lang: data.lang,
        full_name: data.fullName || null,
        email: data.email,
        organization: data.organization || null,
        country: data.country || null,
        phone: data.phone || null,
        subject: data.subject || null,
        message: data.message || null,
        metadata: data.metadata ?? {},
      })
      .select("id")
      .single();

    if (error || !row) {
      throw new Error(
        data.lang === "fr"
          ? "Impossible d'enregistrer votre demande pour le moment. Veuillez réessayer."
          : "Could not save your submission right now. Please try again.",
      );
    }
    return { ok: true as const, id: row.id };
  });