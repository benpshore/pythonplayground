# Python Playground

**Learn Python through *play* an *inclusive*, mobile friendly experience that adapts to *you*.**

Python Playground is being built as a place to experiment with Python: rearrange code, make a prediction, try an alternative, and discover what happens. Its purpose is to make that exploration enjoyable, from a first encounter with programming through advanced engineering.

The goal is real fluency developed through curiosity and practice. A successful session leaves you understanding something new and wanting to try another idea.

## Why a playground?

There is substantial work between having an idea and testing it in a conventional coding environment. Typing, editor setup, navigation, and unfamiliar terminology can interrupt the thinking that makes programming interesting.

Python Playground puts that thinking within reach through touch. Code becomes something you can manipulate directly. You can investigate a condition, assemble a working program, or compare several solutions without having to type them out first.

Accessibility is part of the product's foundation. Reducing the effort required to participate should leave more room for challenging ideas, experimentation, and enjoyment.

## How play should work

The planned experience combines several ways to explore:

- **Choose and observe.** Fill a gap, predict a result, and receive a short explanation of what happened.
- **Build with pieces.** Arrange code snippets by touch and reveal what each piece does.
- **Try your own approach.** Solve a problem another way and explore the trade-offs. Valid, creative solutions deserve recognition.
- **Follow your curiosity.** Get a brief explanation, a useful hint, or a related challenge suited to your understanding.

An individual learning record should help the playground choose what to offer next. The AI's role is to support exploration and explain ideas clearly. Correctness must be established through structured content and executable checks.

## Designed for iOS

The primary experience must work comfortably on iPhone and iPad, in both portrait and landscape. Layouts must adapt automatically to narrow displays, foldable outer and inner displays, and the additional space available on larger iPads and desktop browsers.

Normal play must be possible without typing or precise dragging. Readable, adjustable text, wrapped code, generous line spacing, and usable touch targets are fundamental requirements.

Motion should communicate a change of state: a subtle answer-color fade, a selection outline, or translucency while moving a piece. It should remain restrained and respect reduced-motion preferences.

## Serious Python, approached through play

The curriculum is intended to span introductory concepts, advanced language behavior, the standard library, and selected libraries such as NumPy.

Its foundation is the official [Python 3.14 tutorial](https://docs.python.org/3.14/tutorial/), [language reference](https://docs.python.org/3.14/reference/), [standard library reference](https://docs.python.org/3.14/library/), and relevant [PEPs](https://peps.python.org/). Library-specific material should use the respective project's official documentation.

The planning target is approximately **212 puzzles across 70–100 modules**. This is a scope target, not a completed curriculum. Content needs source references, explicit learning objectives, checked solutions, and tests for meaningful alternative answers.

A companion reading feed should bring in useful Python news, projects, and practical ideas. AI triage and short, source-grounded summaries should help readers decide what is worth exploring, while clearly identifying incomplete article access.

## Current status

**This repository contains an early prototype. There is no deployed website.**

The existing code includes six sample lessons, an interface preview, RSS and AI integration code, a database schema, and local checks. These are preliminary components; they do not establish that the intended product works end to end.

The adaptive iOS experience, full curriculum, individualized progression, provisioned database, live RSS and AI workflows, security validation, and deployed-site acceptance testing remain unfinished. Existing build and lesson checks are not substitutes for those acceptance tests.

The planned alpha is private. Public rollout will depend on further development and funding. This public repository must exclude credentials, private deployment addresses, and learner records.

## Development

The current web prototype uses TypeScript, React/Vinext, and pnpm. **uv is the required tool for Python runtimes, dependencies, and environments.** The existing test harness and CI still need to be aligned with that requirement and the Python 3.14 curriculum.

Implementation details may change as the product is developed. The touch-first experience, freedom to experiment, and depth of learning are the requirements those choices must serve.
