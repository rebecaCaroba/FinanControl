import { useContext } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './style'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { formatterData, priceFormatter } from '../../utils/formatter'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          {transactions.map((transaction) => {
            return (
              <div key={transaction.id}>
                <span>{transaction.description}</span>
                <span>
                  <PriceHighLight varient={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighLight>
                </span>
                <span>{transaction.category}</span>
                <span>
                  {formatterData.format(new Date(transaction.createdAd))}
                </span>
              </div>
            )
          })}
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
