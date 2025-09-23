'use client';
import { PageHeader, PageContainer } from '../layout';
import ServerTest from './serverTest';

export default function ClientServerTest() {
  return (
    <PageContainer gradientFrom="from-red-50" gradientTo="to-orange-100">
      <PageHeader
        title="ClientServerTest"
        description="ClientServerTest"
        badgeText="ClientServerTest"
        gradientFrom="from-red-50"
        gradientTo="to-orange-100"
      />

      <ServerTest />
    </PageContainer>
  );
}
