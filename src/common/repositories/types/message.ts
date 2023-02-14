import { MessageModel } from "@/common/models/types/message";

export type SaveMessageDto = {
  body: string;
  sentBy: string;
  channelId: string;
};

export interface IMessageRepository {
  /**
   * save new message in database
   * @param payload
   */
  saveMessage(payload: SaveMessageDto): Promise<MessageModel>;

  /**
   * Retrieve Channel Messages from database
   * @param channelId
   */
  getChannelMessages(channelId: string): Promise<MessageModel[]>;
}
