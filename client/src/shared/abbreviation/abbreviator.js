export function abbreviate(word) {
  return word
    .split(" ")
    .reduce((abbreviation, part) => `${abbreviation}${part[0]}`, "");
}
