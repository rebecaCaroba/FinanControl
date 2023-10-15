import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import Logo  from '../../assets/Logo.svg'

export function Header(){
    return (
       <HeaderContainer>
            <HeaderContent>
                <img src={Logo} alt="Logo" />
                <NewTransactionButton>Nova transição</NewTransactionButton>
            </HeaderContent>
       </HeaderContainer>
    )
}