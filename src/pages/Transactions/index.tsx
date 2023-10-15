import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./style";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <TransactionsTable>
                        <div>
                            <span>Desenvolvimento de site</span>
                            <span>
                                <PriceHighLight varient="income">R$ 12.000,00</PriceHighLight>
                            </span>
                            <span>Venda</span>
                            <span>13/04/2022</span>
                        </div>
                        <div>
                            <span>Hamburguer</span>
                            <span>
                                <PriceHighLight varient="outcome">- R$ 59,00</PriceHighLight>
                            </span>
                            <span>Alimentação</span>
                            <span>10/04/2022</span>
                        </div>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}   