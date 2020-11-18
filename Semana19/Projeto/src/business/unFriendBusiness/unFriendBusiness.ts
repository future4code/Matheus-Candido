import deleteFriend from "../../data/deleteFriend/deleteFriend";

export const unFriendBusiness = async (id: any) => {
    try {
        await deleteFriend(id)
    } catch (error) {
        throw new Error(error);
    }
}