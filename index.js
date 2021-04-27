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
  return sourceArray.reduce((total,item,startingPoint) => {
    total -= item;
    return total;
  });
}


