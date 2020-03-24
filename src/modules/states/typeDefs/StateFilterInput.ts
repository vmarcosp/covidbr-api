import { InputType, Field } from 'type-graphql'

@InputType()
export class StateFilterInput {
    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => String, { nullable: true })
    uf?: string
}
