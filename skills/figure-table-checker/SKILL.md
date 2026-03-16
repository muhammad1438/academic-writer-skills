---
name: figure-table-checker
description: Check, improve, and ensure compliance of figures and tables in academic papers. Use this skill whenever the user needs to verify figure or table formatting, choose error bar types, check colorblind accessibility, ensure APA or journal-specific compliance, create CONSORT or PRISMA flow diagrams, or fix common figure and table mistakes. Trigger for: "check my figures", "is my table formatted correctly", "what error bars should I use", "is this colorblind safe", "APA table format", "PRISMA flow diagram", "Nature figure requirements", "improve my figure caption", or any task involving the visual presentation of data in academic papers.
---

# Figure and Table Checker

Figures and tables are the most scrutinised elements of any research paper. Reviewers spot non-compliant formatting immediately. This skill covers universal standards, discipline-specific requirements, and the design principles that separate publication-ready visuals from rejected manuscripts.

---

## Figure Compliance Checklist (Universal)

Apply to every figure before submission:

- [ ] **Numbered sequentially** in order of first mention in text (Figure 1, Figure 2…)
- [ ] **Caption below the figure** — always below, in complete sentence form
- [ ] **Caption is self-contained** — reader can understand the figure without reading the paper
- [ ] **All axes labelled** with units in parentheses: *Time (s)*, *Concentration (mM)*
- [ ] **Legend included** where multiple data series are plotted
- [ ] **Error bars defined** — type stated explicitly in caption or methods (SD, SEM, or 95% CI)
- [ ] **Statistical significance markers** explained (e.g., *** p < .001, ** p < .01, * p < .05)
- [ ] **Sample sizes visible** — either in legend, caption, or on the figure itself
- [ ] **Font size legible** at final print size — minimum 8pt for labels, 10pt preferred
- [ ] **Colorblind-accessible palette** used (see colour section below)
- [ ] **Resolution sufficient** — 300 dpi minimum for publication (600 dpi for line art)
- [ ] **File format appropriate** — check journal requirements (TIFF, EPS, PDF, PNG)
- [ ] **No missing data** without explanation
- [ ] **Axes start at zero** for bar charts (unless scale is justified and stated)
- [ ] **Individual data points shown** for small samples (n < 20) alongside summary statistics

---

## Table Compliance Checklist (Universal)

Apply to every table before submission:

- [ ] **Numbered sequentially** (Table 1, Table 2…)
- [ ] **Title/caption above the table** — always above, in noun-phrase form (not a sentence)
- [ ] **Column headers clear** — units in header, not repeated in each cell
- [ ] **No vertical lines** — professional tables use horizontal rules only (booktabs principle)
- [ ] **Minimal horizontal lines** — top, below header, and bottom only (APA style)
- [ ] **Consistent decimal places** within each column
- [ ] **Alignment appropriate** — numbers right-aligned or decimal-aligned; text left-aligned
- [ ] **Note(s) section present** if abbreviations used or statistical thresholds need explanation
- [ ] **Missing data represented** consistently (em dash —, or stated as N/A with note)
- [ ] **No duplication** of data already presented in a figure (unless summary comparison needed)
- [ ] **Spanning rows/columns** used appropriately, not for decoration

---

## APA 7th Table Format in Detail

**Structure:**

```
Table X
[Title in italics, above the table, title case]
[Blank line]
[Table with horizontal rules only]
[Blank line]
Note. [General note explaining abbreviations or scope.]
*p < .05. **p < .01. ***p < .001.
```

**Three types of table notes (APA 7th):**
1. **General note** — applies to entire table; starts with "Note."
2. **Specific note** — applies to a column, row, or cell; uses superscript lowercase letters (a, b, c)
3. **Probability note** — defines significance levels; uses asterisks (*, **, ***)

**Example:**
```
Table 2
Descriptive Statistics for Study Variables by Group

Variable        Control (n = 45)    Treatment (n = 47)
                M        SD          M         SD
----------------------------------------------------------
Anxiety        14.3      3.2        11.8        2.9
Depression     12.1      4.1         9.4        3.7
Wellbeing      22.7      5.3        26.4        4.8
----------------------------------------------------------

Note. M = mean; SD = standard deviation. All scores on validated scales.
```

---

## APA 7th Figure Format in Detail

**Caption format:**
```
Figure X
[Italicised title, below figure, sentence case]
[Description. Error bars represent 95% CI. * p < .05.]
```

**Example:**
```
Figure 3
Mean Anxiety Scores by Group and Time Point
Error bars represent 95% confidence intervals. * p < .05 compared to control group.
```

---

## Error Bar Decision Guide

Choosing the wrong error bar type is one of the most common figure errors.

| Error Bar Type | What It Shows | When to Use |
|---|---|---|
| **Standard Deviation (SD)** | Spread of the data — variability within the sample | Describing the distribution; showing how spread out the data are |
| **Standard Error of the Mean (SEM)** | Precision of the mean estimate | Comparing means — smaller bars make groups look more distinct (can be misleading) |
| **95% Confidence Interval (CI)** | Range likely to contain the true population mean | Statistical inference — overlapping CIs do NOT directly indicate non-significance |

**Recommendation hierarchy:**
1. **95% CI is preferred** for inferential graphs — directly communicates uncertainty
2. **SD is preferred** for descriptive graphs — shows data variability
3. **SEM is least informative** for most purposes — often used to make results look more precise than they are

**Critical rule:** ALWAYS state the error bar type in the caption. "Error bars represent ±SD" is mandatory. Unlabelled error bars are a common reason for rejection.

**For small samples (n < 10):** Consider showing individual data points (jitter plot, beeswarm plot) instead of or alongside summary statistics.

---

## Color Accessibility

Approximately 8% of males and 0.5% of females have colour vision deficiency. Use accessible palettes.

### Wong 8-Color Palette (Recommended)

Optimised for colourblind accessibility:

| Colour Name | Hex Code | RGB |
|---|---|---|
| Black | `#000000` | 0, 0, 0 |
| Orange | `#E69F00` | 230, 159, 0 |
| Sky Blue | `#56B4E9` | 86, 180, 233 |
| Bluish Green | `#009E73` | 0, 158, 115 |
| Yellow | `#F0E442` | 240, 228, 66 |
| Blue | `#0072B2` | 0, 114, 178 |
| Vermillion | `#D55E00` | 213, 94, 0 |
| Reddish Purple | `#CC79A7` | 204, 121, 167 |

### Okabe-Ito Palette (Alternative)

| Colour Name | Hex Code |
|---|---|
| Orange | `#E69F00` |
| Sky Blue | `#56B4E9` |
| Bluish Green | `#009E73` |
| Yellow | `#F0E442` |
| Blue | `#0072B2` |
| Vermillion | `#D55E00` |
| Reddish Purple | `#CC79A7` |
| Black | `#000000` |

### ColorBrewer Recommendations

For sequential data (light to dark of one colour):
- Blues, Greens, Oranges, Purples — all colourblind-safe sequential palettes

For diverging data (two extremes):
- RdYlBu, PuOr, BrBG — most are colourblind-safe

For qualitative data (distinct categories):
- Set2, Paired — generally accessible; avoid pure red/green combinations

**Testing tool:** Use the Coblis colour-blindness simulator (colblindor.com/coblis) to preview figures before submission.

**Additional accessibility rules:**
- **Never rely on colour alone** — use different line styles (solid, dashed, dotted) or point shapes (circle, triangle, square) alongside colour
- **Minimum font size:** 8pt at final print size (check after scaling)
- **Sufficient contrast:** Check with WebAIM contrast checker for text on figure backgrounds

---

## Journal-Specific Figure Requirements

| Journal | Resolution | File Formats | Width Limits | Other |
|---|---|---|---|---|
| Nature / Nature family | 300 dpi (halftone); 600 dpi (line art) | TIFF, EPS, PDF | 89mm (1 col); 183mm (2 col) | Max file size 10 MB per figure |
| Science | 300 dpi minimum | TIFF, EPS, PS | 5.5 cm (1 col); 12 cm (2 col) | Individual panels labelled A, B, C |
| Cell / Cell Press | 300 dpi | TIFF, EPS | 85mm (1 col); 170mm (2 col) | No white space around figure |
| APA Journals | 300 dpi minimum | TIFF or EPS | Varies | Captions in manuscript text, not in file |
| IEEE | 300 dpi | EPS, TIFF | Column width | Fonts embedded; no bitmapped fonts |
| PLOS ONE | 300 dpi (300–600 typical) | TIFF, EPS | 8.3 cm (1 col); 17.4 cm (2 col) | Alt text required |
| Elsevier | 300 dpi (600 for sharp line art) | TIFF, EPS, PDF | Varies by journal | Separate figure files |

**Check the target journal's "Instructions for Authors" first** — these specifications override general guidelines.

---

## CONSORT Flow Diagram

Required for all randomised controlled trials (RCTs). Four mandatory stages:

```
ENROLLMENT
├── Assessed for eligibility (n = XX)
│   ├── Excluded (n = XX)
│   │   ├── Did not meet inclusion criteria (n = XX)
│   │   ├── Declined to participate (n = XX)
│   │   └── Other reasons (n = XX)
│   └── Randomised (n = XX)
│
ALLOCATION
├── Allocated to intervention (n = XX)
│   └── Received allocated intervention (n = XX)
│   └── Did not receive (n = XX) [reasons]
└── Allocated to control (n = XX)
    └── Received allocated intervention (n = XX)
    └── Did not receive (n = XX) [reasons]
│
FOLLOW-UP
├── Lost to follow-up intervention (n = XX) [reasons]
├── Discontinued intervention (n = XX) [reasons]
└── Lost to follow-up control (n = XX) [reasons]
│
ANALYSIS
├── Analysed (intervention) (n = XX)
│   └── Excluded from analysis (n = XX) [reasons]
└── Analysed (control) (n = XX)
    └── Excluded from analysis (n = XX) [reasons]
```

Create using: PowerPoint, draw.io, consort-statement.org flowchart tool, or TikZ in LaTeX.

---

## PRISMA 2020 Flow Diagram

Required for systematic reviews and meta-analyses. Four stages:

```
IDENTIFICATION
├── Records from databases (n = XX)
├── Records from registers (n = XX)
└── Records removed before screening:
    └── Duplicates (n = XX); ineligible (n = XX)

SCREENING
├── Records screened (n = XX)
└── Records excluded (n = XX)

ELIGIBILITY
├── Reports assessed for eligibility (n = XX)
└── Reports excluded (n = XX) [reason and n for each]

INCLUDED
└── Studies included in review (n = XX)
    └── Reports of included studies (n = XX)
```

PRISMA 2020 also has a separate section for studies identified through other methods (citation searching, etc.).

Official PRISMA flow diagram template: prisma-statement.org

---

## Statistical Figure Requirements

### Showing Individual Data Points

For small samples (n < 20 per group), consider:
- **Strip/jitter plot** — individual points scattered along the x-axis
- **Beeswarm plot** — points spread to avoid overlap
- **Raincloud plot** — combines half violin + box plot + jitter

**Reporting requirement:** n per group must be visible somewhere on the figure, in the caption, or in the legend.

### Bar Chart vs. Other Chart Types

| Chart Type | Best For | Avoid When |
|---|---|---|
| Bar chart | Counts, frequency, totals | Showing continuous distributions |
| Box plot | Showing median, IQR, outliers | Very small samples (n < 6) |
| Violin plot | Distribution shape + summary | Very large files; overlapping distributions |
| Line graph | Change over time; continuous x | Categorical x-axis |
| Scatter plot | Two continuous variables; correlation | When showing group means |
| Forest plot | Meta-analysis effect sizes | Single studies |
| Heatmap | Correlation matrices; large datasets | Small datasets |

**Avoid "dynamite plots"** (bar + error bar) for continuous data where the distribution matters — they hide the data. Prefer box plots, violin plots, or jitter plots.

---

## Common Figure Mistakes

| Mistake | Problem | Fix |
|---|---|---|
| No error bar label | Ambiguous (SD? SEM? CI?) | Add "Error bars represent ±SD" to caption |
| Inaccessible colour palette | Red/green indistinguishable for 8% of readers | Switch to Wong or Okabe-Ito palette |
| Axes not labelled with units | Reader cannot interpret scale | Add label with unit: "Reaction time (ms)" |
| Bar chart with floating baseline | Non-zero y-axis distorts magnitude | Start y-axis at zero for bar charts |
| Panel labels inconsistent | A, B, C vs. a, b, c vs. (A), (B), (C) | Pick one style and use consistently |
| Low resolution image | Blurry at print size | Regenerate at 300–600 dpi |
| Caption as single word | "Figure 1. Results." is uninformative | Write complete descriptive caption |
| Too many significant figures | "Mean = 12.3456789" | Round to appropriate precision (2 d.p. typical) |

---

## Tufte Data-Ink Ratio Principle

Edward Tufte's principle: maximise the ratio of data ink to total ink. Every mark on the figure should convey information.

**Eliminate:**
- Chartjunk (decorative grids, 3D effects, shadows)
- Redundant axes labels
- Unnecessary gridlines (if present, make light grey)
- Excessive tick marks
- Borders around entire plot area
- 3D bar and pie charts (always — they distort perception)

**A good figure presents maximum information with minimum graphical elements.**

---

## Pre-Submission Figure and Table Checklist

- [ ] All figures and tables numbered sequentially
- [ ] Captions: figures captioned below, tables captioned above
- [ ] All axes labelled with units
- [ ] Error bars defined
- [ ] Colour palette is colourblind-accessible
- [ ] Font sizes readable at print size
- [ ] Resolution meets journal requirements
- [ ] File formats match journal requirements
- [ ] CONSORT / PRISMA flow diagrams included (if applicable)
- [ ] Individual data points shown for n < 20
- [ ] Table notes explain all abbreviations
- [ ] No vertical lines in tables
- [ ] No 3D chart effects
- [ ] All statistical significance markers explained
