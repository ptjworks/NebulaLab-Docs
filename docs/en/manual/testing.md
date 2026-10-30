---
title: "Manage characterization and property tests"
---

<script setup>
import VideoLesson from '../../.vitepress/theme/components/VideoLesson.vue'
</script>

# Manage characterization and property tests {#管理表征及性能测试}

Each test belongs to a specific sample. Metrics, raw curves, images and instrument files together support interpretation. A sample can have multiple test types and replicates.

## Page and fields {#页面与字段}

| Content | What to enter |
| --- | --- |
| Sample and test | Sample identifier and test type or method |
| Conditions | Instrument, date, operator and relevant environment |
| Metrics | Value, unit, quality status and calculation conditions |
| Raw files | Curves, spectra, images and instrument exports |
| Replicates and anomalies | Separate repeat records and exclusion reasons |

## Operating steps {#操作步骤}

1. Add a record from the sample's testing and characterization area; verify sample identity.
2. Select the test and enter the method, instrument, date and conditions.
3. Enter confirmed metrics, units and their calculation conditions.
4. Attach raw files and check filenames, column meanings and the tested object.
5. Save different tests and repeat measurements as separate records.

## Metric examples {#指标示例}

Tensile tests may record strength, modulus and elongation at break while retaining stress–strain curves. Infrared tests retain spectra and relevant peaks. Thermogravimetric residual mass requires temperature and atmosphere. A single summary value does not replace all raw evidence.

## Send files to processing {#转入处理}

Add relevant test files to [standardized processing](./processing) and check columns, units and groups. Attaching a file and entering metrics are separate actions; automatic extraction depends on supported formats and workflows.

## Matching learning resource {#对应学习资源}

<VideoLesson lesson-id="testing" />
