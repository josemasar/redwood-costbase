import '@shopify/polaris/build/esm/styles.css'
import { Card } from '@shopify/polaris'
import { BarChart, Bar, YAxis, Tooltip } from 'recharts'

const BarChartTasks = () => {
  const dataChart = [
    { rawValue: 1516.7, label: 'Jan. 2020' },
    { rawValue: 1112.4, label: 'Feb. 2020' },
    { rawValue: 9075.6, label: 'Mar. 2020' },
    { rawValue: 2526.6, label: 'Apr. 2020' },
    { rawValue: 1619.5, label: 'May. 2020' },
    { rawValue: 5598.3, label: 'Jun. 2020' },
    { rawValue: 11100.4, label: 'Jul. 2020' },
    { rawValue: 7328.2, label: 'Aug. 2020' },
    { rawValue: 7718.7, label: 'Sep. 2020' },
    { rawValue: 12334.9, label: 'Oct. 2020' },
    { rawValue: 11802, label: 'Nov. 2020' },
  ]
  return (
    <div>
      <Card title="Tasks" sectioned>
        <BarChart width={350} height={130} data={dataChart}>
          <Bar dataKey="rawValue" fill="#C62368" />
          <YAxis axisLine={false} tickMargin={8} tickLine={false} />
          <Tooltip />
        </BarChart>
      </Card>
    </div>
  )
}

export default BarChartTasks
