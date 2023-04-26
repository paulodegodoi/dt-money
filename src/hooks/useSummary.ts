import {useContext} from "react";
import {TransactionsContext} from "../contexts/TransactionsContext";
import {EHighlightType} from "../enums/EHighlightType";

export function useSummary() {
    const { transactions } = useContext(TransactionsContext)

    return transactions.reduce(
        (acc, transaction) => {
            if (transaction.type == EHighlightType.Income) {
                acc.income += transaction.price
                acc.total += transaction.price
            } else {
                acc.outcome += transaction.price
                acc.total -= transaction.price
            }

            return acc
        },
        {income: 0, outcome: 0, total: 0}
    )
}