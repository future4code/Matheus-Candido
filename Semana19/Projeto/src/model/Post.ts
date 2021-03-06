export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export class Post {

    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: POST_TYPES,
        private createdAt: Date,
        private authorId: string
    ) { }
    public getId = (): string => this.id
    public getPhoto = (): string => this.photo
    public getDescription = (): string => this.description
    public getType = (): string => this.type
    public getCreatedAt = (): Date => this.createdAt
    public getAuthorId = (): string => this.authorId
}

export type CreatePost = {
    photo: string,
    description: string,
    type: POST_TYPES,
    authorization: string
}
