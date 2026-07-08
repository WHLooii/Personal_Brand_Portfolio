# 迭代日志

用途：记录每轮 foundation、increment 或 checkpoint 的完成情况，帮助下一轮恢复上下文。

## 当前状态摘要

- 当前阶段：Phase 3 内容系统落地推进中；首页已升级为能力驱动个人品牌信息架构，AIPM 能力系统、AI Product Operating Process、方法样本模块与第一个正式 Case Study 详情页展示骨架已完成
- 最近完成：UX-009 首页能力驱动信息架构升级
- 当前阻塞：无内容 schema 阻塞；demo link、GitHub link、截图资产、真实商家反馈和真实商业指标仍为 `TBD`
- 下一步唯一建议：执行 `prddev-increment` 的 `CS-004`，优化样本 01 详情页拆解过程表达
- 最后更新：2026-07-08

## 迭代记录

### 2026-07-08 - UX-009 首页能力驱动信息架构升级

- 使用 skill：`prddev-increment`
- 本轮目标：将首页整体叙事从 Project-driven Portfolio 升级为 Capability-driven Personal Brand，让访问者先理解巫浩林是 AI Product Manager / AI Product Builder，能通过问题定义、AI 产品判断、Workflow 设计、MVP 原型构建和评估迭代，把业务问题转化为可验证的 AI 产品。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/pages/index.astro`：首页顺序改为 Hero -> AIPM Capability System -> How I Build AI Products -> 方法样本 / 能力样本 -> 其他内容。
  - 重写 Hero：加入 `AI PRODUCT BUILDER` 小标签、姓名“巫浩林”、`AI Product Manager` / `AI 产品原型构建者`、核心句“把业务问题转化为可验证的 AI 产品。”和六个能力关键词。
  - 重构 `HeroAbilitySystem`：右侧从 `AI Product Prototype System` 改为 `AI Product Builder` 中心辐射图，外围节点为 Problem、Judgment、Workflow、Prototype、Evaluation、Reflection，并保留轻量呼吸与连线流动动画。
  - 新增 `AIPMCapabilitySystem`：将首页核心能力模型以中心辐射结构呈现，六个节点包含编号、英文能力名、中文解释、说明、Input 和 Output，hover / focus 时展开输入输出。
  - 新增 `ProductOperatingProcess`：用 Understand、Frame、Design、Prototype、Evaluate 五阶段表达 AI Product Operating Process，替换首页原普通流程图位置。
  - 将 `UX-008` 已确认的“方法样本 / 能力样本”模块保留并后移，降低项目样本在首页的第一视觉权重。
  - 调整 `BaseLayout` 主导航顺序为能力系统、构建流程、方法样本、案例库，避免项目案例成为导航第一关注。
  - 同步 `docs/prd.md`、`docs/backlog.md`、`docs/decision-log.md` 和 `docs/testing.md`。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/pages/index.astro`
  - `apps/ai-native-product-builder-portfolio/src/components/HeroAbilitySystem.astro`
  - `apps/ai-native-product-builder-portfolio/src/components/AIPMCapabilitySystem.astro`
  - `apps/ai-native-product-builder-portfolio/src/components/ProductOperatingProcess.astro`
  - `apps/ai-native-product-builder-portfolio/src/layouts/BaseLayout.astro`
  - `docs/prd.md`
  - `docs/backlog.md`
  - `docs/decision-log.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：普通 PATH 执行 `pnpm run check` 仍因 `node: not found` 失败，符合当前 testing 文档记录的本地环境限制；随后使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build` 通过，`astro check` 结果 0 errors / 0 warnings / 0 hints，`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；构建产物可检索到 `AI PRODUCT BUILDER`、`AI Product Manager`、`AIPM Capability System`、`How I Build AI Products`、`方法样本 / 能力样本`、`样本 01`；首页构建产物未检索到旧的 `AI Product Prototype System`、`精选案例`、`查看作品集` 或 `了解能力模型`；授权启动 Astro preview 后，`http://127.0.0.1:4321/` 可访问；浏览器桌面检查无水平溢出，Hero 底部可见下一段能力系统提示；移动端 390px 宽度检查无水平溢出，Hero 节点、AIPM 能力节点和五阶段流程数量正确，AIPM 节点纵向堆叠无重叠，浏览器 error logs 为空。
- 未做内容：未改 Ecommerce Review Copilot 详情页；未新增第二个案例；未补 demo link、GitHub link、截图资产、真实商家反馈或真实商业指标；未引入新依赖、AI runtime、复杂 3D、粒子背景或重动画。
- 遗留问题：`查看拆解过程` 仍进入现有 Ecommerce Review Copilot 详情页，详情页的首屏和导读仍可继续贴合“方法样本 / 拆解过程”叙事；首页当前为 dark-first 能力品牌表达，后续若扩展到详情页需继续兼顾长文可读性。
- 下一步建议：执行 `prddev-increment` 的 `CS-004`。

### 2026-07-08 - UX-008 首页精选案例重构为能力样本

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户定位，将首页原“精选案例”模块从传统项目案例列表重构为单个 AIPM 方法样本，重点证明业务问题拆解、AI 适用边界、Human-in-the-loop、AI Workflow、可交互 MVP 和 AI 输出评估闭环能力。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/pages/index.astro`：移除首页该模块中的三列 `ProjectCard` 项目列表，将 `Ecommerce Review Copilot` 重包装为“样本 01：从非结构化评论到运营决策 Copilot”。
  - 新模块标题改为“方法样本：我如何拆解一个 AI 产品机会”，副标题说明当前先公开一个完整 AIPM 判断链路样本，完整项目案例会在截图、指标和复盘补齐后逐步上线。
  - 新增单张横向重点卡片：左侧展示“问题 / 我的判断 / 原型方向”和“评论输入 -> 主题聚类 -> 差评归因 -> 风险提示 -> 建议卡片 -> 人工复盘 -> 指标评估”流程；右侧展示“这个样本证明什么能力”和“查看拆解过程”入口。
  - 同步 `docs/portfolio-content-strategy.md`、`docs/project-portfolio-index.md`、`docs/content-model.md` 和 `docs/decision-log.md`：明确当前首页公开阶段先展示 1 个方法样本，不做多项目空卡堆叠。
  - 更新 `docs/backlog.md`：新增 `UX-008` 为完成项，延后 `CS-003`，新增下一步建议 `CS-004`。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/pages/index.astro`
  - `docs/prd.md`
  - `docs/portfolio-content-strategy.md`
  - `docs/project-portfolio-index.md`
  - `docs/content-model.md`
  - `docs/decision-log.md`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：普通 PATH 执行 `pnpm run check` 因 `node: not found` 失败，符合当前 testing 文档记录的本地环境限制；随后使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；构建产物可检索到“能力样本”、“方法样本：我如何拆解一个 AI 产品机会”、“样本 01：从非结构化评论到运营决策 Copilot”和“查看拆解过程”；首页构建产物未检索到“精选案例”、“暂无案例”、“coming soon”、“mock”或“没有真实用户”；授权启动 `astro preview` 后，`http://127.0.0.1:4324/` 返回 200 OK。
- 未做内容：未新增第二个案例；未添加空项目占位卡；未改 Case Study 详情页结构；未补 demo link、GitHub link、截图资产、真实商家反馈或真实商业指标；未引入新依赖、AI runtime、复杂动画、3D 或全站视觉重做。
- 遗留问题：`查看拆解过程` 当前仍进入现有 Ecommerce Review Copilot 详情页，详情页虽已包含完整 Case Study 字段，但首屏和导读还可以更贴合“方法样本 / 拆解过程”的叙事；仍需要在可访问的本地预览或用户浏览器中做最终截图级视觉 QA。
- 下一步建议：执行 `prddev-increment` 的 `CS-004`。

### 2026-07-08 - UX-007 首页 Hero 个人品牌识别与能力系统精修

- 使用 skill：`prddev-increment`
- 本轮目标：基于当前暗色高级首页封面做精修，不改变整体风格和左右布局，增强个人品牌识别度、信息层级和右侧能力模型系统感。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/pages/index.astro`：删除 Hero 中“巫浩林”后面的 `AI Native Product Builder Portfolio` 重复信息，将“巫浩林”改为独立个人品牌签名，并增加 `AI 产品原型构建者 / Personal Portfolio` 副标签。
  - 调整 `apps/ai-native-product-builder-portfolio/src/components/HeroAbilitySystem.astro`：为六个能力节点增加 01-06 编号；放大中心节点 `AI Product Prototype System`；增加柔和蓝紫 radial glow；降低英文辅助信息透明度。
  - 将右侧底部编号标签从普通标签列表弱化为 `LOG 01` 至 `LOG 06` 的系统协议日志质感，降低透明度和字号。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/pages/index.astro`
  - `apps/ai-native-product-builder-portfolio/src/components/HeroAbilitySystem.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；构建产物可检索到“巫浩林”、`AI 产品原型构建者 / Personal Portfolio`、`LOG 01`、`system-node__code` 和 `AI Product Prototype System`；源码与构建产物不再检索到 `巫浩林 · AI Native Product Builder Portfolio`。
- 未做内容：未改变整体暗色高级风格和左右布局；未改站点页眉品牌文字；未新增案例内容；未改 Projects 列表或 Case Study Detail；未做全站暗色模式；未引入新依赖、3D、复杂动画或 AI runtime。
- 遗留问题：仍需要在可访问的本地预览或用户浏览器中做最终截图级视觉 QA；当前仍只有一个正式 Featured Case Study；真实联系方式仍未补齐。
- 下一步建议：执行 `prddev-increment` 的 `CS-003`。

### 2026-07-08 - UX-006 首页暗色玻璃质感 Hero 改版

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户提供的封面方向，将首页第一屏从浅色能力链条封面升级为更神秘、高级、未来但克制的 AI 产品原型 Hero，并重点重做右侧能力模型。
- 完成内容：
  - 新增 `apps/ai-native-product-builder-portfolio/src/components/HeroAbilitySystem.astro`，将右侧普通能力链条替换为玻璃拟态能力系统面板，包含中心节点 `AI Product Prototype System`、六个能力节点和六个编号标签。
  - 调整 `apps/ai-native-product-builder-portfolio/src/pages/index.astro` 的 Home Hero：使用暗色全幅背景、细颗粒噪点、远处网格、克制蓝紫光效、强标题层级、关键词渐变微光和两个低调 CTA。
  - 调整 `apps/ai-native-product-builder-portfolio/src/layouts/BaseLayout.astro` 与 `apps/ai-native-product-builder-portfolio/src/styles/global.css`，让首页可以使用暗色页眉变体，其他页面继续保持默认页眉。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/components/HeroAbilitySystem.astro`
  - `apps/ai-native-product-builder-portfolio/src/pages/index.astro`
  - `apps/ai-native-product-builder-portfolio/src/layouts/BaseLayout.astro`
  - `apps/ai-native-product-builder-portfolio/src/styles/global.css`
  - `docs/backlog.md`
  - `docs/decision-log.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；构建产物检索确认首页包含新标题、`查看作品集`、`了解能力模型`、`AI Product Prototype System`、六个能力节点和六个编号标签；本地端口预览因沙箱端口权限受限，Browser `data:` 静态预览因安全策略受限，未完成截图级视觉 QA。
- 未做内容：未新增第二个 Case Study；未改案例内容、Projects 列表或 Case Study Detail；未做全站暗色模式；未引入新依赖、3D、复杂动画、AI runtime 或数据可视化库。
- 遗留问题：仍需要在可访问的本地预览或用户浏览器中做最终截图级视觉 QA；当前仍只有一个正式 Featured Case Study；真实联系方式仍未补齐。
- 下一步建议：执行 `prddev-increment` 的 `CS-003`。

### 2026-07-08 - UX-005 恢复页眉产品身份文本

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户反馈，恢复左上角页眉中的 AI Product Builder 站点身份，让页眉继续承担产品定位提示，Hero 中的“巫浩林”继续承担个人识别。
- 完成内容：
  - 将 `apps/ai-native-product-builder-portfolio/src/layouts/BaseLayout.astro` 的页眉品牌链接从“巫浩林”恢复为 `AI Native Product Builder`。
  - 保留 `apps/ai-native-product-builder-portfolio/src/pages/index.astro` 中 Hero 顶部的“巫浩林”文字署名、响应式字号和轻量 accent 短线。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/layouts/BaseLayout.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；`dist/index.html` 检索确认页眉可见 `AI Native Product Builder`，Hero 保留“巫浩林”，未恢复 `identity-mark` / `identity-role`；本地预览 `http://127.0.0.1:4323/` 返回 200 OK。
- 未做内容：未恢复 Hero 中的单字图标；未恢复 Hero 中的英文角色行；未改 ProofChain、案例内容、颜色体系、页面布局或 PRD 产品定位。
- 遗留问题：当前仍只有一个正式 Featured Case Study；真实联系方式仍未补齐。
- 下一步建议：执行 `prddev-increment` 的 `CS-003`。

### 2026-07-08 - UX-004 首页姓名标识回收为文字署名

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户反馈，撤掉首页 Hero 中过重的单字图标和英文角色行，让“巫浩林”以更克制、现代、编辑型网站气质的文字署名出现。
- 完成内容：
  - 删除 `apps/ai-native-product-builder-portfolio/src/pages/index.astro` 中 Hero identity lockup 的“巫”字图标和 `AI Native Product Builder` 角色行。
  - 将 Hero 顶部姓名改为单独文字署名，使用更大的响应式字号、较稳的字重和一条轻量 accent 短线建立识别，而不是做徽章式 logo。
  - 将 `apps/ai-native-product-builder-portfolio/src/layouts/BaseLayout.astro` 的可见页眉品牌从英文身份收敛为“巫浩林”，并同步默认页面 title。
  - 将 Projects 页和 Case Study 页的 title 后缀同步为“巫浩林”。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/pages/index.astro`
  - `apps/ai-native-product-builder-portfolio/src/layouts/BaseLayout.astro`
  - `apps/ai-native-product-builder-portfolio/src/pages/projects/index.astro`
  - `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；源码与首页构建产物检索确认“巫浩林”保留，`identity-mark` / `identity-role` 和可见的 `AI Native Product Builder` 已移除；授权启动 `astro preview` 后，`http://127.0.0.1:4323/` 返回 200 OK。
- 未做内容：未重做首页布局；未改 ProofChain 能力链条；未引入外部字体、动效库、新颜色体系、暗色模式或新案例内容；未修改 PRD 产品定位。
- 遗留问题：当前仍只有一个正式 Featured Case Study；真实联系方式仍未补齐。
- 下一步建议：执行 `prddev-increment` 的 `CS-003`。

### 2026-07-07 - UX-003 首页姓名身份标识视觉优化

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户要求，让首页第一屏的“巫浩林”更像一个明确的个人身份锚点，并通过局部色彩和中文字体栈微调，让 Hero 更现代、更好看，同时不偏离 AI 产品案例库定位。
- 完成内容：
  - 将 `apps/ai-native-product-builder-portfolio/src/pages/index.astro` 中 Hero 的普通 eyebrow 改为 identity lockup，包含“巫”字标识块、“巫浩林”和 `AI Native Product Builder`。
  - 为 Hero 主标题中的“可验证的 AI 产品原型”加入局部强调色，增强首屏视觉层级。
  - 将 `apps/ai-native-product-builder-portfolio/src/styles/tokens.css` 的主 accent family 从紫蓝调整为更冷静的深青蓝，并同步 soft / border / strong token。
  - 将 `--font-sans` 补充 `PingFang SC`、`Hiragino Sans GB`、`Noto Sans CJK SC`、`Microsoft YaHei` 等中文系统字体，不引入外部字体文件。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/pages/index.astro`
  - `apps/ai-native-product-builder-portfolio/src/styles/tokens.css`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面。
- 未做内容：未新增外部字体或字体文件；未做整站换肤；未新增案例内容；未新增暗色模式、重动画、3D、AI runtime 或数据可视化库。
- 遗留问题：当前仍只有一个正式 Featured Case Study；真实联系方式仍未补齐。
- 下一步建议：执行 `prddev-increment` 的 `CS-003`。

### 2026-07-07 - UX-002 首页封面能力证明链条

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户确认，将首页封面从“最小基座 / 占位模板”调整为面向 HR / 客户的能力证明入口，加入姓名“巫浩林”，并把 curated 资料中可证明能力的信号提炼为首页能力链条视觉，而不是做 AI 资讯板。
- 完成内容：
  - 新增 `apps/ai-native-product-builder-portfolio/src/components/ProofChain.astro`，用 7 个图标节点串联真实业务场景、Workflow 拆解、AI 介入判断、Human Boundary、系统设计、原型执行、Eval / ROI / Proof。
  - 调整 `apps/ai-native-product-builder-portfolio/src/pages/index.astro` 的 Hero：加入“AI Native Product Builder · 巫浩林”，替换“最小基座 / 只保留壳层”等占位文案。
  - 将首页精选案例区标题调整为“从判断到原型的能力证据”，并补充案例按 Problem、Product Judgment、AI Workflow、Prototype、Evaluation 组织的说明。
  - 将首页产品构建流程从 3 步扩展为业务问题、AI 判断、Workflow、原型执行、评估复盘 5 步。
  - 将联系区占位语气改为“进一步沟通”能力评估入口，未编造真实联系方式。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/components/ProofChain.astro`
  - `apps/ai-native-product-builder-portfolio/src/pages/index.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：普通 PATH 执行 `pnpm run check` 因 `node: not found` 失败，符合当前 testing 文档记录的本地环境限制；随后使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面。
- 未做内容：未新增 AI 资讯板；未把 curated 正文迁移为 runtime content；未新增第二个 Case Study；未新增 CMS、AI runtime、数据可视化库、复杂动画或 3D；未补 demo link / GitHub link / 截图资产。
- 遗留问题：当前仍只有一个正式 Featured Case Study；TalentSignal AI 和 AI PM Judgment Coach 仍未进入内容集合；真实联系方式仍未补齐。
- 下一步建议：执行 `prddev-increment` 的 `CS-003`。

### 2026-07-07 - CS-002 扩展 Case Study Detail 正式案例展示骨架

- 使用 skill：`prddev-increment`
- 本轮目标：将 `CS-001` 已录入的 Ecommerce Review Copilot 结构化字段更完整地展示到 Case Study Detail 页面中，让正式案例详情页覆盖 Product Judgment、Product Solution、AI Workflow、Technical Tradeoffs、Evaluation、Outcome 和 Reflection。
- 完成内容：
  - 扩展 `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`，新增案例概览、背景与当前流程、用户痛点、Why AI、Human-in-the-loop、明确不做、Product Solution、User Flow、AI 设计细节、技术实现与取舍、Evaluation Metrics、Outcome / Demo Evidence、Reflection 等展示区块。
  - 将详情页侧栏扩展为案例摘要，展示主要能力、项目类型、技术栈和验证状态。
  - 调整 `apps/ai-native-product-builder-portfolio/src/components/DecisionMatrix.astro`，将 AI Boundary 从三列表格调整为可响应式阅读的判断卡片。
  - 前端展示中将内容占位 `TBD` 转为“待补充”，避免把内部占位直接暴露给访问者。
  - 未新增任何项目事实、demo link、GitHub link、截图或真实商业指标。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`
  - `apps/ai-native-product-builder-portfolio/src/components/DecisionMatrix.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：`pnpm run check` 通过，结果为 0 errors / 0 warnings / 0 hints；`pnpm run build` 通过，生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；`pnpm run lint` 通过，当前等同 `astro check`；构建产物可检索到 `Product Solution`、`Evaluation Metrics`、`Outcome / Demo Evidence`、`Reflection`、`人的控制点` 和 `实现说明与取舍`；构建产物未检索到直接暴露的 `TBD`。
- 未做内容：未新增第二个案例；未迁移截图资产；未补 demo link / GitHub link；未新增 CMS、AI runtime、真实 LLM、部署能力或复杂视觉改版。
- 遗留问题：当前仍只有一个正式 Featured Case Study；TalentSignal AI 和 AI PM Judgment Coach 仍未进入内容集合。
- 下一步建议：执行 `prddev-increment` 的 `CS-003`。

### 2026-07-07 - CS-001 创建第一个正式 Case Study 内容骨架

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户确认，将 Ecommerce Review Copilot 写入 Astro 内容集合，作为第一个正式 Case Study 内容骨架；标题使用中文，状态为 `mvp`，展示优先级为 `featured`。
- 完成内容：
  - 新增 `apps/ai-native-product-builder-portfolio/src/content/projects/ecommerce-review-copilot.mdx`，标题为“电商评论洞察与运营决策 AI Copilot”。
  - 按 `docs/case-study-template-schema.md` 补齐 basic、brand_evidence、context、product_judgment、product、ai_design、technical、evaluation、outcome、reflection 等字段。
  - 明确 V0.1 是 Base v0.1 可演示 MVP / AI PM 作品集项目，不宣称真实上线、真实商家反馈、真实商业指标或真实 LLM 接入。
  - 保留 `demo_link`、`github_link`、截图资产等未确认内容为 `TBD`，没有编造链接、截图或用户反馈。
  - 将 `foundation-placeholder.mdx` 标记为 `archived`，不再作为正式案例展示。
  - 调整 `src/lib/content.ts`，默认 `getProjects()` 过滤 archived 项目，保留 `getAllProjects()` 供未来内部读取。
  - 调整动态详情路由，使用过滤后的项目列表生成静态路径，避免生成 `/projects/foundation-placeholder/`。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/content/projects/ecommerce-review-copilot.mdx`
  - `apps/ai-native-product-builder-portfolio/src/content/projects/foundation-placeholder.mdx`
  - `apps/ai-native-product-builder-portfolio/src/lib/content.ts`
  - `apps/ai-native-product-builder-portfolio/src/pages/projects/[slug].astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：`pnpm run check` 通过，结果为 0 errors / 0 warnings / 0 hints；`pnpm run build` 通过，生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；`pnpm run lint` 通过，当前等同 `astro check`。
- 未做内容：未做 Case Study 页面视觉扩展；未迁移截图资产；未补 demo link / GitHub link；未新增第二个案例；未接入 CMS、AI runtime、真实 LLM 或部署能力。
- 遗留问题：当前详情页仍是最小展示骨架，尚未把 `product`、`evaluation.product_metrics`、`evaluation.ai_metrics`、`outcome` 和完整 reflection 信息充分展示出来。
- 下一步建议：执行 `prddev-increment` 的 `CS-002`。

### 2026-07-07 - UX-001 前端文案中文优先表达

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户要求，将当前最小 Astro 基座的前端可见表达调整为中文优先，只保留 AI Native Product Builder、AI Workflow、Agent、Human-in-the-loop、AI Boundary 等必要英文术语。
- 完成内容：
  - 将 BaseLayout 的页面语言、meta description、主导航文案调整为中文优先。
  - 将 Home、Projects Index、Case Study Detail 的可见标题、说明、CTA、返回链接、详情标签改为中文表达。
  - 将 ProjectCard、WorkflowDiagram、CapabilityMap、DecisionMatrix、ArchitectureBlock、Timeline 的通用标签改为中文表达。
  - 新增 `src/lib/labels.ts`，把 schema 枚举中的 capability、status、owner 映射成中文前端展示，避免内部枚举直接露出。
  - 将 `foundation-placeholder.mdx` 的占位标题、说明、问题、AI 角色、评估状态和未来迭代等可见内容改为中文占位。
  - 将中文优先表达规则同步到 `docs/visual-system.md`、`docs/content-model.md` 和 `docs/decision-log.md`，便于后续页面和案例增量继续遵守。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/lib/labels.ts`
  - `apps/ai-native-product-builder-portfolio/src/layouts/BaseLayout.astro`
  - `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`
  - `apps/ai-native-product-builder-portfolio/src/pages/index.astro`
  - `apps/ai-native-product-builder-portfolio/src/pages/projects/index.astro`
  - `apps/ai-native-product-builder-portfolio/src/components/*.astro`
  - `apps/ai-native-product-builder-portfolio/src/content/projects/foundation-placeholder.mdx`
  - `docs/visual-system.md`
  - `docs/content-model.md`
  - `docs/decision-log.md`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：`pnpm run check` 通过，结果为 0 errors / 0 warnings / 0 hints；`pnpm run build` 通过，生成 `/`、`/projects/`、`/projects/foundation-placeholder/` 3 个静态页面；`pnpm run lint` 通过，当前等同 `astro check`；已通过 `curl` 读取 `http://127.0.0.1:4322/`，可见中文导航、中文 CTA、中文案例卡片、中文流程标签和中文联系占位。
- 未做内容：未创建正式 Case Study；未做新页面功能；未做视觉改版；未改变内容 schema、路由、技术栈、部署方式或验证命令。
- 遗留问题：当前仍只有 `foundation-placeholder.mdx`，它只是中文化后的基座占位，不是正式作品集内容。
- 下一步建议：执行 `prddev-increment` 的 `CS-001`。

### 2026-07-07 - FN-001 初始化最小 Astro + TypeScript 基座

- 使用 skill：`prddev-foundation`
- 本轮目标：根据 `docs/tech-stack-decision.md`，在 `apps/ai-native-product-builder-portfolio/` 下创建最小可运行 Astro + TypeScript 技术基座，不做功能开发或完整页面内容。
- 完成内容：
  - 初始化 Astro 7 + TypeScript + MDX + Tailwind CSS 4 基座。
  - 建立 `Home`、`Projects Index`、`Case Study Detail` 三个最小路由闭环。
  - 建立 Astro Content Collections + Zod schema，覆盖 `docs/case-study-template-schema.md` 的核心字段结构。
  - 新增 `foundation-placeholder.mdx`，仅用于验证 schema、动态路由和布局，不作为正式案例内容。
  - 建立最小 data access pattern：`src/lib/content.ts` 负责读取、排序、featured 过滤和 slug 派生。
  - 建立最小组件骨架：`ProjectCard`、`CapabilityMap`、`WorkflowDiagram`、`DecisionMatrix`、`ArchitectureBlock`、`Timeline`。
  - 建立基础 CSS variables、Tailwind 全局样式入口和 app 级 `.gitignore`。
  - 通过 pnpm 安装 Astro / MDX / Tailwind / Astro check / TypeScript 依赖，并批准 `esbuild` build script。
  - 将 `ASTRO_TELEMETRY_DISABLED=1` 写入 app scripts，避免 Astro telemetry 在沙箱中写入用户级偏好目录。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/package.json`
  - `apps/ai-native-product-builder-portfolio/pnpm-lock.yaml`
  - `apps/ai-native-product-builder-portfolio/pnpm-workspace.yaml`
  - `apps/ai-native-product-builder-portfolio/astro.config.mjs`
  - `apps/ai-native-product-builder-portfolio/tsconfig.json`
  - `apps/ai-native-product-builder-portfolio/.env.example`
  - `apps/ai-native-product-builder-portfolio/.gitignore`
  - `apps/ai-native-product-builder-portfolio/README.md`
  - `apps/ai-native-product-builder-portfolio/src/content.config.ts`
  - `apps/ai-native-product-builder-portfolio/src/content/projects/foundation-placeholder.mdx`
  - `apps/ai-native-product-builder-portfolio/src/lib/content.ts`
  - `apps/ai-native-product-builder-portfolio/src/pages/index.astro`
  - `apps/ai-native-product-builder-portfolio/src/pages/projects/index.astro`
  - `apps/ai-native-product-builder-portfolio/src/pages/projects/[slug].astro`
  - `apps/ai-native-product-builder-portfolio/src/layouts/BaseLayout.astro`
  - `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`
  - `apps/ai-native-product-builder-portfolio/src/components/*.astro`
  - `apps/ai-native-product-builder-portfolio/src/styles/*.css`
  - `apps/ai-native-product-builder-portfolio/tests/README.md`
  - `docs/prd.md`
  - `docs/roadmap.md`
  - `docs/tech-radar.md`
  - `docs/decision-log.md`
  - `docs/architecture.md`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：`pnpm run check` 通过，结果为 0 errors / 0 warnings / 0 hints；`pnpm run build` 通过，生成 `/`、`/projects/`、`/projects/foundation-placeholder/` 3 个静态页面；`pnpm run lint` 通过，当前等同 `astro check`；已启动 Astro dev server，因 4321 被占用自动使用 `http://127.0.0.1:4322/`，首页和 `/projects/foundation-placeholder/` 均返回 200 OK。依赖安装首次被沙箱网络限制阻止，已按授权联网安装；普通 PATH 中没有 Node / pnpm，本轮使用 Codex bundled Node / pnpm 验证。
- 未做内容：未做完整页面开发；未填真实 Case Study；未实现完整视觉系统；未引入 CMS、登录、数据库、AI runtime、复杂 demo、重动画或 3D；未启动后续 `prddev-increment`。
- 遗留问题：当前只有 `foundation-placeholder.mdx`，不能作为正式作品集内容；下一步需要创建第一个正式 Case Study 内容骨架。
- 下一步建议：执行 `prddev-increment` 的 `CS-001`。

### 2026-07-07 - CP-003 Foundation 前状态同步

- 使用 skill：`prddev-checkpoint`
- 本轮目标：复核当前文档、backlog、验证记录与 `apps/` 状态是否一致，确认 foundation 前是否存在文档漂移或误入开发的情况。
- 完成内容：
  - 复核 `docs/prd.md`、`docs/architecture.md`、`docs/backlog.md`、`docs/iteration-log.md`、`docs/decision-log.md`、`docs/testing.md` 和 `docs/tech-stack-decision.md`。
  - 确认技术路线已决，primary route 仍为 Astro-powered Editorial Product Experience System。
  - 确认 `docs/visual-system.md` 已纳入正式护栏，后续页面、组件、视觉增量和 Case Study 仍需先读取。
  - 确认 backlog 无需新增或重排，下一步唯一建议仍为 `prddev-foundation`。
  - 确认 `apps/` 仍只有 `.gitkeep`，尚未初始化应用、页面、组件或 runtime content。
  - 确认 `AGENTS.md` / `CLAUDE.md` 仅镜像声明互指差异，正文保持同步。
  - 记录当前目录未检测到 `.git`，`git status --short` 不可用；本轮以文件扫描和文档检索完成状态验证。
- 修改文件：
  - `docs/iteration-log.md`
  - `docs/backlog.md`
  - `docs/testing.md`
- 验证结果：已执行文档级验证；`find apps -maxdepth 4 -type f -print` 仅返回 `apps/.gitkeep`；`diff -u AGENTS.md CLAUDE.md` 仅显示镜像声明互指差异；关键字检索确认当前状态仍指向 `prddev-foundation`，技术路线为 Astro-powered Editorial Product Experience System，视觉系统护栏已存在；当前目录不是 Git 仓库，无法执行 git 状态验证。
- 未做内容：未初始化应用；未创建页面、组件、样式文件、测试代码或 runtime content；未修改产品定位、MVP 范围、技术路线或视觉方向；未进入 foundation。
- 遗留问题：应用基座和可执行验证命令仍未创建，需要通过 `prddev-foundation` 完成。
- 下一步建议：执行 `prddev-foundation`。

### 2026-07-07 - CP-002 同步 PRD 技术路线与视觉系统状态

- 使用 skill：`prddev-checkpoint`
- 本轮目标：将 `docs/prd.md` 中仍停留在“技术路线未决”的旧状态同步为当前事实，补充技术路线、视觉系统、内容管理方式和静态站边界。
- 完成内容：
  - 将 `docs/prd.md` 文档状态更新为：概念 PRD 已完成；技术路线与视觉系统护栏已同步；foundation 未开始。
  - 增加 `docs/tech-stack-decision.md` 已决状态和 `docs/visual-system.md` 依赖说明。
  - 将“不在技术路线未决前进入 foundation”更新为“不跳过 `prddev-foundation` 直接进入完整页面开发、组件开发、大量 runtime content 创建或复杂 Demo”。
  - 将内容管理系统说明同步为 V1 采用 Astro Content Collections + MDX + Zod schema，不做 CMS 或在线编辑器。
  - 新增“视觉与体验边界”小节，补充视觉系统依据、视觉原则、视觉气质、动效边界和 visual-system 验收引用。
  - 同步接口和数据备注，明确 V1 无后端接口，静态页面由 Astro 构建生成。
- 修改文件：
  - `docs/prd.md`
  - `docs/iteration-log.md`
  - `docs/testing.md`
- 验证结果：已执行文档级验证；`rg` 确认 `docs/prd.md` 不再命中“技术路线未决”或“待技术路线确认”，并可检索 Astro-powered Editorial Product Experience System、`docs/visual-system.md`、Astro Content Collections + MDX + Zod schema 和视觉与体验边界；`find apps -maxdepth 4 -type f -print` 仅返回 `apps/.gitkeep`。
- 未做内容：未改变产品定位、MVP 范围或技术路线；未初始化应用；未创建页面、组件或 runtime content。
- 遗留问题：需要进入 `prddev-foundation` 创建最小 Astro 基座和验证命令。
- 下一步建议：执行 `prddev-foundation`。

### 2026-07-07 - VS-001 新增 Portfolio 视觉系统护栏

- 使用 skill：`prddev-increment`
- 本轮目标：将用户提供的 `visual-system.md` 附件中文化、项目化，并纳入当前 Portfolio 文档体系，作为后续页面、组件和视觉增量的执行护栏。
- 完成内容：
  - 新增 `docs/visual-system.md`，定义视觉定位、参考风格、色彩、Typography、Layout、组件系统、动效系统、首页与 Case Study 视觉规格、Content-to-Component Mapping、Accessibility、Performance、Visual QA Checklist、Anti-patterns 和 Agent Execution Rules。
  - 保留必要英文术语：AI Native Product Builder、Product Judgment、AI Workflow、Human-in-the-loop、Astro、MDX、Tailwind CSS、React Islands、组件名和 schema 字段名。
  - 对附件进行项目化调整：路径统一为 `apps/ai-native-product-builder-portfolio/`；状态调整为 ready for foundation and visual increments；移除负 letter-spacing；卡片主圆角收敛到 8px 内；弱化装饰背景；Hero 改为文本主导和系统图辅助。
  - 轻量更新 `AGENTS.md` / `CLAUDE.md`，将 `docs/visual-system.md` 加入涉及页面、组件、视觉系统、项目数据或 Case Study 时的必读文档。
  - 更新 `docs/content-model.md` 和 `docs/testing.md`，补充 visual-system 读取规则和视觉验收清单。
  - 更新 `docs/backlog.md`，新增并标记 `VS-001` 为 done。
  - 更新 `docs/decision-log.md`，新增 D-004 记录 visual-system 正式纳入项目视觉边界。
- 修改文件：
  - `docs/visual-system.md`
  - `AGENTS.md`
  - `CLAUDE.md`
  - `docs/content-model.md`
  - `docs/testing.md`
  - `docs/backlog.md`
  - `docs/decision-log.md`
  - `docs/iteration-log.md`
- 验证结果：已执行文档级验证；`rg --files docs` 确认 `docs/visual-system.md` 存在；关键术语、路径、`VS-001` 和 `D-004` 可检索；冲突检查确认 `apps/portfolio`、负 `letter-spacing`、过大圆角 token 等旧内容未命中；`diff -u AGENTS.md CLAUDE.md` 仅显示镜像声明互指差异；`find apps -maxdepth 4 -type f -print` 仅返回 `apps/.gitkeep`；当前未初始化应用，无可执行 app 命令。
- 未做内容：未初始化应用；未创建页面、组件、样式文件或 runtime content；未将视觉实现项 V-001/V-005 直接加入当前开发队列；未修改产品方向或技术路线。
- 遗留问题：`docs/prd.md` 的文档状态仍保留旧的“技术路线未决”表述，建议后续 checkpoint 或 foundation 前同步。
- 下一步建议：执行 `prddev-foundation`。

### 2026-07-07 - TR-001 确认 Astro-powered Editorial Product Experience System

- 使用 skill：`prddev-tech-route`
- 本轮目标：将用户确认的 primary route 写入技术栈决策，并分析可同步到其他 docs 的技术路线描述。
- 完成内容：
  - 将 `docs/tech-stack-decision.md` 从未决更新为已决，primary route 定为 Astro-powered Editorial Product Experience System。
  - 写入核心视觉原则：视觉表现力不是装饰，而是产品判断、信息组织和 AI Workflow 表达能力的一部分。
  - 明确 MVP 技术栈：Astro、TypeScript、Astro Content Collections、MDX、Zod schema、Tailwind CSS、CSS variables、SVG-first visual components、CSS micro-interactions、Astro View Transitions、limited React Islands。
  - 同步 `docs/tech-radar.md`，将候选路线切换为已选 primary route，并记录未选 Next.js、Vite React、No-code、Full SaaS / CMS、Heavy 3D 的原因。
  - 更新 `docs/decision-log.md`，新增 D-003 技术路线决策。
  - 按用户要求，本轮不新增 `docs/visual-system.md`。
  - 同步 roadmap、architecture、content-model、testing、backlog 中会因“技术路线已决”而过期的状态与路径。
- 修改文件：
  - `docs/tech-stack-decision.md`
  - `docs/tech-radar.md`
  - `docs/decision-log.md`
  - `docs/architecture.md`
  - `docs/content-model.md`
  - `docs/roadmap.md`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：已执行文档级验证；`rg` 确认 primary route、视觉原则、`src/content`、`prddev-foundation` 和预期验证命令可检索；确认未创建 `docs/visual-system.md`；`find apps -maxdepth 4 -type f -print` 仅返回 `apps/.gitkeep`；当前未初始化应用，无可执行 app 命令。
- 未做内容：未新增 `docs/visual-system.md`；未修改 `docs/prd.md`；未初始化应用；未创建页面、组件或 runtime content；未进入 foundation。
- 遗留问题：需要通过 `prddev-foundation` 创建最小 Astro 基座、验证命令和内容读取闭环。
- 下一步建议：执行 `prddev-foundation`。

### 2026-07-07 - CP-001 Portfolio 文档一致性复核

- 使用 skill：`prddev-checkpoint`
- 本轮目标：复核 PB-001 后 AGENTS / CLAUDE / docs / backlog / decision-log / testing 与当前代码状态是否一致，确认下一步是否可以进入技术路线决策。
- 完成内容：
  - 确认 `docs/prd.md`、`docs/architecture.md`、`docs/backlog.md`、`docs/iteration-log.md`、`docs/decision-log.md`、`docs/testing.md` 与当前阶段一致。
  - 确认 `docs/portfolio-content-strategy.md`、`docs/case-study-template-schema.md`、`docs/content-model.md`、`docs/project-portfolio-index.md` 已作为内容系统骨架存在。
  - 确认 `AGENTS.md` / `CLAUDE.md` 正文内容一致，差异仅为镜像声明互指文件名不同。
  - 确认 `docs/tech-stack-decision.md` 仍为未决，foundation / coding 仍被阻止。
  - 确认 `apps/` 未出现真实应用代码或 runtime content，仍只有 `.gitkeep`。
  - 将当前状态摘要和下一步唯一建议更新为 `prddev-tech-route`。
- 修改文件：
  - `docs/iteration-log.md`
  - `docs/backlog.md`
  - `docs/testing.md`
- 验证结果：已执行文档级一致性验证；`find apps -maxdepth 4 -type f -print` 仅返回 `apps/.gitkeep`；关键字检索确认内容系统、技术路线未决、runtime content 边界和下一步路由可检索；入口协议正文一致。
- 未做内容：未改 PRD；未改产品或技术决策；未初始化应用；未进入 Next.js / Astro / Vite 选型；未创建 runtime content；未执行 foundation。
- 遗留问题：需要在 `prddev-tech-route` 中正式选择技术路线，并补齐 framework、content format、deployment 和 validation commands。
- 下一步建议：执行 `prddev-tech-route`。

### 2026-07-07 - PB-001 纳入 Portfolio 内容系统骨架

- 使用 skill：`prddev-increment`
- 本轮目标：吸收优化版项目中可复用的内容战略、Case Study Schema、Content Model 和项目索引，让当前作品集从概念 PRD 进一步具备内容驱动的案例系统骨架。
- 完成内容：
  - 新增 `docs/portfolio-content-strategy.md`，定义 AI Native Product Builder 的内容证明链、项目组合策略和 Featured 准入规则。
  - 新增 `docs/case-study-template-schema.md`，定义 Canonical Case Study Schema v0.2、必填字段和页面展示顺序。
  - 新增 `docs/content-model.md`，统一 site profile、capability、case study、project index 等未来内容实体，并明确 docs/apps 边界。
  - 新增 `docs/project-portfolio-index.md`，建立 Featured Projects、Secondary Projects、slug 和能力映射。
  - 将 `docs/roadmap.md`、`docs/tech-radar.md`、`docs/tech-stack-decision.md`、`docs/architecture.md`、`docs/testing.md` 从通用模板更新为 Portfolio 专属版本。
  - 轻量补强 `AGENTS.md` / `CLAUDE.md` / `docs/agent-behavior.md`，加入内容系统读取规则、Case Study Schema 边界和 runtime content 落点限制。
  - 在 `docs/backlog.md` 和 `docs/decision-log.md` 中记录本次吸收。
- 修改文件：
  - `AGENTS.md`
  - `CLAUDE.md`
  - `docs/portfolio-content-strategy.md`
  - `docs/case-study-template-schema.md`
  - `docs/content-model.md`
  - `docs/project-portfolio-index.md`
  - `docs/roadmap.md`
  - `docs/tech-radar.md`
  - `docs/tech-stack-decision.md`
  - `docs/architecture.md`
  - `docs/testing.md`
  - `docs/agent-behavior.md`
  - `docs/backlog.md`
  - `docs/decision-log.md`
  - `docs/iteration-log.md`
- 验证结果：已执行文档级验证；`rg --files docs` 确认 4 个新增内容系统文档存在；关键字检索确认 Case Study Schema、Content Model、runtime content 边界、技术栈未决状态可检索；`diff -u AGENTS.md CLAUDE.md` 仅显示镜像声明互指差异，正文内容一致；`find apps -maxdepth 3 -type f` 确认 `apps/` 仍只有 `.gitkeep`。
- 未做内容：未改应用代码；未初始化 Next.js / Astro；未直接进入技术路线决策；未一次性填完整案例正文；未整包复制覆盖补丁包。
- 遗留问题：需要通过 `prddev-checkpoint` 复核文档之间的一致性；checkpoint 通过后再进入 `prddev-tech-route`，由橘子正式决定 Next.js + MDX、Astro + MDX 或其他路线。
- 下一步建议：执行 `prddev-checkpoint`。

### 2026-07-07 - Phase 0.5 项目身份与概念 PRD v0 落地

- 使用 skill：`prddev-prd-roadmap`（按用户确认执行，但因技术路线未决，仅产出概念 PRD，不生成开发级 backlog）
- 本轮目标：将用户确认的个人作品集定位落入项目文档，让项目从通用启动包状态进入可识别的 AI Native Product Builder Portfolio 项目状态。
- 完成内容：
  - 将 `AGENTS.md` / `CLAUDE.md` 的“本项目的快速介绍了解”从占位改为当前项目摘要。
  - 在 `docs/prd.md` 中补齐产品名称、项目方向、产品定位、目标用户、核心问题、价值主张、用户路径、功能模块、MVP 范围、页面 / 数据需求、验收标准和未来扩展方向。
  - 在 `docs/decision-log.md` 中记录 D-001 产品方向决策。
- 修改文件：
  - `AGENTS.md`
  - `CLAUDE.md`
  - `docs/prd.md`
  - `docs/decision-log.md`
  - `docs/iteration-log.md`
- 验证结果：项目快速介绍不再是占位；PRD 标记为概念 PRD 且明确技术路线未决；未生成开发级 backlog；未修改 `apps/`。
- 未做内容：未执行技术路线决策；未初始化前端项目；未修改 roadmap / backlog；未填充具体案例正文；未进入 foundation 或 coding。
- 遗留问题：需要确认前端技术路线、内容管理方式、部署方式和验证命令。
- 下一步建议：执行 `prddev-tech-route`，为作品集选择技术路线与最小技术栈。

### 2026-07-06 - F-008 校准轻量首次启动体验

- 使用 skill：`prddev-increment`（当前环境未暴露该 skill 工具，按项目常驻规则手动执行）
- 本轮目标：降低新项目第一次复制启动包后的启动摩擦，让首次开机先产出可用项目身份 v0，再按阶段逐步补齐完整 PRD。
- 完成内容：
  - 将首次开机第一轮问题从最多 5 个调整为先问 3 个关键问题。
  - 增加“轻量启动原则”：信息达到 60% 清晰时，先生成项目身份 v0。
  - 将首次最小落地结果收敛为项目名、一句话定位、不做什么，并明确这不代表可进入技术路线或 coding。
  - 增加“完整身份补齐条件”，说明进入技术路线、开发级 PRD、foundation 或 coding 前必须继续补齐的 PRD 字段。
- 修改文件：
  - `docs/first-run.md`
  - `docs/backlog.md`
  - `docs/iteration-log.md`
- 验证结果：首次开机轻量原则、三分钟补齐问题、项目身份 v0、完整身份补齐条件均可检索；backlog 中 F-008 标记为 done。
- 未做内容：未修改入口协议；未修改 PRD 模板；未进入技术路线、backlog、foundation 或 coding；未初始化应用代码。
- 遗留问题：后续 checkpoint 可用一个真实新项目场景试跑首次开机体验。
- 下一步建议：执行 `prddev-checkpoint`，复核首次开机是否足够轻、边界是否仍然清晰。

### 2026-07-06 - F-007 补 Agent 行为判断表

- 使用 skill：`prddev-increment`（当前环境未暴露该 skill 工具，按项目常驻规则手动执行）
- 本轮目标：补齐路由前行为判断表，让 agent 面对请求时先判断该停、问、推进、记录，还是写代码。
- 完成内容：
  - 新增 `docs/agent-behavior.md`，定义判断优先级、行为总表、必须停、必须问、可以推进、必须记录、可以写代码和记录落点。
  - 在 `AGENTS.md` / `CLAUDE.md` 的新会话启动协议中加入 `docs/agent-behavior.md`。
  - 在关键防线中明确：任何用户请求都必须先按 `docs/agent-behavior.md` 做行为判断，不得跳过判断直接执行。
- 修改文件：
  - `docs/agent-behavior.md`
  - `AGENTS.md`
  - `CLAUDE.md`
  - `docs/backlog.md`
  - `docs/iteration-log.md`
- 验证结果：入口协议镜像；行为判断表五类动作、判断优先级和记录落点可检索；backlog 中 F-007 标记为 done。
- 未做内容：未修改 PRD 内容；未进入 foundation/coding；未初始化应用代码；未重构 docs 体系。
- 遗留问题：后续 checkpoint 可复核 F-003/F-004 曾因范围限制未单独登记是否需要补齐历史记录。
- 下一步建议：执行 `prddev-checkpoint`，复核启动包是否已经形成“首次开机 + 行为判断 + 阶段路由 + 文件边界”的完整项目操作协议。

### 2026-07-06 - F-006 补首次开机引导卡

- 使用 skill：`prddev-increment`（当前环境未暴露该 skill 工具，按项目常驻规则手动执行）
- 本轮目标：为新项目第一次复制启动包后的空白状态提供一张“首次开机引导卡”，让人和 AI 先补齐项目身份，再进入后续阶段。
- 完成内容：
  - 新增 `docs/first-run.md`，定义触发条件、人和 AI 分工、五分钟补齐问题、最小落地结果和防线。
  - 在 `AGENTS.md` / `CLAUDE.md` 的新会话启动协议中加入 `docs/first-run.md`。
  - 在关键防线中明确：首次补齐项目身份时按 `docs/first-run.md` 执行，该文件只负责引导，不承载第二份项目身份。
- 修改文件：
  - `docs/first-run.md`
  - `AGENTS.md`
  - `CLAUDE.md`
  - `docs/backlog.md`
  - `docs/iteration-log.md`
- 验证结果：入口协议镜像；首次开机触发条件、5 个补齐问题、最小落地结果可检索；backlog 中 F-006 标记为 done。
- 未做内容：未修改完整 PRD 内容；未进入技术路线、backlog、foundation 或 coding；未初始化应用代码。
- 遗留问题：后续可继续补“Agent 行为判断表”，明确停、问、推进、记录、写代码的条件。
- 下一步建议：执行 `prddev-checkpoint`，复核首次开机、项目身份、推进文档、开发目录四层边界是否已经完整。

### 2026-07-06 - F-005 明确 apps 与 docs 文件边界

- 使用 skill：`prddev-increment`（当前环境未暴露该 skill 工具，按项目常驻规则手动执行）
- 本轮目标：明确启动包中真实项目开发与推进文档的物理边界，防止业务代码、原型或脚本散落在根目录或 `docs/` 中。
- 完成内容：
  - 在 `AGENTS.md` / `CLAUDE.md` 中新增“项目文件边界”小节。
  - 明确 `docs/` 只用于 PRD、方案、架构说明、backlog、迭代日志、决策日志和待确认内容。
  - 明确 `apps/` 是唯一实际项目开发目录，应用源码、原型代码、脚本、测试代码、配置文件和可运行项目都必须放在 `apps/` 下。
  - 创建 `apps/` 目录。
- 修改文件：
  - `AGENTS.md`
  - `CLAUDE.md`
  - `docs/backlog.md`
  - `docs/iteration-log.md`
  - `apps/.gitkeep`
- 验证结果：入口协议镜像；已确认文件边界规则存在；已确认 `apps/` 目录存在。
- 未做内容：未初始化应用代码；未修改 PRD、架构、技术路线或 skill 实现；未进入实际产品开发。
- 遗留问题：后续 foundation 阶段应在 `apps/<project-name>/` 下初始化真实应用。
- 下一步建议：执行 `prddev-checkpoint`，复核启动包模板的身份、文档、开发目录三层边界是否已经完整。

### 2026-07-06 - F-002 通用化项目定位说明

- 使用 skill：`prddev-increment`（当前环境未暴露该 skill 工具，按项目常驻规则手动执行）
- 本轮目标：将 `AGENTS.md` / `CLAUDE.md` 从“融合说明”收敛成可复用启动包入口协议，删除旧启动包相关描述，并保留新项目快速介绍占位。
- 完成内容：
  - 在“项目定位”下新增“本项目的快速介绍了解”占位，提示新项目使用启动包时必须按实际项目形态改写。
  - 删除入口协议中的旧启动包能力映射表。
  - 将关键防线改为“新项目使用本启动包时，必须先按项目形态改写快速介绍，并确保 `docs/prd.md` 承载完整项目定位”。
- 修改文件：
  - `AGENTS.md`
  - `CLAUDE.md`
  - `docs/backlog.md`
  - `docs/iteration-log.md`
- 验证结果：两份入口协议保持镜像；入口协议不再包含旧启动包能力说明；backlog 中 F-002 标记为 done。
- 未做内容：未修改 PRD、架构、技术路线、skill 实现。
- 遗留问题：后续可在 checkpoint 中判断 docs 模板是否需要增加更多新项目初始化占位。
- 下一步建议：执行 `prddev-checkpoint`，复核启动包模板用于新项目初始化时的字段完整度。

### 2026-07-06 - F-001 强化项目启动路由说明

- 使用 skill：`prddev-increment`（当前环境未暴露该 skill 工具，按项目常驻规则手动执行）
- 本轮目标：吸收旧 `project-init` 启动包中“新会话快速理解项目、基本路由、上下文恢复”的可取设计，并融合到本项目已有入口协议中。
- 完成内容：
  - 将旧启动包的 `brief.md`、`context.md`、`decisions.md` 能力映射到本项目现有 docs。
  - 补强 `AGENTS.md` / `CLAUDE.md` 的项目定位、新会话启动协议、阶段读取规则、默认路由和关键防线。
  - 明确不新增旧启动包文件，优先用 `docs/prd.md`、`docs/iteration-log.md`、`docs/architecture.md`、`docs/decision-log.md` 承载对应职责。
- 修改文件：
  - `AGENTS.md`
  - `CLAUDE.md`
  - `docs/backlog.md`
  - `docs/iteration-log.md`
- 验证结果：已确认两份入口协议内容保持镜像；backlog 中 F-001 标记为 done。
- 未做内容：未修改 PRD、架构、技术路线、skill 实现；未新增 `brief.md`、`context.md`、`decisions.md`。
- 遗留问题：如后续新会话仍需要更强的摘要层，可单独评估是否调整 docs 模板。
- 下一步建议：执行 `prddev-checkpoint`，检查当前 docs 模板是否需要增加更明确的“新会话恢复摘要”字段。

### YYYY-MM-DD - 迭代标题

- 使用 skill：
- 本轮目标：
- 完成内容：
- 修改文件：
- 验证结果：
- 未做内容：
- 遗留问题：
- 下一步建议：

## 已完成增量

| 日期 | Backlog ID | 完成内容 | 验证 | 备注 |
| --- | --- | --- | --- | --- |
| 2026-07-07 | CS-001 | 创建 Ecommerce Review Copilot 正式 Case Study 内容骨架 | `pnpm run check`、`pnpm run build`、`pnpm run lint` 通过 | 下一步执行 `CS-002`，扩展 Case Study Detail 展示骨架 |
| 2026-07-07 | UX-001 | 前端文案中文优先表达 | `pnpm run check`、`pnpm run build`、`pnpm run lint` 通过 | 已为后续正式案例保持中文优先表达 |
| 2026-07-07 | FN-001 | 初始化最小 Astro + TypeScript 基座 | `pnpm run check`、`pnpm run build`、`pnpm run lint` 通过 | 已进入内容系统落地阶段 |
| 2026-07-07 | CP-003 | Foundation 前状态同步 | 文档级验证通过；`apps/` 仍只有 `.gitkeep`；当前目录无 `.git`，无法执行 git 状态验证 | 下一步仍为 `prddev-foundation` |
| 2026-07-07 | CP-002 | 同步 PRD 技术路线与视觉系统状态 | 文档级验证通过；`apps/` 仍只有 `.gitkeep` | 下一步仍为 `prddev-foundation` |
| 2026-07-07 | VS-001 | 新增 Portfolio 视觉系统护栏 | 文档级验证通过；`apps/` 仍只有 `.gitkeep` | 下一步仍为 `prddev-foundation` |
| 2026-07-07 | TR-001 | 确认 Astro-powered Editorial Product Experience System | 文档级验证通过；`apps/` 仍只有 `.gitkeep` | 下一步进入 `prddev-foundation` |
| 2026-07-07 | CP-001 | Portfolio 文档一致性复核 | 文档级一致性验证通过；`apps/` 仍只有 `.gitkeep` | 下一步进入 `prddev-tech-route`，不进入 coding |
| 2026-07-07 | PB-001 | 纳入 Portfolio 内容系统骨架 | 文档级验证通过；`apps/` 仍只有 `.gitkeep` | 新增内容战略、Case Study Schema、Content Model 和 Project Index；未进入 coding |
| 2026-07-06 | F-008 | 校准轻量首次启动体验 | `docs/first-run.md` 已收敛为先产出项目身份 v0，backlog 已标记 done | 第一轮最多 3 个问题，完整身份按阶段补齐 |
| 2026-07-06 | F-007 | 补 Agent 行为判断表 | 入口协议镜像，`docs/agent-behavior.md` 已创建，backlog 已标记 done | 路由前先判断停、问、推进、记录或写代码 |
| 2026-07-06 | F-006 | 补首次开机引导卡 | 入口协议镜像，`docs/first-run.md` 已创建，backlog 已标记 done | 空白项目先补身份再推进 |
| 2026-07-06 | F-005 | 明确 `apps/` 开发目录与 `docs/` 文档目录边界 | 入口协议镜像，`apps/` 目录已创建，backlog 已标记 done | 后续真实开发只能在 `apps/<project-name>/` 下进行 |
| 2026-07-06 | F-002 | 通用化 `AGENTS.md` / `CLAUDE.md` 项目定位说明 | 入口协议镜像，旧启动包描述已从入口协议移除，backlog 已标记 done | 保留新项目快速介绍占位 |
| 2026-07-06 | F-001 | 强化 `AGENTS.md` / `CLAUDE.md` 项目启动路由说明 | 入口协议镜像，backlog 已标记 done | 旧启动包能力通过现有 docs 映射承载 |

## 阻塞与风险

| 日期 | 问题 | 影响 | 处理建议 | 状态 |
| --- | --- | --- | --- | --- |
| 2026-07-07 | 当前目录未检测到 `.git` | 无法通过 `git status` 辅助判断工作区差异 | 版本状态暂以文件扫描、文档记录和验证命令为准 | open |
| 2026-07-07 | 只有 foundation placeholder 内容 | 站点可运行但还不能代表正式作品集内容 | 已通过 `CS-001` 创建第一个正式 Case Study 内容骨架，并将 placeholder 归档 | closed |
