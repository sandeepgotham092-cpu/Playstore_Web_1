import { Schema, model, Model, Document } from 'mongoose';

export interface IApp extends Document {
  name: string;
  description:String;
  stars:String;
  img:String;
}

export interface AppModelType extends Model<IApp> {}

const appSchema = new Schema<IApp, AppModelType>({
  name: { type: String, required: true },
  description:{type:String,default:""},
  stars:{type:String,default:'0'},
  img:{type:String,}
});


const AppModel = model<IApp, AppModelType>('Apps', appSchema);
export default AppModel;

export const getApps = ()=>AppModel.find();
export const creatApp = (values:Record<string,any>)=> new AppModel(values).save().then((apps)=>apps.toObject());