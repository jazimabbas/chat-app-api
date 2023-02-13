import mongoose, { Schema } from "mongoose";
import { MessageDbModel } from "./types/message";
import { MODEL_NAMES } from "./types/model-names";

const messageSchema = new Schema<MessageDbModel>({
  autoId: { type: Number, default: 0 },
  body: { type: String, required: true },
  channel: { type: Schema.Types.ObjectId, ref: MODEL_NAMES.channel },
  sentBy: { type: Schema.Types.ObjectId, ref: MODEL_NAMES.user },
  date: { type: Date, default: Date.now },
});

const Message = mongoose.model<MessageDbModel>(MODEL_NAMES.message, messageSchema);
export default Message;
