import mongoose, { Schema } from "mongoose";
import { MODEL_NAMES } from "./types/model-names.type";
import { InboxModel, UserModel } from "./types/user.type";

const userSchema = new Schema<UserModel>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profileImage: { type: String, required: false },
  inbox: [
    new Schema<InboxModel>(
      {
        channel: { type: Schema.Types.ObjectId, ref: MODEL_NAMES.channel },
        user: { type: Schema.Types.ObjectId, ref: MODEL_NAMES.user },
      },
      { _id: false }
    ),
  ],
});

const User = mongoose.model<UserModel>(MODEL_NAMES.user, userSchema);
export default User;
