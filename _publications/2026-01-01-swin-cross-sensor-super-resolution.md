---
title: "Spatial-Frequency Gated Swin Transformer for Cross-Sensor Remote Sensing Super-Resolution"
collection: "publications"
category: "conferences"
permalink: "/publication/swin-cross-sensor-super-resolution"
# January 1 is a sorting key when only the publication year is known.
date: "2026-01-01"
venue: "ECCV 2026 Workshop TerraBytes II"
authors: "MA Hossain, AV Patel, SK Singh, Y Jethani, B Banerjee"
citation: "MA Hossain, AV Patel, SK Singh, Y Jethani, B Banerjee. (2026). &quot;Spatial-Frequency Gated Swin Transformer for Cross-Sensor Remote Sensing Super-Resolution.&quot; <i>ECCV 2026 Workshop TerraBytes II</i>."
paperurl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-2PNnMIAAAAJ&citation_for_view=-2PNnMIAAAAJ:Se3iqnhoufwC"
---

## Abstract

<p style="text-align: justify;">
Remote sensing single-image super-resolution aims to generate high-resolution imagery from low-resolution observations while preserving fine structures such as roads, building boundaries, field edges, and land-cover transitions. Swin Transformer-based models, including Swin2SR, provide strong spatial context modeling through shifted-window self-attention, but their feed-forward networks remain generic channel-mixing modules that do not explicitly distinguish low-frequency structure from residual details. We propose SFG-SwinSR, which replaces the standard Swin2SR feed-forward network with a lightweight Spatial- Frequency Gated Feed-Forward Network. The module estimates a smoothed feature component through a depthwise low-pass branch, derives residual details by subtraction, refines them spatially, and adaptively reinjects useful details through a bottleneck gate. Experiments on the real cross-sensor SEN2VENμS, OLI2MSI, and SEN2NAIP benchmarks, together with an auxiliary synthetic SpaceNet Challenge 3 setting, show consistent improvements across most evaluation settings and competitive performance against recent Swin-based baselines. The results indicate that spatial-frequency transformation within transformer feed-forward networks provides an effective lightweight inductive bias for structure-aware cross-sensor remote sensing super-resolution. Source code is available at https://github.com/aminurhossain/SFG-SwinSR.
</p>

## Links
* [Paper](https://openreview.net/pdf?id=HIYYVEosSu)
* [Google Scholar record](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-2PNnMIAAAAJ&citation_for_view=-2PNnMIAAAAJ:Se3iqnhoufwC)
