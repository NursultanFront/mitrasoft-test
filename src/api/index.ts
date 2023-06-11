import axios from "axios";
import { UserRest } from "./user-rest";

class Api {
  public constructor() {
    this.endpoint = Api.createEndpoint();
    this.user = new UserRest(this.endpoint);
  }

  private static createEndpoint() {
    return axios.create({
      baseURL: "https://jsonplaceholder.typicode.com/",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  private readonly endpoint;
  public readonly user: UserRest;
}

export const api = new Api();
