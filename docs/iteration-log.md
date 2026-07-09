# 迭代日志

用途：记录每轮 foundation、increment 或 checkpoint 的完成情况，帮助下一轮恢复上下文。

## 当前状态摘要

- 当前阶段：Phase 3 内容系统落地推进中；首页已升级为能力驱动个人品牌信息架构，AIPM 能力系统、AI Product Operating Process、方法样本模块与第一个正式 Case Study 详情页展示骨架已完成；全局字体栈已调整为 Apple-first，正文灰色层级已切换为 Apple-ish 冷灰；首页 Typography System、Hero 杂志式姓名背景、方法样本文字结构和卡片视觉层级已精修；Hero 英文名已从暗色导航栏跨界溢出到封面；Hero 重复小徽标和能力标签组已删除；首页关键 section 标题与副标题字号已统一；暗色页眉 `HAOLIN WU` 装饰字已改为两个词组和分段画线方案，整条 header 下线不再穿过字母，字母内部不再透出明显横线，线只保留在左右侧、字母间和词间；当前暗色页眉已进一步透明化为覆盖式 header，`HAOLIN WU` 更浅更明显，分段下线更清楚且仍避开字母实体；样本 01 详情页已升级为深色承接、浅色透出和白色内容上浮的过渡型案例详情页；详情页 Hero 主体已在透明 header 后整体下移，返回按钮、标题、元信息卡片和右侧判断链路面板不再被 `HAOLIN WU` 装饰字压住；详情页右侧“案例摘要”已修正为顶部原位、滚动后栏内垂直居中的浮动摘要，且 sticky 失效根因已修复；详情页 Hero 标题已按用户截图反馈改为两行断行和轻微冷蓝紫渐变强调；详情页 Hero 背景左右两侧黑白过渡已进一步加密为 12 段停靠点渐变，且中间泛白光感保持原参数；详情页右侧判断链路面板中的英文 kicker 和编号已统一为 Apple-first 无衬线字体；详情页白色内容壳后方已新增柔化裙边，让白壳顶边和左右边缘参与灰蓝背景融合
- 详情页背景渐变已按用户确认方案继续细腻化：使用 OKLab 色彩插值、更长向下过渡、密集停靠点和极轻 dither 抗色带；不改字体、不改标题文字渐变、不改变 Hero 中央 `50% 96%` 泛白光。
- 最近完成：UX-020 详情页 Hero 主体下移避让装饰字
- 当前阻塞：无内容 schema 阻塞；demo link、GitHub link、截图资产、真实商家反馈和真实商业指标仍为 `TBD`
- 下一步唯一建议：执行 `prddev-checkpoint`，复核 UX-020 后的项目状态与后续 backlog；若继续开发，先由用户确认下一轮视觉或内容增量。
- 最后更新：2026-07-10

## 迭代记录

### 2026-07-10 - UX-020 详情页 Hero 主体下移避让装饰字

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户截图反馈，只下移 Ecommerce Review Copilot 详情页 Hero 主体内容，避免返回按钮、标题、元信息卡片和右侧判断链路面板被透明 header 下的 `HAOLIN WU` 装饰字压住；顶部 header 和字母样式保持不变。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`：桌面端 `.case-detail-hero` 最小高度从 `720px` 增至 `790px`，`.case-hero-inner` 最小高度从 `640px` 增至 `710px`，`padding-block` 从 `86px 180px` 调整为 `132px 190px`。
  - 同步调整 `980px` 和 `640px` 响应式断点的 Hero 最小高度与上内边距，让窄屏下返回按钮也和装饰字留出空位。
  - 保持 `apps/ai-native-product-builder-portfolio/src/styles/global.css` 中透明 header、`HAOLIN WU` 字母色、分段下线、品牌和导航文字层级不变。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；授权 dev server 于 `http://127.0.0.1:4339/` 检查详情页，1280px 视口下 `HAOLIN WU` 底部约 `72px`，返回按钮 top 约 `133px`，留出约 `61px` 空位，右侧面板 bottom 约 `583px`，白色内容壳 top 约 `646px`；390px 视口下无水平溢出，返回按钮 top 约 `132px`。
- 未做内容：未修改顶部 header、`HAOLIN WU` 字母样式、导航文案、Hero 文案、详情页背景渐变、内容源、schema、截图资产、真实指标、demo、GitHub、CMS、AI runtime 或其他视觉模块。
- 遗留问题：主体下移后的最终视觉密度仍属主观判断，需要用户在实际页面上确认是否还要再多或再少一点留白。
- 下一步建议：执行 `prddev-checkpoint`，或等待用户确认是否继续拆一个更小的视觉细节增量。

### 2026-07-10 - UX-019 暗色页眉透明化与英文名层级微调

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户确认的截图反馈，只调整首页和 Ecommerce Review Copilot 详情页共享暗色页眉：header 完全透明，保留更清楚的底部分段线；`HAOLIN WU` 更浅、更明显，并继续避免横线穿过字母实体。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/styles/global.css`：将 `.site-header--dark` 从深色背景改为 `position:absolute` 的覆盖式透明 header，让首屏 Hero 背景自然透出。
  - 将 `--site-header-line-color` 从 `rgba(161, 188, 255, 0.11)` 提升为 `rgba(176, 205, 255, 0.24)`，让 header 下线更明显。
  - 将 `--editorial-letter-color` 从 `rgb(19, 23, 37)` 提亮为 `rgb(26, 32, 52)`，并把 `--editorial-text-top` 调整为 `2px`，让 `HAOLIN WU` 更早进入 header 顶部区域。
  - 去掉 dark header 品牌和导航文字背后的半透明背景块与 box-shadow，保留轻微 text-shadow，确保 header 本身完全透明。
  - 保留 `HAOLIN` / `WU` 两个词组、字母间隔线和词间线；不恢复整条下线穿过字母的方案。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/styles/global.css`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；构建产物可检索到 dark header 透明、覆盖式定位、增强后的线色和提亮后的字母色；授权 dev server 于 `http://127.0.0.1:4339/` 启动，浏览器检查首页和详情页 1280px / 390px 视口均无水平溢出，顶部截图确认分段线不穿过字母实体。
- 未做内容：未修改页面文案、导航内容、Hero 正文、详情页背景渐变、内容壳、右侧摘要、Case Study 内容源、schema、截图资产、真实指标、demo、GitHub、CMS、AI runtime 或其他视觉模块。
- 遗留问题：`HAOLIN WU` 的最终明暗仍属主观视觉判断，需要用户在实际显示器上确认是否还要再浅或再低调。
- 下一步建议：执行 `prddev-checkpoint`，或等待用户确认是否继续拆一个更小的页眉视觉细节增量。

### 2026-07-10 - CS-014 详情页背景渐变 OKLab 细腻化

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户确认方案，只优化 Ecommerce Review Copilot 详情页背景从深色到浅色的细腻过渡，使用 OKLab 色彩插值、更长向下过渡、密集停靠点和极轻抗色带；保持原字体和 Hero 中央泛白光感不变。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`：降低 `--case-mist-dither` 的可见强度，将 fractal-noise alpha 从 `.026` 降到 `.018`，仅用于打散低对比渐变色带。
  - 将 `.case-detail-page::before` 页面级雾面带调整为 `top:548px` / `height:840px`，让灰蓝到浅底色的过渡距离向下拉长。
  - 为页面级雾面带增加更密集的左右径向停靠点和 16 段纵向透明度停靠点，减少从灰蓝到近白之间的阶梯感。
  - 新增 `@supports (background: linear-gradient(180deg in oklab, #000, #fff))`，在支持浏览器里让页面级雾面带和 Hero 底部左右背景渐变使用 `oklab` 色彩插值。
  - 保留 Hero 顶部两处彩色 light、中央 `radial-gradient(circle at 50% 96%, rgba(246, 247, 251, 0.34), transparent 36%)` 和 `.case-detail-hero::after` 原参数不变。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；授权 preview 于 `http://127.0.0.1:4338/` 启动，授权 HTTP 检查确认 `/projects/ecommerce-review-copilot/` 返回 200 OK。
- 未做内容：未修改字体、标题文字渐变、页面文案、Hero 中央泛白光、`.case-detail-hero::after` 参数、页眉、内容壳尺寸、正文卡片、右侧摘要、首页、内容源、schema、截图资产、真实指标、demo、GitHub、CMS 或 AI runtime。
- 遗留问题：渐变细腻度最终仍受浏览器、显示器、亮度和截图压缩影响，需要用户在目标页面上主观确认。
- 下一步建议：执行 `prddev-checkpoint`，或等待用户确认是否继续拆一个更小的视觉细节增量。

### 2026-07-10 - UX-018 暗色页眉字母内部残留横线彻底隐藏

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户最新截图反馈，修正 UX-017 后 `HAOLIN WU` 字母内部仍能看到明显横线的问题；保持字母两侧、字母间和词间的横线存在。
- 问题原因：
  - UX-017 仍保留过“整条 header 下线 + 遮挡 / 补线”的思路，容易在半透明大字下方留下可见痕迹。
  - 更关键的是，装饰字使用 `rgba(255,255,255,0.055)` 半透明白色，header 与 Hero 的背景分界会透过字母本身，看起来像字母内部还有一条横线。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/styles/global.css`：关闭 `.site-header--dark::after` 的整条下线绘制，避免线从字母下方经过。
  - 改由 `.site-header__editorial-name::before` / `::after` 绘制装饰字左侧和右侧的 header 下线段。
  - 保留 `.site-header__editorial-gap::before` 和 `.site-header__editorial-space::before`，只在字母之间和 `HAOLIN` / `WU` 词间绘制同色 1px 线段。
  - 将 `.site-header__editorial-letter` 从半透明白色改为等效低对比实色 `rgb(19, 23, 37)`，避免背景分界透过字母形成内部横线。
  - 左右线段宽度使用 `--editorial-left` 和 `calc(100vw - var(--editorial-left) - 100%)` 收紧到视口内，避免伪元素造成水平滚动。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/styles/global.css`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；构建产物确认 `.site-header--dark:after{content:none}`、左右线段、字母间 / 词间线段和 `--editorial-letter-color` 生效；授权 preview 于 `http://127.0.0.1:4321/`，Chrome 打开 `/?v=ux018-solid` 和 `/projects/ecommerce-review-copilot/?v=ux018-solid`，确认两页字母内部不再有明显横线。
- 未做内容：未修改页面布局、Hero 文案、导航内容、案例内容、详情页 Hero 背景、字体体系、schema、截图资产、真实指标、demo、GitHub、CMS 或 AI runtime。
- 遗留问题：装饰字现在使用低对比实色而非透明白色，能避免背景分界透出；如果后续要微调大字明暗，应只调整 `--editorial-letter-color`，不要恢复半透明文字。
- 下一步建议：执行 `prddev-checkpoint`，或用户确认后继续拆一个更小的页眉视觉细节增量。

### 2026-07-10 - UX-017 暗色页眉英文名分段线可见修正

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户反馈，修正 UX-016 在实际页面中视觉变化不明显的问题，让首页和 Ecommerce Review Copilot 详情页左上角 `HAOLIN WU` 明确显示词间距，并让 header 下线真正避开字母实体。
- 问题原因：
  - 之前 `0.28em` 词间距没有继承大号装饰字的 `font-size`，实际只按普通正文尺寸计算，所以视觉上几乎看不到空格。
  - 之前用于遮挡横线的偏移是估算值，未直接锚定到 header 底部，容易没有压到真正的导航下线。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/layouts/BaseLayout.astro`：将装饰字数据从单个字母数组改为 `HAOLIN` / `WU` 两个词组。
  - 在每个词的字母之间插入 `.site-header__editorial-gap`，在两个词之间插入 `.site-header__editorial-space`，让字母间横线和词间横线由明确节点承载。
  - 调整 `apps/ai-native-product-builder-portfolio/src/styles/global.css`：将装饰字父级改为继承大号字号的 inline-flex 容器，让 `em` 词间距按 8.75rem 计算。
  - 将 header 下线遮挡层改为锚定在 `.site-header__editorial-name` 的 `bottom:0`，不再使用估算的 `--editorial-line-offset`。
  - 字母之间和词间距内用同色 1px 线段补回 header 下线，保持与顶层导航栏下线一致。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/layouts/BaseLayout.astro`
  - `apps/ai-native-product-builder-portfolio/src/styles/global.css`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；构建产物确认首页和详情页均包含 `data-name="HAOLIN WU"`、2 个 `.site-header__editorial-word`、6 个 `.site-header__editorial-gap` 和 1 个真实 `.site-header__editorial-space`；授权 preview 于 `http://127.0.0.1:4337/`，Chrome 打开 `/?v=ux017-home` 和 `/projects/ecommerce-review-copilot/`，确认两页左上角 `HAOLIN WU` 词间距可见，横线对齐 header 底部。
- 未做内容：未修改页面布局、Hero 文案、导航内容、案例内容、详情页 Hero 背景、字体体系、schema、截图资产、真实指标、demo、GitHub、CMS 或 AI runtime。
- 遗留问题：当前横线颜色仍与原 header 下线一致，属于低透明细线；如果后续需要更明显的视觉效果，应由用户确认是否允许提高该线透明度。
- 下一步建议：执行 `prddev-checkpoint`，或用户确认后继续拆一个更小的页眉视觉细节增量。

### 2026-07-09 - CS-013 详情页内容壳边缘融合柔化

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户反馈，在背景渐变和抗色带处理仍显得不够自然时，换用“内容壳边缘参与融合”的方式，让 Ecommerce Review Copilot 详情页白色内容壳和两侧灰蓝背景之间不再像硬贴合。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`：为 `.case-content-shell` 增加 `isolation:isolate` 和 `overflow:visible`。
  - 新增 `.case-content-shell::before`，放在内容壳后方，使用大面积低透明白雾和侧向浅灰雾构成柔化裙边。
  - 柔边层从内容壳顶边向外扩散，桌面端为 `height:320px` / `filter:blur(34px)` / `opacity:0.9`，用于让白色内容壳顶边和左右边缘自然融入灰蓝背景。
  - 为 `max-width:980px` 移动端缩小柔边为 `height:230px` / `filter:blur(28px)`，避免小屏过曝。
  - 保留原中间 `radial-gradient(circle at 50% 96%, rgba(246, 247, 251, 0.34), transparent 36%)` 不变。
  - 保留 `.case-detail-hero::after` 的 `bottom:-170px`、`width:min(980px, 86vw)`、`height:340px`、`background:rgba(246, 247, 251, 0.78)`、`blur(58px)` 和 `opacity:0.72` 不变。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；授权 HTTP 检查确认 `http://127.0.0.1:4336/projects/ecommerce-review-copilot/` 返回 200 OK；浏览器检查确认 `.case-content-shell::before` 为 `blur(34px)`、`opacity:0.9`、`z-index:-1`，内容壳为 `isolation:isolate` 且 `overflow:visible`；中间 `50% 96%` 光感和 `::after` 原参数保持不变。
- 未做内容：未修改 Hero 顶部渐变、标题文字渐变、页面背景雾面强度、内容壳尺寸 / 圆角 / 卡片、右侧摘要、Case Study 内容源、schema、首页样本区、导航、截图资产、真实指标、demo、GitHub、CMS、AI runtime 或其他视觉模块。
- 遗留问题：该调整解决的是“壳体边缘与背景融合”问题；最终自然度仍需用户在目标显示器上确认。
- 下一步建议：执行 `prddev-checkpoint`，或根据用户人工查看后的反馈继续拆一个更小的视觉细节增量。

### 2026-07-09 - CS-012 详情页内容壳两侧渐变抗色带细化

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户反馈，在明显色块已经消除但细腻度仍不足的基础上，换用低对比长距离渐变叠加极轻 dither 的方式，让 Ecommerce Review Copilot 详情页白色内容壳两侧灰白过渡更自然。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`：继续细化 `.case-detail-page::before` 页面级衔接雾面带。
  - 将衔接带从 `top:604px / height:500px` 调整为 `top:574px / height:660px`，让灰蓝到浅底色的变化距离更长。
  - 降低左右灰蓝径向层和纵向透明度渐变的峰值透明度，减少局部对比造成的色阶感。
  - 新增 `--case-mist-dither`，使用极低透明度 SVG `feTurbulence` fractal-noise 作为背景栈最上层，并通过 `background-blend-mode: soft-light` 轻量混合，用于打散浏览器低对比渐变的 banding。
  - 保留原中间 `radial-gradient(circle at 50% 96%, rgba(246, 247, 251, 0.34), transparent 36%)` 不变。
  - 保留 `.case-detail-hero::after` 的 `bottom:-170px`、`width:min(980px, 86vw)`、`height:340px`、`background:rgba(246, 247, 251, 0.78)`、`blur(58px)` 和 `opacity:0.72` 不变。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；授权 preview 于 `http://127.0.0.1:4336/` 启动，并用授权 HTTP 检查确认 `/projects/ecommerce-review-copilot/` 返回 200 OK；源码与构建产物可检索到 `--case-mist-dither`、`feTurbulence`、`.case-detail-page::before` 的 `top:574px`、`height:660px`、`background-blend-mode:soft-light`；中间 `50% 96%` 光感和 `::after` 原参数保持不变。
- 未做内容：未修改 Hero 顶部渐变、标题文字渐变、内容壳尺寸 / 圆角 / 卡片、右侧摘要、Case Study 内容源、schema、首页样本区、导航、截图资产、真实指标、demo、GitHub、CMS、AI runtime 或其他视觉模块。
- 遗留问题：dither 主要用于降低浏览器渐变色带感，实际细腻度仍受显示器、浏览器、截图压缩和亮度设置影响，需要用户在目标显示器上主观确认。
- 下一步建议：执行 `prddev-checkpoint`，或根据用户人工查看后的反馈继续拆一个更小的视觉细节增量。

### 2026-07-09 - CS-011 详情页内容壳两侧衔接雾面细腻化

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户反馈，在明显色块已经消除的基础上，继续提高 Ecommerce Review Copilot 详情页白色内容壳两侧灰蓝到浅底色过渡的细腻度。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`：继续细化 `.case-detail-page::before` 页面级衔接雾面带。
  - 将衔接带从 `top:620px / height:420px` 调整为 `top:604px / height:500px`，让过渡距离更长。
  - 将左右主径向层细化为 `ellipse 48% 74%`，并新增左右次级 `ellipse 58% 82%` 柔化层。
  - 将纵向透明度渐变从较少停靠点加密为 10 段，降低灰蓝、浅灰和近白之间的跳变感。
  - 保留原中间 `radial-gradient(circle at 50% 96%, rgba(246, 247, 251, 0.34), transparent 36%)` 不变。
  - 保留 `.case-detail-hero::after` 的 `bottom:-170px`、`width:min(980px, 86vw)`、`height:340px`、`background:rgba(246, 247, 251, 0.78)`、`blur(58px)` 和 `opacity:0.72` 不变。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；授权 HTTP 检查确认 `http://127.0.0.1:4334/projects/ecommerce-review-copilot/` 返回 200 OK；源码与构建产物可检索到 `.case-detail-page::before` 的 `top:604px`、`height:500px`、左右 `ellipse 48% 74%` / `ellipse 58% 82%` 和 10 段纵向渐变；中间 `50% 96%` 光感和 `::after` 原参数保持不变。
- 未做内容：未修改 Hero 顶部渐变、标题文字渐变、内容壳尺寸 / 圆角 / 卡片、右侧摘要、Case Study 内容源、schema、首页样本区、导航、截图资产、真实指标、demo、GitHub、CMS、AI runtime 或其他视觉模块。
- 遗留问题：本轮未完成截图级浏览器视觉 QA；衔接细腻度仍需要用户在实际显示器上做主观确认。
- 下一步建议：执行 `prddev-checkpoint`，或根据用户人工查看后的反馈继续拆一个更小的视觉细节增量。

### 2026-07-09 - UX-016 暗色页眉英文名横线避让字母

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户截图反馈，修正首页和 Ecommerce Review Copilot 详情页左上角 `HAOLIN WU` 装饰字被导航下线贯穿的问题；同时保持字母停留在原左上位置，不向右扩散。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/layouts/BaseLayout.astro`：将暗色页眉装饰字拆为紧凑单字母节点，并把词间距保留为真实空格节点，整体文案仍是 `HAOLIN WU`。
  - 调整 `apps/ai-native-product-builder-portfolio/src/styles/global.css`：恢复暗色页眉 `::after` 作为 header 底部导航下线；通过每个字母内部的遮挡带盖住下线穿过字母的部分，让线只在左右两侧、字母自然间隙和词间距中露出。
  - 同步移动端遮挡带位置，避免移动端下线穿过字母内部。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/layouts/BaseLayout.astro`
  - `apps/ai-native-product-builder-portfolio/src/styles/global.css`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；授权 preview 于 `http://127.0.0.1:4335/` 检查首页和 `/projects/ecommerce-review-copilot/`，两页 `HAOLIN WU` 左上位置均为 `40px`、宽度约 `773px`、最大字母间距约 `6.48px`，导航下线 `::after` 位于 header `bottom:0`；构建产物确认 `.site-header__editorial-space` 内保留真实空格；浏览器 error logs 为空且无水平溢出。
- 未做内容：未修改页面布局、Hero 文案、导航内容、案例内容、详情页 Hero 背景、字体体系、schema、截图资产、真实指标、demo、GitHub、CMS 或 AI runtime。
- 遗留问题：字母遮挡带使用当前暗色页眉背景色；如果未来 header 背景透明度或 Hero 顶部底色大幅变化，需要同步复核遮挡色。
- 下一步建议：执行 `prddev-checkpoint`，或根据用户人工查看后的反馈继续拆一个更小的视觉细节增量。

### 2026-07-09 - CS-010 详情页内容壳两侧背景衔接柔化

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户标注，处理 Ecommerce Review Copilot 详情页白色内容壳两侧背景在 Hero 结束处突然变成浅白、形成横向纯白硬界限的问题；保持上方已调好的 Hero 渐变和中间泛白扩散光不变。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`：为 `.case-detail-page` 增加页面级 `::before` 衔接雾面带。
  - 衔接带从 Hero 底部附近开始，用两侧灰蓝径向层和纵向透明度渐变，让外侧背景从灰蓝雾面自然淡出到页面浅底色。
  - 保留原中间 `radial-gradient(circle at 50% 96%, rgba(246, 247, 251, 0.34), transparent 36%)` 不变。
  - 保留 `.case-detail-hero::after` 的 `bottom:-170px`、`width:min(980px, 86vw)`、`height:340px`、`background:rgba(246, 247, 251, 0.78)`、`blur(58px)` 和 `opacity:0.72` 不变。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；授权 HTTP 检查确认 `http://127.0.0.1:4334/projects/ecommerce-review-copilot/` 返回 200 OK；源码与构建产物可检索到 `.case-detail-page::before`、`top:620px`、两侧 `ellipse 42% 68%` 衔接层，中间 `50% 96%` 光感和 `::after` 原参数保持不变。
- 未做内容：未修改 Hero 顶部渐变、标题文字渐变、内容壳尺寸 / 圆角 / 卡片、右侧摘要、Case Study 内容源、schema、首页样本区、导航、截图资产、真实指标、demo、GitHub、CMS、AI runtime 或其他视觉模块。
- 遗留问题：本轮未完成截图级浏览器视觉 QA；该问题仍以实际显示器上的主观视觉确认最准确。
- 下一步建议：执行 `prddev-checkpoint`，或根据用户人工查看后的反馈继续拆一个更小的视觉细节增量。

### 2026-07-09 - UX-015 详情页判断链路面板 Apple-first 字体统一

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户截图反馈，选择方案一，让详情页 Hero 右侧判断链路面板中的 `AIPM Judgment Chain` 与 `Problem / Judgment / Workflow / Prototype / Evaluation` 使用同一 Apple-first 无衬线字体气质。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`：将 `.case-panel-kicker` 所在 kicker 组的 `font-family` 从 `var(--font-mono)` 改为 `var(--font-sans)`。
  - 将 `.case-chain-list span` 中的 01-05 编号从 `var(--font-mono)` 改为 `var(--font-sans)`，并补充 `font-weight: 700`，让编号仍有清晰层级。
  - 保留项目既有 Apple-first 字体栈，不接入外部 SF Pro 字体文件。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；源码和构建产物检索确认 `.case-panel-kicker` 与 `.case-chain-list span` 使用 `font-family: var(--font-sans)`，且 `AIPM Judgment Chain` 仍存在。
- 未做内容：未修改 Hero 背景、标题、右侧列表内容、正文结构、首页、内容源、schema、截图资产、真实指标、demo、GitHub、CMS、AI runtime 或其他视觉模块。
- 遗留问题：本轮未启动浏览器截图级 QA；变更为局部字体栈调整，建议用户在实际页面上确认主观观感。
- 下一步建议：执行 `prddev-checkpoint`，或根据用户人工查看后的反馈继续拆一个更小的视觉细节增量。

### 2026-07-09 - CS-009 详情页 Hero 背景渐变停靠点加密

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户反馈，继续弱化 Ecommerce Review Copilot 详情页 Hero 背景左右两侧黑白过渡的色彩分层，让深色到浅色的变化更细腻、舒适；中间泛白光感保持原位置、原强度和原扩散范围。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`：将 `.case-detail-hero` 背景栈中左右底部径向过渡层从较粗停靠点扩展为 `ellipse 82% 58%` 的 12 段渐变。
  - 左右侧过渡使用更小透明度步进，从浅白到深蓝黑逐层衰减，减少红框区域两侧的明显色带感。
  - 保留原中间 `radial-gradient(circle at 50% 96%, rgba(246, 247, 251, 0.34), transparent 36%)` 不变。
  - 保留 `.case-detail-hero::after` 的 `bottom:-170px`、`width:min(980px, 86vw)`、`height:340px`、`background:rgba(246, 247, 251, 0.78)`、`blur(58px)` 和 `opacity:0.72` 不变。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；授权启动 Astro preview 于 `http://127.0.0.1:4334/`，并用授权 HTTP 检查确认 `/projects/ecommerce-review-copilot/` 返回 200 OK；源码与构建产物可检索到左右 `ellipse 82% 58%` / 12 段停靠点渐变，中间 `50% 96%` 光感和 `::after` 原参数保持不变。
- 未做内容：未修改标题文字渐变、Case Study 内容源、schema、首页样本区、右侧摘要、正文结构、导航、截图资产、真实指标、demo、GitHub、CMS、AI runtime 或其他视觉模块。
- 遗留问题：渐变细腻度仍建议用户在实际显示器上做主观确认，因为屏幕色彩、浏览器抗锯齿和截图压缩都会影响色带感观感。
- 下一步建议：执行 `prddev-checkpoint`，或根据用户人工查看后的反馈继续拆一个更小的视觉细节增量。

### 2026-07-09 - CS-008 详情页 Hero 背景左右过渡细腻化

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户澄清，只优化 Ecommerce Review Copilot 详情页 Hero 背景左右两侧从深色到浅色的黑白过渡，减少明显色彩分层；中间泛白光感保持原位置、原强度和原扩散范围。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`：在 `.case-detail-hero` 背景栈中新增左右底部低透明度径向过渡层。
  - 保留原中间 `radial-gradient(circle at 50% 96%, rgba(246, 247, 251, 0.34), transparent 36%)` 不变。
  - 保留 `.case-detail-hero::after` 的 `bottom:-170px`、`width:min(980px, 86vw)`、`height:340px`、`background:rgba(246, 247, 251, 0.78)`、`blur(58px)` 和 `opacity:0.72` 不变。
  - 未新增内容壳顶部光效，避免改变红框上方中间光感。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；授权启动 Astro preview 于 `http://127.0.0.1:4333/`，并在浏览器打开 `/projects/ecommerce-review-copilot/`；浏览器 1280x720 检查确认左右侧背景层已生效，中间泛白光和 `::after` 原参数保持不变，页面无水平溢出；滚动到过渡区域后截图确认白色内容壳位置未改变。
- 未做内容：未修改标题文字渐变、Case Study 内容源、schema、首页样本区、右侧摘要、正文结构、导航、截图资产、真实指标、demo、GitHub、CMS、AI runtime 或其他视觉模块。
- 遗留问题：渐变细腻度仍建议用户在实际显示器上做主观确认，因为屏幕色彩和浏览器抗锯齿会影响色带感观感。
- 下一步建议：执行 `prddev-checkpoint`，或根据用户人工查看后的反馈继续拆一个更小的视觉细节增量。

### 2026-07-09 - CS-007 详情页 Hero 标题断行与强调

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户截图反馈，将 Ecommerce Review Copilot 详情页 Hero 标题从不自然的“运营决 / 策 AI Copilot”断行改为“电商评论洞察与运营 / 决策 AI Copilot”，并让第二行略小、带轻微冷蓝紫渐变。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`：新增 Hero 标题格式化逻辑，仅在当前案例标题为 `电商评论洞察与运营决策 AI Copilot` 时拆成两行展示。
  - 将第一行渲染为 `电商评论洞察与运营`，第二行渲染为 `决策 AI Copilot`，避免“决策”两个字被拆开。
  - 为第二行新增 `.case-hero-title__line--accent` 样式，使用 `#f7f9ff -> #bfeeff -> #c8b7ff` 的克制冷色渐变，并将第二行字号设为略小。
  - 增加移动端 split title 字号规则，降低窄屏水平溢出风险。
  - 同步 `docs/backlog.md` 和 `docs/testing.md`，记录本轮视觉微增量与验证结果。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；授权启动 Astro preview 于 `http://127.0.0.1:4331/`，并在授权环境下确认 `/projects/ecommerce-review-copilot/` 返回 200 OK；构建产物可检索到 `case-hero-title--split`、`case-hero-title__line--accent`、`电商评论洞察与运营`、`决策 AI Copilot`、`#bfeeff` 和 `#c8b7ff`。
- 未做内容：未修改 Case Study 内容源标题、schema、首页方法样本区、右侧摘要、详情正文结构、导航、截图资产、真实指标、demo、GitHub、CMS、AI runtime 或其他视觉模块。
- 遗留问题：本轮尝试 Playwright 浏览器级测量，但当前环境缺少 Playwright Chromium executable；改用系统 Chrome channel 时浏览器进程启动后异常退出，未完成自动 bounding box 测量。建议用户在本地 preview 中做一次人工视觉确认。
- 下一步建议：执行 `prddev-checkpoint`，或根据用户人工查看后的反馈继续拆一个更小的标题视觉细节增量。

### 2026-07-09 - CS-006 修复详情页案例摘要 sticky 失效

- 使用 skill：`prddev-increment`
- 本轮目标：分析并修复右侧“案例摘要”设置 sticky 后仍不移动、无法保持在右栏可视区域中线的问题。
- 原因分析：
  - 当前内置浏览器实际 CSS 宽度为 560px，会触发 `max-width: 980px` 移动端规则，此时摘要卡按设计是 `position: static`，不会 sticky。
  - 在桌面测试视口下，摘要卡虽然计算出了 `--case-summary-sticky-top: 231px`，但仍随正文上移；原因是右侧摘要卡直接作为 grid item，缺少一个与正文等高的右栏轨道作为 sticky 活动空间。
  - 同时 `.case-detail-page` 的 `overflow-x: hidden` 被浏览器计算为 `overflow-y: auto`，形成非真实滚动祖先，会破坏 sticky 参照。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`：为右侧摘要新增 `.case-side-rail` 包裹层，让内部 `.case-side-card` 在完整右栏轨道内 sticky。
  - 将 `.case-detail-page` 的 `overflow-x: hidden` 改为 `overflow-x: clip`，避免产生破坏 sticky 的纵向 overflow。
  - 保留移动端单列降级：窄视口下 `.case-side-card` 继续为 `position: static`。
  - 同步 `docs/backlog.md` 和 `docs/testing.md`，记录本轮修复和验证结果。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；桌面 1440x1000 测试视口下，滚动样本 `scrollY=500/900/1300/1769/2600/4200` 时摘要卡 `cardTop` 均稳定为 `231px`，等于右栏中线计算值；祖先 overflow 复核确认 `.case-detail-page` 为 `overflow-x: clip` / `overflow-y: visible`。
- 未做内容：未修改首页样本区核心文案；未改 Case Study 内容源或 schema；未新增第二个案例；未新增截图、真实指标、demo、GitHub、CMS、AI runtime 或新视觉模块。
- 遗留问题：当前 Codex 内置浏览器默认宽度为 560px，会触发移动端单列规则；如需在内置浏览器直接观察右侧栏 sticky，需要把可视区域切到桌面宽度或使用外部宽屏浏览器。
- 下一步建议：执行 `prddev-checkpoint`，或根据用户在桌面宽屏下的人工查看结果继续拆分更小的视觉细节增量。

### 2026-07-09 - CS-005 修正详情页案例摘要栏内居中浮动

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户对截图位置的澄清，让详情页右侧“案例摘要”顶部仍保持在白色内容壳右栏原位，滚动进入正文后再在右栏可视区域垂直居中浮动。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`：把右侧摘要卡从固定 `top:96px` 改为 `--case-summary-sticky-top` 动态 sticky top；桌面端根据视口高度和卡片实际高度计算中线位置，CSS fallback 使用 `max(96px, calc(50svh - 260px))`。
  - 保留摘要卡在文档流中的原始右栏位置，不再用 `translateY(-50%)` 把卡片提前拉进 Hero；移动端仍回到普通单列流。
  - 同步 `docs/backlog.md` 和 `docs/testing.md`，记录本轮细节修正与验证结果。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；授权启动 Astro preview，本轮因 `4329` 已占用自动切到 `http://127.0.0.1:4330/`，并用 curl 确认 `/projects/ecommerce-review-copilot/` 返回 200 OK；源码和构建产物可检索到 `case-summary-sticky-top` 与 `50svh` fallback；详情摘要卡样式不再检索到错误的 `top:50vh` 或 `translateY(-50%)`。
- 未做内容：未修改首页样本区核心文案；未改 Case Study 内容源或 schema；未新增第二个案例；未新增截图、真实指标、demo、GitHub、CMS、AI runtime 或新视觉模块。
- 遗留问题：本轮仍以源码、构建产物和命令验证为主；截图级视觉 QA 需要在本地 preview 中人工确认。
- 下一步建议：执行 `prddev-checkpoint`，或根据用户人工查看 preview 后的反馈继续拆一个更小的视觉细节增量。

### 2026-07-09 - CS-004 优化样本 01 详情页拆解过程表达

- 使用 skill：`prddev-increment`
- 本轮目标：在不修改首页样本区核心文案的前提下，让“查看拆解过程”进入的 Ecommerce Review Copilot 详情页从纯白文档页升级为能承接首页深色视觉的过渡型案例详情页。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/pages/index.astro`：只微调方法样本 section 的底部浅灰蓝光感、卡片底部光晕和“查看拆解过程”按钮的明亮入口质感；保留样本区标题、段落、问题 / 判断 / 原型方向、能力证明列表、流程步骤和按钮文字。
  - 调整 `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`：将案例详情页 header 切换为暗色变体；新增深色详情 Hero，承载返回链接、主要能力、案例标题、一句话说明和状态 / 角色 / 用户 / 周期；右侧新增 AIPM 判断链路预览卡片。
  - 将原白色详情正文放入 `case-content-shell` 上浮内容壳，形成深色 Hero 底部浅色透出、白色内容卡片向上浮出的视觉过渡；保留原有 Product Judgment、AI Workflow、Evaluation、Outcome 和 Reflection 内容结构与同一 MDX 内容源。
  - 增加轻量进入动效、`prefers-reduced-motion` 降级和桌面 / 移动端响应式布局。
  - 根据用户截图反馈，修正右侧“案例摘要”卡片的 sticky 方式：默认仍位于白色内容壳右栏，不覆盖 Hero；向下滚动长正文时吸附在导航下方保持可见；移动端仍回到普通单列流。
  - 同步 `docs/backlog.md` 和 `docs/testing.md`，记录本轮增量与验证结果。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/pages/index.astro`
  - `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；授权启动 Astro preview，前次 `http://127.0.0.1:4328/` 首页和详情页 HTTP 访问均返回 200 OK；本轮复核时 `4328` 已占用，Astro preview 自动切到 `http://127.0.0.1:4329/`，并用 curl 确认 `/projects/ecommerce-review-copilot/` 返回 200 OK；源码与构建产物检索确认保留“一个样本，展示完整 AIPM 判断链路”“样本 01：从非结构化评论到运营决策”“查看拆解过程”，且未检索到旧的“样本 01：从非结构化评论到运营决策 Copilot”；详情页构建产物可检索到 `case-detail-hero`、`case-content-shell`、`AIPM Judgment Chain` 和右侧摘要卡 `top:96px` 栏内 sticky 样式，未检索到错误的 `top:50vh` / `translateY(-50%)`。
- 未做内容：未修改首页样本区核心文案；未新增第二个案例；未改变 Case Study schema；未编造 demo、GitHub、截图、真实指标、用户反馈或上线证据；未新增 CMS、AI runtime、真实 LLM、3D 或重动画。
- 遗留问题：Playwright 自动截图 QA 因本机缺少 Playwright browser executable 未执行；仍建议用户在本地 preview 中做一次人工视觉确认。
- 下一步建议：执行 `prddev-checkpoint`，或基于用户对当前视觉效果的反馈再拆一个更小的细节增量。

### 2026-07-09 - UX-014 首页关键 section 标题与副标题字号统一

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户反馈，统一首页 `从业务问题到可验证 AI 产品的能力系统`、`我的 AI Product Operating Process`、`一个样本，展示完整 AIPM 判断链路` 三处关键 section 标题和副标题的字体层级，并确保第一处标题桌面单行显示。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/components/AIPMCapabilitySystem.astro`：将能力系统标题从 48px 收敛到 44px，统一 h2 宽度、字重、行高和副标题宽度；桌面使用 `white-space: nowrap`，窄屏恢复正常换行。
  - 调整 `apps/ai-native-product-builder-portfolio/src/components/ProductOperatingProcess.astro`：统一 Operating Process 标题容器宽度、副标题宽度和移动端字号。
  - 调整 `apps/ai-native-product-builder-portfolio/src/pages/index.astro`：统一方法样本模块标题字号、字重、行高、副标题宽度和移动端 h2 字号，避免与前两段层级不一致。
  - 同步 `docs/backlog.md` 和 `docs/testing.md`，记录本轮视觉一致性增量与验证结果。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/components/AIPMCapabilitySystem.astro`
  - `apps/ai-native-product-builder-portfolio/src/components/ProductOperatingProcess.astro`
  - `apps/ai-native-product-builder-portfolio/src/pages/index.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；授权启动 Astro preview 于 `http://127.0.0.1:4327/`；浏览器 1280px 检查确认三处标题均为 44px / 50.16px / 740，副标题均为 16px / 29.76px，第一处标题单行且无水平溢出；390px 移动端三处标题均为 31.2px / 35.568px / 740，副标题一致，允许正常换行且无水平溢出；浏览器 error logs 为空。
- 未做内容：未改首页信息架构、Hero、右侧能力系统节点、方法样本卡片内容、详情页、项目内容、动画、配色或新增依赖。
- 遗留问题：本轮只处理首页三处关键 section heading；`查看拆解过程` 对应详情页仍建议由 `CS-004` 继续优化。
- 下一步建议：执行 `prddev-increment` 的 `CS-004`。

### 2026-07-09 - UX-013 删除 Hero 重复徽标与能力标签

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户反馈，删除首页封面中重复表达的 `AI PRODUCT BUILDER` 小徽标和六个能力关键词标签，让首屏更聚焦姓名、定位、核心句、CTA 与右侧能力系统。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/pages/index.astro`：删除 `heroKeywords` 数据、Hero 左侧 `AI PRODUCT BUILDER` 小徽标和六个能力关键词标签。
  - 删除 `.hero-kicker`、`.hero-keywords` 及其子项样式。
  - 将 `.hero-actions` 上方间距从 24px 调整为 32px，避免删掉标签后 CTA 与说明文字显得过近。
  - 同步 `docs/backlog.md` 和 `docs/testing.md`，记录本轮微增量和验证结果。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/pages/index.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：直接使用绝对路径 `pnpm run check` 时因脚本内 `node: not found` 触发已知本地环境限制；随后使用 Codex bundled Node 写入 PATH 后执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；源码与构建产物负向检索确认不再包含 `hero-kicker`、`hero-keywords` 和 `AI PRODUCT BUILDER`。
- 未做内容：未改右侧 Hero 能力系统、页面信息架构、导航、方法样本、详情页、动画、内容数据或新增依赖。
- 遗留问题：本轮未做截图级视觉 QA；详情页承接方法样本叙事仍留给 `CS-004`。
- 下一步建议：执行 `prddev-increment` 的 `CS-004`。

### 2026-07-09 - UX-012 Hero 英文名跨导航溢出微调

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户反馈，让封面左上角 `HAOLIN WU` 的上半部分进入顶行导航区域，形成半透明溢出感，同时不影响 `AI Native Product Builder` 和导航文案阅读。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/layouts/BaseLayout.astro`：将 `HAOLIN WU` 从 Hero 内部移动到暗色 header 的装饰层，只在 `headerVariant="dark"` 时渲染。
  - 调整 `apps/ai-native-product-builder-portfolio/src/pages/index.astro`：移除旧的 Hero 内 `.hero-editorial-name` 节点和对应样式，避免重复显示。
  - 调整 `apps/ai-native-product-builder-portfolio/src/styles/global.css`：让暗色 header 允许装饰字 overflow；把装饰字置于 header 内容下方并跨过 header 底线进入 Hero；为品牌与导航文字加暗色保护层和 text shadow，让文案处轻微隐藏装饰字。
  - 同步 `docs/backlog.md` 和 `docs/testing.md`，记录本轮微增量和验证结果。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/layouts/BaseLayout.astro`
  - `apps/ai-native-product-builder-portfolio/src/pages/index.astro`
  - `apps/ai-native-product-builder-portfolio/src/styles/global.css`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；浏览器桌面 1280px 与移动 390px 检查确认 `HAOLIN WU` 从 header 内开始并跨过 header 底线进入 Hero，`AI Native Product Builder` 仍可见，旧的 `.hero-editorial-name` 不再存在，无水平溢出，浏览器 error logs 为空。
- 未做内容：未改导航文案、Hero 正文、页面信息架构、动画、方法样本、详情页、其他模块或新增依赖。
- 遗留问题：本轮只处理封面英文名溢出细节；详情页承接方法样本叙事仍留给 `CS-004`。
- 下一步建议：执行 `prddev-increment` 的 `CS-004`。

### 2026-07-09 - UX-011 首页 Typography System 与方法样本视觉精修

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户确认，在不改信息架构、动画、页面切换和复杂视觉元素的前提下，优化首页 Typography System，让首页更像 AI Product Builder Personal Brand，而不是普通 Portfolio Landing Page。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/pages/index.astro`：在 Hero 顶部加入 `HAOLIN WU` 大号半透明杂志式背景字，保持在 Hero 内裁切显示且不影响顶部导航；保留“AI 产品原型构建者”原文案。
  - 将 Hero 核心句拆成“把业务问题 / 转化为 / 可验证的 AI 产品”三行 Display rhythm，并取消 Hero 字号的 viewport-based clamp，改为固定桌面字号与移动断点。
  - 将方法样本卡片结构调整为 `Problem Framing` 系统标签、主标题“找到 AI 真正应该解决的问题”、副标题“样本 01：从非结构化评论到运营决策”，保留原有问题、判断、原型方向和能力证明内容。
  - 调整首页暗色背景为更接近 Deep Navy Black 的层级；统一 Hero、AIPM 能力系统、Operating Process、方法样本和联系卡中的标题宽度、正文行高、正文透明度、section 留白、卡片 border / background / ambient glow。
  - 同步 `docs/backlog.md` 和 `docs/testing.md`，记录本轮视觉增量与验证结果。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/pages/index.astro`
  - `apps/ai-native-product-builder-portfolio/src/components/HeroAbilitySystem.astro`
  - `apps/ai-native-product-builder-portfolio/src/components/AIPMCapabilitySystem.astro`
  - `apps/ai-native-product-builder-portfolio/src/components/ProductOperatingProcess.astro`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 均通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；源码与构建产物可检索到 `HAOLIN WU`、三行 Hero 核心句、`AI 产品原型构建者`、`Problem Framing` 和“找到 AI 真正应该解决的问题”；构建产物未检索到旧的“样本 01：从非结构化评论到运营决策 Copilot”；授权启动 Astro preview 后，`http://127.0.0.1:4325/` 首页返回 200 OK；浏览器桌面 1280px 和移动 390px 检查无水平溢出，浏览器 error logs 为空。
- 未做内容：未改页面信息架构；未改动画效果或页面切换效果；未改 Case Study 详情页；未新增第二个案例、复杂视觉元素、3D、icon、runtime content、依赖、demo link、GitHub link、截图资产、真实商家反馈或真实商业指标。
- 遗留问题：本轮没有继续优化“查看拆解过程”进入的详情页，详情页仍需要 `CS-004` 承接首页方法样本叙事。
- 下一步建议：执行 `prddev-increment` 的 `CS-004`。

### 2026-07-09 - UX-010 Apple-first 字体栈与正文冷灰 token 精修

- 使用 skill：`prddev-increment`
- 本轮目标：根据用户确认，将项目默认字体改为 Apple-first 策略，并只把原本就是灰色文字的层级调整为 Apple-ish 冷灰。
- 完成内容：
  - 调整 `apps/ai-native-product-builder-portfolio/src/styles/tokens.css`：将 `--font-sans` 改为 `-apple-system`、`BlinkMacSystemFont`、`SF Pro Text`、`SF Pro Display` 优先；非 Apple 设备先 fallback 到 `Segoe UI`、`Roboto`、`Helvetica Neue`、`Arial` 等系统西文字体；中文 fallback 保留 `PingFang SC`。
  - 将 `--color-text-primary`、`--color-text-secondary`、`--color-text-muted` 分别调整为 `#1d1d1f`、`#6e6e73`、`#86868b`，让正文层级更接近 Apple 官网常见冷灰气质。
  - 同步 `docs/backlog.md` 和 `docs/testing.md`，记录本轮视觉 token 小增量。
- 修改文件：
  - `apps/ai-native-product-builder-portfolio/src/styles/tokens.css`
  - `docs/backlog.md`
  - `docs/testing.md`
  - `docs/iteration-log.md`
- 验证结果：使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` 通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 `/`、`/projects/`、`/projects/ecommerce-review-copilot/` 3 个静态页面；源码检索确认 `tokens.css` 包含 `-apple-system`、`SF Pro Text`、`Segoe UI`、`Roboto`、`PingFang SC`、`#1d1d1f`、`#6e6e73` 和 `#86868b`。
- 未做内容：未接入已下载的 SF Pro 字体文件；未修改背景、卡片、边框、accent、暗色 Hero 特有颜色、页面结构或内容；未新增依赖或外部 Web Font。
- 遗留问题：未做截图级视觉 QA；本轮是全局 token 小修，后续若继续精修 Apple-ish 风格，需要单独拆分页面级视觉验收。
- 下一步建议：执行 `prddev-increment` 的 `CS-004`。

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
