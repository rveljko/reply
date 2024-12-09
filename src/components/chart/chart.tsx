import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { CreditCardBalance, CreditCardExpense } from '../../utils/types'
import { chartCurrencyFormater } from '../../utils/helpers/currency-formatter'
import { shortDateFormatter } from '../../utils/helpers/date-formatters'
import ChartTooltip from '../chart-tooltip/chart-tooltip'
import { useMediaQuery } from 'react-responsive'

type ChartProps = {
  data: CreditCardBalance[] | CreditCardExpense[]
  height: 'large' | 'small'
}

export default function Chart({ data, height }: ChartProps) {
  const isBiggerScreen = useMediaQuery({ maxWidth: 1024 })

  return (
    <ResponsiveContainer
      height={'max-content'}
      aspect={isBiggerScreen ? 16 / 9 : height === 'large' ? 16 / 9 : 16 / 4}
    >
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--chart-gradient-start-color)" />
            <stop offset="95%" stopColor="var(--chart-gradient-end-color)" />
          </linearGradient>
        </defs>
        <CartesianGrid
          vertical={false}
          stroke="var(--neutral-700)"
          strokeDasharray={4}
        />
        <XAxis
          dataKey="time"
          dy={8}
          tickFormatter={(time: Date) => shortDateFormatter(time.toString())}
          tick={{ fill: 'var(--neutral-400)' }}
          axisLine={false}
          tickLine={false}
          alignmentBaseline="hanging"
        />
        <YAxis
          dataKey="amount"
          dx={-8}
          tickFormatter={(amount: number) => chartCurrencyFormater(amount)}
          tick={{ fill: 'var(--neutral-400)' }}
          stroke="red"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<ChartTooltip />} />
        <Area
          type="monotone"
          dataKey="amount"
          stroke="var(--brand-500)"
          strokeWidth={4}
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
