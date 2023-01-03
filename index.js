export const mask = (value = "", pattern) => {
  if (!pattern) {
    return value;
  }
  let index = 0;
  const valueTransformedToString = value.toString();
  const mask = pattern
    .replace(/#/g, () => valueTransformedToString[index++])
    .replace(/undefined/g, "");

  return mask;
};
