import { User } from "../models/UserModel";

export class UserViewModel {
  private user: User;

  constructor() {
    this.user = new User(0, "", "", 0);
  }

  get userData(): User {
    return this.user;
  }

  updateUser(id: number, name: string, email: string, age: number): void {
    this.user = new User(id, name, email, age);
  }
}
