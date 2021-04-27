// Your code here
function mapToNegativize(sourceArray) {
  return sourceArray.map(item => {
    item *= -1;
    return item;
  });
}

function mapToNoChange(sourceArray) {
  return sourceArray.map(item => {
    return item;
  });
}
