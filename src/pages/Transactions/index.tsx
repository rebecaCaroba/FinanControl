import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./style";

interface TransactionsProps {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    category: 'string',
    price: number,
    createdAd: string
}

export function Transactions() {
    const [transactions, setTransactions] = useState<TransactionsProps[]>([])

    async function PegarDado() {
        const response = await fetch('http://localhost:3333/Transactions')
        const data = await response.json()

        setTransactions(data)
    }

    useEffect(() => {
        PegarDado()
    }, [])

    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
            <SearchForm />
                <TransactionsTable>
                    {transactions.map(transaction => {
                        return (
                        <div key={transaction.id}>
                            <span>{transaction.description}</span>
                            <span>
                                <PriceHighLight varient={transaction.type}>
                                    {transaction.price}
                                </PriceHighLight>
                            </span>
                            <span>{transaction.category}</span>
                            <span>{(transaction.createdAd)}</span>
                        </div>
                        )
                    })}
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}   