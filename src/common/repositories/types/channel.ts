import { MessageStatus } from "@/common/utils/app.type";
import { ChannelModel } from "@/common/models/types/channel";

export type CreateChannelDto = {
  userId: string;
  opponentUserId: string;
};

export type IsChannelExistsPayload = CreateChannelDto;

export type ChangeStatusDto = {
  channelId: string;
  userId: string;
  messageStatus: MessageStatus;
};

export interface IChannelRepository {
  /**
   * Create Channel
   * @param payload
   */
  createChannel(payload: CreateChannelDto): Promise<ChannelModel>;

  /**
   * Check if Channel already exists between users
   * @param payload
   */
  isChannelExits(payload: IsChannelExistsPayload): Promise<boolean>;

  /**
   * Change message_status from 'SENT' to 'DELIVERED' or 'READ'
   * @param payload
   */
  changeStatus(payload: ChangeStatusDto): Promise<void>;

  /**
   * Retrieve Channel from databse
   * @param channelId
   */
  getChannel(channelId: string): Promise<ChannelModel>;
}
