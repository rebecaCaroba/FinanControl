import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style"
import * as Dialog from '@radix-ui/react-dialog'
import Logo  from '../../assets/Logo.svg'
import { NewTransactionModal } from "../NewTransactionModal"

export function Header(){
    return (
       <HeaderContainer>
            <HeaderContent>
                <img src={Logo} alt="Logo" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transição</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
       </HeaderContainer>
    )
}