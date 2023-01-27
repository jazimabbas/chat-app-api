import { Document, Types } from "mongoose";

export type MessageModel = Document & {
  body: string;
  sentBy: Types.ObjectId;
  channel: Types.ObjectId;
  autoId: number;
  date: Date;
};
