import { JsonDataBaseService, LocalDataBaseService, PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor( public readonly postPriveder: PostProvider ) {}

    async getPosts() {
        //const jsonDB = new LocalDataBaseService();
        //const jsonDB = new JsonDataBaseService();
        
        //this.posts = await jsonDB.getPosts();

        this.posts = await this.postPriveder.getPosts();


        return this.posts;
    }
}
