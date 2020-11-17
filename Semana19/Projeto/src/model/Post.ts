export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}

export type CreatePost = {
    photo: string,
    description: string,
    type: POST_TYPES,
    authorization: string
}
