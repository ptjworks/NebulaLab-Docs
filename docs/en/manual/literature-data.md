---
title: "Literature data collection (in development)"
---

<script setup>
import VideoLesson from '../../.vitepress/theme/components/VideoLesson.vue'
</script>

# Literature data collection (in development) {#文献数据收集-待完善}

This module is in development. It will link publications, structured data and research objects to support verifiable knowledge retrieval and experiment planning.

## Expected page content {#预期页面内容}

| Content | Prepare |
| --- | --- |
| Publication | Title, authors, year, journal, DOI or source link |
| Original location | Accessible text, pages, figures, tables or paragraphs |
| Extracted information | Materials, formulations, processes, conditions and properties |
| Review | Extraction method, human checks, unit conversions and anomalies |

## Planned workflow {#规划流程}

Collect publications and sources → extract information → review text and units → save structured records → connect literature and experiment data.

Batch collection, extraction methods, parsing scope and import interfaces remain in development. This target workflow is not yet an executable feature.

## Data review {#数据核对}

Keep the test conditions and original locations for property data. Review names, orders of magnitude, units and figure meanings in extracted content. Retain uncertainty rather than inventing missing values.

## Knowledge assistant relationship {#与知识助手的关系}

Reviewed literature data will support the [LLM + RAG assistant](./llm-rag) in retrieval, citations and domain-specific experiment proposals.

## Matching learning resource {#对应学习资源}

<VideoLesson lesson-id="literature-data" />
