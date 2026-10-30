---
title: "Record a complete experiment"
---

# Record a complete experiment {#记录一次完整实验}

Nebula Lab uses samples to connect formulations, preparation, testing and results. Follow the workflow below for a complete experiment, or begin processing instrument files directly.

> Capabilities depend on the installed version and laboratory server. New archiving features are validated in Beta first. Origin transfer requires a compatible local Origin installation and automation environment; laboratory data also requires appropriate account, device and resource permissions.

## Material library {#materials}

Create a material. Query PubChem for common chemicals or enter unlisted materials manually.

- Use names and codes for identification.
- Maintain applicable molar mass, solids content, density and dimensions.
- Record suppliers, grades, batches and property sources.

Material records describe materials themselves. Experimental quantities belong to formulations and sample compositions.

## Calculate and save formulations {#formulation}

Select materials and configure ratios, targets, rules and inputs. Selecting several materials does not automatically derive an experimental ratio.

Samples reference reusable base versions and retain their own formulation drafts. Sample quantity edits do not overwrite the base.

Eligible unmodified drafts may follow new base versions; modified drafts retain their contents and offer an update entry. Confirmed preparation snapshots do not change with later base updates.

## Record sample preparation {#preparation}

Select the base version, check quantities and enter ordered preparation steps and process notes. Add process and sample images through suitable attachment or appearance records.

Steps are mainly text; some composition and process fields are structured. Images do not imply a dedicated flowchart editor or automatic parameter recognition.

Review and confirm preparation to save a snapshot. Use provided copy and version operations when changing locked records.

## Add characterization tests {#testing}

Add a sample test with its type, date, method, instrument, operator and notes.

- **Metrics:** values, units and quality status.
- **Raw files:** complete instrument exports and supporting files linked to the test.
- **Replicates:** separate test types and repeated measurements.

Tensile tests may retain strength, modulus, elongation and full stress–strain data. Residual mass needs temperature and atmosphere; infrared tests retain spectra and peaks.

File uploads and metric entry are separate. Automatic extraction depends on supported formats and workflows.

## Process similar data consistently {#processing}

Add test files to processing, or choose computer files, local samples or data center sources. Check test type, columns, units and groups.

Validate one dataset before applying a method to a group and save workflows as templates. Researchers confirm experimental comparability and variable control.

See [data preparation](./data-preparation) and [processing workflows](./workflow).

## Origin plotting and result links {#origin}

Select groups, X/Y columns and export options, then transfer to Origin. Use available templates and themes for further analysis and figure editing.

When archiving is available, save projects, images and inputs. A result can link several samples and tests rather than existing only as a formulation note.

After external edits, save the project, manually update its result version and select the edited `.opju` or `.opj`. Add final images and verify sources. This is not real-time automatic write-back.

## Laboratory submission and search {#data-center}

After connecting, check submission eligibility, complete sources and permissions, then confirm the content. Upload, viewing, export and republication are separate decisions.

Current cloud results are creator-private and are not automatically shared through readable samples or administrator status.

Laboratory services provide submission, search, previews and controlled retrieval. They do not imply two-way synchronization or collaborative editing of every record. See [data center permissions](./data-center).
