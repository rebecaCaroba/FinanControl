import * as Dialog from '@radix-ui/react-dialog'
import { AiOutlineClose } from 'react-icons/ai'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './style'
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <CloseButton>
                    <AiOutlineClose size={24} />
                </CloseButton>

                <form>
                    <input type="text" placeholder='Descrição' required/>
                    <input type="text" placeholder='Preço' required/>
                    <input type="text" placeholder='Caategoria' required/>
                    <TransactionType>
                        <TransactionTypeButton variant='income' value='income'>
                            <BsArrowUpCircle size={24} />
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton variant='outcome' value='outcome'>
                            <BsArrowDownCircle size={24} />
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>
                    <button type="submit">Cadastrar</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}