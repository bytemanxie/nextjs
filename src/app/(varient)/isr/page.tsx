import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NewsCard, StatsCard, WeatherCard, ISRInfoCard } from '@/features/isr';
import { PageHeader, PageContainer } from '../layout';

// 模拟获取可定期更新的数据
async function getISRData() {
  // 模拟API调用
  await new Promise(resolve => setTimeout(resolve, 500));

  const now = new Date();
  const generateTime = now.toLocaleString('zh-CN');

  return {
    generateTime,
    newsData: {
      headlines: [
        {
          id: 1,
          title: 'Next.js 15 发布重大更新',
          summary: '新版本带来了更快的构建速度和更好的开发体验',
          publishTime: new Date(
            now.getTime() - Math.random() * 3600000
          ).toLocaleString('zh-CN'),
          category: '技术',
        },
        {
          id: 2,
          title: 'React 19 RC 版本现已可用',
          summary: '包含新的 Hooks 和性能优化',
          publishTime: new Date(
            now.getTime() - Math.random() * 3600000
          ).toLocaleString('zh-CN'),
          category: '技术',
        },
        {
          id: 3,
          title: 'Web 开发趋势 2024',
          summary: '了解今年最重要的前端开发趋势',
          publishTime: new Date(
            now.getTime() - Math.random() * 3600000
          ).toLocaleString('zh-CN'),
          category: '趋势',
        },
      ],
    },
    statsData: {
      pageViews: Math.floor(Math.random() * 10000) + 1000,
      uniqueVisitors: Math.floor(Math.random() * 5000) + 500,
      avgLoadTime: (Math.random() * 2 + 0.5).toFixed(2),
      lastUpdated: generateTime,
    },
    weatherData: {
      city: '北京',
      temperature: Math.floor(Math.random() * 30) - 10,
      condition: ['晴', '多云', '小雨', '阴'][Math.floor(Math.random() * 4)],
      humidity: Math.floor(Math.random() * 40) + 40,
      windSpeed: Math.floor(Math.random() * 20) + 5,
    },
  };
}

export default async function ISRPage() {
  // 这些数据会根据 revalidate 设置定期更新
  const data = await getISRData();

  return (
    <PageContainer gradientFrom="from-purple-50" gradientTo="to-pink-100">
      <PageHeader
        title="ISR (增量静态再生) 示例"
        description="页面在后台定期更新，兼具静态页面的性能和动态内容的实时性"
        badgeText="增量静态再生"
        gradientFrom="from-purple-50"
        gradientTo="to-pink-100"
      />

      {/* 更新时间信息 */}
      <ISRInfoCard generateTime={data.generateTime} />

      <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* 新闻头条 */}
        <NewsCard news={data.newsData.headlines} />

        {/* 侧边栏 */}
        <div className="space-y-6">
          {/* 网站统计 */}
          <StatsCard stats={data.statsData} />

          {/* 天气信息 */}
          <WeatherCard weather={data.weatherData} />
        </div>
      </div>

      {/* ISR 工作原理 */}
      <Card className="mt-8 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>ISR 工作原理</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3 flex items-center">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                请求流程
              </h3>
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="w-full justify-start text-left"
                >
                  1. 用户访问页面，立即返回缓存版本
                </Badge>
                <Badge
                  variant="outline"
                  className="w-full justify-start text-left"
                >
                  2. 如果页面过期，触发后台重新生成
                </Badge>
                <Badge
                  variant="outline"
                  className="w-full justify-start text-left"
                >
                  3. 新版本生成完成后替换缓存
                </Badge>
                <Badge
                  variant="outline"
                  className="w-full justify-start text-left"
                >
                  4. 后续用户访问获得更新内容
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                适用场景
              </h3>
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="w-full justify-start text-left"
                >
                  电商产品页面 (价格变化)
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-start text-left"
                >
                  新闻资讯网站 (内容更新)
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-start text-left"
                >
                  博客文章 (评论数更新)
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-start text-left"
                >
                  数据看板 (统计信息)
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  );
}

// 启用ISR，每60秒重新验证页面
export const revalidate = 60;
