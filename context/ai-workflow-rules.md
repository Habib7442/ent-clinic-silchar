# AI Workflow Rules: The ENT Clinic, Silchar

## 1. Overall Approach
- **Spec-Driven:** Never implement a feature without first creating or reading its corresponding spec file in `context/specs/`.
- **Incremental Build:** Work on exactly **one unit at a time**. Complete it, verify it, and update the progress tracker before moving to the next.
- **Strict Adherence:** Follow the `architecture.md` and `code-standards.md` without exception. If a change is needed to the architecture, update the document first.

## 2. Scoping Rules
- **No Speculative Coding:** Do not add "nice-to-have" features or install extra dependencies unless explicitly stated in the unit spec.
- **Atomic Commits:** Propose small, focused changes that match the current unit being built.
- **Component Isolation:** Build components in isolation (e.g., in a temporary `/test-bench` or as standalone units) before integrating them into the main layout.

## 3. Handling Ambiguity
- **Stop and Ask:** If a requirement is missing (e.g., "What should happen if the WhatsApp API is down?"), stop and ask the user for clarification. Do not make assumptions.
- **Blueprint Reference:** Always default to the ARCHIE blueprint HTML/CSS for visual or structural decisions.

## 4. Documentation Sync
- **Progress Tracker:** Update `context/progress-tracker.md` at the end of every unit.
- **File Integrity:** Preserve all existing comments and documentation unless they are being intentionally replaced by the current task.

## 5. Verification Checklist (Post-Implementation)
Before marking a unit as "Done", verify:
1.  [ ] Does it match the visual tokens in `ui-context.md`?
2.  [ ] Is it strictly typed with no `any`?
3.  [ ] Are the translations handled correctly (EN/BN)?
4.  [ ] Is the Lighthouse impact minimal?
5.  [ ] Does it follow the established folder structure?

## 6. Prohibited Actions
- Do not overwrite the ARCHIE blueprint HTML file.
- Do not add Tailwind classes that violate the `paper`/`forest`/`rust` color scheme.
- Do not skip the "One Unit at a Time" rule.
