import * as Dialog from "@radix-ui/react-dialog";
import {CloseButton, Content, Overlay, TransactionType, TransactionTypeButton} from "./styles";
import {ArrowCircleDown, ArrowCircleUp, X} from "phosphor-react";
import {HighlightType} from "../../pages/Transactions/styles";

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <CloseButton>
                    <X size={24}/>
                </CloseButton>

                <Dialog.Title>Nova Transação</Dialog.Title>

                <form>
                    <input type="text" placeholder="Descrição" required />
                    <input type="number" placeholder="Valor" required/>
                    <input type="text" placeholder="Categoria" required />

                    <TransactionType>
                        <TransactionTypeButton variant={HighlightType.Income} value="income">
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton variant={HighlightType.Outgo} value="outgo">
                            <ArrowCircleDown size={24} />
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>
                    <button type="submit">Cadastrar</button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}