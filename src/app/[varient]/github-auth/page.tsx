import { UserProfile } from '@/features/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function GitHubAuthPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          GitHub OAuth 认证演示
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          使用 NextAuth.js 实现 GitHub OAuth 登录功能
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* 功能介绍 */}
        <Card>
          <CardHeader>
            <CardTitle>功能特性</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-green-600 dark:text-green-400">
                ✅ OAuth 2.0 认证
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                使用 GitHub 作为 OAuth 提供商，安全可靠的身份验证
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-green-600 dark:text-green-400">
                ✅ 会话管理
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                自动处理用户会话的创建、维护和销毁
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-green-600 dark:text-green-400">
                ✅ 用户信息获取
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                获取用户的基本信息：头像、姓名、邮箱等
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-green-600 dark:text-green-400">
                ✅ TypeScript 支持
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                完整的类型定义，提供更好的开发体验
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 用户信息卡片 */}
        <UserProfile />
      </div>

      {/* 技术说明 */}
      <Card>
        <CardHeader>
          <CardTitle>技术实现</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">主要技术栈：</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <strong>NextAuth.js</strong> - Next.js 专用的身份验证库
              </li>
              <li>
                <strong>GitHub OAuth</strong> - GitHub 提供的 OAuth 2.0 服务
              </li>
              <li>
                <strong>JWT</strong> - JSON Web Token 用于会话管理
              </li>
              <li>
                <strong>React Context</strong> - 全局状态管理
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">核心功能：</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>GitHub OAuth 应用配置</li>
              <li>NextAuth API 路由设置</li>
              <li>SessionProvider 全局状态管理</li>
              <li>useSession Hook 获取登录状态</li>
              <li>signIn/signOut 方法控制登录状态</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
