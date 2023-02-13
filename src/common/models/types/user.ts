import { Document, Types } from "mongoose";

// This is for MongoDB
export type InboxDbModel = Document & {
  channel: Types.ObjectId;
  user: Types.ObjectId;
};

export type UserDbModel = Document & {
  name: string;
  email: string;
  password: string;
  profileImage?: string;
  inbox: InboxDbModel[];
};

// We don't need to expose the db implementation details outside
export type InboxModel = {
  channel: string;
  user: string;
};

export type UserModel = {
  name: string;
  email: string;
  password: string;
  profileImage?: string;
  inbox: InboxModel[];
};
