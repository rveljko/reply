import CardsSection from '../../sections/cards-section/cards-section'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'

export default function CardsPage() {
  const { getSortedCreditCards } = useCreditCards()

  return <CardsSection creditCards={getSortedCreditCards()} />
}
