'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  return (
    <div className="mb-6 flex items-center justify-between">
      {/* 左侧导航 */}
      <div>
        {pathname !== '/' && (
          <Button variant="ghost" asChild>
            <Link href="/" className="inline-flex items-center">
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              返回首页
            </Link>
          </Button>
        )}
      </div>

      {/* 右侧登录状态 */}
      <div className="flex items-center space-x-4">
        {status === 'loading' ? (
          <div className="text-sm text-gray-500">加载中...</div>
        ) : session ? (
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name || '用户头像'}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {session.user?.name}
              </span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              退出
            </Button>
          </div>
        ) : (
          <Button variant="outline" size="sm" onClick={() => signIn()}>
            登录
          </Button>
        )}
      </div>
    </div>
  );
}
