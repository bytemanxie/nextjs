'use client';
import { useParams } from 'next/navigation';
import { PageContainer } from '../layout';
import ServerTest from './serverTest';

export default function ClientServerTest() {
  const params = useParams();
  const varient = params.varient as string;

  return (
    <PageContainer gradientFrom="from-red-50" gradientTo="to-orange-100">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          客户端服务端组件测试
        </h1>
        <p className="text-lg text-muted-foreground">当前路由参数: {varient}</p>
      </header>

      <ServerTest />
    </PageContainer>
  );
}
