import { InputType, Field } from 'type-graphql'

@InputType()
export class CityFilterInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => String, { nullable: true })
    uf?: string
}
