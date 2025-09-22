# Next.js API 学习平台

这是一个用于学习 Next.js 15 API、Tailwind CSS 和 shadcn/ui 的项目。

## 技术栈

- **框架**: Next.js 15 (App Router)
- **样式**: Tailwind CSS 4
- **UI 组件**: shadcn/ui
- **包管理器**: pnpm
- **语言**: TypeScript

## 项目特性

- 🚀 Next.js 15 最新特性
- 🎨 shadcn/ui 组件库
- 🌙 深色模式支持
- 📱 响应式设计
- ⚡ Tailwind CSS 4

## 开始使用

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 学习内容

### 渲染模式

- **SSR** (服务器端渲染) - `/ssr`
- **SSG** (静态站点生成) - `/ssg`
- **ISR** (增量静态再生) - `/isr`

### shadcn/ui 使用

#### 添加新组件

```bash
npx shadcn@latest add [component-name]
```

#### 常用组件

- Button: 按钮组件
- Card: 卡片容器
- Badge: 徽章
- Alert: 警告提示

#### 组件使用示例

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>标题</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default">按钮</Button>
      </CardContent>
    </Card>
  );
}
```

## 项目结构

```
src/
├── app/                 # Next.js App Router 页面
│   ├── layout.tsx      # 根布局
│   ├── page.tsx        # 首页
│   ├── globals.css     # 全局样式
│   ├── ssr/            # SSR 示例页面
│   ├── ssg/            # SSG 示例页面
│   └── isr/            # ISR 示例页面
├── components/          # shadcn/ui 组件
│   └── ui/             # UI 组件
└── lib/                # 工具函数
    └── utils.ts        # 通用工具函数
```

## 开发命令

```bash
# 开发服务器
pnpm dev

# 构建项目
pnpm build

# 启动生产服务器
pnpm start

# 代码检查
pnpm lint
```

## 学习资源

- [Next.js 文档](https://nextjs.org/docs)
- [shadcn/ui 文档](https://ui.shadcn.com/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
