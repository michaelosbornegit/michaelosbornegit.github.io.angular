export interface PostTopic {
    name: string;
    iconImageUrl?: string;
}

export class PostTopics {
    public static readonly ANGULAR: PostTopic = { name: "Angular" }
    public static readonly NODE_JS: PostTopic = { name: "NodeJS" }
}