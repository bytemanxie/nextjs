import Link from 'next/link';

// 模拟获取构建时静态数据的函数
async function getStaticData() {
  // 这个函数只在构建时运行
  const buildTime = new Date().toLocaleString('zh-CN');

  return {
    buildTime,
    staticContent: {
      title: '静态内容示例',
      description: '这些内容在构建时生成，不会在运行时改变',
      features: ['超快的加载速度', '优秀的SEO表现', '低服务器负载', 'CDN友好'],
    },
    staticData: {
      posts: [
        {
          id: 1,
          title: 'Next.js 15 新特性',
          excerpt: '了解 Next.js 15 的最新功能和改进',
          publishDate: '2024-01-15',
          author: '张三',
        },
        {
          id: 2,
          title: 'React 19 更新指南',
          excerpt: '深入探讨 React 19 的新功能和最佳实践',
          publishDate: '2024-01-10',
          author: '李四',
        },
        {
          id: 3,
          title: '现代前端开发工具链',
          excerpt: '构建高效的前端开发环境',
          publishDate: '2024-01-05',
          author: '王五',
        },
      ],
      categories: [
        { name: '前端开发', count: 15 },
        { name: 'React', count: 8 },
        { name: 'Next.js', count: 12 },
        { name: 'TypeScript', count: 6 },
      ],
    },
  };
}

export default async function SSGPage() {
  // 这些数据在构建时生成
  const data = await getStaticData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
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
            SSG (静态站点生成) 示例
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            这个页面在构建时生成，提供最快的加载速度
          </p>
        </header>

        {/* 构建信息 */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto">
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            构建信息
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>构建时间:</strong>{' '}
              <span className="font-mono text-blue-600 dark:text-blue-400">
                {data.buildTime}
              </span>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              这个时间戳显示了页面的构建时间，除非重新构建项目，否则不会改变。
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* 文章列表 */}
          <div className="lg:col-span-2">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                静态文章列表
              </h2>
              <div className="space-y-4">
                {data.staticData.posts.map(post => (
                  <article
                    key={post.id}
                    className="border-b border-gray-200 dark:border-gray-700 pb-4"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>作者: {post.author}</span>
                      <span>{post.publishDate}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* 分类 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                文章分类
              </h3>
              <div className="space-y-2">
                {data.staticData.categories.map(category => (
                  <div
                    key={category.name}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-600 dark:text-gray-300">
                      {category.name}
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 特性说明 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                SSG 特性
              </h3>
              <ul className="space-y-2">
                {data.staticContent.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
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
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 性能说明 */}
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            SSG 性能优势
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg
                  className="w-8 h-8 text-green-600 dark:text-green-400"
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
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                极速加载
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                静态文件直接从CDN提供
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                高可用性
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                无服务器依赖，99.9%可用性
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg
                  className="w-8 h-8 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                低成本
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                无服务器运行成本
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
