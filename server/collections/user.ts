import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { BaseEntity } from './base';

@modelOptions({ schemaOptions: { collection: 'users' } })
class User extends BaseEntity {
  @prop({ required: true })
  public firstName!: string;

  @prop({ required: true })
  public lastName!: string;

  @prop({ required: true })
  public contactNumber!: string;
}

export default getModelForClass(User);
