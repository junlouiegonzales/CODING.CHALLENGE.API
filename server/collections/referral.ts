import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { BaseEntity } from './base';

@modelOptions({ schemaOptions: { collection: 'referrals' } })
class Referral extends BaseEntity {
  @prop({ required: true })
  public givenName!: string;

  @prop({ required: true })
  public surname!: string;

  @prop({ required: true })
  public phone!: string;

  @prop({ required: true })
  public email!: string;

  @prop({ required: true })
  public homeNameNumber!: string;

  @prop({ required: true })
  public street!: string;

  @prop({ required: true })
  public suburb!: string;

  @prop({ required: true })
  public state!: string;

  @prop({ required: true })
  public postcode!: string;

  @prop({ required: true })
  public country!: string;
}

export default getModelForClass(Referral);
