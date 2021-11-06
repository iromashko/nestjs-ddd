import { Prop, Schema } from '@nestjs/mongoose';
import { ObjectID } from 'mongodb';
import { IdentifiableEntitySchema } from 'src/database/identifiable-entity.schema';

@Schema({ versionKey: false, collection: 'campers' })
export class CamperSchema extends IdentifiableEntitySchema {
  @Prop()
  readonly _id: ObjectID;

  @Prop()
  readonly name: string;

  @Prop()
  readonly age: number;

  @Prop()
  readonly allergies: string[];
}
