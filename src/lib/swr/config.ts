import { SWRConfiguration } from 'swr';

// 基础 fetcher 函数
const fetcher = async (url: string): Promise<any> => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error(`HTTP Error: ${response.status}`);
    (error as any).status = response.status;
    throw error;
  }

  return response.json();
};

// 1. 缓存实例 - 适合静态数据，长时间缓存
export const swrCacheConfig: SWRConfiguration = {
  fetcher,
  revalidateOnFocus: false, // 不自动重新验证
  revalidateOnReconnect: false, // 网络重连时不重新验证
  revalidateIfStale: false, // 数据过期时不重新验证
  dedupingInterval: 60000, // 1分钟去重
  focusThrottleInterval: 60000, // 1分钟节流
  errorRetryCount: 2,
  errorRetryInterval: 10000,
};

// 2. 无缓存实例 - 适合实时数据，每次都重新获取
export const swrNoCacheConfig: SWRConfiguration = {
  fetcher,
  revalidateOnFocus: true, // 窗口获得焦点时重新验证
  revalidateOnReconnect: true, // 网络重连时重新验证
  revalidateIfStale: true, // 数据过期时重新验证
  dedupingInterval: 0, // 不去重，每次都请求
  focusThrottleInterval: 0, // 不节流
  errorRetryCount: 1,
  errorRetryInterval: 3000,
};

// 3. 定时轮询实例 - 适合需要定期更新的数据
export const swrPollingConfig: SWRConfiguration = {
  fetcher,
  refreshInterval: 5000, // 5秒自动刷新
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  revalidateIfStale: true,
  dedupingInterval: 1000, // 1秒去重
  focusThrottleInterval: 2000, // 2秒节流
  errorRetryCount: 3,
  errorRetryInterval: 5000,
};

// 创建 SWR 实例的工厂函数
export const createSWRInstance = (type: SWRInstanceType) => {
  switch (type) {
    case 'cache':
      return swrCacheConfig;
    case 'realtime':
      return swrNoCacheConfig;
    case 'polling':
      return swrPollingConfig;
    default:
      return swrCacheConfig;
  }
};

// 预定义的实例导出
export const SWRInstances = {
  // 缓存实例 - 静态数据
  cache: swrCacheConfig,

  // 无缓存实例 - 实时数据
  realtime: swrNoCacheConfig,

  // 轮询实例 - 监控数据
  polling: swrPollingConfig,
} as const;

// 类型定义
export type SWRInstanceType = keyof typeof SWRInstances;
