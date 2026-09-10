---
title: 基于 WASM 与 WebGL 的轻量向量可视化系统设计
category: 前端与系统开发
date: "2024-12-05"
readTime: 10 分钟阅读
author: 林锦承 (Texas)
excerpt: 针对高维 Embedding 聚类与交互卡顿，构建 Rust/WASM 共享线性内存矩阵降维，辅以 WebGL Instanced Arrays 实现百万点阵 60fps 顺畅漫游渲染。
cover: /images/blog-2.jpg
---

为了在大模型特征分析中实现数十万级高维 Embedding 向量在浏览器端的实时聚类与流式漫游，纯 JavaScript 的运算性能和内存管理往往成为瓶颈。我们设计了由 Rust 编译为 WebAssembly 负责矩阵分解，并通过 WebGL 进行百万级点阵渲染的系统。

## 1. 为什么选择 Rust + WASM

高维向量的余弦相似度计算涉及密集的浮点数内积计算。借助 WASM 的直接内存线性共享机制，我们无需在 JS 与 C++ / Rust 引擎之间反复序列化和传递数组，整体数据加载耗时降低了近 78%。

## 2. WebGL 实例渲染 (Instanced Arrays)

在前端渲染数万个带有特定分类色值和高亮状态的向量聚类点时，频繁的 Draw Call 会引起明显掉帧。通过结合 `ANGLE_instanced_arrays` 扩展，单次 Draw Call 即可提交全部实例数据。

```js title="render_instanced.js"
const ext = gl.getExtension('ANGLE_instanced_arrays');
// 绑定实例位置矩阵缓存
gl.bindBuffer(gl.ARRAY_BUFFER, instanceBuffer);
ext.vertexAttribDivisorANGLE(locPosition, 1);
ext.drawArraysInstancedANGLE(gl.TRIANGLE_STRIP, 0, 4, numPoints);
```

## 3. SIMD 降维计算加速

借助浏览器对 WebAssembly Fixed-width SIMD 的支持，我们将 t-SNE / UMAP 中最耗时的距离排序过程向量化，保证了 60fps 的顺畅交互体验。
