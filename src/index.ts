import { Community } from "./community.js";
import { createIdentity } from "./identity.js";

const alice = createIdentity("Alice");
const bob = createIdentity("Bob");

const xynk = new Community("XYNK Private Room", "super-secret-key");

xynk.addMember(alice.id);
xynk.addMember(bob.id);

xynk.sendMessage("Welcome to XYNK.");
xynk.sendMessage("This community is encrypted.");

console.log("Decrypted Messages:");
console.log(xynk.readMessages());
