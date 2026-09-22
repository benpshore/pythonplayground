# Python Playground

**Learn Python through *play* an *inclusive*, mobile friendly experience that adapts to *you*.**

Python Playground is being built as a place to experiment with Python: rearrange code, make a prediction, try an alternative, and discover what happens. Its purpose is to make that exploration enjoyable, from a first encounter with programming through advanced engineering.

The goal is real fluency developed through curiosity and practice. A successful session leaves you understanding something new and wanting to try another idea.

## Why a playground?

There is substantial work between having an idea and testing it in a conventional coding environment. Typing, editor setup, navigation, and unfamiliar terminology can interrupt the thinking that makes programming interesting.

Python Playground puts that thinking within reach through touch. Code becomes something you can manipulate directly. You can investigate a condition, assemble a working program, or compare several solutions without having to type them out first.

ADHD is central to the design, alongside the needs of people with low vision or blindness, dyslexia, anxiety, limited dexterity, and little time. The interface should offer one clear invitation at a time, with optional help and depth. Feedback should make an unsuccessful experiment useful, without embarrassment or pressure.

## How play should work

The planned experience combines several ways to explore:

- **Choose and observe.** Fill a gap, predict a result, and receive a short explanation of what happened.
- **Build with pieces.** Arrange code snippets by touch. Tap a piece to turn it over, discover its purpose, and return to the code.
- **Try your own approach.** Solve a problem another way and explore the trade-offs. Valid, creative solutions deserve recognition.
- **Follow your curiosity.** Get a brief explanation, a useful hint, or a fresh example generated for the question you are exploring. Move freely between topics.

An individual learning record should help the tutor offer a useful next experiment while leaving the learner in control. Newcomers should feel welcome, and experienced programmers should find real depth. Generated examples need source grounding and executable checks before they can be treated as reliable learning material.

## The story behind the code

Python is part of a much larger human story. A lesson should help explain the problem an idea was created to solve, the people who worked on it, and why their choices still matter.

That background belongs in an optional layer: true, source-backed stories, concise prose, clearly marked sections, an estimated reading time at the top, and selectively highlighted ideas. Interactive visuals should help explain what happens and why. Learners can open the story, explore a connection, or go straight to the puzzle without losing their place.

The aim is the experience of a personal tutor who loves Python and computer science and can connect a small piece of code to a much bigger idea.

## Designed for iOS

The primary experience must work comfortably on iPhone and iPad, in both portrait and landscape. Layouts must adapt automatically to narrow displays, foldable outer and inner displays, and the additional space available on larger iPads and desktop browsers.

Normal play must be possible without typing or precise dragging. Readable, adjustable text, wrapped code, generous line spacing, and usable touch targets are fundamental requirements.

Motion should communicate a change of state: a subtle answer-color fade, a selection outline, or translucency while moving a piece. It should remain restrained and respect reduced-motion preferences.

## Serious Python, approached through play

The curriculum is intended to span introductory concepts, advanced language behavior, the standard library, and selected libraries such as NumPy.

Its foundation is the official documentation for [Python 3.14](https://docs.python.org/3.14/) and [Python 3.15](https://docs.python.org/3.15/), including the tutorials, language and standard library references, relevant [PEPs](https://peps.python.org/), and style guidance. Lessons must identify the version they describe and any differences that matter. Library-specific material should use the respective project's official documentation.

The planning target is approximately **212 puzzles across 70–100 modules**. This is a scope target, not a completed curriculum. Content needs source references, explicit learning objectives, checked solutions, and tests for meaningful alternative answers.

## Research that serves the learner

The tutor needs to find evidence that answers the question at hand, including questions from experienced Python and computing practitioners. Semantic search should find related ideas; bounded recursive search should follow useful references and preserve the source trail.

RSS supplements that research with relevant news, projects, and practical articles. Its primary purpose is to enrich answers and examples, rather than to create an endless reading queue. When an article is useful to the learner, it should come with a succinct takeaway, key points, a reading-time estimate, and clear limits on what was actually available to read.

## Current status

**This repository contains an early prototype. There is no deployed website.**

The existing code includes six sample lessons, an interface preview, RSS and AI integration code, a database schema, and local checks. These are preliminary components; they do not establish that the intended product works end to end.

The adaptive iOS experience, full curriculum, individualized progression, provisioned database, live RSS and AI workflows, security validation, and deployed-site acceptance testing remain unfinished. Existing build and lesson checks are not substitutes for those acceptance tests.

The planned alpha is private. Public rollout will depend on further development and funding. This public repository must exclude credentials, private deployment addresses, and learner records.

## Work plan

The [product roadmap](https://github.com/benpshore/pythonplayground/issues/2) organizes the work into nine epics and twenty scoped issues. Each issue includes acceptance criteria, dependencies, and the evidence needed to close it.

The first delivery milestone is a complete, private learning experience with real services and saved progress. Curriculum expansion follows evidence that the underlying experience works. Planned features remain explicitly separate from verified behavior.

## Development

The current web prototype uses TypeScript, React/Vinext, and pnpm. **uv is the required tool for Python runtimes, dependencies, and environments.** The existing test harness and CI still need to be aligned with that requirement and the declared Python 3.14/3.15 coverage.

Implementation details may change as the product is developed. The touch-first experience, freedom to experiment, and depth of learning are the requirements those choices must serve.
