import { Controller, Post } from "@nestjs/common";
import { PostService } from "src/posts/post.service";

@Controller('store')
export class StoreController {

  constructor( private readonly postService: PostService) {}

  @Post()
  createPost(post: any): any {
    return this.postService.createPost(post)
  }
}