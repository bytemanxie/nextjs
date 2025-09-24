'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from './Separator';

/**
 * 懒加载组件 - 使用 React.lazy() 动态导入
 * 这个组件会被代码分割，只有在需要时才会加载
 */
export default function LazyLoadedComponent() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <svg
            className="w-6 h-6 mr-2 text-indigo-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          懒加载组件 (React.lazy)
        </CardTitle>
        <CardDescription>
          这个组件通过 React.lazy() 动态导入，实现了代码分割
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">加载方式:</span>
            <Badge variant="default">React.lazy()</Badge>
          </div>

          <Separator />

          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">代码分割:</span>
            <Badge variant="secondary">已启用</Badge>
          </div>

          <Separator />

          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">加载时间:</span>
            <Badge variant="outline" className="font-mono">
              {new Date().toLocaleTimeString('zh-CN')}
            </Badge>
          </div>
        </div>

        {/* 功能演示 */}
        <div className="mt-4 p-3 bg-muted/50 rounded-md">
          <h4 className="font-medium text-sm mb-2">懒加载特性</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• 代码分割：组件代码独立打包</li>
            <li>• 按需加载：只在需要时下载</li>
            <li>• 性能优化：减少初始包大小</li>
            <li>• 缓存友好：浏览器可以缓存独立模块</li>
          </ul>
        </div>

        {/* 技术说明 */}
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-md">
          <h4 className="font-medium text-sm mb-2 text-blue-700 dark:text-blue-300">
            技术实现
          </h4>
          <div className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
            <div>• 使用 React.lazy() 动态导入组件</div>
            <div>• 配合 Suspense 处理加载状态</div>
            <div>• 实现真正的代码分割和懒加载</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
