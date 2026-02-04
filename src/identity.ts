export function createIdentity(name: string) {
  return {
    id: crypto.randomUUID(),
    name
  };
}
