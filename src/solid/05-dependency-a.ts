import { PostService } from './05-dependency-b';
import { HttpClient, JsonDataBaseService, LocalDataBaseService, WebApiPostService } from './05-dependency-c';


// Main
(async () => {

    //const postsProvider = new JsonDataBaseService();
    //const postsProvider = new LocalDataBaseService();
    const http = new HttpClient();
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const postsProvider = new WebApiPostService(http, url);

    const postService = new PostService(postsProvider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();