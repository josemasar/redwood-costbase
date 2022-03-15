import { MetaTags } from '@redwoodjs/web'
import AppLayout from 'src/layouts/AppLayout/AppLayout'
import CardDashboardMain from 'src/components/Dashboard/CardDashboardMain/CardDashboardMain'
import BarChartIdeas from '../BarChartIdeas/BarChartIdeas'
import BarChartTasks from '../BarChartTasks/BarChartTasks'

const Dashboard = ({ ideas, tasks }) => {
  return (
    <>
      <MetaTags
        title="Admin"
        // description="Admin description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <AppLayout>
        <CardDashboardMain ideas={ideas} tasks={tasks} />
        <BarChartIdeas />
        <BarChartTasks />
      </AppLayout>
    </>
  )
}

export default Dashboard
