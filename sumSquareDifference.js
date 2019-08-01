class SumOfASquare {
  constructor(number) {
    this.number = number;
  }

  sumOfSquares() {
    let temp = [];

    function summarize(prev, curr) {
      return prev + curr;
    }

    for (let i = 0; i <= this.number; i++) {
      temp.push(i * i);
    }

    return temp.reduce(summarize);
  }

  squareOfTheSums() {
    let temp = 0;

    for (let i = 0; i <= this.number; i++) {
      temp += i;
    }

    return temp * temp;
  }
}

module.exports = { SumOfASquare };
