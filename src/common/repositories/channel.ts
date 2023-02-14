import { Service, Inject } from "typedi";

import User from "../models/user";
import { depNames } from "../utils/typedi";
import Channel from "../models/channel";
import { BadRequestError } from "../utils/custom-errors";
import { ChannelRepositoryMapper } from "./mappers/channel.mapper";
import { ChannelDbModel, ChannelModel } from "../models/types/channel";
import { ChangeStatusDto, CreateChannelDto, IChannelRepository } from "./types/channel";

@Service({ name: depNames.channelRepo })
export class ChannelRepository implements IChannelRepository {
  constructor(@Inject(depNames.channelRepoMapper) private readonly channelMapper: ChannelRepositoryMapper) {}

  async createChannel(payload: CreateChannelDto): Promise<ChannelModel> {
    const isChannelExits = await this.isChannelExits(payload);
    if (isChannelExits) throw new BadRequestError({ message: "Channel already exists" });

    const channel = await this._createChannelInDb(payload);
    await this._addChannelToUsersInbox(channel._id.toString(), payload);

    return this.channelMapper.mapChannelDbModelToChannelModel(channel);
  }

  isChannelExits(payload: CreateChannelDto): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  changeStatus(payload: ChangeStatusDto): Promise<void> {
    throw new Error("Method not implemented.");
  }

  getChannel(channelId: string): Promise<ChannelModel> {
    throw new Error("Method not implemented.");
  }

  private async _createChannelInDb(payload: CreateChannelDto): Promise<ChannelDbModel> {
    const { userId, opponentUserId } = payload;

    return Channel.create({
      users: { [userId]: { userId }, [opponentUserId]: { userId: opponentUserId } },
    });
  }

  private async _addChannelToUsersInbox(channelId: string, payload: CreateChannelDto): Promise<void> {
    const { userId, opponentUserId } = payload;

    const userInDb = await User.findById(userId);
    const opponentUserInDb = await User.findById(opponentUserId);

    userInDb.inbox.push({ channel: channelId as any, user: opponentUserId as any } as any);
    opponentUserInDb.inbox.push({ channel: channelId as any, user: userId as any } as any);

    await Promise.all(
      [userInDb, opponentUserInDb].map(async (user) => {
        await user.save();
      })
    );
  }
}
