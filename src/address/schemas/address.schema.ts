/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {now} from "mongoose";

@Schema()
export class Address {
    
    @Prop({required: true})
    street: string;

    @Prop({required: true, unique: true})
    area: string;

    @Prop({required: true})
    city: string;

    @Prop({required: true})
    state: string;

    @Prop({required: true})
    zipcode: number;

    @Prop({default: now()})
    createdAt: Date;

    @Prop({default: now()})
    updatedAt: Date;

}

export const AddressSchema = SchemaFactory.createForClass(Address);

