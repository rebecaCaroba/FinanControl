import { SummaryCard, SummaryContainer } from "./style";
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'
import { MdAttachMoney } from 'react-icons/md'
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContext } from 'react'
import { priceFormatter } from "../../utils/formatter";

export function Summary(){
    const { transactions } = useContext(TransactionsContext)
    
    const summary = transactions.reduce(
    (acc, transaction) => {
        if(transaction.type === 'income'){
            acc.income += transaction.price
            acc.total += transaction.price
        }else {
            acc.outcome += transaction.price
            acc.total -= transaction.price
        }

        return acc
     },
      {income: 0, outcome: 0, total: 0}
    )

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <BsArrowUpCircle color='#00B37E' size={24} />
                </header>
                <strong>{priceFormatter.format(summary.income)}</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <BsArrowDownCircle color='#F75A68' size={24} />
                </header>
                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </SummaryCard>
            <SummaryCard variany="green">
                <header>
                    <span>Total</span>
                    <MdAttachMoney color='#fff' size={24}  />
                </header>
                <strong>{priceFormatter.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}