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
  public postCreateUser(name): AxiosPromise<User> {
    return this.http.post("/users", {
      name,
      is_nellow: location.pathname === "/nellow/create"
    })
  }

  /**
  * get user
  */
  public getUser(id): AxiosPromise<User> {
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

  /**
   * twitter share
   */
  public postTwitter(id, name, icon) {
    return axios.post("http://133.167.127.211:4000/share", {
      id,
      name,
      icon
    })
  }
  
  public sleep(id): AxiosPromise<User> {
    return this.http.get(`/nellow/sleep/${id}`)
  }

  public wakeup(id): AxiosPromise<User> {
    return this.http.get(`/nellow/wakeup/${id}`)
  }
}

export default new Http;