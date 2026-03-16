---
name: citation-formatter
description: Generate, format, convert, and fix citations and references in any academic style. Use this skill whenever the user asks to cite a source, format a reference list, convert between citation styles, check a citation for errors, or create a bibliography or works cited page. Trigger for: "cite this in APA," "format my references," "how do I cite a website in MLA," "convert these to Chicago," "fix my bibliography," "what's the IEEE format for a journal article," or any mention of APA, MLA, Chicago, IEEE, Vancouver, Harvard, ACS, or CSE citation styles. Always use this skill — do not rely on memory alone for citation formatting, as errors in automated citation tools are common.
---

# Citation Formatter

Citation styles are the disciplinary "branding" of scholarly communication — they encode a field's epistemological values and allow readers to trace intellectual lineage, verify facts, and assess the recency of evidence.

---

## Style Selection Guide

| Style | Primary Disciplines | In-Text Format | End List |
|---|---|---|---|
| **APA 7th** | Social Sciences, Psychology, Nursing, Education | (Author, Year, p. #) | References (alphabetical) |
| **MLA 9th** | Humanities, Literature, Languages | (Author Page #) | Works Cited (alphabetical) |
| **Chicago NB** | History, Fine Arts, Literature | Superscript numeral¹ | Bibliography (alphabetical) |
| **Chicago AD** | Physical, natural, social sciences | (Author Year, p.) | Reference List (alphabetical) |
| **IEEE** | Engineering, Computer Science, Electronics | [1] numbered | References (sequential) |
| **Vancouver** | Medicine, Biomedicine, Nursing | ¹ or (1) numbered | Reference List (sequential) |
| **Harvard** | UK/Australian universities (various disciplines) | (Author Year) | Reference List (alphabetical) |
| **ACS** | Chemistry | Numbered or author-date | References |
| **CSE** | Biology, Life Sciences | Citation-name or -sequence | References |

---

## APA 7th Edition — Full Rules

### In-Text Citations
- **1–2 authors:** (Smith, 2021) / (Smith & Jones, 2021)
- **3+ authors:** From the FIRST citation → (Taylor et al., 2018)
- **No author:** Use shortened title in quotes: ("Title," 2020)
- **Corporate author:** Spell out first time, abbreviate after: (World Health Organization [WHO], 2019), then (WHO, 2019)
- **Same author, same year:** Add a, b, c: (Smith, 2021a), (Smith, 2021b)
- **Direct quote:** Always add page number: (Smith, 2021, p. 45)
- **Secondary source:** (Original Author, Year, as cited in Secondary Author, Year)
- **No date:** Use (n.d.): (Smith, n.d.)
- **Classical/sacred works:** (Bible, King James Version, Genesis 1:1) — no reference entry needed

### Reference List Rules
- Alphabetical by first author's surname
- Up to **20 authors** listed in full; for 21+, list first 19, insert ellipsis, then final author
- **No publisher location** required (removed in 7th edition)
- DOIs and URLs formatted as active hyperlinks
- Sentence case for article and book titles; Title Case for journal names

### APA Reference Formats

**Journal Article (with DOI):**
`Author, A. A., & Author, B. B. (Year). Title of article in sentence case. Journal Title in Title Case, Volume(Issue), pages. https://doi.org/xxxxx`

**Journal Article (no DOI, with URL):**
`Author, A. A. (Year). Title. Journal Title, Volume(Issue), pages. URL`

**Book:**
`Author, A. A. (Year). Title of book in sentence case. Publisher.`

**Book Chapter in Edited Volume:**
`Author, A. A. (Year). Title of chapter. In E. Editor (Ed.), Title of book (pp. xx–xx). Publisher.`

**Website:**
`Author, A. A. (Year, Month Day). Title of page. Site Name. URL`

**Dissertation/Thesis:**
`Author, A. A. (Year). Title [Doctoral dissertation/Master's thesis, University Name]. Database Name. URL`

**Conference Paper:**
`Author, A. A. (Year, Month). Title of paper [Paper presentation]. Conference Name, Location. URL`

---

## MLA 9th Edition — Full Rules

### The Container System
Every source is built from **9 core elements** in this fixed order:
1. Author.
2. Title of source.
3. *Title of container,*
4. Other contributors,
5. Version,
6. Number,
7. Publisher,
8. Publication date,
9. Location.

Elements that don't apply are simply omitted. A source can have **multiple nested containers** (e.g., article → journal → database), repeating elements 3–9 for each layer.

### In-Text Citations
- Author + page: (Wordsworth 263)
- No author: Shorten title: ("Study on Cognition" 12)
- No page: Use paragraph number or section: (Smith, par. 4)
- Classical works (plays, poems): Use act.scene.line: (Shakespeare 1.2.95)
- Foreign language quote: Must include English translation

### Title Formatting
- **Italics:** Self-contained works (books, films, websites, entire journals)
- **"Quotation marks":** Works within containers (articles, poems, chapters, episodes, web pages)

### MLA Works Cited Formats

**Journal Article:**
`Author Last, First. "Title of Article." Journal Name, vol. #, no. #, Year, pp. xx–xx. Database, https://doi.org/xxxxx.`

**Book:**
`Author Last, First. Title of Book. Publisher, Year.`

**Website:**
`Author Last, First. "Page Title." Website Name, Day Mon. Year, URL.`

---

## Chicago 17th Edition — Full Rules

### Notes-Bibliography (NB) System
Used in: History, Fine Arts, Literature, Humanities

**First (full) note:**
`¹ First Last, *Title of Book* (City: Publisher, Year), page.`

**Subsequent (shortened) note:**
`² Last, *Shortened Title*, page.`

**Ibid.:** Still permissible for immediately consecutive citations from the same source. Increasingly discouraged in favour of the shortened form. Never use Ibid. if another citation appears between the two references.

**Bibliography entry (inverted name, period-separated):**
`Last, First. *Title of Book*. City: Publisher, Year.`

### Author-Date (AD) System
Used in: Physical, natural, social sciences

In-text: (Last Year, page) → (Smith 2021, 45)

Reference list: `Last, First. Year. *Title*. City: Publisher.`

---

## IEEE — Full Rules

### In-Text Citations
- Sequential numbers in **square brackets**: [1], [2], [3]
- Multiple: [1], [2] or [1]–[3] for consecutive
- Can function grammatically as nouns: "As shown in [4]..."
- Placed **before** terminal punctuation

### Reference List Format (sequential, hanging indent)

**Journal article:**
`[1] A. A. Author and B. B. Author, "Title of article," *Abbreviated Journal Name*, vol. x, no. x, pp. xxx–xxx, Month Year, doi: xxxxx.`

**Conference paper:**
`[2] A. Author, "Title," in *Proc. Conference Name*, City, Year, pp. xxx–xxx.`

**Book:**
`[3] A. Author, *Title of Book*, xth ed. City: Publisher, Year.`

**Website:**
`[4] A. Author. (Year, Month Day). *Title* [Online]. Available: URL`

---

## Vancouver (ICMJE) — Full Rules

### In-Text Citations
- Superscript numbers or (round brackets): Smith¹ or Smith(1)
- Number assigned in order of first appearance; same number reused if same source cited again

### Reference List Format

**Journal article:**
`1. Surname AB, Surname CD. Title of article. Abbreviated Journal Name. Year;Volume(Issue):pages.`

- Author format: **Surname then initials, no punctuation between** (e.g., Smith AB, not Smith, A.B.)
- Journal titles abbreviated per NLM catalog (Index Medicus)
- Up to 6 authors listed; if 7+, list first 6 then "et al."

**Book:**
`2. Last FM. Title of Book. Edition ed. City: Publisher; Year.`

---

## Harvard Referencing
Harvard is NOT standardized — always check the specific institutional guide. Common shared features:

- **In-text:** (Author Year) or (Author Year, p. x)
- **Reference list:** Alphabetical, author-year prominent
- Punctuation, capitalization, and italicization rules vary by institution (Leeds Harvard, Anglia Ruskin, Cite Them Right, Open University)
- When in doubt, use the institution's own guide

---

## Common Citation Mistakes to Avoid

| Mistake | Correct Approach |
|---|---|
| Using 3+ authors in full in APA in-text | Use "et al." from first citation |
| Including publisher city in APA 7th | Removed — do not include |
| Formatting DOI as plain text | Format as active hyperlink |
| Using "Ibid." in Chicago when another citation appears between | Use shortened form instead |
| Quoting out of context to distort original meaning | Academic integrity violation |
| Ignoring secondary sources | Use "as cited in" / "qtd. in" (MLA) |
| Automated citation tool errors | Always verify DOI, page range, volume/issue |

---

## Citation Tools — Known Limitations
Zotero, Mendeley, EndNote, Cite This For Me, EasyBib are useful but commonly produce errors in:
- Capitalisation (APA requires sentence case for article titles)
- Missing DOIs or malformed DOI links
- Incorrect author formatting for institutional/corporate authors
- Handling of multiple containers (MLA)

Always manually verify automated citations against the official style guide.
