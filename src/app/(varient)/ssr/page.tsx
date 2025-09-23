import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator, RefreshButton } from '@/features/ssr';
import { PageHeader, PageContainer } from '../layout';

// 模拟获取服务器端数据的函数
async function getServerData() {
  // 模拟API调用延迟
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    timestamp: new Date().toLocaleString('zh-CN'),
    serverInfo: {
      node_version: process.version,
      platform: process.platform,
      memory_usage: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
    },
    randomData: {
      id: Math.floor(Math.random() * 1000),
      message: '这是服务器端生成的随机数据',
      weather: ['晴天', '多云', '雨天', '雪天'][Math.floor(Math.random() * 4)],
    },
  };
}

export default async function SSRPage() {
  // 在每次请求时获取数据
  const data = await getServerData();

  return (
    <PageContainer gradientFrom="from-green-50" gradientTo="to-emerald-100">
      <PageHeader
        title="SSR (服务器端渲染) 示例"
        description="每次刷新页面都会在服务器端重新生成内容"
        badgeText="服务器端渲染"
        gradientFrom="from-green-50"
        gradientTo="to-emerald-100"
      />

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* 实时数据卡片 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              实时数据
            </CardTitle>
            <CardDescription>{data.randomData.message}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">生成时间:</span>
              <Badge variant="outline" className="font-mono">
                {data.timestamp}
              </Badge>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">随机ID:</span>
              <Badge variant="secondary" className="font-mono">
                {data.randomData.id}
              </Badge>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">天气:</span>
              <Badge
                variant={
                  data.randomData.weather === '晴天' ? 'default' : 'secondary'
                }
                className="font-mono"
              >
                {data.randomData.weather}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* 服务器信息卡片 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
              服务器信息
            </CardTitle>
            <CardDescription>当前服务器的运行环境信息</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Node.js 版本:</span>
              <Badge variant="outline" className="font-mono">
                {data.serverInfo.node_version}
              </Badge>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">平台:</span>
              <Badge variant="secondary" className="font-mono">
                {data.serverInfo.platform}
              </Badge>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">内存使用:</span>
              <Badge
                variant={
                  data.serverInfo.memory_usage > 50 ? 'destructive' : 'default'
                }
                className="font-mono"
              >
                {data.serverInfo.memory_usage} MB
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 特性说明 */}
      <Card className="mt-8 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>SSR 特性说明</CardTitle>
          <CardDescription>了解服务器端渲染的优势和注意事项</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                优势
              </h3>
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="w-full justify-start text-left"
                >
                  SEO 友好，搜索引擎可以直接索引内容
                </Badge>
                <Badge
                  variant="outline"
                  className="w-full justify-start text-left"
                >
                  首屏加载快，用户能立即看到内容
                </Badge>
                <Badge
                  variant="outline"
                  className="w-full justify-start text-left"
                >
                  可以处理实时数据和用户特定内容
                </Badge>
                <Badge
                  variant="outline"
                  className="w-full justify-start text-left"
                >
                  支持动态路由和个性化内容
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-3 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 15.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                注意事项
              </h3>
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="w-full justify-start text-left"
                >
                  服务器负载较高，每次请求都需要渲染
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-start text-left"
                >
                  TTFB (Time To First Byte) 可能较长
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-start text-left"
                >
                  需要服务器运行环境
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-start text-left"
                >
                  缓存策略需要额外考虑
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 刷新按钮 */}
      <div className="text-center mt-8">
        <RefreshButton />
      </div>
    </PageContainer>
  );
}
