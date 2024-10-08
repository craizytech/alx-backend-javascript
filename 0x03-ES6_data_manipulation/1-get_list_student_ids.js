export default function getListStudentsIds(array) {
  if (!(array instanceof Array)) {
    return [];
  }

  return array.map((element) => element.id);
}
