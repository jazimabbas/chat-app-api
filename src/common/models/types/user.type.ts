import { Document, Types } from "mongoose";

export type InboxModel = Document & {
  channel: Types.ObjectId;
  user: Types.ObjectId;
};

export type UserModel = Document & {
  name: string;
  email: string;
  password: string;
  profileImage?: string;
  inbox: InboxModel[];
};
