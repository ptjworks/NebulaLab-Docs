---
title: "Machine Learning (ML) materials agent"
---

<script setup>
import VideoLesson from '../../.vitepress/theme/components/VideoLesson.vue'
</script>

# Machine Learning (ML) materials agent {#machine-learning-ml-材料智能体}

**Status: planned. Purpose: learn patterns for material property prediction and inverse design.**

Develop and validate domain models for virtual screening, multi-objective optimization and experiment design. This is the intended workflow; future releases define actual pages and models.

## Expected page content {#预期页面内容}

| Area | Intended content |
| --- | --- |
| Dataset | Scope, sources, features, labels, units and quality |
| Model | Task, training method, version and applicability |
| Validation | Data splits, metrics, error and uncertainty |
| Design task | Target properties, composition or process constraints and candidate scope |
| Feedback | Candidate plans, real test results and discrepancies |

## Target workflow {#目标流程}

1. Select authorized data; check missing values, units, duplicates and conditions.
2. Define features and target properties; retain data versions and sources.
3. Train and validate on independent data; record error and applicability.
4. Predict properties, screen candidates or optimize multiple objectives.
5. Generate candidate experiments under target properties and constraints for researcher selection.
6. Save measured and predicted values separately, compare errors and return results to the database.

## Prediction and inverse design {#预测与逆向设计}

Prediction estimates properties from known composition or conditions. Inverse design searches compositions and conditions from target properties and constraints. Both require suitable models and validation; recommendations must be tested experimentally.

## Platform vision {#与平台愿景的关系}

Formulation design → experiment execution → data accumulation → automated analysis → model learning → experiment recommendations → revalidation. New results enrich domain data for the next model and design cycle.

## Matching learning resource {#对应学习资源}

<VideoLesson lesson-id="ml-agent" />
