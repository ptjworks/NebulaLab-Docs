---
title: "Simulation data collection (in development)"
---

<script setup>
import VideoLesson from '../../.vitepress/theme/components/VideoLesson.vue'
</script>

# Simulation data collection (in development) {#模拟数据收集-待完善}

This module is in development. The following describes expected information and preparation; future releases will define entry points, supported formats and fields.

## Goals and scope {#目标与数据范围}

Link materials or research tasks to simulation inputs, methods, run conditions and outputs. Preserve sources so results can be compared with experiments.

## Expected page content {#预期页面内容}

| Content | Prepare |
| --- | --- |
| Research object | Composition, structure files, task or sample |
| Calculation | Software and version, method, boundary conditions and parameters |
| Run record | Task identifier, time, status and logs |
| Results | Properties or structures, units, output files and parsing notes |

## Planned workflow {#规划流程}

Organize inputs and conditions → import runs and results → check units and sources → link research objects → submit to the data center.

This is a development target, not a complete operating tutorial. Supported simulation software and parsing formats remain to be confirmed.

## Relationships to other modules {#与其他模块的关系}

Simulation records will form one source for the domain database and materials models. Keep experimental validation separate so predicted or simulated values are not confused with measurements.

## Matching learning resource {#对应学习资源}

<VideoLesson lesson-id="simulation-data" />
