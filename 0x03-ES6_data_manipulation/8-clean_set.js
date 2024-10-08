export default function cleanSet(set, startString) {
  if (!startString) return '';

  const finalString = [];

  set.forEach((element) => {
    if (element.startsWith(startString)) {
      finalString.push(element.slice(startString.length));
    }
  });

  return finalString.join('-');
}
