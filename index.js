// Your code here
function mapToNegativize(sourceArray) {
  return sourceArray.map(item => {
    item *= -1;
    return item;
  })
}
console.log(mapToNegativize([1,2,3]));
