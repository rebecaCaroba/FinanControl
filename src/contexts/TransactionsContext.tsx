import { createContext, useState, useEffect, ReactNode } from 'react'
import { api } from '../lib'

interface TransactionsProps {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    category: 'string',
    price: number,
    createdAd: string 
}

interface TransactionsContextType {
    transactions: TransactionsProps[],
    fetchTransactions: (query: string) => Promise<void>
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<TransactionsProps[]>([])

    async function fetchTransactions(query?: string) {
        const response = await api.get('Transactions',{
            params: {
                q: query,
            }
        })

        setTransactions(response.data)
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{
            transactions,
            fetchTransactions,
            }}>
            {children}
        </TransactionsContext.Provider>
    )
}