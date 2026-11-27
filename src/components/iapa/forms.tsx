import { useState, type FormEvent, type ReactNode } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import type { Lang } from "@/lib/iapa-content";
import { formSubmissionSchema, submitIapaForm, type FormType } from "@/lib/forms.functions";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const FORM_UI = {
  en: {
    name: "Full name",
    namePlaceholder: "e.g. Aminata Ouedraogo",
    email: "Email address",
    emailPlaceholder: "you@organisation.org",
    org: "Organisation / Cooperative",
    orgPlaceholder: "Organisation or institution",
    country: "Country",
    countryPlaceholder: "e.g. Ghana, Kenya, Burkina Faso",
    phone: "Phone / WhatsApp (optional)",
    phonePlaceholder: "+233 ...",
    programme: "Programme or format",
    message: "Message / details",
    messagePlaceholder: "Share your goals, target group or questions...",
    testimonialPlaceholder: "Share your experience with IAPA training or partnerships...",
    submit: {
      newsletter: "Subscribe",
      membership: "Submit membership enquiry",
      partnership: "Submit partnership enquiry",
      contact: "Send message",
      training: "Submit training request",
      event: "Complete registration",
      testimonial: "Submit testimonial",
      opportunity: "Submit enquiry",
    } as Record<FormType, string>,
    sending: "Submitting…",
    successTitle: {
      newsletter: "You're subscribed to IAPA Pulse",
      membership: "Membership enquiry received",
      partnership: "Partnership enquiry received",
      contact: "Message received",
      training: "Training request received",
      event: "Registration received",
      testimonial: "Thank you for sharing your testimonial",
      opportunity: "Enquiry received",
    } as Record<FormType, string>,
    successBody: "Your submission has been recorded by the IAPA Executive Secretariat.",
    another: "Submit another",
    genericError: "Please check the highlighted fields and try again.",
  },
  fr: {
    name: "Nom complet",
    namePlaceholder: "ex. Aminata Ouedraogo",
    email: "Adresse e-mail",
    emailPlaceholder: "vous@organisation.org",
    org: "Organisation / Coopérative",
    orgPlaceholder: "Organisation ou institution",
    country: "Pays",
    countryPlaceholder: "ex. Ghana, Sénégal, Burkina Faso",
    phone: "Téléphone / WhatsApp (facultatif)",
    phonePlaceholder: "+226 ...",
    programme: "Programme ou format",
    message: "Message / précisions",
    messagePlaceholder: "Précisez vos objectifs, votre public cible ou vos questions...",
    testimonialPlaceholder: "Partagez votre expérience avec les formations ou partenariats de l'IAPA...",
    submit: {
      newsletter: "S'abonner",
      membership: "Envoyer la demande d'adhésion",
      partnership: "Envoyer la demande de partenariat",
      contact: "Envoyer le message",
      training: "Envoyer la demande de formation",
      event: "Confirmer l'inscription",
      testimonial: "Envoyer le témoignage",
      opportunity: "Envoyer la demande",
    } as Record<FormType, string>,
    sending: "Envoi en cours…",
    successTitle: {
      newsletter: "Inscription à IAPA Pulse enregistrée",
      membership: "Demande d'adhésion enregistrée",
      partnership: "Demande de partenariat enregistrée",
      contact: "Message enregistré",
      training: "Demande de formation enregistrée",
      event: "Inscription enregistrée",
      testimonial: "Merci pour votre témoignage",
      opportunity: "Demande enregistrée",
    } as Record<FormType, string>,
    successBody: "Votre demande a bien été enregistrée par le Secrétariat exécutif de l'IAPA.",
    another: "Envoyer une autre demande",
    genericError: "Veuillez vérifier les champs indiqués et réessayer.",
  },
} as const;

const inputCls =
  "mt-1.5 block w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground shadow-xs outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

export function NewsletterInlineForm({ lang, dark = false }: { lang: Lang; dark?: boolean }) {
  const ui = FORM_UI[lang];
  const submitFn = useServerFn(submitIapaForm);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    const parsed = formSubmissionSchema.safeParse({
      formType: "newsletter",
      lang,
      email,
      fullName: fullName.trim() || undefined,
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? ui.genericError);
      return;
    }
    setSubmitting(true);
    try {
      await submitFn({ data: parsed.data });
      setDone(true);
      setEmail("");
      setFullName("");
    } catch (err) {
      setError(err instanceof Error ? err.message : ui.genericError);
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div
        role="status"
        className={`flex items-center gap-3 rounded-2xl p-4 text-sm font-semibold ${dark ? "bg-forest-foreground/15 text-primary-foreground" : "bg-secondary text-primary"}`}
      >
        <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden />
        <div>
          <p className="font-extrabold">{ui.successTitle.newsletter}</p>
          <p className="mt-0.5 opacity-90">{ui.successBody}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-md space-y-2.5">
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <label className="sr-only" htmlFor="newsletter-name">{ui.name}</label>
        <input
          id="newsletter-name"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder={ui.name}
          className={`w-full rounded-full px-4 py-3 text-sm outline-none sm:w-44 ${dark ? "bg-background text-foreground placeholder:text-muted-foreground" : "border border-border bg-background text-foreground"}`}
        />
        <label className="sr-only" htmlFor="newsletter-email">{ui.email}</label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={ui.emailPlaceholder}
          className={`min-w-0 flex-1 rounded-full px-4 py-3 text-sm outline-none ${dark ? "bg-background text-foreground placeholder:text-muted-foreground" : "border border-border bg-background text-foreground"}`}
        />
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-sun px-6 py-3 text-sm font-extrabold text-accent-foreground transition hover:brightness-105 disabled:opacity-60"
        >
          {submitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Send className="h-4 w-4" aria-hidden />}
          {submitting ? ui.sending : ui.submit.newsletter}
        </button>
      </div>
      {error && (
        <p role="alert" className={`text-xs font-semibold ${dark ? "text-sun" : "text-destructive"}`}>
          {error}
        </p>
      )}
    </form>
  );
}

export function InquiryForm({
  lang,
  formType,
  defaultSubject = "",
  metadata,
  inverted = false,
}: {
  lang: Lang;
  formType: Exclude<FormType, "newsletter">;
  defaultSubject?: string | undefined;
  metadata?: Record<string, string> | undefined;
  inverted?: boolean;
}) {
  const ui = FORM_UI[lang];
  const submitFn = useServerFn(submitIapaForm);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(defaultSubject);
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const showOrg = formType !== "testimonial";
  const showCountry = formType === "membership" || formType === "partnership" || formType === "training" || formType === "event";
  const showPhone = formType === "membership" || formType === "training" || formType === "event";
  const showSubject = formType === "training" || formType === "event" || formType === "opportunity";
  const labelCls = inverted ? "text-xs font-bold text-primary-foreground/95" : "text-xs font-bold text-foreground";

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFieldErrors({});
    setFormError(null);
    const parsed = formSubmissionSchema.safeParse({
      formType,
      lang,
      fullName,
      email,
      organization: organization.trim() || undefined,
      country: country.trim() || undefined,
      phone: phone.trim() || undefined,
      subject: subject.trim() || undefined,
      message: message.trim() || undefined,
      metadata,
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!errs[key]) errs[key] = issue.message;
      }
      setFieldErrors(errs);
      setFormError(ui.genericError);
      return;
    }
    setSubmitting(true);
    try {
      await submitFn({ data: parsed.data });
      setDone(true);
    } catch (err) {
      setFormError(err instanceof Error ? err.message : ui.genericError);
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div
        role="status"
        className={`rounded-2xl p-6 ${inverted ? "bg-forest-foreground/15 text-primary-foreground" : "border border-primary/25 bg-secondary text-foreground"}`}
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className={`mt-0.5 h-6 w-6 shrink-0 ${inverted ? "text-sun" : "text-primary"}`} aria-hidden />
          <div>
            <p className="text-lg font-extrabold">{ui.successTitle[formType]}</p>
            <p className="mt-1 text-sm opacity-90">{ui.successBody}</p>
            <button
              type="button"
              onClick={() => {
                setDone(false);
                setFullName("");
                setEmail("");
                setOrganization("");
                setCountry("");
                setPhone("");
                setMessage("");
              }}
              className={`mt-4 inline-flex rounded-full px-4 py-2 text-xs font-extrabold ${inverted ? "bg-sun text-accent-foreground" : "bg-primary text-primary-foreground"}`}
            >
              {ui.another}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls}>
            {ui.name} *
            <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder={ui.namePlaceholder} className={inputCls} />
          </label>
          {fieldErrors["fullName"] && <p className={`mt-1 text-xs font-semibold ${inverted ? "text-sun" : "text-destructive"}`}>{fieldErrors["fullName"]}</p>}
        </div>
        <div>
          <label className={labelCls}>
            {ui.email} *
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={ui.emailPlaceholder} className={inputCls} />
          </label>
          {fieldErrors["email"] && <p className={`mt-1 text-xs font-semibold ${inverted ? "text-sun" : "text-destructive"}`}>{fieldErrors["email"]}</p>}
        </div>
      </div>
      {(showOrg || showCountry) && (
        <div className="grid gap-4 sm:grid-cols-2">
          {showOrg && (
            <label className={labelCls}>
              {ui.org}
              <input type="text" value={organization} onChange={(e) => setOrganization(e.target.value)} placeholder={ui.orgPlaceholder} className={inputCls} />
            </label>
          )}
          {showCountry && (
            <label className={labelCls}>
              {ui.country}
              <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder={ui.countryPlaceholder} className={inputCls} />
            </label>
          )}
        </div>
      )}
      {(showPhone || showSubject) && (
        <div className="grid gap-4 sm:grid-cols-2">
          {showPhone && (
            <label className={labelCls}>
              {ui.phone}
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={ui.phonePlaceholder} className={inputCls} />
            </label>
          )}
          {showSubject && (
            <label className={labelCls}>
              {ui.programme}
              <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className={inputCls} />
            </label>
          )}
        </div>
      )}
      <div>
        <label className={labelCls}>
          {ui.message}{formType === "contact" || formType === "partnership" || formType === "testimonial" ? " *" : ""}
          <textarea
            rows={formType === "event" ? 2 : 3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={formType === "testimonial" ? ui.testimonialPlaceholder : ui.messagePlaceholder}
            className={inputCls}
          />
        </label>
        {fieldErrors["message"] && <p className={`mt-1 text-xs font-semibold ${inverted ? "text-sun" : "text-destructive"}`}>{fieldErrors["message"]}</p>}
      </div>
      {formError && <p role="alert" className={`text-xs font-semibold ${inverted ? "text-sun" : "text-destructive"}`}>{formError}</p>}
      <button
        type="submit"
        disabled={submitting}
        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold transition hover:brightness-105 disabled:opacity-60 ${inverted ? "bg-sun text-accent-foreground" : "bg-primary text-primary-foreground"}`}
      >
        {submitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Send className="h-4 w-4" aria-hidden />}
        {submitting ? ui.sending : ui.submit[formType]}
      </button>
    </form>
  );
}

export function FormDialog({
  lang,
  formType,
  triggerLabel,
  title,
  description,
  defaultSubject,
  metadata,
  triggerClassName,
  icon,
}: {
  lang: Lang;
  formType: FormType;
  triggerLabel: string;
  title: string;
  description?: string;
  defaultSubject?: string;
  metadata?: Record<string, string>;
  triggerClassName?: string;
  icon?: ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={
            triggerClassName ??
            "inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-extrabold text-primary-foreground transition hover:brightness-110"
          }
        >
          {icon}
          {triggerLabel}
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100svh-2rem)] w-[calc(100%-2rem)] overflow-y-auto rounded-2xl sm:max-w-xl">
        <DialogHeader className="text-left">
          <DialogTitle className="text-2xl font-extrabold leading-snug">{title}</DialogTitle>
          {description && <DialogDescription className="pt-1 leading-relaxed">{description}</DialogDescription>}
        </DialogHeader>
        <div className="mt-2">
          {formType === "newsletter" ? (
            <NewsletterInlineForm lang={lang} />
          ) : (
            <InquiryForm lang={lang} formType={formType} defaultSubject={defaultSubject} metadata={metadata} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}