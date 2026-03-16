---
name: conference-presentation
description: Design and write conference posters, oral presentations, slide decks, and conference abstracts. Use this skill whenever you need to create a research poster, prepare slides for an academic talk, design a conference presentation, write a conference abstract, or prepare for Q&A. Trigger for: "design my conference poster," "help me make slides for my presentation," "write my conference abstract," "prepare my 10-minute talk," "convert my paper to a poster," "what goes in a research poster," or any task involving conference presentations, posters, or academic slides.
---

# Conference Presentation

Academic conferences are where research meets its audience. Whether delivering a 10-minute talk or standing beside a poster for 2 hours, the goal is the same: communicate your contribution clearly, engagingly, and memorably. This skill covers conference posters, oral presentations, slide design, and conference abstracts.

---

## Conference Posters

A research poster is a visual abstract — it should communicate your entire study at a glance, then reward deeper reading. Most viewers spend 1–3 minutes; the poster must work for both the quick glance and the detailed read.

### Poster Dimensions and Orientation

| Format | Dimensions | Use Case |
|---|---|---|
| **A0 Portrait** | 841 × 1189 mm (33.1 × 46.8 in) | Most European conferences |
| **A0 Landscape** | 1189 × 841 mm (46.8 × 33.1 in) | Wide-format display |
| **US Standard** | 36 × 48 in (91 × 122 cm) | Most US conferences |
| **Large US** | 48 × 96 in (122 × 244 cm) | APS, AAPT, large physics meetings |
| **A1 Portrait** | 594 × 841 mm (23.4 × 33.1 in) | Smaller European venues |

**Always check conference requirements** — some specify exact dimensions and orientation.

### Visual Hierarchy and Layout

The viewer's eye should flow naturally: Title → Authors → Visual Centre → Results → Conclusions

**Grid Layout (3 or 4 columns):**

```
┌─────────────────────────────────────────────────────────┐
│  TITLE (large, readable from 2m)          Logo          │
│  Authors, Affiliations (readable from 1m)               │
├─────────────┬─────────────┬─────────────┬───────────────┤
│  INTRO/     │  METHODS    │  RESULTS    │  CONCLUSIONS  │
│  BACKGROUND │  (diagrams, │  (key figures│  (3-5 bullets │
│  (brief,    │   flowcharts│   large,    │   with impact)│
│   100-150   │   minimal   │   minimal   │               │
│   words)    │   text)     │   text)     │               │
│             │             │             │               │
│             │             │  DISCUSSION │  FUTURE WORK  │
│             │             │  (optional) │  ACKNOWLEDGE- │
│             │             │             │  MENTS        │
├─────────────┴─────────────┴─────────────┴───────────────┤
│  REFERENCES (small, numbered)    QR CODE    Contact      │
└─────────────────────────────────────────────────────────┘
```

### Title, Authors, Affiliations

- **Title:** 100 characters maximum; readable from 2 metres (≈100pt font)
- **Authors:** First name initials + Last name; readable from 1 metre (≈60pt)
- **Affiliations:** Department, Institution, City, Country; superscript numbers (≈40pt)
- **Logo:** Institution logo(s) top right or left; conference logo if required

### Abstract/Summary Section

Most posters benefit from a brief abstract or summary (50–250 words):

**When to include:**
- Conference requires it
- Your study has complex context that needs framing
- The poster will be displayed without you present

**When to omit:**
- Your introduction is already brief
- Space is limited
- The study is straightforward

### Methods Visualisation

The methods section should be primarily visual:
- **Flowcharts** — Process steps, experimental design
- **Diagrams** — Equipment setup, model architecture
- **Timelines** — Study phases, participant journey
- **Minimal text** — Only essential details that can't be visualised

### Results Presentation

Results are the visual centre of the poster:
- **2–4 key figures** maximum (quality over quantity)
- **Large figure dimensions** — Each figure should be visible from 1 metre
- **Clear labels** — Axis labels, legends readable without squinting
- **Minimal text** — Let the figures speak; add only essential annotations
- **Statistical significance** — Use *, **, *** or p-values clearly

### Conclusions: Key Takeaways

3–5 bullet points maximum:
- Start with the main finding
- Connect to the research question
- State implications or next steps
- Avoid hedging here (the place for clear statements)

### QR Code and Additional Materials

A QR code is now standard on conference posters:
- **Link to:** Full paper, preprint, GitHub repo, supplementary materials, contact form
- **Placement:** Bottom right corner
- **Size:** Minimum 2 × 2 cm (readable from 30 cm)
- **Label:** "Scan for [full paper / supplementary data / contact]"

### Color and Typography

**Color:**
- 3–4 colors maximum
- High contrast for text (dark on light, or light on dark)
- Colorblind-accessible palettes (see `figure-table-checker`)
- Avoid red/green combinations
- Background: white, light gray, or very pale color

**Typography:**
- **Title:** 80–120pt
- **Section headers:** 40–60pt
- **Body text:** 24–32pt (never below 24pt)
- **Captions/references:** 18–24pt
- **Fonts:** Sans-serif (Arial, Helvetica, Calibri, Open Sans); avoid decorative fonts

### Software Options

| Software | Best For | Learning Curve |
|---|---|---|
| **PowerPoint** | Most users; widely available; easy to share | Low |
| **Canva** | Pre-designed templates; collaborative editing | Low |
| **Figma** | Design-heavy posters; collaborative | Medium |
| **Adobe Illustrator** | Print-quality graphics; precise control | High |
| **LaTeX beamerposter** | Academic styling; automated formatting; version control | High |
| **Inkscape** | Free vector graphics; precise control | Medium |

**LaTeX beamerposter example:**
```latex
\documentclass[final]{beamer}
\usepackage[orientation=portrait,size=a0,scale=1.4]{beamerposter}
\usetheme{default}
\begin{document}
\begin{frame}{}
  \begin{columns}
    \begin{column}{0.32\linewidth}
      \begin{block}{Introduction}
        % Content here
      \end{block}
    \end{column}
    % Additional columns...
  \end{columns}
\end{frame}
\end{document}
```

---

## Oral Presentations

Oral presentations range from 5-minute lightning talks to 60-minute keynotes. The most common format is the 10–20 minute research presentation.

### Time Management

**The golden rule:** 1 minute per slide maximum.

| Presentation Length | Max Slides | Structure |
|---|---|---|
| **5 min (lightning)** | 5 | Hook → Key finding → Impact |
| **10 min** | 10 | Background (2) → Methods (2) → Results (4) → Conclusions (2) |
| **15 min** | 15 | Background (3) → Methods (3) → Results (6) → Conclusions (3) |
| **20 min** | 18–20 | Full IMRaD with Discussion |
| **45 min (seminar)** | 35–40 | Extended Background; multiple studies |
| **60 min (keynote)** | 45–50 | Broad context; multiple studies; future directions |

**Always leave 2–3 minutes for Q&A.**

### Structure by Presentation Type

#### Research Presentation (Standard)
1. **Background (15–20%)** — Why this matters; specific research gap
2. **Methods (10–15%)** — Brief; key design elements only
3. **Results (40–50%)** — The core; key figures with narration
4. **Discussion (10–15%)** — Interpretation; limitations
5. **Conclusions (5–10%)** — Take-home message; impact

#### Literature Review Presentation
1. **Context** — Why this topic matters
2. **Search Strategy** — Brief; databases, inclusion criteria
3. **Key Themes** — Organised thematically, not chronologically
4. **Synthesis** — How themes connect
5. **Gaps** — What's missing in the literature
6. **Implications** — For research and practice

#### Proposal Presentation (Thesis Defense, Funding)
1. **Problem Statement** — Clear, compelling
2. **Background** — Key literature; what's known
3. **Gap** — What's missing; why it matters
4. **Proposed Study** — Aims, hypotheses, methods
5. **Feasibility** — Preliminary data; timeline; resources
6. **Impact** — Expected contributions

#### Thesis Defense
1. **Introduction (5–10%)** — Context; research questions
2. **Literature Review (10–15%)** — Key gaps; positioning
3. **Methods (10–15%)** — Design; justification
4. **Results (40–50%)** — Main findings; figures
5. **Discussion (15–20%)** — Interpretation; contributions; limitations
6. **Conclusions (5–10%)** — Summary; future directions

### Slide Design Principles

**One Idea Per Slide:**
- Each slide should make ONE clear point
- If you need to say "and also...", use another slide
- The audience should grasp the point in 3 seconds

**The 6×6 Rule (guideline, not law):**
- Maximum 6 bullet points per slide
- Maximum 6 words per bullet
- Better: Use visuals instead of bullets

**Visual Hierarchy:**
- Title: What is this slide about? (clear, brief)
- Key content: The main visual or central point
- Supporting content: Labels, annotations
- Source/note: Small text at bottom if needed

**Data Visualisation in Slides:**
- Simplify figures for presentation (fewer data points than paper)
- One main message per figure
- Large fonts on axes (minimum 18pt)
- Color to highlight key comparisons
- Build complexity gradually (animate if helpful)

### Script vs. Bullet Points

| Approach | Best For | Advantage |
|---|---|---|
| **Full script** | High-stakes presentations; non-native speakers | Precision; timing control |
| **Bullet points** | Experienced presenters; interactive talks | Flexibility; natural delivery |
| **Hybrid** | Most situations | Key phrases scripted; rest improvised |

**Hybrid approach:**
- Script: Opening hook, key transitions, closing statement
- Bullets: Methods, results narration, discussion points

### Transitions and Signposting

Clear transitions help the audience follow:

**Moving between sections:**
- "Now that we've established X, let's examine how..."
- "Having described our methods, I'll turn to the results."
- "This finding raises an important question: ..."

**Within sections:**
- "First, let's look at..."
- "Turning now to..."
- "This leads us to the key result..."

**Closing:**
- "In summary, we found that..."
- "The key takeaways are..."
- "To conclude..."

### Q&A Preparation

**Before the conference:**
1. Anticipate 5–10 likely questions
2. Prepare backup slides for complex answers
3. Know your limitations (what you didn't study; alternative interpretations)
4. Practice brief, clear answers (30–60 seconds)

**During Q&A:**
- Listen to the full question before answering
- Repeat or paraphrase if the question is unclear
- "That's a great question" is fine — but don't overuse
- "I don't know" is acceptable: "That's beyond the scope of this study, but it would be an interesting follow-up."
- If challenged, stay calm and cite evidence

---

## Conference Abstracts

Conference abstracts differ from journal abstracts: they are often reviewed by programme committees (not peer reviewers), have stricter word limits, and serve as the primary basis for acceptance.

### Key Differences from Journal Abstracts

| Feature | Journal Abstract | Conference Abstract |
|---|---|---|
| **Word limit** | 150–300 words | 250–500 words (varies widely) |
| **Review process** | Peer reviewers | Programme committee |
| **Purpose** | Summarise published paper | Convince committee to accept |
| **Timing** | After study complete | Often before study complete |
| **Structure** | IMRaD mirror | May allow flexibility |

### Word Limits by Conference Type

- **Medical conferences:** 250–300 words
- **Science conferences (APS, AAPT):** 150–250 words
- **Social science conferences:** 300–500 words
- **Humanities conferences:** May be longer (500 words) or narrative
- **Poster vs. oral:** Posters sometimes have longer limits

### Structure Variations by Discipline

**Science/Medical (structured):**
1. Background/Objectives (1–2 sentences)
2. Methods (2–3 sentences)
3. Results (3–4 sentences; include statistics if available)
4. Conclusions (1–2 sentences)

**Social Sciences/Humanities (less structured):**
1. Context/Problem
2. Theoretical framework
3. Methodology
4. Key findings or argument
5. Implications

**Preliminary results:**
If results are not complete at submission deadline:
- Use phrases like "Preliminary findings suggest..."
- State what will be complete by the conference date
- Emphasise methodology and significance

### Keywords and Topic Selection

- **Choose 3–5 keywords** from the conference's controlled vocabulary if available
- **Match conference themes** — Reviewers look for fit with session topics
- **Avoid overly broad terms** — "cancer" is too broad; "triple-negative breast cancer" is specific
- **Include methodology terms** — "randomised controlled trial", "qualitative thematic analysis"

---

## Common Mistakes

| Mistake | Poster | Oral Presentation |
|---|---|---|
| **Too much text** | Walls of text; no visual breathing room | Reading slides verbatim; too many words per slide |
| **No narrative arc** | Disconnected sections; no story | Jumping between topics without transitions |
| **Over-animated slides** | N/A | Distracting transitions; flying text |
| **Unreadable fonts/colors** | Text too small; poor contrast | Light text on light background; decorative fonts |
| **Missing contact/QR** | No way to follow up | N/A |
| **Timing wrong** | N/A | Running over; rushing at the end; no time for Q&A |
| **No visual hierarchy** | Everything same size/importance | Key points buried in clutter |
| **Ignoring the audience** | Too technical for broad audience | Too basic for specialist audience |

---

## Templates

### Poster Layout Template (A0 Portrait)

```
TITLE (100pt, bold, centered)
Authors¹, Authors² (60pt)
¹Department, Institution | ²Department, Institution (40pt)

┌─────────────────┬─────────────────┬─────────────────┐
│ INTRODUCTION    │ METHODS         │ RESULTS         │
│ (Background,    │ (Flowchart or   │ (Main figures,  │
│  Gap, Aim)      │  diagram)       │  key statistics)│
│ 150 words max   │ Minimal text    │ Large, clear    │
│                 │                 │                 │
├─────────────────┼─────────────────┤                 │
│                 │ CONCLUSIONS     │                 │
│                 │ • Finding 1     │                 │
│                 │ • Finding 2     │                 │
│                 │ • Implication   │                 │
│                 │                 │                 │
├─────────────────┴─────────────────┴─────────────────┤
│ References (numbered, small)  │ QR Code │ Contact   │
└─────────────────────────────────────────────────────┘
```

### 10-Minute Research Presentation Outline

| Slide | Content | Time |
|---|---|---|
| 1 | Title, authors, affiliations | 0:10 |
| 2 | Background: Why this matters | 0:50 |
| 3 | Research gap and question/hypothesis | 0:50 |
| 4 | Methods overview (diagram) | 1:00 |
| 5 | Methods: Key details | 0:50 |
| 6 | Results: Descriptive statistics | 1:00 |
| 7 | Results: Main finding (key figure) | 1:30 |
| 8 | Results: Secondary finding | 1:00 |
| 9 | Discussion: Interpretation | 1:00 |
| 10 | Conclusions: 3 key takeaways | 0:50 |
| | Q&A | 2:00 |

### 20-Minute Presentation Outline

| Slide Range | Content | Time |
|---|---|---|
| 1 | Title slide | 0:15 |
| 2–3 | Background and significance | 2:00 |
| 4 | Research gap, aims, hypotheses | 1:30 |
| 5–6 | Methods: Design and participants | 2:00 |
| 7–8 | Methods: Procedures and measures | 2:00 |
| 9–10 | Results: Sample characteristics | 2:00 |
| 11–14 | Results: Main findings (key figures) | 5:00 |
| 15 | Discussion: Interpretation | 2:00 |
| 16 | Discussion: Limitations | 1:00 |
| 17 | Conclusions and implications | 1:30 |
| 18 | Acknowledgments / Thank you | 0:15 |
| | Q&A | 3–5 min |

### Conference Abstract Template (300 words)

**[Title: 10–15 words, clear and specific]**

**Background:** [1–2 sentences: what is the problem and why does it matter?]

**Methods:** [2–3 sentences: design, participants, key measures, analysis]

**Results:** [3–4 sentences: main findings with statistics; include confidence intervals or effect sizes if possible]

**Conclusions:** [1–2 sentences: what does this mean? What are the implications?]

**Keywords:** [3–5 keywords from conference controlled vocabulary]

---

## Key Resources

- Allan M. (2019). Designing Science Presentations. Academic Press.
- Reynolds, G. (2011). Presentation Zen. New Riders.
- Tufte, E. (2006). The Cognitive Style of PowerPoint. Graphics Press.
- Conference poster templates: Most university libraries provide templates
- LaTeX beamerposter documentation: CTAN