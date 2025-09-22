import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Next.js API 学习平台
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            探索 Next.js 15 的各种渲染模式和 API 功能
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* SSR 示例 */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12l5 5L20 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              SSR (服务器端渲染)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              服务器端渲染，每次请求都在服务器上生成页面内容
            </p>
            <Link
              href="/ssr"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              查看示例
            </Link>
          </div>

          {/* SSG 示例 */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400"
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
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              SSG (静态站点生成)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              构建时生成静态页面，提供最快的加载速度
            </p>
            <Link
              href="/ssg"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              查看示例
            </Link>
          </div>

          {/* ISR 示例 */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-600 dark:text-purple-400"
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
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              ISR (增量静态再生)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              结合SSG和SSR的优势，允许静态页面在后台更新
            </p>
            <Link
              href="/isr"
              className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
            >
              查看示例
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              关于这个项目
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              这是一个 Next.js 15 学习项目，演示了不同的渲染模式：
              <br />• <strong>SSR</strong>：适合需要实时数据的页面
              <br />• <strong>SSG</strong>：适合内容相对静态的页面
              <br />• <strong>ISR</strong>：适合需要定期更新的静态内容
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
