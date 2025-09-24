import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, Zap, RefreshCw, Github } from 'lucide-react';

export default function Home() {
  return (
    <>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Next.js API 学习平台
        </h1>
        <p className="text-lg text-muted-foreground">
          探索 Next.js 15 的各种渲染模式和 API 功能
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Badge variant="destructive">Next.js 15</Badge>
          <Badge variant="secondary">Tailwind CSS</Badge>
          <Badge variant="outline">shadcn/ui</Badge>
        </div>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* SSR 示例 */}
        <Card className="hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-xl text-green-600">
              SSR (服务器端渲染)
            </CardTitle>
            <CardDescription>
              服务器端渲染，每次请求都在服务器上生成页面内容
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/ssr">查看示例</Link>
            </Button>
          </CardContent>
        </Card>

        {/* SSG 示例 */}
        <Card className="hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle className="text-xl">SSG (静态站点生成)</CardTitle>
            <CardDescription>
              构建时生成静态页面，提供最快的加载速度
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/ssg">查看示例</Link>
            </Button>
          </CardContent>
        </Card>

        {/* ISR 示例 */}
        <Card className="hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <CardTitle className="text-xl">ISR (增量静态再生)</CardTitle>
            <CardDescription>
              结合SSG和SSR的优势，允许静态页面在后台更新
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/isr">查看示例</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <CardTitle className="text-xl">客户端服务端组件测试</CardTitle>
            <CardDescription>测试客户端服务端组件的交互</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/client-server-test">查看示例</Link>
            </Button>
          </CardContent>
        </Card>

        {/* GitHub OAuth 认证 */}
        <Card className="hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="bg-gray-100 dark:bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Github className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </div>
            <CardTitle className="text-xl">GitHub OAuth 认证</CardTitle>
            <CardDescription>
              使用 NextAuth.js 实现 GitHub OAuth 登录功能
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/github-auth">查看示例</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">关于这个项目</CardTitle>
          </CardHeader>
          <CardContent>
            <Alert>
              <AlertDescription>
                这是一个 Next.js 15 学习项目，演示了不同的渲染模式：
                <br />• <strong>SSR</strong>：适合需要实时数据的页面
                <br />• <strong>SSG</strong>：适合内容相对静态的页面
                <br />• <strong>ISR</strong>：适合需要定期更新的静态内容
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
