import { Document, Types } from "mongoose";
import { MessageStatus } from "../../utils/app.type";

export type UserDbChannel = {
  userId?: Types.ObjectId;
  messageStatus: MessageStatus;
  autoId?: number;
  deliveredAutoId?: number;
};

export type ChannelDbModel = Document & {
  name?: string;
  createdBy?: Types.ObjectId;
  image?: string;
  autoId?: number;
  lastMessage?: Types.ObjectId;
  users?: Map<string, UserDbChannel>;
};

export type UserChannel = {
  userId?: string;
  messageStatus: MessageStatus;
  autoId?: number;
  deliveredAutoId?: number;
};

export type ChannelModel = Document & {
  name?: string;
  createdBy?: string;
  image?: string;
  autoId?: number;
  lastMessage?: string;
  users?: Map<string, UserChannel>;
};
