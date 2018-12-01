import { User } from "../model/type";

class DB {
  private user: User;
  getUser(): User {
    if(!this.user) {
      this.user = JSON.parse(localStorage.getItem("nellow-user-info"));
    }

    return this.user;
  }
  setUser(user: User) {
    this.user = user;
    localStorage.setItem("nellow-user-info", JSON.stringify(user));
  }

  clear() {
    localStorage.removeItem("nellow-user-info");
  }
}

export default new DB;