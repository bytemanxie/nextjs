import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ISRInfoCardProps {
  generateTime: string;
}

/**
 * ISR 信息卡片组件
 * 显示 ISR 页面生成和缓存信息
 */
export function ISRInfoCard({ generateTime }: ISRInfoCardProps) {
  return (
    <Card className="mb-8 max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <svg
            className="w-6 h-6 mr-2 text-purple-600"
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
          页面再生信息
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground font-medium">
            页面生成时间:
          </span>
          <Badge variant="outline" className="font-mono">
            {generateTime}
          </Badge>
        </div>
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <span className="text-muted-foreground font-medium">
              重新验证策略:
            </span>
            <Badge variant="secondary">页面每 60 秒在后台重新生成一次</Badge>
          </div>
          <div className="flex items-start justify-between">
            <span className="text-muted-foreground font-medium">缓存行为:</span>
            <Badge variant="outline" className="text-center">
              用户总是先看到缓存版本，新版本在后台准备就绪后替换
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
