import CreditCardIcon from '../icons/credit-card-icon'
import FileIcon from '../icons/file-icon'
import FileTextIcon from '../icons/file-text-icon'
import SettingsIcon from '../icons/settings-icon'
import WalletIcon from '../icons/wallet-icon'
import GuidesPage from '../pages/guides-page/guides-page'
import MyCardsPage from '../pages/my-cards-page/my-cards-page'
import MyWalletPage from '../pages/my-wallet-page/my-wallet-page'
import RecentTransactionsPage from '../pages/recent-transactions-page/recent-transactions-page'
import SettingsPage from '../pages/settings-page/settings-page'

type route = {
  id: number
  name: string
  href: string
  icon: () => JSX.Element
  page: () => JSX.Element
}

export const dashboardRoutes: route[] = [
  {
    id: 1,
    name: 'My Wallet',
    href: '',
    icon: WalletIcon,
    page: MyWalletPage,
  },
  {
    id: 2,
    name: 'Recent Transactions',
    href: 'recent-transactions',
    icon: FileTextIcon,
    page: RecentTransactionsPage,
  },
  {
    id: 3,
    name: 'My Cards',
    href: 'my-cards',
    icon: CreditCardIcon,
    page: MyCardsPage,
  },
  {
    id: 4,
    name: 'Guides',
    href: 'guides',
    icon: FileIcon,
    page: GuidesPage,
  },
  {
    id: 5,
    name: 'Settings',
    href: 'settings',
    icon: SettingsIcon,
    page: SettingsPage,
  },
]
