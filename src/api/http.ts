import axios, { AxiosInstance } from "axios";

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
  public postCreateUser() {
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
  public patchIcon(id, file) {
    return this.http.patch(`/users/${id}/icon`, {
      icon: file
    })
  }

  /**
   * patch user info
   */
  public patchUserInfo(id, name, service_index) {
    return this.http.patch(`/users/${id}`, {
      name,
      p_id: service_index
    })
  } 
}

export default new Http;