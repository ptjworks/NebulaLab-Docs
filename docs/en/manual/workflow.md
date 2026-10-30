---
title: "Data processing and plotting"
---

# Data processing and plotting {#数据处理流程与绘图}

After normalizing imported data, configure processing pipelines and scientific plots.

## 1. Processing workflows {#一、-数据处理工作流-workflow}

The workflow engine retains raw data and processing steps. Add, reorder and adjust preprocessing operations as required.

### 1. Create a pipeline {#_1-建立数据处理流水线}

1. **Select columns:** right-click a column header or use the processing panel to set X (for example wavelength or time) and Y (for example absorbance or intensity).
2. **Add operations:** combine supported steps:
   - **Crop:** set X limits and exclude irrelevant edges.
   - **Smooth:** use Savitzky–Golay filtering with a suitable polynomial order and window; additional algorithms depend on installed plugins.
   - **Baseline correction:** use available polynomial fitting or selected-point subtraction to address drift and background.
   - **Normalize:** scale by maximum or area when suitable for qualitative shape comparisons.

### 2. Templates and batch processing {#templates}

1. Save validated steps with Save as template.
2. Import similar data, check columns, units and groups, and import the template.
3. Inspect one result before applying it to a group. Runtime depends on dataset size, algorithms and hardware.
4. Preserve raw files and sources. Share team templates only with authorized members.

## 2. Scientific plotting {#二、-科学绘图看板}

- Select multiple workspace samples to compare curves in the plotting area.
- Adjust axis labels, physical symbols and units, such as `λ (nm)` and `A (a.u.)`.
- Customize line widths, styles and markers; drag legends away from important features.
- Set X/Y limits and major or minor grid settings as needed.

## 3. Export {#三、-高质量无损导出}

1. **SVG:** export scalable vector figures for editing or document layout in tools such as Word, LaTeX and Illustrator. Verify the destination's font and submission requirements.
2. **PNG:** export raster figures for slides and routine records.
3. **Origin:** use Send to Origin from the sample tree for further plotting. This calls a compatible local Origin installation and transfers processed data without an intermediate manual CSV import.
