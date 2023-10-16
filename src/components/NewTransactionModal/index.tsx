import * as Dialog from '@radix-ui/react-dialog'
import { AiOutlineClose } from 'react-icons/ai'
import { CloseButton, Content, Overlay } from './style'

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

                    <button type="submit">Cadastrar</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}