import { Injectable } from "@nestjs/common";
import { StoreService } from "src/stores/store.sevice";

@Injectable()
export class PostService {

  constructor(private readonly storeService: StoreService) {}

  createPost(post: any): void {
    this.storeService.save(post)
  }
}