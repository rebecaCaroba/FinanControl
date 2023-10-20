import * as Dialog from '@radix-ui/react-dialog'
import { AiOutlineClose } from 'react-icons/ai'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './style'
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'
import * as z from 'zod'
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";



const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type NewTransactionInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
    const {control, register, handleSubmit, formState: {isSubmitting} } = useForm<NewTransactionInputs>({
        resolver: zodResolver(newTransactionFormSchema)
    })

    async function handleCreateNewTransaction(data: NewTransactionInputs) {
        await new Promise(resolver => setTimeout(resolver, 2000))

        console.log(data)
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <CloseButton>
                    <AiOutlineClose size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input 
                    type="text" 
                    placeholder='Descrição' 
                    required
                    {...register('description')}
                    />
                    <input 
                    type="text" 
                    placeholder='Preço' 
                    required
                    {...register('price', {valueAsNumber: true})}
                    />
                    <input 
                    type="text" 
                    placeholder='Categoria' 
                    required
                    {...register('category')}
                    />
                    <Controller 
                    control={control}
                    name='type'
                    render={({ field }) => {
                        return (
                            <TransactionType onValueChange={field.onChange} value={field.value}>
                                <TransactionTypeButton variant='income' value='income'>
                                    <BsArrowUpCircle size={24} />
                                    Entrada
                                </TransactionTypeButton>
                                <TransactionTypeButton variant='outcome' value='outcome'>
                                    <BsArrowDownCircle size={24} />
                                    Saída
                                </TransactionTypeButton>
                            </TransactionType>
                        )
                    }}
                    />
                    <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}