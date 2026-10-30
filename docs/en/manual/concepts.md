---
title: "Core concepts"
---

# Core concepts {#核心概念}

These distinctions help you locate data, samples and results.

## Physical samples and workspace data items {#物理样品与工作区数据项}

A **physical sample** is prepared and tested experimentally. It links formulations, preparation steps, tests, attachments and analysis results.

A workspace **Sample item** is usually a table parsed from a file or worksheet, not a new physical specimen. One physical sample may have many tests, files and workspace items.

A **group** organizes similar data for consistent processing or Origin transfer. Researchers still check units, columns and test comparability.

## Base and sample formulations {#基础配方与样品配方}

Base formulations save reusable materials, inputs and rules. A sample references a version and may adjust quantities in its own draft.

Confirmed preparation retains its original snapshot. Later base formulation edits do not rewrite completed experiments.

## Preparation and test records {#制备记录与测试记录}

Preparation records describe how samples were made, including steps, notes, images and attachments.

Test records belong to a sample and include method, date, instrument, operations, metrics and files. Uploading raw curves and entering final metrics are separate actions.

## Workflows and templates {#工作流与模板}

Workflows retain processing steps and parameters. Validate a method on one dataset before applying it to a group.

Templates reuse processing, plot settings or Origin configurations. Check parsing, columns, units and parameters for each new dataset.

## Project files (.nbp) {#工程文件-nbp}

An `.nbp` project saves and restores the processing workspace: data, groups, processing configuration and plotting state. It is separate from the long-term experiment database and should not be the only backup of all experiment records, attachments and results.

Controlled sources still require permission when opened, processed or delivered. Copying a project grants no additional authorization.

## Analysis results and versions {#分析成果与版本}

Results link Origin projects, images, participating samples, tests and inputs. One result may involve several samples; version updates retain historical evidence.

After editing in Origin, save and manually update the archived result version. It is neither a note screenshot nor a live-synchronized external file.

## Laboratory data center and community {#实验室数据中心与社区}

The data center provides submissions, search, revisions and controlled retrieval. Upload, sharing, export and republication are checked separately.

The community exchanges method resources such as workflows, Origin templates, scripts and plugins. Public and internal resources have different audiences.

Continue with the [full experiment workflow](./experiment-workflow) or [community and templates](./community).
