---
title: Notes on ACM/ICPC and Collegiate Modeling Contests
category: Algorithms & Contests
date: "2024-08-15"
readTime: 9 min read
author: Lin Jincheng (Texas)
excerpt: Working notes on numerical ODE solving for MCM/ICM, Markov chain state transitions, and convex hull trick optimization — the templates and the reasoning behind them.
---

Competitive programming is not only about pushing data structures and complexity to their limits, it is also training in turning real physical problems into precise mathematical models. These notes collect the core templates and ideas from contest sprints at Peking University and the MCM.

## 1. Reflections on dynamical modeling for MCM/ICM 2025

When simulating the evolution of a continuous-time complex network, numerical solutions of ordinary differential equations often suffer from stiffness. Using an adaptive-step Runge–Kutta method (RK45) together with Markov chain Monte Carlo (MCMC) parameter calibration noticeably improves robustness and confidence intervals.

## 2. Dynamic programming and the convex hull trick

For transitions of the form `dp[i] = min(dp[j] + f(j) * g(i))`, maintaining a monotone hull of decision points over a deque reduces the quadratic O(N^2) complexity to O(N log N) or even O(N):

```cpp title="convex_hull_trick.cpp"
struct Line {
    long long k, b;
    long long eval(long long x) const { return k * x + b; }
};
// Keep slopes increasing; two pointers maintain the tangent line over the deque
```
