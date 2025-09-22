import Link from 'next/link';

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
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
            SSR (服务器端渲染) 示例
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            每次刷新页面都会在服务器端重新生成内容
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* 实时数据卡片 */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
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
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">
                  生成时间:
                </span>
                <span className="font-mono text-green-600 dark:text-green-400">
                  {data.timestamp}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">
                  随机ID:
                </span>
                <span className="font-mono text-green-600 dark:text-green-400">
                  {data.randomData.id}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">天气:</span>
                <span className="font-mono text-green-600 dark:text-green-400">
                  {data.randomData.weather}
                </span>
              </div>
            </div>
          </div>

          {/* 服务器信息卡片 */}
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
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
              服务器信息
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">
                  Node.js 版本:
                </span>
                <span className="font-mono text-blue-600 dark:text-blue-400">
                  {data.serverInfo.node_version}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">平台:</span>
                <span className="font-mono text-blue-600 dark:text-blue-400">
                  {data.serverInfo.platform}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">
                  内存使用:
                </span>
                <span className="font-mono text-blue-600 dark:text-blue-400">
                  {data.serverInfo.memory_usage} MB
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 特性说明 */}
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            SSR 特性说明
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                优势:
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>SEO 友好，搜索引擎可以直接索引内容</li>
                <li>首屏加载快，用户能立即看到内容</li>
                <li>可以处理实时数据和用户特定内容</li>
                <li>支持动态路由和个性化内容</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                注意事项:
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>服务器负载较高，每次请求都需要渲染</li>
                <li>TTFB (Time To First Byte) 可能较长</li>
                <li>需要服务器运行环境</li>
                <li>缓存策略需要额外考虑</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 刷新按钮 */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.location.reload()}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            刷新页面查看新数据
          </button>
        </div>
      </div>
    </div>
  );
}
