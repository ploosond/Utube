import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, // once who is subscribing
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, // once to whom is subscriber subscribe
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
