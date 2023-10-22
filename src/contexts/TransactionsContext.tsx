import { useState, useEffect, ReactNode } from 'react'
import { api } from '../lib'
import { createContext } from 'use-context-selector'

interface TransactionsProps {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: 'string'
  price: number
  createdAd: string
}

interface TransactionsInput {
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
}

interface TransactionsContextType {
  transactions: TransactionsProps[]
  fetchTransactions: (query: string) => Promise<void>
  creatTransactions: (data: TransactionsInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('Transactions', {
      params: {
        _sort: 'createdAd',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function creatTransactions(data: TransactionsInput) {
    const { category, description, price, type } = data

    const response = await api.post('Transactions', {
      description,
      type,
      category,
      price,
      createdAd: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        creatTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
