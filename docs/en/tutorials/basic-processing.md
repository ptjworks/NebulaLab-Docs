---
title: "Walkthrough: basic data processing"
---

# Walkthrough: basic data processing {#手把手实战-完成一次基础数据处理}

Follow these steps from importing raw instrument files to processing, plotting and exporting. Actual entry points and panel names depend on the installed version.

## 1. Import files in the data preparation workspace {#_1-进入数据准备工作台并导入文件}

- Open Data preparation and find Import files above the raw data panel.
- Select CSV, Excel, TXT or DAT files, or drag supported files into the empty left area.
- The center contains the table workspace; the right side shows status and processing workflows.

## 2. Configure parsing and inspect the preview {#_2-配置解析与核对数据预览}

- Check column alignment in the first-five-row preview.
- Set skipped metadata rows and the correct header row for physical quantities such as wavelength or time.
- Import files into a shared group or separate groups; inspect the resulting sample tree.

## 3. Map axes and preprocess {#_3-物理轴线映射与数据预处理}

- Assign independent-variable columns to X and dependent-variable columns to Y.
- Investigate spikes against instrument logs and raw files. Retain originals and explain exclusions or corrections.
- Add suitable crop, Savitzky–Golay smoothing and baseline steps. Check operation order and parameters.

## 4. Compare samples and refine plot properties {#_4-同屏样品勾选对比与绘图属性微调}

- Select samples in the tree to draw comparison curves.
- Set physical axis labels and units, including scientific symbols such as `λ (nm)` or `A (a.u.)`.
- Customize widths, line styles and markers; drag the legend away from important peaks.

## 5. Export figures and save workflows {#_5-一键导出无损图表与工作流模板化}

- Export SVG for scalable layouts or high-resolution PNG for raster use. Check final document rendering.
- Use Send to Origin on a sample to transfer processed data to your compatible local Origin installation for further work.
- Save validated steps and parameters as a template. Before reuse, check columns, units and applicability. Runtime depends on data, algorithms and hardware.

## 6. Link results back to the experiment {#_6-将成果关联回实验}

Preserve links to recorded samples and tests. Versions with archiving can save Origin projects and images with their inputs. Manually update result versions after edits in Origin; see the [complete workflow](../manual/experiment-workflow#origin).
