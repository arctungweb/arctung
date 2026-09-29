# ArcTung 官网

ArcTung 是钨铜（W/Cu）电极的出口业务站点，面向欧美与日韩的电阻焊、缝焊、EDM 及散热/导电应用客户。产品线为 W/Cu 75/25 与 W/Cu 70/30 的电极轮、棒料/板料、螺纹电极与定制件。

## 技术栈

- **Astro 5** — 静态站点生成
- **Tailwind CSS 4** — 通过 `@tailwindcss/vite` 接入
- **TypeScript**
- **Cloudflare Pages** — 托管 + Pages Functions
- **Resend** — 询盘邮件（内部通知 + 客户自动回执）
- 字体：Archivo / Barlow / IBM Plex Mono（`@fontsource`）

## 目录结构

```
src/
  config.ts                站点配置（域名、联系方式、客服 ID 等）
  data/products.ts         5 条产品线数据
  data/applications.ts     4 个应用场景数据
  layouts/Base.astro       基础布局（JSON-LD、OG、canonical）
  components/              SiteHeader / SiteFooter / InquiryForm / ProductCard /
                           SpecTable / FaqItem / SectionHead
  pages/                   index / factory / faq / contact /
                           products/[slug] / applications/[slug]
  styles/global.css        设计令牌与全局样式
  assets/factory/          工厂实拍图（11 张）
functions/api/inquiry.ts   询盘接口（Pages Function）
scripts/generate-og.mjs    生成 OG 分享图
public/                    favicon.svg / robots.txt / og/og-default.png
```

产品页与应用页均由 `src/data/` 驱动，新增条目会自动生成路由与页面。

## 本地开发

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # 输出到 dist/
npm run preview
```

## 环境变量

| 变量 | 说明 |
| --- | --- |
| `RESEND_API_KEY` | Resend API Key，用于发送询盘通知与客户回执 |
| `INQUIRY_TO_EMAIL` | 接收询盘通知的邮箱 |

本地调试放在项目根目录的 `.dev.vars`（已被 git 忽略）；线上在 Cloudflare 项目的环境变量里配置。两项缺任一，接口会返回 `server_not_configured`。

## 询盘接口

`POST /api/inquiry`，JSON 字段：

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `company` | 是 | 公司名，最长 200 字符 |
| `email` | 是 | 邮箱，最长 254 字符，需通过格式校验 |
| `country` | 否 | 国家/地区，最长 100 字符 |
| `application` | 否 | 应用场景，最长 100 字符 |
| `details` | 是 | 询盘详情，最长 5000 字符 |
| `website` | — | 蜜罐字段，真实用户留空；被填写时返回假成功 |

流程：先发内部通知到 `INQUIRY_TO_EMAIL`（`reply_to` 指向客户邮箱），再向客户发自动回执；自动回执失败不会影响询盘本身。所有用户输入均经 HTML 转义后拼入邮件。

## 部署

Cloudflare Pages → 连接本仓库：

| 设置项 | 值 |
| --- | --- |
| 框架预设 | Astro |
| 构建命令 | `npm run build` |
| 输出目录 | `dist` |
| 根目录 | 留空（仓库根即项目） |

推送到 `main` 分支即触发自动构建部署。仓库根目录的 `wrangler.toml` 已声明 `pages_build_output_dir = "dist"`。