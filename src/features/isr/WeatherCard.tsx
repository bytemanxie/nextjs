import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

interface WeatherCardProps {
  weather: WeatherData;
}

/**
 * ISR 天气信息卡片组件
 * 显示实时更新的天气数据
 */
export function WeatherCard({ weather }: WeatherCardProps) {
  // 根据温度设置颜色
  const getTempVariant = (temp: number) => {
    if (temp < 0) return 'destructive';
    if (temp < 15) return 'secondary';
    if (temp < 25) return 'default';
    return 'destructive';
  };

  // 根据天气条件设置颜色
  const getConditionVariant = (condition: string) => {
    switch (condition) {
      case '晴':
        return 'default';
      case '多云':
        return 'secondary';
      case '小雨':
        return 'outline';
      case '阴':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
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
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <div>
          <Badge
            variant={getTempVariant(weather.temperature)}
            className="text-3xl font-bold px-4 py-2"
          >
            {weather.temperature}°C
          </Badge>
        </div>
        <div>
          <Badge
            variant={getConditionVariant(weather.condition)}
            className="text-lg px-3 py-1"
          >
            {weather.condition}
          </Badge>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">湿度:</span>
            <Badge variant="outline">{weather.humidity}%</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">风速:</span>
            <Badge variant="outline">{weather.windSpeed} km/h</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
