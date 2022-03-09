import '@shopify/polaris/build/esm/styles.css'
import { Card } from '@shopify/polaris'
import { BarChart, Bar, YAxis, Tooltip } from 'recharts'

const BarChartIdeas = () => {
  const dataChart = [
    { rawValue: 516.7, label: 'Jan. 2020' },
    { rawValue: 1112.4, label: 'Feb. 2020' },
    { rawValue: 1075.6, label: 'Mar. 2020' },
    { rawValue: 526.6, label: 'Apr. 2020' },
    { rawValue: 619.5, label: 'May. 2020' },
    { rawValue: 598.3, label: 'Jun. 2020' },
    { rawValue: 100.4, label: 'Jul. 2020' },
    { rawValue: 328.2, label: 'Aug. 2020' },
    { rawValue: 718.7, label: 'Sep. 2020' },
    { rawValue: 1334.9, label: 'Oct. 2020' },
    { rawValue: 1802, label: 'Nov. 2020' },
    { rawValue: 1802, label: 'Nov. 2020' },
    { rawValue: 1802, label: 'Nov. 2020' },
    { rawValue: 1802, label: 'Nov. 2020' },
    { rawValue: 1802, label: 'Nov. 2020' },
    { rawValue: 1802, label: 'Nov. 2020' },
    { rawValue: 619.5, label: 'May. 2020' },
    { rawValue: 598.3, label: 'Jun. 2020' },
    { rawValue: 100.4, label: 'Jul. 2020' },
  ]

  return (
    <div className="w-auto">
      <Card title="Ideas" sectioned>
        <BarChart width={350} height={130} data={dataChart}>
          <Bar dataKey="rawValue" fill="#C62368" />
          <YAxis axisLine={false} tickMargin={8} tickLine={false} />
          <Tooltip />
        </BarChart>
      </Card>
    </div>
  )
}

export default BarChartIdeas
