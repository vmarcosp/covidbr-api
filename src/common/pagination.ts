import { InputType, Field } from 'type-graphql'

@InputType()
export class PaginationInput {
    @Field(() => Number)
    offset: number

    @Field(() => Number)
    first: number
}
