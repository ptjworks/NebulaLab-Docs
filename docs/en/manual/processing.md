---
title: "Standardize data post-processing"
---

<script setup>
import VideoLesson from '../../.vitepress/theme/components/VideoLesson.vue'
</script>

# Standardize data post-processing {#数据统一后处理}

Apply a consistent method to similar test files while retaining sources, groups, step order and parameters. Validate applicability before processing a batch.

## Page and workspace {#页面与工作区}

The workspace includes import and parsing, columns and groups, processing workflows, previews and export. Panel locations vary by version; verify the data and target records before operating.

## Import and review {#导入并核对}

1. Select files from your computer, local samples or a connected data center.
2. Check delimiters, headers, the data region and missing values.
3. Choose X/Y columns and verify physical quantities and units.
4. Group by sample, variable or replicate, retaining source relationships.

## Configure and process batches {#配置与批量处理}

1. Configure appropriate cropping, smoothing, baseline or normalization steps on representative data.
2. Check order and parameters; compare raw and processed results.
3. Save the validated method as a template and apply it to similar files.
4. Review each group and record anomalies or failures.
5. Save the project and sources, then export results or transfer them to Origin.

## Template reuse and extensions {#模板复用与扩展}

Templates retain methods and parameters but do not replace checks of units, column mapping or instrument conditions. Algorithms depend on the installed version and plugins. Specify applicability, versions and resource permissions when sharing.

## Further reading {#进一步阅读}

See [data preparation](./data-preparation), [workflows and templates](./workflow#templates) and the [basic processing walkthrough](../tutorials/basic-processing). Continue to [batch plotting in Origin](./origin) after processing.

## Matching learning resource {#对应学习资源}

<VideoLesson lesson-id="processing" />
