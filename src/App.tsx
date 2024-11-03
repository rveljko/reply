import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/app-layout/app-layout'
import { dashboardRoutes } from './utils/routes'
import { DASHBOARD_ROUTE } from './utils/constants'
import TransactionsContextProvider from './utils/contexts/transactions-context'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <TransactionsContextProvider>
          <Routes>
            <Route path={DASHBOARD_ROUTE} element={<AppLayout />}>
              {dashboardRoutes.map(({ id, href, page: Page }) => (
                <Route key={id} path={href} element={<Page />} />
              ))}
            </Route>
          </Routes>
        </TransactionsContextProvider>
      </BrowserRouter>
    </>
  )
}
