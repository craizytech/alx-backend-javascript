export default function getStudentsIdsSum(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
