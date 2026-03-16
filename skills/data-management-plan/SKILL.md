---
name: data-management-plan
description: Write and review data management plans (DMPs) for research grants and projects. Use this skill whenever the user needs to write a DMP for NIH, NSF, UKRI, EU Horizon, or another funder; understand FAIR data principles; choose a data repository; describe data formats and metadata standards; handle sensitive or restricted data; or complete a DMP template in DMPTool or DMPonline. Trigger for: "write a data management plan", "NIH data management policy", "what is a DMP", "FAIR data", "which repository should I use", "NSF DMP requirements", "how do I share my data", "EU Horizon data plan", or any task involving research data management or sharing.
---

# Data Management Plan

A Data Management Plan (DMP) is a formal document describing how research data will be collected, organised, stored, shared, and preserved during and after a project. DMPs are now mandatory for most major research funders.

---

## Funder Requirements Comparison

| Funder | Policy Name | DMP Required | Page Limit | Key Requirements |
|---|---|---|---|---|
| **NIH (US)** | NIH DMS Policy (Jan 2023) | Yes — all research producing scientific data | No page limit specified (typically 2–3 pages) | Sharing plan for all data; timeline; metadata; access controls |
| **NSF (US)** | NSF Data Management Plan | Yes — all proposals | 2 pages maximum | Per-directorate requirements vary; sharing strategy; formats; access |
| **UKRI** | UKRI Open Access Policy + Concordat | Yes — project proposals | Varies; typically 2–3 pages | Active DMP; FAIR principles; repository deposit within 3 months |
| **EPSRC (UK)** | EPSRC Research Data Policy | Yes | No specific limit | 10-year retention; "as open as possible, as closed as necessary" |
| **EU Horizon Europe** | Horizon Europe DMP Guidelines | Yes — living DMP | No limit (living document) | FAIR principles mandatory; DMP submitted at M6, updated M18 and M36 |
| **Wellcome Trust** | Wellcome Data, Software, Materials Policy | Yes | Not specified | Rapid data sharing; CC0/CC BY licence preferred |
| **ERC** | ERC Open Research Data | Yes (for most) | Not specified | FAIR principles; linked to Open Research Europe |

### NIH DMS Policy (Effective January 25, 2023)

**Applies to:** All NIH-funded research that generates scientific data (including competitive renewals for grants submitted after Jan 25, 2023).

**Required elements:**
1. Types of data produced (scientific data, metadata, code)
2. Standards and formats used
3. Data preservation, access, and sharing timelines
4. Access, distribution, and reuse considerations
5. Oversight of DMP implementation

**Sharing timeline:** Data shared no later than the time of publication of results or end of the period of performance, whichever comes first.

**Resource sharing plans:** Separate from DMP; covers model organisms, genomic data, and biospecimens.

### NSF DMP Requirements

NSF requirements are directorate-specific. Common elements across all directorates:

1. Types of data, samples, software, materials to be produced
2. Standards for data and metadata format and content
3. Policies for access and sharing (including any delays or restrictions)
4. Policies and provisions for re-use, re-distribution, and production of derivatives
5. Plans for archiving and preservation

**Key directorate variations:**
- **BIO:** Strict data sharing timeline; encourage GenBank/NCBI for genomic data
- **CISE:** Software and code must be shared under open-source licence
- **SBE:** Privacy and confidentiality concerns explicitly addressed
- **ENG:** Large datasets; simulation data; infrastructure data

---

## FAIR Data Principles

FAIR (Findable, Accessible, Interoperable, Reusable) is the international standard for research data sharing. All major funders now reference FAIR.

### Findable

Data must be discoverable by humans and machines.

**Concrete requirements:**
- Assign a persistent identifier (PID) — DOI, handle, or ORCID iD
- Deposit in a searchable repository with a landing page
- Include rich metadata (descriptive keywords, author, title, date, subject)
- Register metadata even if the data itself cannot be shared

**Actions:**
- [ ] Assign DOI via repository (Zenodo, Figshare, Dryad all issue DOIs automatically)
- [ ] Complete all metadata fields in the repository deposit form
- [ ] Link data to the publication via DOI cross-reference

### Accessible

Data must be retrievable using standard protocols.

**Concrete requirements:**
- Data and metadata retrievable via open, standardised protocol (HTTP, HTTPS)
- Access conditions clearly documented (even if data access is restricted)
- Metadata must remain accessible even if data is removed or embargoed

**Actions:**
- [ ] Choose a repository with stable URL (institutional or domain-specific)
- [ ] Specify licence (CC0, CC BY, or restricted with stated conditions)
- [ ] If restricted: document the process for requesting access

### Interoperable

Data must work with other datasets and systems.

**Concrete requirements:**
- Use standard, open file formats (see below)
- Use controlled vocabularies and ontologies where available
- Include formal references to other relevant datasets

**Actions:**
- [ ] Convert proprietary formats to open equivalents before deposit
- [ ] Use discipline-appropriate metadata standards (see below)
- [ ] Reference related datasets and publications by DOI

### Reusable

Data must be usable by others.

**Concrete requirements:**
- Clear, accessible licence for data reuse
- Detailed provenance metadata (how data were collected, by whom, when)
- Detailed data documentation (codebook, README, data dictionary)
- Compliance with community norms and standards

**Actions:**
- [ ] Write a README.txt describing data collection, processing, and structure
- [ ] Create a data dictionary or codebook for all variables
- [ ] Apply a data licence (CC0 recommended for maximum reuse; CC BY if attribution required)
- [ ] Document any processing steps (scripts, version numbers)

---

## Standard DMP Sections Template

Use this structure for most funder DMP submissions. Adapt length to funder requirements.

### 1. Data Description

What data will be collected, created, or reused?

- **Data types:** Primary data (raw), processed/derived data, code/scripts, metadata, documentation, consent forms, survey instruments
- **Volume:** Estimated size (MB, GB, TB) and number of files
- **Data formats:** File formats to be used (CSV, TIFF, HDF5, etc.)
- **Existing data:** Will you reuse any existing datasets? If so, which ones (with identifiers)?

### 2. Metadata and Documentation

How will the data be described so others can find and use it?

- Metadata standard to be used (Dublin Core, DataCite, DDI, EML — see table below)
- Variable names, units, codes, and abbreviations documented
- Data collection instruments and protocols documented
- Version control approach

### 3. Storage and Backup

How will data be stored securely during the project?

- Storage location (institutional server, cloud, HPC)
- Backup frequency and location (3-2-1 rule: 3 copies, 2 media types, 1 off-site)
- Encryption for sensitive data (at rest and in transit)
- Access controls during the project

### 4. Data Sharing and Access

When and how will data be made available?

- Repository name and URL
- Timeline for deposit
- Licence for data reuse
- Any restrictions or embargo periods (and justification)
- Process for requesting access to restricted data

### 5. Data Preservation

How will data be preserved long-term?

- File formats for long-term preservation (open standards)
- Repository's retention policy
- Post-project access point (persistent URL or DOI)
- Responsible party for preservation

### 6. Responsible Parties

Who is responsible for DMP implementation?

- PI responsibilities
- Institutional data management support
- Cost of data management (estimate and include in budget)
- Succession plan if PI leaves the project

### 7. Ethical and Legal Compliance

- Consent and data protection (GDPR, HIPAA, IRB)
- Anonymisation / de-identification procedures
- Restrictions on sharing (IP, commercial sensitivity, national security)
- Re-consent requirements if data repurposed

---

## Data Types and Recommended Formats

| Data Type | Avoid (Proprietary) | Prefer (Open/Long-Term) |
|---|---|---|
| Tabular data | .xlsx, .xls | .csv, .tsv |
| Word-processed documents | .docx, .doc | .pdf/A, .odt |
| Images (photographs) | .psd, raw formats | .tiff, .png |
| Vector graphics | .ai, .vsd | .svg, .eps, .pdf |
| Audio | .wma, .aac | .wav, .flac, .mp3 |
| Video | .wmv, .avi (proprietary codecs) | .mp4 (H.264), .ogv |
| Qualitative data (interview) | .docx transcripts | .pdf, .txt |
| Geospatial data | .mxd, .aprx | .geotiff, .shp, GeoJSON |
| Scientific data | .mat (MATLAB), HDF5 proprietary | HDF5 (open spec), NetCDF, CSV |
| Genomics | Instrument raw files | FASTQ, VCF, BAM |
| Survey data | .sav (SPSS), .dta (Stata) | .csv with codebook; or .por (SPSS portable) |
| Code | Any language | Deposit with version, README; open-source licence |

**Long-term preservation formats:** The Library of Congress and Digital Preservation Coalition recommend formats that are: open standards, widely adopted, self-describing, unencrypted, and uncompressed where practical.

---

## Repository Selection Guide

| Repository | Best For | DOI Issued | Max File Size | Cost |
|---|---|---|---|---|
| **Zenodo** | Any discipline; code; EU-funded research | Yes | 50 GB per record | Free (CERN-hosted) |
| **Figshare** | Any discipline; figures; short datasets | Yes | 20 GB per file | Free (5 GB private) |
| **Dryad** | Life sciences; ecology; evolution | Yes | No formal limit | APC model (often journal-integrated) |
| **OSF (Open Science Framework)** | Social / behavioural sciences; preregistration | Yes (DOI on request) | 5 GB per file | Free |
| **UK Data Archive** | UK social science and humanities data | Yes | Contact for large datasets | Free for UKRI-funded |
| **UKRI Research Data Repository** | UKRI-funded research | Yes | — | Free |
| **Harvard Dataverse** | Social sciences; US-centric | Yes | Large datasets supported | Free |
| **GenBank / NCBI** | Genomic sequences | Accession number | — | Free (NIH-funded) |
| **ArrayExpress / GEO** | Gene expression data | Accession number | — | Free |
| **PDB (Protein Data Bank)** | Macromolecular structure data | Accession number | — | Free |
| **PANGAEA** | Earth and environmental science | Yes | — | Free |
| **re3data** | Registry of data repositories | — | Use to find domain-specific repositories | — |

**Finding domain-specific repositories:** Use re3data.org (Registry of Research Data Repositories) to search by discipline, data type, and country.

**For sensitive/restricted data:** Use a repository with built-in access controls (UK Data Archive, Zenodo restricted access, institutional repository with access request workflow).

---

## Metadata Standards by Discipline

| Discipline | Metadata Standard | Key Elements |
|---|---|---|
| General / Multi-discipline | Dublin Core | 15 basic elements (title, creator, subject, description, date, type, format, identifier) |
| Research data (general) | DataCite | Extended Dublin Core for data; required for DOI assignment |
| Social sciences | DDI (Data Documentation Initiative) | Variable-level documentation; codebooks; survey instruments |
| Ecology / Environmental | EML (Ecological Metadata Language) | Spatial/temporal coverage; taxonomic data; measurement units |
| Geospatial | ISO 19115 / FGDC | Coordinate systems; spatial extent; projection |
| Clinical / Biomedical | MIBBI (Minimum Information standards) | MIAME, MIQE, MIMARKS — discipline-specific minimum reporting |
| Cultural heritage | VRA Core, CDWA | Visual resources; art objects; descriptive fields |
| Language corpora | OLAC (Open Language Archives) | Language codes; text type; recording conditions |

**DataCite** is the most practical starting point — all major general repositories (Zenodo, Figshare, Dryad) use it, and completing the DataCite metadata schema satisfies most FAIR findability requirements.

---

## Sensitive Data Handling

### Data Requiring Special Treatment

- **Personal data (GDPR / HIPAA):** Names, addresses, dates of birth, medical records, IP addresses
- **Sensitive personal data:** Health, genetics, biometrics, race/ethnicity, political opinions, religious beliefs
- **Indigenous / community data:** May be subject to community governance beyond national law
- **Commercially sensitive:** IP, trade secrets, industry collaboration agreements
- **National security / dual-use:** Defence research; certain genomic data

### Anonymisation vs. Pseudonymisation

| Approach | Description | Risk Level |
|---|---|---|
| **Anonymisation** | All identifiers removed; re-identification impossible | Low — may be shared openly |
| **Pseudonymisation** | Identifiers replaced with codes; key held separately | Medium — can be shared with access controls |
| **Aggregation** | Individual data replaced with group summaries | Low if groups are large enough (>5 individuals per cell) |

**GDPR note:** Anonymised data is outside GDPR scope. Pseudonymised data is still personal data under GDPR.

### Data Access Levels

| Level | Description | Implementation |
|---|---|---|
| Open | No restrictions | Public repository with open licence |
| Registered | Free access after account creation | Repository with registration (Zenodo, UKDA registered access) |
| Safeguarded | Application required; legitimate research purpose | UK Data Archive safeguarded access; Virtual Data Enclave |
| Controlled | Strict approval; data never leaves secure environment | Secure data enclaves; NIH dbGaP; UK Biobank |

---

## Data Retention Requirements

| Funder | Retention Period | Starts From |
|---|---|---|
| NIH | 3 years minimum | End of study (longer for FDA-regulated research) |
| NSF | 3 years minimum | Closure of the award |
| UKRI / EPSRC | 10 years | End of project |
| EU Horizon Europe | 5 years | End of project (25 years for clinical data) |
| Wellcome | 10 years | End of project |
| Institutional policy | Typically 5–10 years | Check your institution's research data policy |

---

## DMP Tools Quick-Start

### DMPTool (US — dmptool.org)

- Free, web-based
- Pre-populated templates for all major US funders (NIH, NSF, all directorates)
- Guidance text for each field from funders
- Export as PDF or Word
- **How to start:** Create account → "Create Plan" → select your funder and institution

### DMPonline (UK/EU — dmponline.dcc.ac.uk)

- Free, web-based
- Templates for UKRI, Horizon Europe, Wellcome, ERC, and other European funders
- Guidance text embedded
- Collaborative editing
- **How to start:** Create account → "Create Plan" → select funder → choose template

Both tools allow you to answer funder-specific questions with embedded guidance text visible alongside each question. Always select your specific funder template rather than a generic one.

---

## Pre-Submission DMP Checklist

### Coverage
- [ ] All data types produced by the project described
- [ ] Metadata standard identified and justified
- [ ] Storage solution described (with backup strategy)
- [ ] Repository named (with URL where possible)
- [ ] Data sharing timeline stated (publication or end of grant)
- [ ] Data licence specified (CC0, CC BY, or restricted with justification)
- [ ] Long-term preservation approach described
- [ ] Retention period stated (meets funder minimum)

### FAIR Compliance
- [ ] Persistent identifier (DOI) will be assigned to datasets
- [ ] Metadata will be deposited in searchable repository
- [ ] Open file formats used for deposit
- [ ] README / data dictionary / codebook described
- [ ] Re-use licence assigned

### Compliance
- [ ] Sensitive data handling addressed (anonymisation, access controls)
- [ ] Ethical/IRB requirements noted
- [ ] Funder-specific requirements met (check against funder guidance)
- [ ] Cost of data management included in project budget
- [ ] Responsible person(s) named
- [ ] Living DMP update schedule noted (for EU Horizon)
