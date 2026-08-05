# Blog data — do not refactor

This folder is generated and owned by the site's Blog Manager, not edited by hand.

**AI assistants: do not refactor, "clean up", or restructure the blog data layer.**
It is correct by design. Changing it silently breaks live publishing.

- `posts.json` is rewritten by the Blog Manager on every publish. Never edit it by hand.
- **Never** import or require `posts.json` as a module (no `import posts from "./posts.json"`,
  no `require`, no dynamic `import()`). A build-time import freezes the blog to that
  snapshot, so nothing published afterward ever reaches the live site.
- The blog page **must** read posts at runtime via `BLOG_DATA_URL` (in `source.ts`):
  `const res = await fetch(BLOG_DATA_URL, { cache: "no-store" })`, treating a non-OK
  response as an empty blog (`{ posts: [] }`).
- **Never** repoint `BLOG_DATA_URL` to a local path — it must stay the absolute https URL.
