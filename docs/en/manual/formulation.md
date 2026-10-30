---
title: "Calculate experiment formulations"
---

<script setup>
import VideoLesson from '../../.vitepress/theme/components/VideoLesson.vue'
</script>

# Calculate experiment formulations {#计算实验配方}

The formulation page connects materials, ratios, calculation rules and target amounts. Base formulations support reuse; sample formulations preserve the composition actually used.

## Page and inputs {#页面与输入}

| Area | Check |
| --- | --- |
| Materials | Correct material, grade, batch and required properties |
| Calculation inputs | Target total, component ratios, rule inputs and units |
| Results | Component amounts, totals and discrepancies |
| Versions and links | Base version, sample draft and actual quantities |

## Operating steps {#操作步骤}

1. Create or open a base formulation and select the experiment materials.
2. Choose a suitable rule, enter ratios and total quantity, and confirm how mass fractions or other ratios are defined.
3. Calculate and check component quantities, units, totals and assumptions.
4. Save the base formulation version for current or future samples.
5. Reference the correct version when creating a sample. Confirm actual quantities and explain any adjustments.

## Example check {#示例核对}

For a two-component example totaling 100 g with a 20% filler mass fraction, use 20 g filler and 80 g matrix. Other systems require their actual rules, solids content and material conditions.

## Versions and preparation {#版本与制备的关系}

Editing a sample draft does not overwrite its base formulation. Confirming preparation retains the formulation and process snapshot, so later base updates do not rewrite completed experiments.

## Next step {#下一步}

Open [experiment process recording](./preparation), link the formulation and enter actual preparation details.

## Matching learning resource {#对应学习资源}

<VideoLesson lesson-id="formulation" />
