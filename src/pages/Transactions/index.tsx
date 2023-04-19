import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "../Components/SearchForm"
import {
	PriceHighlight,
	PriceHighlightType,
	TransactionContainer,
	TransactionTable,
} from "./styles"

export function Transactions() {
	return (
		<div>
			<Header />
			<Summary />

			<TransactionContainer>
				<SearchForm />
				<TransactionTable>
					<tbody>
						<tr>
							<td width="50%">Desenvolvimento de site</td>
							<td>
								<PriceHighlight variant={PriceHighlightType.Income}>
									R$ 12.000,00
								</PriceHighlight>
							</td>
							<td>Venda</td>
							<td>18/04/2023</td>
						</tr>
						<tr>
							<td width="50%">Hamburger</td>
							<td>
								<PriceHighlight variant={PriceHighlightType.Outgo}>
									- R$ 59,00
								</PriceHighlight>
							</td>
							<td>Alimentação</td>
							<td>10/04/2023</td>
						</tr>
					</tbody>
				</TransactionTable>
			</TransactionContainer>
		</div>
	)
}
