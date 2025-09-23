import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  publishTime: string;
  category: string;
}

interface NewsCardProps {
  news: NewsItem[];
}

/**
 * ISR 新闻卡片组件
 * 显示实时更新的新闻头条列表
 */
export function NewsCard({ news }: NewsCardProps) {
  return (
    <Card className="lg:col-span-2">
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
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"
            />
          </svg>
          实时新闻头条
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {news.map(item => (
          <article
            key={item.id}
            className="border-l-4 border-blue-500 pl-4 py-2"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <Badge variant="secondary">{item.category}</Badge>
            </div>
            <p className="text-muted-foreground mb-2">{item.summary}</p>
            <p className="text-sm text-muted-foreground">
              发布时间: {item.publishTime}
            </p>
          </article>
        ))}
      </CardContent>
    </Card>
  );
}
