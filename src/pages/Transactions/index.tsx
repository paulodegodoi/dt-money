import {Header} from "../../components/Header"
import {Summary} from "../../components/Summary"
import {SearchForm} from "./Components/SearchForm";
import {useContext} from "react";
import {PriceHighlight, TransactionContainer, TransactionTable,} from "./styles"
import {TransactionsContext} from "../../contexts/TransactionsContext";
import {dateFormatter, firstUpperCase, priceFormatter} from "../../utils/formatter";
import {EHighlightType} from "../../enums/EHighlightType";

export function Transactions() {
	const { transactions } = useContext(TransactionsContext)

	return (
		<div>
			<Header />
			<Summary />

			<TransactionContainer>
				<SearchForm />
				<TransactionTable>
					<tbody>
						{transactions.map(t => (
							<tr key={t.id}>
								<td width="50%">{t.description}</td>
								<td width="20%">
									<PriceHighlight variant={t.type}>
										{t.type == EHighlightType.Income ? "+ " : "- "}
										{priceFormatter.format(t.price)}
									</PriceHighlight>
								</td>
								<td>{firstUpperCase(t.category)}</td>
								<td>{dateFormatter.format(new Date(t.createdAt))}</td>
							</tr>
						))}
					</tbody>
				</TransactionTable>
			</TransactionContainer>
		</div>
	)
}
