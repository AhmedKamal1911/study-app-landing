function sum(array, keyToBeSummed) {
  return array.reduce((acc, current) => acc + current[keyToBeSummed], 0);
}
export default sum;
