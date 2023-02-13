import mongoose, { Schema } from "mongoose";
import { ChannelDbModel } from "./types/channel";
import { MODEL_NAMES } from "./types/model-names";

const channelSchema = new Schema<ChannelDbModel>({
  name: { type: String, required: false },
  image: { type: String, required: false },
  autoId: { type: Number, default: 0 },
  createdBy: { type: Schema.Types.ObjectId, ref: MODEL_NAMES.user },
  lastMessage: { type: Schema.Types.ObjectId, ref: MODEL_NAMES.message },
  users: {
    type: Map,
    of: {
      userId: Schema.Types.ObjectId,
      messageStatus: String,
      autoId: Number,
      deliveredAutoId: Number,
    },
  },
});

const Channel = mongoose.model<ChannelDbModel>(MODEL_NAMES.channel, channelSchema);
export default Channel;
