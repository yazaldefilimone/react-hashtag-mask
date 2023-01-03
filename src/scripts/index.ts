type maskType = { value: string; pattern: string };

export const scriptMask = ({ value, pattern }: maskType) => {
  if (!pattern) {
    return value;
  }
  const limitOfCharacter = pattern.length;
  const maskCharacter = pattern.split("");
  const valueTransformedToArrayToString = value.toString().trim().slice(0, limitOfCharacter).split("");
  const mask = valueTransformedToArrayToString.map((character, index) => maskCharacter[index].replace(/#/, character));
  return mask.join("");
};
