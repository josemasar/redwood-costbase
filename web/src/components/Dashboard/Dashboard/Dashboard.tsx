import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Page, Layout, Card } from '@shopify/polaris'
import AppLayout from 'src/layouts/AppLayout/AppLayout'
import '@shopify/polaris/build/esm/styles.css'
import CardDashboard1 from 'src/components/Dashboard/CardDashboard1/CardDashboard1'
import BarChartIdeas from '../BarChartIdeas/BarChartIdeas'
import BarChartTasks from '../BarChartTasks/BarChartTasks'

const Dashboard = ({ ideas }) => {
  return (
    <>
      <MetaTags
        title="Admin"
        // description="Admin description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <AppLayout>
        <Page fullWidth title="Dashboard">
          <Layout>
            <Layout.Section oneHalf>
              <Card.Section>
                <CardDashboard1 ideas={ideas} />
              </Card.Section>
            </Layout.Section>
            <div className="max-w-7xl">
              <Layout.Section secondary>
                <Card.Section>
                  <BarChartIdeas />
                </Card.Section>
                <Card.Section>
                  <BarChartTasks />
                </Card.Section>
              </Layout.Section>
            </div>
          </Layout>
        </Page>
      </AppLayout>
    </>
  )
}

export default Dashboard
