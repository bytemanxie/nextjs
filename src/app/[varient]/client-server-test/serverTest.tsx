export default async function ServerTest() {
  const serverTime = new Date().toISOString();
  await new Promise(resolve => setTimeout(resolve, 100));
  const serverData = {
    message: '这是来自服务端的数据',
    timestamp: serverTime,
    environment: 'server-side',
  };
  return (
    <div>
      <p>{serverData.message}</p>
      <p>{serverData.timestamp}</p>
      <p>{serverData.environment}</p>
    </div>
  );
}
