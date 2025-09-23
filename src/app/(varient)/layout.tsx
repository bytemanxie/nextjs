import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface VarientLayoutProps {
  children: React.ReactNode;
}

interface PageHeaderProps {
  title: string;
  description: string;
  badgeText: string;
  gradientFrom: string;
  gradientTo: string;
}

/**
 * 页面头部组件
 * 为 SSR、SSG、ISR 页面提供统一的头部样式
 */
function PageHeader({
  title,
  description,
  badgeText,
  gradientFrom,
  gradientTo,
}: PageHeaderProps) {
  return (
    <header className={cn('text-center mb-8', gradientFrom, gradientTo)}>
      <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
      <p className="text-lg text-muted-foreground">{description}</p>
      <Badge variant="secondary" className="mt-4">
        {badgeText}
      </Badge>
    </header>
  );
}

/**
 * 页面容器组件
 * 提供统一的背景和布局样式
 */
function PageContainer({
  children,
  gradientFrom,
  gradientTo,
}: {
  children: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}) {
  return (
    <div
      className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} dark:from-slate-900 dark:to-slate-800 -mx-4 -mt-8 -mb-8 px-4 pt-8 pb-8 min-h-screen`}
    >
      <div className="container mx-auto">{children}</div>
    </div>
  );
}

/**
 * (varient) 路由组的公共布局
 * 为 SSR、SSG、ISR 示例页面提供基础布局结构
 */
export default function VarientLayout({ children }: VarientLayoutProps) {
  return <>{children}</>;
}

// 导出公共组件供子页面使用
export { PageHeader, PageContainer };
