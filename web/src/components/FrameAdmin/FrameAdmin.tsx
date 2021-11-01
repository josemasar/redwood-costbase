import { Frame, TopBar } from '@shopify/polaris'
import NavBarAdmin from 'src/components/NavBarAdmin'
import { useState, useCallback } from 'react'

const FrameAdmin = ({ children }) => {
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false)
  const [userMenuActive, setUserMenuActive] = useState(false)

  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  )
  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  )

  const userMenuActions = [
    {
      items: [{ content: 'Log out' }],
    },
  ]

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="User"
      initials="U"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  )

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  )

  const navigationMarkup = <NavBarAdmin />

  return (
    <Frame
      topBar={topBarMarkup}
      navigation={navigationMarkup}
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
    >
      {children}
    </Frame>
  )
}

export default FrameAdmin
