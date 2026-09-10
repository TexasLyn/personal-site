---
title: ACM/ICPC 与高校建模竞赛算法解题手记
category: 学术算法与竞赛
date: "2024-08-15"
readTime: 9 分钟阅读
author: 梁忆炎 (Miao Miao)
excerpt: 系统记录从动力学常微分方程数值求解（MCM/ICM）、马尔可夫链状态转移，到动态规划凸包斜率优化（Convex Hull Trick）的实战思考与工程推导。
---

算法竞赛不仅是对数据结构和复杂度的极限推导，更是将现实物理问题转化为精确数学模型的思维锤炼。本篇手记收录了在北京大学程序设计竞赛与美赛冲刺期间沉淀的核心模板与思想心得。

## 1. 2025 美赛 (MCM/ICM) 动力学建模反思

在连续时间复杂网络演化模拟中，常微分方程组（ODEs）数值解通常受制于刚性误差（Stiffness）。采用变步长龙格-库塔方法（RK45）配合马尔可夫蒙特卡洛（MCMC）进行参数标定，能够显著增强模型的鲁棒性与置信区间。

## 2. 动态规划与斜率优化 (Convex Hull Trick)

针对形如 `dp[i] = min(dp[j] + f(j) * g(i))` 的转移方程，通过维护决策点的凸包单调队列，可将原本 O(N^2) 的二次时间复杂度优化至 O(N log N) 甚至 O(N)。

```cpp title="convex_hull_trick.cpp"
struct Line {
    long long k, b;
    long long eval(long long x) const { return k * x + b; }
};
// 保持斜率单调递增，队列双指针维护切线
```
