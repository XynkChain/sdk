import crypto from "crypto";

const ALGO = "aes-256-ctr";

export function encrypt(text: string, secret: string) {
  const iv = crypto.randomBytes(16);
  const key = crypto.createHash("sha256").update(secret).digest();
  const cipher = crypto.createCipheriv(ALGO, key, iv);

  const encrypted = Buffer.concat([
    cipher.update(text),
    cipher.final()
  ]);

  return iv.toString("hex") + ":" + encrypted.toString("hex");
}

export function decrypt(hash: string, secret: string) {
  const [ivHex, contentHex] = hash.split(":");
  const iv = Buffer.from(ivHex, "hex");
  const key = crypto.createHash("sha256").update(secret).digest();

  const decipher = crypto.createDecipheriv(ALGO, key, iv);
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(contentHex, "hex")),
    decipher.final()
  ]);

  return decrypted.toString();
}
