---
title: "Build a domain database"
---

<script setup>
import VideoLesson from '../../.vitepress/theme/components/VideoLesson.vue'
</script>

# Build a domain database {#沉淀专业数据库}

Organize materials, formulations, samples, tests and results into searchable, traceable records. These form the data foundation for the data center, knowledge assistant and materials models.

## Domain database and data center {#专业数据库与数据中心的区别}

A domain database defines content, fields and source relationships. The [data center](./data-center) handles aggregation, revisions, search and access. Complete local experiment records while the unified center is being built.

## Record completeness checklist {#记录完整性检查}

1. Verify material identity, batch, properties and sources.
2. Check formulation versions, actual sample quantities and preparation snapshots.
3. Complete steps, process parameters, images and test conditions.
4. Check metric values, units, quality status and raw files.
5. Link processing steps, input files, Origin projects and result versions.

## Data organization {#数据组织建议}

| Record | Recommended relationships |
| --- | --- |
| Material | Batch, property sources and formulation references |
| Sample | Formulation version, actual composition, steps and images |
| Test | Sample, method, metrics and raw files |
| Processed result | Inputs, steps, parameters, project and version |

## Search and sharing {#检索与共享}

Use available sample, test or metric search features and check whether results can be traced to their evidence. Before submitting to laboratory services, check eligibility and resource permissions. Method sharing, raw-data access and export are separate permissions; uploading does not automatically publish data.

## Next step {#下一步}

Read [data management](./data-management) for naming, versions and permissions, or send similar test files to [standardized processing](./processing).

## Matching learning resource {#对应学习资源}

<VideoLesson lesson-id="database" />
