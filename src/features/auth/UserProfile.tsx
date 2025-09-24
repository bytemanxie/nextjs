'use client';

import { useSession, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function UserProfile() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-6">
          <div className="text-sm text-gray-500">加载中...</div>
        </CardContent>
      </Card>
    );
  }

  if (!session) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-6">
          <div className="text-sm text-gray-500">未登录</div>
        </CardContent>
      </Card>
    );
  }

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          用户信息
          <Badge variant="outline" className="text-xs">
            {session.provider || 'GitHub'}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          {session.user?.image && (
            <img
              src={session.user.image}
              alt={session.user.name || '用户头像'}
              className="w-12 h-12 rounded-full"
            />
          )}
          <div>
            <h3 className="font-medium text-lg">{session.user?.name}</h3>
            <p className="text-sm text-gray-500">{session.user?.email}</p>
          </div>
        </div>

        <div className="pt-4 border-t">
          <Button onClick={handleSignOut} variant="outline" className="w-full">
            退出登录
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
