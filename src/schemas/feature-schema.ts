import zodSchema from "@zodyac/zod-mongoose";
import { z } from "zod";

export const FeatureZodSchema = z.object({
  feature_name: z.string().trim().min(1),
  feature_desc: z.string().min(1),
  feature_icon_name: z.string().min(1),
  feature_image_url_dark: z.string().optional(),
  feature_image_url_light: z.string().optional(),
});

export type Feature = z.infer<typeof FeatureZodSchema>;

export const FeatureDocumentZodSchema = FeatureZodSchema.extend({
  _id: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const featureMongoSchema = zodSchema(FeatureZodSchema)