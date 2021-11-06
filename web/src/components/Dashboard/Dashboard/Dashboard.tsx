import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Page, CalloutCard, Layout, Card } from '@shopify/polaris'
import AppLayout from 'src/layouts/AppLayout/AppLayout'
import '@shopify/polaris/build/esm/styles.css'
import CardDashboard1 from 'src/components/Dashboard/CardDashboard1/CardDashboard1'

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
            <Layout.Section oneThird>
              <Card.Section>
                <CardDashboard1 ideas={ideas} />
              </Card.Section>
            </Layout.Section>
            <Layout.Section oneThird>
              <Card.Section>
                <CalloutCard
                  title="Got an idea?"
                  primaryAction={{
                    content: 'New idea',
                    url: '/dashboard/ideas/new',
                  }}
                >
                  <p>Create a new idea to reduce cost</p>
                </CalloutCard>
              </Card.Section>
            </Layout.Section>
          </Layout>
        </Page>
      </AppLayout>
    </>
  )
}

export default Dashboard
