# Troubleshooting Guide

Common issues and solutions for each Academic Writer skill.

## Installation Issues

### Skills not activating in Claude Code
**Symptom:** Plugin installed but skills don't respond to triggers.
**Solution:**
1. Restart Claude Code: close and reopen
2. Check plugin is listed: `claude plugin list`
3. Reinstall: `claude plugin install academic-writer`
4. Check `.claude-plugin/plugin.json` is valid JSON: `node -e "JSON.parse(require('fs').readFileSync('.claude-plugin/plugin.json','utf8'))"`

### `install.sh` permission denied
**Symptom:** `bash: ./install.sh: Permission denied`
**Solution:** `chmod +x install.sh && ./install.sh`

### Node.js version error
**Symptom:** `SyntaxError` or `require is not defined` during install
**Solution:** Update Node.js to v18+: `node --version` should show 18 or higher.

---

## Skill-Specific Issues

### citation-formatter

**Issue: Mixed citation styles in output**
Citation formatter defaulting to wrong style.
**Fix:** Be explicit: "Format this in APA 7th edition" or "Use Chicago 17th author-date".

**Issue: DOI format inconsistency**
Some DOIs formatted as URLs, others not.
**Fix:** APA 7th requires DOI as URL: `https://doi.org/10.xxxx/xxxxx`. The skill will standardise these.

**Issue: Et al. threshold wrong**
APA 7th: use "et al." for 3+ authors from first citation. The skill follows this rule.
**Fix:** If getting wrong behaviour, specify: "I'm using APA 7th — how many authors before et al.?"

### statistical-reporting

**Issue: p-value format**
**Rule:** APA 7th reports exact p-values: `p = .034` (not `p < .05`), with leading zero omitted.
Exception: `p < .001` for very small p-values.

**Issue: Which effect size to report?**
| Test | Effect size | Range |
|------|-------------|-------|
| t-test | Cohen's d | Small: 0.2, Medium: 0.5, Large: 0.8 |
| ANOVA | η² or ω² | Small: .01, Medium: .06, Large: .14 |
| Correlation | r | Small: .1, Medium: .3, Large: .5 |
| Chi-square | Cramér's V or φ | Small: .1, Medium: .3, Large: .5 |

**Issue: Bayesian Factor interpretation**
| BF₁₀ | Interpretation |
|------|----------------|
| > 100 | Extreme evidence for H₁ |
| 30–100 | Very strong evidence |
| 10–30 | Strong evidence |
| 3–10 | Moderate evidence |
| 1–3 | Anecdotal evidence |
| 1/3–1 | Anecdotal evidence for H₀ |

### latex-writer

**Issue: `overfull \hbox` errors**
Cause: Line too long for column width.
**Fix options:**
- Add `\sloppy` to section (less tight line-breaking)
- Use `microtype` package
- Break long URLs with `\url{...}` or `\href{...}`
- Manually insert `\\` or `\linebreak`

**Issue: Bibliography not appearing**
Common causes:
1. Missing `\printbibliography` (BibLaTeX) or `\bibliography{filename}` (BibTeX)
2. BibTeX not run (use `biber` with BibLaTeX)
3. Compilation order: pdflatex → biber → pdflatex → pdflatex

**Issue: `undefined control sequence` for math**
**Fix:** Add `\usepackage{amsmath}` to preamble.

**Issue: Figures not showing**
Check:
- File path is correct (relative to .tex file)
- File extension is included (or omitted if using pdflatex/lualatex)
- `\usepackage{graphicx}` is in preamble
- Figure environment is not inside another float

### literature-review

**Issue: Review reads as a list of summaries, not a synthesis**
**Fix:** Reorganise by theme, not by paper. Each paragraph should discuss a theme across multiple sources, not describe one paper per paragraph. Use synthesis sentence starters: "Across studies, ...", "Taken together, ..."

**Issue: PRISMA diagram not matching paper**
Ensure numbers are consistent:
- Records identified = total unique records from all databases
- Records after deduplication
- Records screened (titles/abstracts)
- Records excluded (with reasons)
- Full texts assessed
- Studies included

### abstract-writer

**Issue: Abstract exceeds word limit**
Common limit violations:
- Adding background not needed if paper is clear
- Reporting too many statistics (report only primary outcome)
- Restating conclusion in different words

**Fix:** Cut in this order: background → methods detail → secondary results.

**Issue: Keywords not matching journal requirements**
Most journals: 3–6 keywords, not in abstract title, not too broad ("biology") or too narrow (your specific assay name). Use MeSH terms for medical journals.

### peer-review-response

**Issue: Response too defensive**
**Fix:** Always acknowledge the reviewer's concern before responding. Even if the reviewer is wrong, say "We appreciate this concern" before explaining why the concern is addressed.

**Issue: Handling contradictory reviewers**
When Reviewer 1 wants X and Reviewer 2 wants the opposite:
1. Explain the contradiction to the editor explicitly
2. State your principled reason for choosing one direction
3. Show you have considered both perspectives

### grammar-style-checker

**Issue: Too much passive voice flagged**
Passive voice is appropriate for:
- Methods sections (describing procedures)
- Results when the action is more important than who did it
The skill distinguishes appropriate from inappropriate passive use.

**Issue: British vs. American English confusion**
Be explicit: "I'm writing for a UK journal — use British spelling" or "American English for this paper".

### grant-proposal

**Issue: Specific Aims too long**
NIH Specific Aims page = exactly 1 page. Common causes of over-length:
- Too much background (cut to 1-2 sentences)
- Listing all sub-aims (focus on 2-3 major aims)
- Repeating information across sections

**Issue: EU Horizon abstract character count**
EU Horizon requires abstracts in EXACTLY 2000 characters. Use: `echo -n "your text" | wc -c` to count.

### journal-selection

**Issue: Journal Impact Factor unavailable**
IF is updated annually by Clarivate (June). Use:
- CiteScore (Scopus) as alternative
- SJR (SCImago) for quartile ranking
- h5-index (Google Scholar Metrics)

**Issue: Predatory journal checklist**
THINK.CHECK.SUBMIT checklist:
- [ ] Do you or your colleagues know the journal?
- [ ] Is it easy to identify and contact the publisher?
- [ ] Is the journal clear about the type of peer review it uses?
- [ ] Are articles indexed in databases you recognise?
- [ ] Does the publisher make clear what fees are charged?
- [ ] Is the publisher a member of an industry association (COPE, OASPA)?

### reference-verifier

**Issue: DOI returns "not found"**
- Check for typos in DOI
- Try CrossRef directly: `https://doi.org/{DOI}`
- Check if paper is preprint (arXiv, bioRxiv) — may not have DOI yet
- Paper may be very recent (DOI registration can take days)

**Issue: Citation looks real but may be AI-hallucinated**
Signs of hallucinated citations:
- Author names are real but didn't co-author this work
- Journal exists but volume/issue/pages don't match
- DOI resolves to a different paper
- Paper title doesn't appear in Google Scholar

**Always verify with CrossRef or PubMed before submitting.**

---

## Tool-Specific Issues

### Gemini CLI

**Issue: Skills not loading with `@GEMINI.md`**
- Use the full path: `gemini -p @/full/path/to/GEMINI.md`
- Or cd to the skills directory first: `cd academic-writer-skills && gemini -p @GEMINI.md`

**Issue: Context too long**
If Gemini reports context length issues with large papers:
- Split into sections
- Use `@contexts/writing.md` instead of full `@GEMINI.md` for writing tasks
- Use Flash model for large document tasks

### Cursor IDE

**Issue: `.cursorrules` not activating**
- Ensure `.cursorrules` is in the project ROOT directory (same level as `.git`)
- Restart Cursor after adding the file
- Check Cursor settings: AI → Rules for AI should show the file

**Issue: Wrong skill triggered**
Cursor uses pattern matching. Be more specific in your request to trigger the right skill behaviour. Example: instead of "fix this", say "check the grammar and style of this paragraph".

---

## Getting Help

- [Open an issue](https://github.com/muhammad1438/academic-writer-skills/issues)
- [Skill request](https://github.com/muhammad1438/academic-writer-skills/issues/new?template=skill_request.md)
- [Bug report](https://github.com/muhammad1438/academic-writer-skills/issues/new?template=bug_report.md)
