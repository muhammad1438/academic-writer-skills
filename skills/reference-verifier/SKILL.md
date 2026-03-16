---
name: reference-verifier
description: Verify the accuracy and integrity of academic references. Use this skill whenever the user needs to check whether citations are accurate, find DOIs, detect retracted papers, identify AI-hallucinated citations, find orphan or phantom references, verify author names or publication details, or run a pre-submission reference audit. Trigger for: "check my references", "is this citation real", "find the DOI for this", "how do I check for retracted papers", "AI made up a citation", "verify my bibliography", "phantom reference", or any task involving the accuracy and integrity of a reference list.
---

# Reference Verifier

Citation verification is a mandatory step before submission. Errors in reference lists undermine credibility and can delay publication. The rise of AI-generated text has introduced a new category of fabricated citations that appear plausible but are entirely non-existent.

---

## Why Reference Verification Is Critical

**Accuracy:** A single wrong page number, volume, or year signals carelessness to reviewers. Systematic errors suggest fabrication.

**Retraction risk:** Citing a retracted paper without noting the retraction can constitute a serious integrity breach. Thousands of papers are retracted annually.

**AI hallucination:** Large language models regularly generate plausible-sounding but entirely fictional citations — correct author names, realistic journal names, plausible years, and fabricated DOIs. These require verification before use.

**Orphan and phantom references:** Orphan = cited in text but missing from the reference list. Phantom = in the reference list but never cited in the text. Both are submission errors.

**Self-citation ethics:** Excessive self-citation is flagged by editors. Cite your own work only when directly relevant, not routinely.

---

## Reference Error Types

| Error Type | Description | How to Detect | How to Fix |
|---|---|---|---|
| **AI hallucination** | Entirely fabricated citation that does not exist | Search DOI + title in CrossRef/Google Scholar | Remove; find a real source or remove the claim |
| **Wrong DOI** | Doi resolves to a different paper | Resolve doi.org/[DOI] in browser | Locate correct DOI via CrossRef |
| **Wrong page range** | Listed pages differ from published article | Check via DOI or journal website | Correct from journal website |
| **Wrong year** | Publication year incorrect | CrossRef lookup | Correct from official source |
| **Wrong volume/issue** | Volume or issue number wrong | Journal website or DOI | Correct from official source |
| **Retracted paper** | Paper has been retracted post-publication | RetractionWatch; PubMed retraction notices | Remove or replace; if citing, note retraction |
| **Author name error** | First/last name swapped; misspelled | CrossRef or PubMed lookup | Correct to match published version |
| **Missing DOI** | DOI not included (increasingly required) | CrossRef.org lookup | Add DOI |
| **Orphan citation** | Cited in text, absent from reference list | Cross-check text citations vs. list | Add full reference |
| **Phantom reference** | In reference list, not cited in text | Cross-check list vs. text citations | Remove or add in-text citation |
| **Non-existent journal** | Journal name does not exist | Google the journal | Flag as likely hallucination; verify source |

---

## DOI Verification Workflow

A DOI (Digital Object Identifier) in the format `10.XXXX/XXXXX` is the most reliable way to verify a reference.

### Step 1: Resolve the DOI

Navigate to: `https://doi.org/[the-doi]`

- If it resolves to the correct paper → DOI is valid
- If it resolves to a different paper → wrong DOI (swap or typo)
- If it gives a 404 / "not found" → DOI is invalid or fabricated

### Step 2: Verify via CrossRef

CrossRef (crossref.org) is the authoritative DOI registry for academic literature.

**Using CrossRef search (crossref.org/search):**
- Search by DOI to verify it exists and retrieve full metadata
- Search by title to find the DOI if you have a reference without one
- Use the CrossRef API for bulk verification: `api.crossref.org/works?query=[title]`

**Using CrossRef metadata check:**
```
https://api.crossref.org/works/10.XXXX/XXXXX
```
Returns full metadata: authors, title, journal, volume, issue, pages, year.

### Step 3: Format Validation

A valid DOI always follows this pattern:
- Starts with `10.` followed by 4+ digits
- Contains exactly one `/` after the registrant prefix
- Example: `10.1037/amp0000001`, `10.1038/nature12373`

A DOI that:
- Does not start with `10.` — invalid
- Contains spaces — invalid
- Gives a 404 — likely fabricated or contains a typo

---

## PubMed Verification (Biomedical Literature)

For biomedical, clinical, and life science papers, use PubMed (pubmed.ncbi.nlm.nih.gov):

1. **Search by PMID:** If you have a PubMed ID, enter it directly
2. **Search by title:** Use full title in quotation marks
3. **Check for retraction notices:** PubMed marks retracted articles prominently
4. **Verify author names:** Check exact spelling and order as published
5. **Get citation details:** Volume, issue, pages, year all verified in PubMed record

**PubMed PMID format:** A PMID is a number (e.g., 36543210). Enter directly in the PubMed search box.

---

## Google Scholar Verification

Use Google Scholar (scholar.google.com) as a secondary check:

1. Search for the exact title in quotation marks
2. Verify it appears with the correct author names and journal
3. Check the "Cited by" number — unusually low or zero for a supposedly influential paper may indicate fabrication
4. Use the "All X versions" link to see if the paper appears in multiple databases

**Limitation:** Google Scholar indexes preprints and grey literature — a paper found in Google Scholar may not be peer-reviewed. Always verify the source type.

---

## Retraction Checking

### RetractionWatch Database

RetractionWatch (retractionwatch.com) maintains a database of retracted papers.

**Checking a paper:**
1. Navigate to the RetractionWatch Database: retractionwatch.com/retraction-watch-database-user-guide/
2. Search by DOI, title, or author name
3. If listed → the paper is retracted; note the retraction reason

**Via PubMed:**
- Search for the paper → if retracted, PubMed will show a prominent "Retracted" notice
- The original abstract page will link to the retraction notice

**Best practice:** Check all papers cited for clinical/health claims and any paper published in a journal with known integrity issues.

### If Citing a Retracted Paper

- If the retracted information is not what you are citing: cite the retraction instead or find an alternative source
- If the point you are citing has been specifically retracted: remove the citation entirely
- If you must reference the original work in a historical context: "Smith et al. (2019), subsequently retracted (Smith et al., 2021, Retraction Notice), reported..."

---

## PubPeer — Post-Publication Concerns

PubPeer (pubpeer.com) is a platform for post-publication peer review. Search any paper to see if concerns have been raised.

**How to check:**
1. Go to pubpeer.com
2. Search by DOI or title
3. Review any comments — flag papers with serious concerns about data integrity

**This is especially important for:**
- Papers with complex image-based data (Western blots, gel images, microscopy)
- Papers from research groups with known integrity issues
- Clinical or policy-relevant findings

---

## AI-Generated Citation Red Flags

When you or a collaborator has used AI tools (ChatGPT, Claude, Gemini, Copilot) to draft text, treat ALL citations as unverified until checked.

**Common AI hallucination patterns:**

| Pattern | Example | Red Flag |
|---|---|---|
| Plausible but non-existent DOI | `10.1016/j.fake.2021.12345` | DOI gives 404 |
| Real authors, fabricated paper | "Smith & Jones (2020) in Nature" — paper doesn't exist | Title not found in CrossRef/Google Scholar |
| Real journal, wrong paper | Correct volume/year but wrong title and authors | DOI resolves to different paper |
| Real paper, wrong year | Published 2019 cited as 2022 | DOI check shows incorrect year |
| Inverted author order | First and last name swapped | CrossRef metadata disagrees |
| Combination citations | Two real papers merged into one fake citation | Neither the exact title nor the DOI exists |

**Verification protocol for AI-assisted writing:**
1. Flag every citation added by AI
2. Resolve each DOI at doi.org
3. Verify title and authors match via CrossRef
4. Check year and journal against CrossRef metadata
5. Never use a citation that cannot be verified

---

## ORCID for Author Disambiguation

ORCID (orcid.org) provides persistent digital identifiers for researchers, solving name disambiguation.

**When to use:**
- Multiple authors with the same name in your reference list
- Verifying you have the correct researcher when citing
- Your own publications — register for an ORCID iD (orcid.org) and add it to your manuscripts

**ORCID record lookup:** Search by name at orcid.org/orcid-search — see all papers linked to that researcher's ORCID profile.

---

## Tools Summary

| Tool | URL | Best For |
|---|---|---|
| CrossRef | crossref.org | DOI lookup; metadata verification; finding DOIs by title |
| doi.org resolver | doi.org | Quick DOI resolution check |
| PubMed | pubmed.ncbi.nlm.nih.gov | Biomedical literature; retraction notices |
| Google Scholar | scholar.google.com | Broad search; finding papers by title |
| RetractionWatch Database | retractionwatch.com | Checking for retracted papers |
| PubPeer | pubpeer.com | Post-publication peer review concerns |
| ORCID | orcid.org | Author disambiguation and identification |
| SHERPA/RoMEO | sherpa.ac.uk/romeo | Publisher OA and self-archiving policies |
| CrossRef Metadata API | api.crossref.org | Programmatic bulk verification |

---

## Self-Citation Ethics

- **Acceptable:** Citing your own prior work when it is directly relevant and avoids repetition
- **Unacceptable:** Citing your own work to inflate your citation count; citing irrelevant prior work; requesting reviewers cite your work
- **Journal guidance:** Many journals cap the proportion of self-citations or flag papers where >30–40% of references are self-citations
- **Collaborative authorship:** Citing papers where you are a minor contributor in a way that implies sole authorship is misleading

---

## Pre-Submission Reference Checklist

Work through this checklist before every submission:

### Completeness
- [ ] Every in-text citation has a corresponding reference list entry
- [ ] Every reference list entry has at least one in-text citation
- [ ] No orphan citations (in text, missing from list)
- [ ] No phantom references (in list, not cited in text)

### Accuracy
- [ ] All DOIs resolved and verified (doi.org)
- [ ] Author names correct and complete (CrossRef or PubMed)
- [ ] Publication years correct
- [ ] Volume, issue, and page ranges accurate
- [ ] Journal names correct and consistent (full name or standard abbreviation per style)

### Integrity
- [ ] All AI-generated citations verified via CrossRef or PubMed
- [ ] No retracted papers cited without acknowledgment (RetractionWatch check)
- [ ] No papers with major PubPeer integrity concerns cited uncritically
- [ ] Self-citations proportionate and justified

### Formatting
- [ ] All references follow the required citation style consistently
- [ ] DOIs formatted as hyperlinks where required
- [ ] Hanging indent applied (for APA, MLA, Chicago)
- [ ] Alphabetical order (or order of appearance) as required by style

---

## Reference List vs. Bibliography

| Term | Definition | When Used |
|---|---|---|
| **Reference list** | Contains only sources cited in the text | APA, Vancouver, IEEE — standard usage |
| **Bibliography** | May include sources consulted but not cited | Chicago NB, MLA — common in humanities |
| **Works cited** | MLA term for the reference list | MLA style specifically |

Always use the correct term for the citation style you are following.
