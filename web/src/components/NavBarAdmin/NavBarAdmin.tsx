import { Navigation } from '@shopify/polaris'
import {
  HomeMajor,
  HintMajor,
  ChecklistMajor,
  CirclePlusOutlineMinor,
  AppsMajor,
  AnalyticsMajor,
  SettingsMajor,
} from '@shopify/polaris-icons'

const NavBarAdmin = () => {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: '/admin',
            label: 'Dashboard',
            icon: HomeMajor,
          },
          {
            url: '/admin/ideas',
            label: 'Ideas',
            icon: HintMajor,
            secondaryAction: {
              url: '/admin/ideas/new',
              accessibilityLabel: 'Add an idea',
              icon: CirclePlusOutlineMinor,
            },
          },
          {
            url: '/admin/plans',
            label: 'Plans',
            icon: ChecklistMajor,
          },
          {
            url: '/admin/tasks',
            label: 'Tasks',
            icon: AppsMajor,
          },
          {
            url: '/admin/results',
            label: 'Results',
            icon: AnalyticsMajor,
          },
        ]}
      />
      <Navigation.Section
        items={[
          {
            url: '/admin/settings',
            label: 'Settings',
            icon: SettingsMajor,
          },
        ]}
        separator
      />
    </Navigation>
  )
}

export default NavBarAdmin
