function getImageUrl(name: string) {
  let href = new URL(`../${name}`, import.meta.url).href;
  return href;
}
export {getImageUrl};
