export function randomString() {
  return Math.floor(1 + Math.random() * 0x1000).toString(16);
}
