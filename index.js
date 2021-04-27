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

function mapToDouble(sourceArray) {
  return sourceArray.map(item => {
    item *= 2;
    return item;
  });
}

function mapToSquare(sourceArray) {
  return sourceArray.map(item => {
    item *= item;
    return item;
  });
}

function reduceToTotal(sourceArray, startingPoint) {
  sourceArray.reduce((total,item) => {
    return total -= item;
  }
}