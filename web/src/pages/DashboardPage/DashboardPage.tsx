import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Page, CalloutCard, Layout, MediaCard } from '@shopify/polaris'
import AppLayout from 'src/layouts/AppLayout/AppLayout'
import '@shopify/polaris/build/esm/styles.css'

const DashboardPage = () => {
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
            <Layout.Section>
              <CalloutCard
                title="Got an idea?"
                primaryAction={{
                  content: 'New idea',
                  url: '/admin/ideas/new',
                }}
              >
                <p>Create a new idea to reduce cost</p>
              </CalloutCard>
            </Layout.Section>
            <Layout.Section>
              <MediaCard
                title="Total ideas value in your organisation"
                primaryAction={{
                  content: 'Detail',
                  url: '/admin/ideas',
                }}
                description="Everyone can power up cost opmitization"
                popoverActions={[{ content: 'Dismiss', onAction: () => {} }]}
              ></MediaCard>
            </Layout.Section>
          </Layout>
        </Page>
      </AppLayout>
    </>
  )
}

export default DashboardPage
