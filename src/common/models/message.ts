import mongoose, { Schema } from "mongoose";
import { MessageModel } from "./types/message.type";
import { MODEL_NAMES } from "./types/model-names.type";

const messageSchema = new Schema<MessageModel>({
  autoId: { type: Number, default: 0 },
  body: { type: String, required: true },
  channel: { type: Schema.Types.ObjectId, ref: MODEL_NAMES.channel },
  sentBy: { type: Schema.Types.ObjectId, ref: MODEL_NAMES.user },
  date: { type: Date, default: Date.now },
});

const Message = mongoose.model(MODEL_NAMES.message, messageSchema);
export default Message;
