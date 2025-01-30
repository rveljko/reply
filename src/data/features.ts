import BrainIcon from '../icons/brain-icon'
import ChartBarIcon from '../icons/chart-bar-icon'
import ChartPieIcon from '../icons/chart-pie-icon'
import CreditCardIcon from '../icons/credit-card-icon'
import ListIcon from '../icons/list-icon'
import RefreshIcon from '../icons/refresh-icon'
import ShieldCheckIcon from '../icons/shield-check-icon'
import ShieldIcon from '../icons/shield-icon'
import TrendingUpIcon from '../icons/trending-up-icon'
import { Feature } from '../utils/types'

export const financialFeatures: Feature[] = [
  {
    id: 1,
    icon: CreditCardIcon,
    title: 'Streamlined Transactions',
    description:
      'Efficiently manage and track your transactions for better financial control',
  },
  {
    id: 2,
    icon: TrendingUpIcon,
    title: 'Insightful Financial Analysis',
    description:
      'Gain finance insights for informed habit-focused decision-making analyses',
  },
  {
    id: 3,
    icon: ChartPieIcon,
    title: 'Customized Budgeting',
    description:
      'Create and manage personalized budgets to achieve your financial goals',
  },
  {
    id: 4,
    icon: ShieldCheckIcon,
    title: 'Secure Money Transfers',
    description:
      'Ensure safe and secure money transfers with advanced security features',
  },
  {
    id: 5,
    icon: ListIcon,
    title: 'Efficient Expense Tracking',
    description:
      'Track and categorize expenses effortlessly for better financial planning',
  },
  {
    id: 6,
    icon: RefreshIcon,
    title: 'Real-Time Updates',
    description:
      'Stay informed with real-time updates on your financial transactions and balances',
  },
]

export const financialControlFeatures: Feature[] = [
  {
    id: 1,
    icon: BrainIcon,
    title: 'Intelligent Categorization',
    description:
      'Automatically categorize expenses for better financial organization and analysis',
  },
  {
    id: 2,
    icon: ShieldIcon,
    title: 'Fraud Protection',
    description:
      'Robust security measures protect against fraudulent transactions and activities',
  },
  {
    id: 3,
    icon: ChartBarIcon,
    title: 'Transaction Insights',
    description:
      'Attain insights into spending trends, enabling informed decision-making',
  },
]
