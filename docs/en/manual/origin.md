---
title: "Batch plotting in Origin"
---

<script setup>
import VideoLesson from '../../.vitepress/theme/components/VideoLesson.vue'
</script>

# Batch plotting in Origin {#origin-批量出图}

Transfer grouped results to Origin, reuse templates and themes, and link samples, tests and input sources in versions that support result archiving.

## Before you begin {#使用前准备}

Check your local Origin installation and automation environment. Prepare suitable templates and themes. Test column mapping, units and compatibility on a small example before transferring complete groups.

## Operating steps {#操作步骤}

1. Select groups and results in the data workspace; confirm X/Y columns.
2. Choose an available Origin transfer method, template and theme.
3. Transfer and check curve counts, legends, axes, units and groups in Origin.
4. Complete figure edits and save the project and final images.
5. In versions supporting archiving, link participating samples and tests and retain input sources.

## Batch plotting checklist {#批量出图检查}

| Item | Confirm |
| --- | --- |
| Template | Suitable for the data, column structure and plot type |
| Grouping | Every curve maps to the correct sample and variable |
| Presentation | Correct labels, units, legends and axis limits |
| Archive | Project, images, sources and result version are complete |

## External edits and result versions {#外部修改与成果版本}

Save edits in Origin, then manually update the result version through the results feature. Select the edited `.opju` or `.opj`, add final images as needed and check participating samples. Origin changes do not write to formulation notes in real time.

## Common issues {#常见问题}

If transfer fails, check the Origin environment, file permissions and template compatibility. For support, provide a version, minimal reproduction steps and anonymized example. See the [complete experiment workflow](./experiment-workflow#origin).

## Matching learning resource {#对应学习资源}

<VideoLesson lesson-id="origin" />
