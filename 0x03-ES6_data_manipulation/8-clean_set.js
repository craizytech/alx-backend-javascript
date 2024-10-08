export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const finalString = Array.from(set)
    .filter((word) => word.startsWith(startString))
    .map((word) => word.slice(startString.length))
    .join('-');

  return finalString;
}
