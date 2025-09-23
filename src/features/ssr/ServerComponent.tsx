import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

/**
 * 纯服务端组件示例
 * 这个组件只在服务器端渲染，包含异步数据获取
 */
export async function ServerComponent() {
  // 模拟服务端数据获取
  const serverTime = new Date().toISOString();

  // 模拟异步操作（在真实项目中可能是数据库查询或API调用）
  await new Promise(resolve => setTimeout(resolve, 100));

  const serverData = {
    message: '这是来自服务端的数据',
    timestamp: serverTime,
    environment: 'server-side',
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          服务端组件
          <Badge variant="secondary">Server Component</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">{serverData.message}</p>
        <div className="text-xs space-y-1">
          <p>
            <strong>渲染时间:</strong> {serverData.timestamp}
          </p>
          <p>
            <strong>环境:</strong> {serverData.environment}
          </p>
          <p>
            <strong>特点:</strong> 可以直接使用 async/await
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
