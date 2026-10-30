---
title: "Large Language Model (LLM) + RAG knowledge assistant"
---

<script setup>
import VideoLesson from '../../.vitepress/theme/components/VideoLesson.vue'
</script>

# Large Language Model (LLM) + RAG knowledge assistant {#large-language-model-llm-rag知识助手}

**Status: planned. Purpose: help people use existing knowledge more efficiently.**

Combine domain databases, large language models and retrieval-augmented generation to find experiment data and similar proposals, then produce domain-specific reports. The pages and workflow below are intended capabilities, not a complete available operating interface.

## Expected page content {#预期页面内容}

| Area | Intended content |
| --- | --- |
| Research question | Goals, material system, constraints and required output |
| Search scope | Authorized experiment, simulation and literature records and database versions |
| Similar records | Conditions, results, differences and verifiable sources |
| Proposal report | Evidence, candidates, conditions, citations and open questions |

## Target workflow {#目标流程}

1. Describe the research question, goal and constraints; choose authorized data.
2. Retrieve related records and proposals; check sources and applicability.
3. Generate a report grounded in retrieved evidence, distinguishing facts from recommendations.
4. Have a researcher review references, methods and conditions before selecting a plan.
5. Record actual experiments and results in the database, preserving proposal and source relationships.

## Use of data and results {#数据与结果的使用}

Retain source, version and original location. Clearly identify missing evidence. Researchers must review reports; generated text is not a validated experimental fact.

## Difference from the ML materials agent {#与-ml-材料智能体的区别}

LLM + RAG helps understand and reuse existing knowledge. The [ML materials agent](./ml-agent) learns relationships in structured data for prediction, screening and inverse design. Both require clear sources and access permissions.

## Matching learning resource {#对应学习资源}

<VideoLesson lesson-id="llm-rag" />
