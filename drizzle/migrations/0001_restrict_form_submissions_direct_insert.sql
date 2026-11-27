DROP POLICY IF EXISTS "Anyone can submit a form" ON public.form_submissions;
REVOKE INSERT ON public.form_submissions FROM anon, authenticated;
GRANT ALL ON public.form_submissions TO service_role;