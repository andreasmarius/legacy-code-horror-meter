declare module 'react-gauge-chart' {
  interface GaugeChartProps {
    id: string;
    nrOfLevels?: number;
    percent: number;
    colors?: string[];
    arcWidth?: number;
    textColor?: string;
    needleColor?: string;
    needleBaseColor?: string;
    formatTextValue?: (value: number) => string;
    animate?: boolean;
    animDelay?: number;
  }

  const GaugeChart: React.FC<GaugeChartProps>;
  export default GaugeChart;
}
