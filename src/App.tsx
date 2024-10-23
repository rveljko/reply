import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/app-layout/app-layout'
import { dashboardRoutes } from './helpers/routes'
import { DASHBOARD_ROUTE } from './helpers/constants'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={DASHBOARD_ROUTE} element={<AppLayout />}>
            {dashboardRoutes.map(({ id, href, page: Page }) => (
              <Route key={id} path={href} element={<Page />} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
