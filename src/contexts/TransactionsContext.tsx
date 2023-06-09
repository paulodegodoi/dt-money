import {createContext, ReactNode, useEffect, useState} from "react";
import {ITransaction} from "../interfaces/ITransaction";
import {api} from "../lib/axios";

interface TransactionsContextType {
    transactions: ITransaction[]
    fetchTransactions: (query?: string) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextType)

interface TransactionsProviderProps {
    children: ReactNode
}
export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    async function fetchTransactions(query?: string) {
        const response = await api.get("transactions", {
            params: {
                q: query
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
            fetchTransactions
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}