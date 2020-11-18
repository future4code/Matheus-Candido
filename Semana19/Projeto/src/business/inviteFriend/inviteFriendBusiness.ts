import insertFriend from "../../data/inserFriend/insertFriend";

export const inviteFriendBusiness = async (tokenId: string, id: any) => {
    try {
        await insertFriend(
            tokenId,
            id
        )
    } catch (error) {
        
        throw new Error(error);
    }
}