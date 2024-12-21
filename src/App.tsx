import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/app-layout/app-layout'
import { dashboardRoutes, settingsRoutes } from './utils/routes'
import { DASHBOARD_ROUTE, SETTINGS_ROUTE } from './utils/constants'
import TransactionsContextProvider from './utils/contexts/transactions-context'
import CreditCardsContextProvider from './utils/contexts/credit-cards-context'
import SettingsLayout from './layouts/settings-layout/settings-layout'
import ThemeContextProvider from './utils/contexts/theme-context'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <CreditCardsContextProvider>
            <TransactionsContextProvider>
              <Routes>
                <Route path={DASHBOARD_ROUTE} element={<AppLayout />}>
                  {dashboardRoutes
                    .slice(0, dashboardRoutes.length - 1)
                    .map(({ id, href, page: Page }) => (
                      <Route key={id} path={href} element={<Page />} />
                    ))}
                  <Route path={SETTINGS_ROUTE} element={<SettingsLayout />}>
                    {settingsRoutes.map(({ id, href, page: Page }) => (
                      <Route key={id} path={href} element={<Page />} />
                    ))}
                  </Route>
                </Route>
              </Routes>
            </TransactionsContextProvider>
          </CreditCardsContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  )
}
