import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/features/ssr';

interface StatsData {
  pageViews: number;
  uniqueVisitors: number;
  avgLoadTime: string;
  lastUpdated: string;
}

interface StatsCardProps {
  stats: StatsData;
}

/**
 * ISR 统计数据卡片组件
 * 显示实时更新的网站统计信息
 */
export function StatsCard({ stats }: StatsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          实时统计
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">页面访问:</span>
          <Badge variant="outline" className="font-mono">
            {stats.pageViews.toLocaleString()}
          </Badge>
        </div>
        <Separator />
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">独立访客:</span>
          <Badge variant="outline" className="font-mono">
            {stats.uniqueVisitors.toLocaleString()}
          </Badge>
        </div>
        <Separator />
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">平均加载:</span>
          <Badge variant="outline" className="font-mono">
            {stats.avgLoadTime}s
          </Badge>
        </div>
        <Separator />
        <div className="text-xs text-muted-foreground pt-2">
          更新于: {stats.lastUpdated}
        </div>
      </CardContent>
    </Card>
  );
}
