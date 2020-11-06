const input = document.getElementById("input").value;
let prime = [2];
let i = 0;
let count = 0;
let value;
let countArr = [];

//genarate facroial number based on input
function genarateFactorial() {
  const input = document.getElementById("input").value;
  let factorial = 1;

  for (let i = 1; i <= input; i++) {
    factorial = factorial * i;
  }

  return factorial;
}

//genarates prime numbers based on input
function findPrime() {
  prime = [2];
  const value = document.getElementById("input").value;

  for (let number = 3; number <= value; number++) {
    let numArr = [];
    for (let divider = 2; divider < number; divider++) {
      numArr.push(number % divider);
    }

    let isZero = numArr.includes(0);

    if (!isZero) {
      prime.push(number);
    }
  }
  console.log(prime);
}

function factorialDecomposition() {
  value = "";
  i = 0;
  count = 0;
  countArr = [];
  value = genarateFactorial(value);
  console.log(value);
  while (value !== 1) {
    if (value % prime[i] === 0) {
      value /= prime[i];
      count++;

      if (value === 1) {
        countArr.push(count);
      }
    } else {
      countArr.push(count);
      i++;
      count = 0;
    }
  }
  console.log(countArr);
}

function showDetails() {
  let output = document.getElementById("output");
  output.innerHTML = "";

  const h2 = document.createElement("h2");
  let val = genarateFactorial();
  let input = document.getElementById("input").value;
  h2.innerHTML = `${input} factorial value is ${val}`;
  output.appendChild(h2);

  const dec = document.createElement("h2");
  dec.innerHTML = `Factorial Decomposition of ${input}`;
  output.appendChild(dec);

  for (let i = 0; i < countArr.length; i++) {
    const h3 = document.createElement("h3");
    h3.innerHTML = `${prime[i]}<sup>${
      countArr[i] !== 1 ? countArr[i] : ""
    }</sup> ${i !== countArr.length - 1 ? "*" : ""} `;
    output.appendChild(h3);
  }
}

document.querySelector("button").addEventListener("click", () => {
  findPrime();
  factorialDecomposition();
  showDetails();
});
