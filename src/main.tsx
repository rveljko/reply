import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/index.css'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

posthog.init('phc_cfzu46ksWSz09XprOIXGy4VrHBW0UbUhrQSuFq17PE4', {
  api_host: 'https://eu.i.posthog.com',
  capture_pageview: false,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </StrictMode>
)
