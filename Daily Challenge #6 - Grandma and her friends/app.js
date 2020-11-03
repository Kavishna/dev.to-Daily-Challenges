//can add more values
const distance = [100, 200, 250, 300];

function getTotalDistance(distance) {
  //this array will hold data from calculateDistance function
  let finalDistances = [];

  for (let i = 0; i < distance.length - 1; i++) {
    let value = calculateDistance(distance, i);
    finalDistances.push(value);
  }

  //add first, last valuse of distance array and finalDistances array values to one array
  let totalDistances = [];

  //add first value of distance array to totalDistances
  totalDistances.push(distance[0]);

  //add all values of finalDistances to totalDistances
  for (let finalDistance of finalDistances) {
    totalDistances.push(parseFloat(finalDistance));
  }

  //add last value of distance array to totalDistances
  totalDistances.push(distance[distance.length - 1]);

  //calculate total
  const total = totalDistances.reduce((total, currentValue) => {
    return total + currentValue;
  });

  console.log(total.toFixed(2));
}

//calculate distance between (x1 t0 x2) (x2 to x3) (x3 to x4) .... according to pythagoras theorem
function calculateDistance(distance, i) {
  let temp = Math.pow(distance[i + 1], 2) - Math.pow(distance[i], 2);
  return Math.sqrt(temp).toFixed(2);
}

getTotalDistance(distance);
