import {createContext, ReactNode, useEffect, useState} from "react";
import {ITransaction} from "../interfaces/ITransaction";

interface TransactionsContextType {
    transactions: ITransaction[]
}

export const TransactionsContext = createContext({} as TransactionsContextType)

interface TransactionsProviderProps {
    children: ReactNode
}
export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    useEffect(() => {
        fetch("http://localhost:3000/transactions")
            .then(response => response.json())
            .then(data => setTransactions(data))
    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}