import { Service } from "typedi";
import { Document } from "mongoose";

import { depNames } from "@/common/utils/typedi";
import { MessageDbModel, MessageModel } from "@/common/models/types/message";
import { ChannelDbModel, ChannelModel, UserChannel } from "@/common/models/types/channel";

@Service({ name: depNames.channelRepoMapper })
export class ChannelRepositoryMapper {
  mapChannelDbModelToChannelModel(channelDbModel: ChannelDbModel): ChannelModel {
    if (!channelDbModel) return null;

    const channelDoc = (channelDbModel as any)._doc as Exclude<ChannelDbModel, typeof Document>;
    return {
      id: channelDoc._id.toString(),
      users: this._mapChannelUsers(channelDoc),
      autoId: channelDoc.autoId,
      createdBy: channelDoc.createdBy.toString(),
      image: channelDoc.image,
      name: channelDoc.name,
      lastMessage: this._getLastMessage(channelDoc),
    };
  }

  private _mapChannelUsers(channelDoc: ChannelDbModel): Map<string, UserChannel> {
    const userMap = new Map<string, UserChannel>();
    channelDoc.users.forEach((user) => {
      userMap.set(user.userId.toString(), {
        messageStatus: user.messageStatus,
        autoId: user.autoId,
        deliveredAutoId: user.deliveredAutoId,
        userId: user.userId.toString() as any,
      });
    });
    return userMap;
  }

  private _getLastMessage(channelDoc: ChannelDbModel): MessageModel | null {
    const lastMessage = channelDoc.lastMessage as unknown as MessageDbModel;

    if (!lastMessage) return null;

    return {
      id: lastMessage._id,
      autoId: lastMessage.autoId,
      body: lastMessage.body,
      channel: lastMessage.channel.toString(),
      date: lastMessage.date,
      sentBy: lastMessage.sentBy.toString(),
    };
  }
}
