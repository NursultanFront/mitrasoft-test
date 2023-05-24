import { BasicRest } from "../basic-rest";

import type { AxiosInstance } from "axios";
import type { Post, Comment, User } from "./type";

export class UserRest extends BasicRest {
  constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  public getPosts() {
    return this.getRequest<Post[]>(`/posts`);
  }

  public getComments(id: number) {
    return this.getRequest<Comment[]>(`/commens?postId=${id}`);
  }

  public getUser(id: number) {
    return this.getRequest<User>(`/users/${id}`);
  }

  public getUserPosts(id: number) {
    return this.getRequest<Post[]>(`/posts?userId=${id}`);
  }
}
