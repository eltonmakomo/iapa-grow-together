CREATE TABLE public.form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type TEXT NOT NULL CHECK (form_type IN ('newsletter', 'membership', 'partnership', 'contact', 'training', 'event', 'testimonial', 'opportunity')),
  lang TEXT NOT NULL DEFAULT 'en' CHECK (lang IN ('en', 'fr')),
  full_name TEXT,
  email TEXT NOT NULL,
  organization TEXT,
  country TEXT,
  phone TEXT,
  subject TEXT,
  message TEXT,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.form_submissions TO anon, authenticated;
GRANT ALL ON public.form_submissions TO service_role;

ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a form"
  ON public.form_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);