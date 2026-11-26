<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules
- The site is a bilingual multi-page site under the /$lang param route (en|fr); / redirects to /en. All copy lives in src/lib/iapa-content.ts and src/lib/iapa-pages.ts so both languages stay in sync.
- The EN/FR switch links to the same route with the other lang param, so visitors stay on the same page.
- Home and all parent/dropdown child pages use the straight-edged full-bleed banner layout (photo background with left-to-right dark photo-scrim, top breadcrumb trail with orange current label, bold white title, light lead text, and ring-and-pill hero CTAs on Home).
- Home and PageHero share banner typography and height-aware spacing in global CSS; keep content-driven heights so shorter desktop screens fit banners without clipping translated text or buttons.
- The shared header is a fixed, inset glass capsule that compacts on scroll; reserve space inside banners and legal pages so navigation never covers page text.
- Use global type-size and content-density tokens for section headings, cards and grid spacing; maintain readable body text and content-driven page heights instead of scaling or clipping whole pages.
- Derive translated breadcrumbs from the active page hierarchy; render them inside PageHero photos, with the language layout supplying them only for legal pages without PageHero, to avoid duplicate navigation.
- Use a shared ProfileGrid for leadership sections and profile pages, showing title, name and location on cards with full details in an accessible dialog; label fictional names and generated portraits as placeholders inside the dialog rather than verified officeholders.
