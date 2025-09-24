// SWR 统一导出文件

// 三种 SWR 实例配置
export {
  swrCacheConfig,
  swrNoCacheConfig,
  swrPollingConfig,
  createSWRInstance,
  SWRInstances,
  type SWRInstanceType,
} from './config';

// 使用示例
export {
  CachedDataExample,
  RealtimeDataExample,
  PollingDataExample,
  DynamicInstanceExample,
  MultipleInstancesExample,
} from './examples';

// 重新导出 SWR 核心功能
export { SWRConfig } from 'swr';
export type { SWRConfiguration, SWRResponse } from 'swr';
