# Portfolio 内容战略

用途：定义 AI Native Product Builder Portfolio 的内容叙事方式，确保作品集不是项目堆叠，而是一套能力证明链。

本文件是内容战略，不是 PRD、运行时代码或案例正文。完整产品定位仍以 `docs/prd.md` 为准；未来前端可读取的 runtime content 只能放在 `apps/ai-native-product-builder-portfolio/` 下。

## 战略目标

本作品集要让访问者形成一个明确判断：

> 橘子不是只会使用 AI 工具的人，而是能判断 AI 产品机会、设计可控 AI Workflow，并把想法快速做成可验证原型的 AI Native Product Builder。

因此，项目案例的组织目标不是“我做过几个 demo”，而是证明一条完整能力链：

```text
Problem Discovery
-> Product Judgment
-> AI Workflow Design
-> Prototype Execution
-> Evaluation / Iteration
```

## 品牌定位

- 核心身份：AI Native Product Builder
- 内容重点：AI 产品判断、Agent/RAG/Copilot 工作流、人机协作边界、原型执行和评估方式
- 叙事方式：案例优先、判断优先、工作流优先
- 视觉气质：克制、清晰、系统化、产品感、技术可信、文档化

## 能力证明模型

| 能力维度 | 要证明什么 | 内容证据 |
| --- | --- | --- |
| Business / Product Judgment | 知道什么问题值得 AI 化，什么不适合交给 AI | Problem、Why AI、AI Boundary、Non-goals |
| AI Workflow / System Design | 理解 AI 如何进入真实流程，并能设计可控链路 | Agent Workflow、RAG / Context、Human-in-the-loop、Evaluation |
| Prototype / Builder Capability | 能把产品判断和 workflow 落成可交互原型 | Prototype、User Flow、Architecture、Implementation Notes |
| Product Iteration | 能复盘限制、指标和下一步 | Product Metrics、AI Metrics、Reflection、Next Iteration |

## 项目组合策略

当前公开阶段：首页先集中展示 1 个完整的 AIPM 方法样本，形成“问题 -> 判断 -> AI Workflow -> 原型方向 -> 评估闭环”的能力证明链。完整项目案例会在截图、指标和复盘补齐后逐步上线；不要为了数量感在首页放多个弱证据卡、空项目卡或占位项目墙。

中长期项目池仍保留多案例组合，但它们进入首页 Featured 前必须先补齐准入字段。

| 阶段 | 项目 | Portfolio 角色 | 主要证明能力 |
| --- | --- | --- | --- |
| 当前公开 | Ecommerce Review Copilot | 方法样本 01 / AI Business Copilot 判断链路 | business_judgment、ai_workflow、prototype_builder、product_iteration |
| 后续补齐后 | TalentSignal AI | Agent / RAG Workflow 类项目 | ai_workflow |
| 后续补齐后 | AI PM Judgment Coach | AI Prototype Builder / Thinking System 类项目 | prototype_builder |
| 补充项目池 | JD Research Analyzer | Market Research / AI Product Analysis 补充案例 | business_judgment |
| 补充项目池 | Unity Optoelectronic Learning System | Engineering Background / Interactive Product Design 补充案例 | engineering_background |

## 内容表达原则

1. 先讲问题和用户，再讲方案和技术。
2. 每个案例必须解释 Why AI，而不是只写“使用 GPT / Claude / API”。
3. 每个案例必须写 AI Boundary 和 Human-in-the-loop，体现可控性。
4. 技术栈只作为实现证据，不作为主叙事。
5. 没有真实数据时，可以写验证状态和待验证指标，但不能伪造效果。
6. 字段暂缺时使用 `TBD`，不要删除关键模块。

## Featured 项目准入

项目进入首页 Featured 前，至少需要补齐：

```text
Problem
Target User
Why AI
AI Boundary
Human-in-the-loop
AI Workflow
Technical Tradeoffs
Product Metrics
AI Metrics
Outcome / Impact
Reflection
```

未通过这些检查的项目可以留在项目池，但不应作为首页核心证明案例，也不应以空卡或弱证据卡形式露出。
