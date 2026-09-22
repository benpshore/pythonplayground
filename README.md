# Python Playground

A touch-first Python reading room and learning playground. This repository contains application source only. It does not contain a deployed site address, private records, credentials, or user interaction history.

## What it does

- Python RSS/Atom reading from the official Python and PSF blogs, Real Python, Python Cheatsheet, How-To Geek programming, WIRED, Tom’s Hardware, Trey Hunner, and PyBites. Publisher availability is shown explicitly; Python Cheatsheet feed discovery is best-effort.
- A two-stage server-side OpenAI pipeline: select relevant useful Python articles, then extract article text and summarize it. One short takeaway, brief key points, and an estimated reading time. Excerpt-only and unavailable summaries are labeled.
- Automatically refreshes stale content when the app opens with AI connected; a manual refresh is also available. There is no unattended scheduler. Refreshes have a 15-minute cooldown and a concurrency lock.
- Six built-in exercises: multiple choice, tap-to-place code pieces, and alternative approaches. Double-tap a piece to learn its purpose. Text remains selectable; no dragging is required.
- Touch-based remixing: choose an approach, add/remove/reorder/indent prewritten lines. A text editor is optional. Arbitrary code is reviewed by the model, never executed by the server.
- An AI coach with one-tap prompts and generated puzzles at three levels. Generated puzzles are schema-checked, but are not executed or formally verified. Built-in examples have executable regression checks.
- Midnight and device-matched themes, adjustable text, 1.7 line spacing, wrapped code, reduced-motion support and iOS standalone metadata.
- Private D1 storage for article metadata, bookmarks and completed exercises. Device appearance preferences alone use localStorage.

## Runtime

Vinext/React, TypeScript and Cloudflare Workers. Sites supplies owner-private access, authenticated request headers and a D1 binding named `DB`. API handlers reject anonymous callers. Writes require a matching Origin header. Do not put this behind an untrusted proxy that allows clients to forge identity headers.

The site must be deployed owner-only. Public repository visibility does not grant site access or editing permission.

## Development

Requires Node 22.13+ (Node 22 LTS recommended), pnpm 11.25 and Python 3 for the lesson checks.

```sh
pnpm install --frozen-lockfile
pnpm typecheck
pnpm test
pnpm dev
```

The UI and built-in lessons render locally without secrets. Private API calls require the hosting platform’s authenticated context. Local previews intentionally do not bypass authentication; this means database actions show a connection message when no authenticated context exists.

```sh
pnpm db:generate
pnpm build
```

Schema is in `db/schema.ts`. Commit generated migrations; never change an applied migration. Sites provisions the real database from the logical declaration in `.openai/hosting.json` and applies migrations before publication.

## AI connection

Set server-only `OPENAI_API_KEY` as a hosting secret. `OPENAI_MODEL` defaults to `gpt-5-mini` with low reasoning effort through the Responses API. The key stays out of browser code. API usage is billed to the configured OpenAI API account, separately from a ChatGPT subscription. No API key has been included in this repository.

The model receives public article extracts, or the current learning task, code and selected question. Requests set `store: false`. No chat history is persisted. This setting is not a promise about provider-side retention under the account’s data policy.

Missing AI or storage configuration produces an explicit unavailable state. The built-in exercises and starter reading shelf remain available. Starter guide notes are authored examples, not fetched news or live AI summaries.

## Boundaries

- Only allowlisted HTTPS publisher hosts are fetched. Redirects are rechecked, response size and time are bounded, and external XML entity declarations are rejected.
- Broad feeds get a Python keyword filter before model triage. Without AI, links are explicitly labeled as untriaged and unsummarized.
- Extracts are treated as untrusted data in model instructions; HTML is never rendered from feeds.
- No paywall bypass. Some publishers may return blocked, incomplete or paid content. Summaries of extracted text are not guarantees that every article paragraph was available.
- No analytics, visitor collaboration, public comments, or sharing flow.
- The deployment manifest must never acquire a private project ID in the public repository. Keep the hosted checkout separate; copy only generic application source here.

## Checks

`pnpm test` validates RSS/Atom parsing, fetch URL restrictions, XML entity rejection, article extraction, generated-lesson structure, and actual Python output for every built-in accepted answer, puzzle and alternative.

GitHub Actions runs type checks, those tests and a production build without API credentials. Browser checks cover answer feedback, touch-piece placement, double-tap help and the remix interface. Real iOS Safari and live model/database operations still require verification in the private deployment.
