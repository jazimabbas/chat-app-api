import { Document, Types } from "mongoose";
import { MessageStatus } from "../../utils/app.type";

export type UserChannel = {
  userId?: Types.ObjectId;
  messageStatus: MessageStatus;
  autoId?: number;
  deliveredAutoId?: number;
};

export type ChannelModel = Document & {
  name?: string;
  createdBy?: Types.ObjectId;
  image?: string;
  autoId?: number;
  lastMessage?: Types.ObjectId;
  users?: Map<string, UserChannel>;
};
