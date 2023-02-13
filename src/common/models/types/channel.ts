import { Document, Types } from "mongoose";
import { MessageStatus } from "../../utils/app.type";
import { MessageModel } from "./message";

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

export type ChannelModel = {
  id: string;
  name?: string;
  createdBy?: string;
  image?: string;
  autoId?: number;
  lastMessage?: string | MessageModel;
  users?: Map<string, UserChannel>;
};
