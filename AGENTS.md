<!-- caveman-begin -->
Caveman mode: full. Every session. No manual activation needed.

Switch level: /caveman lite|full|ultra|wenyan
Stop: "stop caveman" or "normal mode"
<!-- caveman-end -->

<!-- structure-begin -->
Project structure — reference when navigating codebase.

```
.
├── .storybook/           # Storybook config (main.ts, preview.ts)
├── .vite.config.ts       # Vite config for dev
├── assets/               # SVG icons (source for svgr generation)
├── docs/                 # Generated Storybook output
├── scripts/              # Shell scripts (post-generate-icon.sh)
├── src/
│   ├── assets/           # CSS tokens
│   ├── components/       # One dir per component (Button/, Card/, etc.)
│   │   └── <Name>/
│   │       ├── <Name>.component.tsx
│   │       ├── <Name>.styles.ts
│   │       ├── <Name>.stories.tsx
│   │       └── <Name>.test.tsx
│   ├── typings/          # Global type declarations
│   ├── utils/            # Shared utilities (classNames.ts)
│   ├── index.ts          # Public exports barrel
│   └── ...
├── AGENTS.md
├── babel.config.js       # Babel config (jest transforms)
├── jest.config.js        # Jest config
├── package.json
├── pnpm-lock.yaml
├── rollup.config.js      # Build config (CJS + ESM + .d.ts)
└── tsconfig.json
```

Key:
- Build: Rollup → CJS + ESM + types
- Dev/Storybook: Vite
- Tests: Jest + jsdom
- Package manager: pnpm
<!-- structure-end -->

<!-- standards-begin -->
Project standards — enforce on every task.

## YAGNI (You Aren't Gonna Need It)
- No features/specs/types/interfaces until code path needs them NOW
- No "future-proof" abstractions — delete when unused
- No premature optimization — measure first, optimize proven bottleneck
- If it ain't used, it don't exist

## KISS (Keep It Simple, Stupid)
- Simplest solution that works wins
- One function = one job. Short functions preferred
- No clever tricks — readable > clever
- Favor plain loops over obscure functional chains
- Flat over nested. Guard clauses over deep if/else
- When two solutions equal function, pick shorter

## DRY (Don't Repeat Yourself)
- Copy-paste OK for 2 occurrences if stable and clear
- 3+ occurrences = extract shared logic
- Never DRY prematurely — duplication < wrong abstraction
- When extracting: name it, test it, use it everywhere

## Code style
- No comments unless asked or logic truly non-obvious
- Prefer `const` over `let`
- Early returns over deep nesting
- Co-locate related code (components near their styles/tests)
- One component per file. Named export default.

## Commit format
`<type>: <short description>`
Types: feat, fix, refactor, chore, docs
<!-- standards-end -->
