'use client';

import { Button } from '@/components/ui/button';

/**
 * SSR 页面刷新按钮组件 - 客户端组件
 * 用于刷新页面获取新的服务器端渲染数据
 */
export function RefreshButton() {
  return (
    <Button
      onClick={() => window.location.reload()}
      size="lg"
      className="bg-green-600 hover:bg-green-700"
    >
      <svg
        className="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
      刷新页面查看新数据
    </Button>
  );
}
