import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./style";
import { FiSearch } from "react-icons/fi";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const {register, handleSubmit, formState: {isSubmitting} } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchTransactions(data: SearchFormInputs) {
        await new Promise(resolver => setTimeout(resolver, 2000))
        console.log(data)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
            type="text"
            placeholder="Busque por transações"
            {...register('query')}
            />
            <button type="submit" disabled={isSubmitting}>
                <FiSearch size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}