import { friendsDatabase } from "../../data/friendsDatabase/FriendsDatabase";

class FriendsBusiness {

    public inviteFriend = async (tokenId: string, id: any) => {
        try {

            await friendsDatabase.insertFriend(
                tokenId,
                id
            )
        } catch (error) {
            throw new Error(error);
        }
    }

    public unFriend = async (tokenId: string, id: any) => {
        try {
            await friendsDatabase.deleteFriend(tokenId, id)
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const friendsBusiness: FriendsBusiness = new FriendsBusiness()