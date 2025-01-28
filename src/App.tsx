import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/app-layout/app-layout'
import { DASHBOARD_ROUTE, SETTINGS_ROUTE } from './utils/constants'
import TransactionsContextProvider from './utils/contexts/transactions-context'
import CreditCardsContextProvider from './utils/contexts/credit-cards-context'
import SettingsLayout from './layouts/settings-layout/settings-layout'
import ThemeContextProvider from './utils/contexts/theme-context'
import ChartContextProvider from './utils/contexts/charts-context'
import IntegrationsContextProvider from './utils/contexts/integrations-context'
import UserInformationsContextProvider from './utils/contexts/user-informations-context'
import { HelmetProvider } from 'react-helmet-async'
import MyWalletPage from './pages/my-wallet-page/my-wallet-page'
import RecentTransactionsPage from './pages/recent-transactions-page/recent-transactions-page'
import MyCardsPage from './pages/my-cards-page/my-cards-page'
import GuidesPage from './pages/guides-page/guides-page'
import AccountPage from './pages/account-page/account-page'
import PreferencesPage from './pages/preferences-page/preferences-page'
import IntegrationsPage from './pages/integrations-page/integrations-page'
import CardsPage from './pages/cards-page/cards-page'
import NotFoundPage from './pages/not-found-page/not-found-page'
import GuidePage from './pages/guide-page/guide-page'
import LandingPageLayout from './layouts/landing-page-layout/landing-page-layout'
import LandingPage from './pages/landing-page/landing-page'
import FeaturesPage from './pages/features-page/features-page'
import CustomersPage from './pages/customers-page'
import IntegrationsLandingPage from './pages/integrations-landing-page/integrations-landing-page'

export default function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <UserInformationsContextProvider>
            <ThemeContextProvider>
              <ChartContextProvider>
                <CreditCardsContextProvider>
                  <IntegrationsContextProvider>
                    <TransactionsContextProvider>
                      <Routes>
                        <Route path="/" element={<LandingPageLayout />}>
                          <Route index element={<LandingPage />} />
                          <Route path="features" element={<FeaturesPage />} />
                          <Route path="customers" element={<CustomersPage />} />
                          <Route
                            path="integrations"
                            element={<IntegrationsLandingPage />}
                          />
                        </Route>
                        <Route path={DASHBOARD_ROUTE} element={<AppLayout />}>
                          <Route index element={<MyWalletPage />} />
                          <Route
                            path="recent-transactions"
                            element={<RecentTransactionsPage />}
                          />
                          <Route path="my-cards" element={<MyCardsPage />} />
                          <Route path="guides" element={<GuidesPage />} />
                          <Route path="guide/:title" element={<GuidePage />} />
                          <Route path="*" element={<NotFoundPage />} />
                          <Route
                            path={SETTINGS_ROUTE}
                            element={<SettingsLayout />}
                          >
                            <Route index element={<AccountPage />} />
                            <Route path="cards" element={<CardsPage />} />
                            <Route
                              path="preferences"
                              element={<PreferencesPage />}
                            />
                            <Route
                              path="integrations"
                              element={<IntegrationsPage />}
                            />
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
      </HelmetProvider>
    </>
  )
}
