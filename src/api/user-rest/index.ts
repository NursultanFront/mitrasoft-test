import { BasicRest } from "../basic-rest";

import type { AxiosInstance } from "axios";
import type { User } from "./type";

export class UserRest extends BasicRest {
  constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  public getPosts() {
    return this.getRequest<User>(`/posts`);
  }
}
