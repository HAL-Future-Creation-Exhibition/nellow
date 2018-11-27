import axios, { AxiosInstance, AxiosPromise } from "axios";
import { User } from "../model/type";

class Http {
  private http: AxiosInstance;
  constructor() {
    this.http = axios.create({
      baseURL: "https://hal-iot.net/iw",
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  /**
   * user create
   */
  public postCreateUser(): AxiosPromise<User> {
    return this.http.post("/users", {
      is_nellow: location.pathname === "/nellow/create"
    })
  }

  /**
  * get user
  */
  public getUser(id) {
    return this.http.get(`/users/${id}`);
  }

  /**
   * patch icon
   */
  public patchIcon(id, file): AxiosPromise<User> {
    const fd = new FormData();
    fd.append("icon", file);
    return this.http.patch(`/users/${id}/icon`, fd)
  }

  /**
   * patch user info
   */
  public patchUserInfo(id, name, service_index): AxiosPromise<User> {
    return this.http.patch(`/users/${id}`, {
      name,
      p_id: service_index
    })
  } 
}

export default new Http;