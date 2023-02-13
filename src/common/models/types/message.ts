import { Document, Types } from "mongoose";

export type MessageDbModel = Document & {
  body: string;
  sentBy: Types.ObjectId;
  channel: Types.ObjectId;
  autoId: number;
  date: Date;
};

export type MessagbModel = {
  body: string;
  sentBy: string;
  channel: string;
  autoId: number;
  date: Date;
};
