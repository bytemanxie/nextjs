import Link from 'next/link';

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-200"
          >
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
        </div>

        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            ISR (增量静态再生) 示例
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            页面在后台定期更新，兼具静态页面的性能和动态内容的实时性
          </p>
        </header>

        {/* 更新时间信息 */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
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
          </h2>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>页面生成时间:</strong>{' '}
              <span className="font-mono text-purple-600 dark:text-purple-400">
                {data.generateTime}
              </span>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              <strong>重新验证策略:</strong> 页面每 60 秒在后台重新生成一次
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-1">
              <strong>缓存行为:</strong>{' '}
              用户总是先看到缓存版本，新版本在后台准备就绪后替换
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* 新闻头条 */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
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
              </h2>
              <div className="space-y-4">
                {data.newsData.headlines.map(news => (
                  <article
                    key={news.id}
                    className="border-l-4 border-blue-500 pl-4 py-2"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {news.title}
                      </h3>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                        {news.category}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {news.summary}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      发布时间: {news.publishTime}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* 网站统计 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
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
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    页面访问:
                  </span>
                  <span className="font-mono text-green-600 dark:text-green-400">
                    {data.statsData.pageViews.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    独立访客:
                  </span>
                  <span className="font-mono text-green-600 dark:text-green-400">
                    {data.statsData.uniqueVisitors.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    平均加载:
                  </span>
                  <span className="font-mono text-green-600 dark:text-green-400">
                    {data.statsData.avgLoadTime}s
                  </span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 pt-2 border-t">
                  更新于: {data.statsData.lastUpdated}
                </div>
              </div>
            </div>

            {/* 天气信息 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                天气信息
              </h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {data.weatherData.temperature}°C
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  {data.weatherData.condition}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      湿度:
                    </span>
                    <span>{data.weatherData.humidity}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      风速:
                    </span>
                    <span>{data.weatherData.windSpeed} km/h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ISR 工作原理 */}
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            ISR 工作原理
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                请求流程:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>用户访问页面，立即返回缓存版本</li>
                <li>如果页面过期，触发后台重新生成</li>
                <li>新版本生成完成后替换缓存</li>
                <li>后续用户访问获得更新内容</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                适用场景:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>电商产品页面 (价格变化)</li>
                <li>新闻资讯网站 (内容更新)</li>
                <li>博客文章 (评论数更新)</li>
                <li>数据看板 (统计信息)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 启用ISR，每60秒重新验证页面
export const revalidate = 60;
