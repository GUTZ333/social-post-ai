import { Document, Schema } from "mongoose";

interface IFeature extends Document {
  feature_name: string,
  feature_desc: string,
  feature_icon_name: string
}  

const featureSchema = new Schema<IFeature>({
  feature_name: {
    type: String,
    required: true,
    trim: true
  },
  feature_desc: {
    type: String,
    required: true
  },
  feature_icon_name: {
    type: String,
    required: true
  }
})

export { featureSchema };