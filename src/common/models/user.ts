import mongoose, { Schema } from "mongoose";
import { MODEL_NAMES } from "./types/model-names";
import { InboxDbModel, UserDbModel } from "./types/user";

const userSchema = new Schema<UserDbModel>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profileImage: { type: String, required: false },
  inbox: [
    new Schema<InboxDbModel>(
      {
        channel: { type: Schema.Types.ObjectId, ref: MODEL_NAMES.channel },
        user: { type: Schema.Types.ObjectId, ref: MODEL_NAMES.user },
      },
      { _id: false }
    ),
  ],
});

const User = mongoose.model<UserDbModel>(MODEL_NAMES.user, userSchema);
export default User;
