---
title: "Build a material library"
---

<script setup>
import VideoLesson from '../../.vitepress/theme/components/VideoLesson.vue'
</script>

# Build a material library {#组建物料库}

The material library records identity, properties, batches and sources for reuse in formulations and samples. Quantities used in an experiment belong to the formulation and sample composition.

## Page and record structure {#页面与记录组成}

Find and maintain records in the material library. Details include identification, applicable properties, supplier and batch information, and attachments. Available fields depend on material type and installed version.

| Content | What to record |
| --- | --- |
| Identity | Name, material code, chemical identifiers or custom grade |
| Properties | Applicable density, molar mass, solids content and dimensions, with units |
| Source | Supplier, grade, batch and property documentation |
| Attachments | Specifications, test reports and other verifiable files |

## Operating steps {#操作步骤}

1. Search existing records and check the grade and batch before creating another entry.
2. Create a material. Query PubChem for common chemicals, or enter an unlisted material manually.
3. Enter applicable properties and units. Verify values with uncertain sources.
4. Add supplier, batch and supporting files, review the record and save it.
5. Select the material in a formulation and check that its properties support the chosen calculation rule.

## Check after saving {#保存后检查}

Confirm the record is searchable and distinguishable by name and batch. Check units for density, solids content and other inputs. Keep source and revision evidence when updating properties; do not merge distinct experimental batches merely because their names match.

## Next step {#下一步}

Go to [formulation calculation](./formulation) to calculate and save the quantities for this experiment.

## Matching learning resource {#对应学习资源}

<VideoLesson lesson-id="materials" />
