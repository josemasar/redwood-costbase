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
            url: '/dashboard',
            label: 'Dashboard',
            icon: HomeMajor,
          },
          {
            url: '/dashboard/ideas',
            label: 'Ideas',
            icon: HintMajor,
            secondaryAction: {
              url: '/dashboard/ideas/new',
              accessibilityLabel: 'Add an idea',
              icon: CirclePlusOutlineMinor,
            },
          },
          {
            url: '/dashboard/plans',
            label: 'Plans',
            icon: ChecklistMajor,
          },
          {
            url: '/dashboard/tasks',
            label: 'Tasks',
            icon: AppsMajor,
          },
          {
            url: '/dashboard/results',
            label: 'Results',
            icon: AnalyticsMajor,
          },
        ]}
      />
      <Navigation.Section
        items={[
          {
            url: '/dashboard/settings',
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
