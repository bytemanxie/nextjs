'use client';

import { SWRConfig } from 'swr';
import useSWR from 'swr';
import { SWRInstances, createSWRInstance, type SWRInstanceType } from './index';

// 示例1: 使用缓存实例 - 静态数据
export function CachedDataExample() {
  return (
    <SWRConfig value={SWRInstances.cache}>
      <UserProfile />
    </SWRConfig>
  );
}

function UserProfile() {
  const { data, error, isLoading } = useSWR('/api/user/profile');

  if (isLoading) return <div>加载用户信息...</div>;
  if (error) return <div>加载失败: {error.message}</div>;

  return (
    <div>
      <h3>用户信息 (缓存实例)</h3>
      <p>姓名: {data?.name}</p>
      <p>邮箱: {data?.email}</p>
      <p>注册时间: {data?.createdAt}</p>
    </div>
  );
}

// 示例2: 使用无缓存实例 - 实时数据
export function RealtimeDataExample() {
  return (
    <SWRConfig value={SWRInstances.realtime}>
      <SearchResults />
    </SWRConfig>
  );
}

function SearchResults() {
  const { data, error, isLoading } = useSWR('/api/search?q=react');

  if (isLoading) return <div>搜索中...</div>;
  if (error) return <div>搜索失败: {error.message}</div>;

  return (
    <div>
      <h3>搜索结果 (实时实例)</h3>
      {data?.results.map((item: any) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

// 示例3: 使用轮询实例 - 监控数据
export function PollingDataExample() {
  return (
    <SWRConfig value={SWRInstances.polling}>
      <LiveStats />
    </SWRConfig>
  );
}

function LiveStats() {
  const { data, error, isLoading } = useSWR('/api/stats');

  if (isLoading) return <div>加载统计信息...</div>;
  if (error) return <div>加载失败: {error.message}</div>;

  return (
    <div>
      <h3>实时统计 (轮询实例)</h3>
      <p>在线用户: {data?.onlineUsers}</p>
      <p>总访问量: {data?.totalVisits}</p>
      <p>最后更新: {data?.lastUpdated}</p>
    </div>
  );
}

// 示例4: 动态选择实例
export function DynamicInstanceExample({
  dataType,
}: {
  dataType: SWRInstanceType;
}) {
  const config = createSWRInstance(dataType);

  return (
    <SWRConfig value={config}>
      <DynamicDataComponent dataType={dataType} />
    </SWRConfig>
  );
}

function DynamicDataComponent({ dataType }: { dataType: SWRInstanceType }) {
  const { data, error, isLoading } = useSWR('/api/data');

  if (isLoading) return <div>加载中...</div>;
  if (error) return <div>加载失败: {error.message}</div>;

  return (
    <div>
      <h3>动态数据 ({dataType} 实例)</h3>
      <p>数据: {JSON.stringify(data)}</p>
    </div>
  );
}

// 示例5: 组合使用多个实例
export function MultipleInstancesExample() {
  return (
    <div>
      <h2>多种 SWR 实例组合使用</h2>

      {/* 缓存实例 - 用户信息 */}
      <SWRConfig value={SWRInstances.cache}>
        <UserProfile />
      </SWRConfig>

      {/* 实时实例 - 搜索结果 */}
      <SWRConfig value={SWRInstances.realtime}>
        <SearchResults />
      </SWRConfig>

      {/* 轮询实例 - 实时统计 */}
      <SWRConfig value={SWRInstances.polling}>
        <LiveStats />
      </SWRConfig>
    </div>
  );
}
