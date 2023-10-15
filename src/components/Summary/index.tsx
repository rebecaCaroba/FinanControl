import { SummaryCard, SummaryContainer } from "./style";
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'
import { MdAttachMoney } from 'react-icons/md'

export function Summary(){
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <BsArrowUpCircle color='#00B37E' size={24} />
                </header>
                <strong>R$ 17.400,00</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <BsArrowDownCircle color='#F75A68' size={24} />
                </header>
                <strong>R$ 17.400,00</strong>
            </SummaryCard>
            <SummaryCard variany="green">
                <header>
                    <span>Total</span>
                    <MdAttachMoney color='#fff' size={24}  />
                </header>
                <strong>R$ 17.400,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}