import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/app-layout/app-layout'
import { dashboardRoutes, settingsRoutes } from './utils/routes'
import { DASHBOARD_ROUTE, SETTINGS_ROUTE } from './utils/constants'
import TransactionsContextProvider from './utils/contexts/transactions-context'
import CreditCardsContextProvider from './utils/contexts/credit-cards-context'
import SettingsLayout from './layouts/settings-layout/settings-layout'
import ThemeContextProvider from './utils/contexts/theme-context'
import ChartContextProvider from './utils/contexts/charts-context'
import IntegrationsContextProvider from './utils/contexts/integrations-context'
import UserInformationsContextProvider from './utils/contexts/user-informations-context'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <UserInformationsContextProvider>
          <ThemeContextProvider>
            <ChartContextProvider>
              <CreditCardsContextProvider>
                <IntegrationsContextProvider>
                  <TransactionsContextProvider>
                    <Routes>
                      <Route path={DASHBOARD_ROUTE} element={<AppLayout />}>
                        {dashboardRoutes
                          .slice(0, dashboardRoutes.length - 1)
                          .map(({ id, href, page: Page }) => (
                            <Route key={id} path={href} element={<Page />} />
                          ))}
                        <Route
                          path={SETTINGS_ROUTE}
                          element={<SettingsLayout />}
                        >
                          {settingsRoutes.map(({ id, href, page: Page }) => (
                            <Route key={id} path={href} element={<Page />} />
                          ))}
                        </Route>
                      </Route>
                    </Routes>
                  </TransactionsContextProvider>
                </IntegrationsContextProvider>
              </CreditCardsContextProvider>
            </ChartContextProvider>
          </ThemeContextProvider>
        </UserInformationsContextProvider>
      </BrowserRouter>
    </>
  )
}
