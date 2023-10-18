import { createContext, useState, useEffect, ReactNode } from 'react'

interface TransactionsProps {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    category: 'string',
    price: number,
    createdAd: string
}

interface TransactionsContextType {
    transactions: TransactionsProps[]
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<TransactionsProps[]>([])

    async function loadTransactions() {
        const response = await fetch('http://localhost:3333/Transactions')
        const data = await response.json()

        setTransactions(data)
    }

    useEffect(() => {
        loadTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{transactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}