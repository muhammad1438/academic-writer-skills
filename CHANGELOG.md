# Changelog

All notable changes to the Academic Writer plugin are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.4.0] — 2026-03-16

### Added
- Multi-tool support: GEMINI.md integration guide for Google Gemini CLI
- Multi-tool support: .cursorrules for Cursor IDE with per-skill trigger rules
- Multi-agent workflow guide: AGENTS.md with pipeline patterns for all 27 skills
- Project standards: CLAUDE.md with skill format specification and contribution guide
- Security policy: SECURITY.md with vulnerability reporting instructions
- npm package: package.json for academic-writer-skills
- Selective installer: scripts/install.js with profile/module/component/skill selection
- Installation planner: scripts/install-plan.js
- Bash installer wrapper: install.sh
- Install manifests: manifests/install-modules.json, install-components.json, install-profiles.json
  - Profiles: core (5 skills), researcher (15 skills), full (27 skills)
  - 7 module groups covering all 27 skills
  - 8 user-facing components
- Context files: contexts/writing.md, contexts/research.md, contexts/review.md
- CI/CD: GitHub Actions workflows for lint, validation, and release
- GitHub templates: PR template, bug report, skill request issue templates
- Documentation: TROUBLESHOOTING.md with per-skill common issues
- Documentation: ROADMAP.md with v1.5.0 and v2.0.0 plans

### Changed
- Repository structure: skills/ moved from 1.0.0/skills/ to root-level skills/ (ECC pattern)
- Plugin manifest: all skill paths updated to skills/*/SKILL.md format
- Plugin compatibility: added Gemini (>=2.0) and Cursor (>=0.40) support
- abstract-writer: Added structured abstract formats for clinical trials (CONSORT), systematic reviews (PRISMA), and discipline-specific variants
- paraphrasing-engine: Added source integration ladder and quote vs. paraphrase decision tree
- literature-review: Added review type decision guide (narrative/systematic/scoping/meta-analysis)
- ai-academic-ethics: Added 2025 journal AI policy table (Nature, Science, Elsevier, Springer, Wiley, PLOS, IEEE, BMJ, Lancet) with disclosure templates
- argumentation-engine: Added logical fallacy catalogue with examples and counterargument templates

### Removed
- files/ directory (development artifact)
- files.zip (export backup)
- firebase-debug.log (debug artifact)

---

## [1.3.0] — 2026-03-16

### Added

**2 new specialist skills filling gaps in v1.2.0:**

- `conference-presentation` — Complete conference presentation guide: research posters (dimensions, visual hierarchy, layout templates, color and typography); oral presentations (time management, structure by type, slide design principles); conference abstracts (vs. journal abstracts, word limits, structure variations); Q&A preparation; LaTeX beamer and beamerposter support; software comparison (PowerPoint, Canva, Figma, Adobe Illustrator); common mistakes tables for posters and presentations; templates for posters, 10-minute and 20-minute presentations, and conference abstracts

- `academic-cv` — Academic career documentation: academic CV vs. resume comparison; CV sections (header, education, appointments, publications, grants, teaching, research, service, awards, talks, memberships, references); research statement structure (Past → Present → Future); teaching philosophy (evidence-based approach, inclusive pedagogy); diversity/inclusion statement; academic cover letters (US/UK/EU/Australia variations); tenure dossier components; country-specific requirements; templates for CV, research statement, teaching philosophy, and cover letter

### Updated

- `academic-writing-core` — Routing table expanded with 2 new skill entries (27 total)
- `.claude-plugin/plugin.json` — Version bumped to 1.3.0; tagline updated to "27 specialist skills"; description expanded; 2 new skill entries added; tags expanded
- `.claude-plugin/marketplace.json` — Version bumped to 1.3.0; description updated; keywords expanded
- `docs/skill-map.md` — Mermaid diagram updated: 2 new nodes (conference-presentation, academic-cv); new relationships added
- `docs/decision-tree.md` — Flowchart updated with 2 new decision branches; quick reference table updated
- `docs/SKILLS_GUIDE.md` — 2 new per-skill sections with examples, pairs, and discipline notes
- `README.md` — Version badge and skill count updated; 2 new rows in skills table

---

## [1.2.0] — 2026-03-16

### Added

**5 new specialist skills filling gaps in v1.1.0:**

- `cover-letter-writer` — Journal submission cover letters: 5-paragraph universal model (hook, novelty, fit, declarations, reviewers); journal-specific variations (Nature/Science brief format, clinical journals); presubmission inquiries; handling special situations (prior rejection, related manuscripts, invited submissions); 10-item common mistakes table; templates for standard, high-impact, and clinical journals

- `qualitative-reporting` — Complete qualitative research write-up guide: paradigm overview (quantitative vs. qualitative); COREQ (32-item) and SRQR reporting guidelines; study design write-ups (phenomenology, grounded theory, thematic analysis, discourse analysis, ethnography, case study); sampling strategies and saturation reporting; data collection reporting (interviews, focus groups, observation, documents); analysis reporting (coding process, theme development, member checking); reflexivity statement guidance; trustworthiness framework (credibility, transferability, dependability, confirmability); quotation formatting and anonymisation; qualitative software citation (NVivo, ATLAS.ti, MAXQDA); 10-item common mistakes table

- `thesis-dissertation-guide` — PhD and master's thesis structure and writing: thesis types (monograph vs. article-based); chapter structure by discipline (humanities, sciences, social sciences); title page and preliminaries; introduction chapter structure (hook, gap, aims, overview); literature review chapter (integration vs. summary, organisation options); theoretical framework chapter; methodology chapter elements; results/findings chapter organisation options; discussion chapter structure; conclusion chapter; voice and tense conventions by chapter; examiner expectations (UK viva vs. US defense); country-specific requirements (UK, US, Australia, Germany, EU); timeline and milestone management; working with supervisors; common mistakes table

- `plain-language-summary` — Lay summaries and public-facing research communication: definition and purpose; funder requirements (Wellcome, NIHR, EU Horizon, NHMRC, NIH); journal requirements (PLOS, Nature, BMJ); audience considerations (public, patients, policymakers, media); readability targets (Flesch-Kincaid, SMOG, Gunning Fog); writing techniques (avoid jargon, active voice, short sentences, concrete examples); 4-move structure (hook, what we did, what we found, why it matters); templates (100-word, 250-word, press release); social media translation (Twitter thread, LinkedIn, blog); policy brief format; common mistakes table; readability testing tools

- `preregistration-guide` — Research study preregistration: definition, purpose, and benefits; when to preregister (before data collection vs. before analysis); platform comparison (OSF Preregistration, AsPredicted, PROSPERO, ClinicalTrials.gov, EGAP); Registered Reports format and journal list; what to include (hypotheses, design, sample size justification, exclusion criteria, variables, analysis plan); writing strong hypotheses (directional, falsifiable, tied to theory); power analysis and sample size specification; analysis plan elements; handling deviations; posting timeline and embargo options; citation of preregistration; discipline-specific norms (psychology, medicine, ecology, economics); common mistakes table

### Updated

- `academic-writing-core` — Routing table expanded with 5 new skill entries (25 total)
- `.claude-plugin/plugin.json` — Version bumped to 1.2.0; tagline updated to "25 specialist skills"; description expanded; 5 new skill entries added; tags expanded
- `.claude-plugin/marketplace.json` — Version bumped to 1.2.0; description updated; keywords expanded
- `docs/skill-map.md` — Mermaid diagram updated: 5 new nodes (cover-letter-writer, qualitative-reporting, thesis-dissertation-guide, plain-language-summary, preregistration-guide); new relationships added
- `docs/decision-tree.md` — Flowchart updated with 5 new decision branches; quick reference table updated
- `docs/SKILLS_GUIDE.md` — 5 new per-skill sections with examples, pairs, and discipline notes
- `README.md` — Version badge and skill count updated; 5 new rows in skills table; new quick start examples

---

## [1.1.0] — 2026-03-16

### Added

**6 new specialist skills filling gaps in v1.0.0:**

- `statistical-reporting` — Complete APA 7th statistical reporting guide: exact format strings for t, F, r, χ², regression; effect size metrics (Cohen's d, η², partial η², ω², r, f², Cramer's V) with interpretation thresholds; power analysis reporting (G*Power format); non-parametric test notation; Bayesian reporting (Bayes factors, Jeffreys scale); reporting guidelines by study type (CONSORT, STROBE, PRISMA, ARRIVE); 10 common errors table

- `latex-writer` — LaTeX document preparation: document class selection table (article, book, beamer, IEEEtran, revtex4-2, elsarticle, acmart); minimal working examples; essential packages reference table (20 packages); BibLaTeX/Biber and BibTeX bibliography management with .bib entry templates; equation environments (equation, align, gather, cases); figure and table code; journal template guide (Elsevier, Springer, IEEE, ACM, APS); common error fixes table

- `figure-table-checker` — Figure and table compliance: universal checklists; APA 7th figure and table format rules; error bar decision guide (SD vs SEM vs 95% CI); colorblind-accessible palettes (Wong 8-color and Okabe-Ito with hex codes); journal requirements table (Nature, Science, Cell, APA, IEEE); CONSORT flow diagram elements; PRISMA 2020 flow diagram elements; Tufte data-ink ratio principle; 8 common figure mistakes

- `journal-selection` — Journal selection guidance: metrics comparison table (IF, CiteScore, SJR, SNIP, h5-index) with limitations; open access model comparison (Gold, Green, Diamond, Hybrid, Bronze); APC ranges; funder OA mandates (NIH, NSF, Wellcome, UKRI, EU Horizon, Plan S); THINK.CHECK.SUBMIT checklist; journal matching workflow with tools (Jane, Elsevier Finder, Springer Suggester); predatory journal warning signs; scope fit scoring framework; preprint compatibility guide; resubmission strategy

- `reference-verifier` — Reference accuracy checking: DOI verification via CrossRef workflow; PubMed PMID lookup; retraction checking via RetractionWatch; PubPeer post-publication concern checking; AI-generated citation red flags table (6 patterns); ORCID author disambiguation; tools summary table; pre-submission reference checklist; reference list vs. bibliography distinction

- `data-management-plan` — Research DMP writing: funder requirements comparison (NIH DMS Policy 2023, NSF directorate requirements, UKRI/EPSRC, EU Horizon Europe living DMP); FAIR principles with concrete implementation actions; standard DMP 7-section template; data types and recommended open formats table; repository selection guide (Zenodo, Figshare, Dryad, OSF, GenBank, ArrayExpress and others); metadata standards by discipline (Dublin Core, DataCite, DDI, EML); sensitive data handling (anonymisation, GDPR, access levels); data retention requirements by funder; DMPTool and DMPonline quick-start

### Updated

- `academic-writing-core` — Routing table expanded with 6 new skill entries (20 total)
- `.claude-plugin/plugin.json` — Version bumped to 1.1.0; description and keywords updated
- `.claude-plugin/marketplace.json` — Version bumped to 1.1.0; tagline updated; 6 new skill entries added; tags expanded
- `docs/skill-map.md` — Mermaid diagram updated: 6 new nodes across Planning, Writing, Editing, and Publication phases; 8 new relationships
- `docs/decision-tree.md` — Flowchart updated with 6 new decision branches; quick reference table updated
- `docs/SKILLS_GUIDE.md` — 6 new per-skill sections with examples, pairs, and discipline notes
- `README.md` — Version badge, skill count, description, and skills table updated

---

## [1.0.0] — 2026-03-16

### Added

**14 skills covering the complete academic writing lifecycle:**

#### Core Skill
- `academic-writing-core` — Master orchestrator; discipline-specific conventions; UK/US English; routing table for all 14 skills; Publication Track and Coursework Track workflow guides

#### Existing Skills (reorganised from nested path into proper plugin structure)
- `abstract-writer` — Two abstract types; 5-move framework; structured abstract; keywords; conference vs. journal abstracts
- `academic-language-toolkit` — Hedging language; reporting verbs by function; transitions; nominalization; AWL Sublist 1; impersonal constructions; informal-to-academic replacements
- `ai-academic-ethics` — Ethical use guidelines; disclosure requirements and templates; AI citation formats; university policy landscape; detection tool limitations; hallucination risk
- `argumentation-engine` — Classical, Toulmin, and Rogerian models; thesis construction criteria; counterargument strategies; evidence hierarchy; logical fallacies
- `citation-formatter` — Full rules for APA 7th, MLA 9th, Chicago 17th NB and AD, IEEE, Vancouver, Harvard; common mistakes; citation tool limitations
- `grammar-style-checker` — Voice conventions; tense by section; parallel structure; pronoun reference; anthropomorphism; inclusive language; nominalization; sentence variety; punctuation; wordiness reduction
- `literature-review` — Narrative and systematic reviews; PRISMA framework; synthesis vs. summary; research gap types and signalling phrases; critical analysis verbs
- `paper-structure` — IMRaD with CARS model; argumentative essay; dissertation/thesis (monograph and article-based); case study; systematic review; technical report; health policy brief
- `paraphrasing-engine` — Four plagiarism types; 6-step process; 5 techniques; patchwriting identification; summary vs. paraphrase; quotation integration; block quotes; similarity score guidance

#### New Skills
- `grant-proposal` — Grant types comparison (NIH, NSF, EU Horizon, Wellcome, ERC, UKRI); Specific Aims page anatomy; NIH scoring criteria; NSF Broader Impacts; Significance section framework; reviewer criticism preemption; budget narrative templates; Logic Model framework; 8 fatal flaws
- `research-proposal` — Proposal types; standard structure; PICO and RQ frameworks; theoretical frameworks by discipline; methodology decision guide; Gantt chart guidance; IRB/HREC/HRA ethics structure; Belmont principles; PhD proposal mistakes
- `lab-report` — Full report structure; discipline variants (Chemistry, Biology, Physics, Engineering, Psychology); title rules; statistical reporting (APA style: t, F, r, effect size); figure and table formatting; Discussion vs. Results distinction; 8 common errors
- `peer-review-response` — Decision types and how to read them; rebuttal letter structure; cover letter template; point-by-point template; professional tone principle; handling contradictory reviewers; handling impossible requests; response phrase library; version management; appeals process; resubmission checklist

#### Plugin Infrastructure
- `.claude-plugin/plugin.json` — Plugin manifest
- `.claude-plugin/marketplace.json` — Full marketplace metadata with 14 skill entries

#### Documentation
- `README.md` — Installation, skills table, quick start examples, decision tree
- `docs/skill-map.md` — Mermaid diagram: all 14 skills grouped by phase with relationships
- `docs/workflow.md` — Mermaid diagram: academic writing lifecycle flowchart
- `docs/decision-tree.md` — Mermaid diagram: "which skill to use" decision tree + quick reference table
- `docs/SKILLS_GUIDE.md` — Detailed per-skill documentation with examples, pairs, and discipline notes
- `CONTRIBUTING.md` — How to add and improve skills; style guide; PR process
- `LICENSE` — MIT license
