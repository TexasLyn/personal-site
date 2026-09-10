---
title: Data Cleaning and High-Quality Data Synthesis for LLM Agents
category: AI & Agent
date: "2025-02-18"
readTime: 8 min read
author: Lin Jincheng (Texas)
excerpt: A look at the noise patterns that show up when agents call open-ended tools, and a cascaded pipeline built on AST validation plus distillation filtering that cuts down reasoning hallucinations.
cover: /images/blog-1.jpg
---

In the development of autonomous agents driven by large language models, high-quality trajectory data and a reliable tool-use environment are the core assets that decide whether a model can plan and reason consistently. This post walks through the data cleaning pipeline and controllable synthesis approach I built while studying at the School of EECS, Peking University.

> "Garbage in, garbage out is especially lethal in agentic architectures — a low signal-to-noise tool response triggers hallucination chains exponentially."

## 1. Three noise patterns in agent interaction data

While collecting interaction logs from open-ended tool chains, we found three problems that dominate fine-tuning efficiency:

- **Semantic drift and redundant retries:** after a single wrong step, an agent retries invalid commands over and over, bloating the context window with redundant tokens.
- **Truncated environment responses:** terminals or network APIs return gigantic JSON/HTML payloads (error stacks running tens of thousands of characters) that break the prompt structure outright.
- **Non-deterministic state dependency:** some environments depend on external state that cannot be reproduced, which breaks the causal link between steps in a training sample.

## 2. Pipeline design and AST-based rule cleaning

To keep the critical reasoning steps while dropping low-value trajectories, we built a cascade of **coarse filtering**, **AST syntax sanitizing**, and an **LLM reflection distiller**:

```python title="trajectory_cleaner.py"
import ast
from typing import List, Dict

class AgentTrajectoryFilter:
    def __init__(self, max_retry_thresh: int = 2):
        self.max_retries = max_retry_thresh

    def sanitize_action(self, tool_call: Dict) -> bool:
        # Parse the Python-style tool call and drop unsafe or syntactically broken ones
        try:
            tree = ast.parse(tool_call.get('code', ''))
            return len(tree.body) > 0
        except SyntaxError:
            return False
```

## 3. Filtering metrics and training convergence

The table below compares results after processing 50k raw multi-step tasks from open datasets (WebShop and InterCode):

| Dataset version | Entries (tokens) | Task success (Pass@1) | Hallucination rate |
| --- | --- | --- | --- |
| Raw, uncleaned baseline | 120M | 38.4% | 24.6% |
| Heuristic filtering | 76M | 46.2% | 14.1% |
| Cascaded cleaning + synthesis (ours) | 52M | **58.7%** | **4.2%** |

## 4. Takeaways and next steps

High-quality data cleaning not only saves GPU memory and compute during training, it also measurably improves zero-shot generalization when an agent meets tools it has never seen. Next we want to extend the pipeline to action data for multimodal GUI agents.
