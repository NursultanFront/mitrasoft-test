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
      transformRequest: [(data) => JSON.stringify(data)],
      transformResponse: [(data) => JSON.parse(data ? data : "{}")],
    });
  }

  private readonly endpoint;
  public readonly user: UserRest;
}

export const api = new Api();
