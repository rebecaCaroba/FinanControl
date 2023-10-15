import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style"
import * as Dialog from '@radix-ui/react-dialog'
import Logo  from '../../assets/Logo.svg'

export function Header(){
    return (
       <HeaderContainer>
            <HeaderContent>
                <img src={Logo} alt="Logo" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transição</NewTransactionButton>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay />
                        <Dialog.Content>
                            <Dialog.Title>Nova transação</Dialog.Title>
                            <Dialog.Close />
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </HeaderContent>
       </HeaderContainer>
    )
}