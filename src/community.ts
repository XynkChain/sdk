import { encrypt, decrypt } from "./crypto.js";

export class Community {
  name: string;
  secret: string;
  members: string[] = [];
  messages: string[] = [];

  constructor(name: string, secret: string) {
    this.name = name;
    this.secret = secret;
  }

  addMember(userId: string) {
    this.members.push(userId);
  }

  sendMessage(message: string) {
    const encrypted = encrypt(message, this.secret);
    this.messages.push(encrypted);
  }

  readMessages() {
    return this.messages.map(m => decrypt(m, this.secret));
  }
}
