---
title: Designing a Lightweight Vector Visualization System with WASM and WebGL
category: Frontend & Systems
date: "2024-12-05"
readTime: 10 min read
author: Liang Yiyan (Miao Miao)
excerpt: To keep high-dimensional embeddings interactive in the browser, we move matrix reduction into Rust/WASM with shared linear memory and render a million points at 60fps using WebGL instanced arrays.
cover: /images/blog-2.jpg
---

To make hundreds of thousands of high-dimensional embedding vectors cluster and pan in real time inside a browser, plain JavaScript hits both a compute wall and a memory-management wall. So we designed a system where Rust compiled to WebAssembly handles matrix factorization and WebGL renders the point cloud.

## 1. Why Rust + WASM

Cosine similarity over high-dimensional vectors is dense floating-point dot product work. Because WASM shares linear memory directly, we no longer serialize and copy arrays back and forth between JS and the native engine, which cut total data-loading time by roughly 78%.

## 2. WebGL instanced rendering

Rendering tens of thousands of cluster points — each with its own category colour and highlight state — through individual draw calls drops frames badly. With the `ANGLE_instanced_arrays` extension, one draw call submits all instance data:

```js title="render_instanced.js"
const ext = gl.getExtension('ANGLE_instanced_arrays');
// Bind the instance position matrix buffer
gl.bindBuffer(gl.ARRAY_BUFFER, instanceBuffer);
ext.vertexAttribDivisorANGLE(locPosition, 1);
ext.drawArraysInstancedANGLE(gl.TRIANGLE_STRIP, 0, 4, numPoints);
```

## 3. SIMD acceleration for dimensionality reduction

Using the browser's support for WebAssembly fixed-width SIMD, we vectorised the distance sorting step that dominates t-SNE / UMAP, which keeps interaction at a steady 60fps.
