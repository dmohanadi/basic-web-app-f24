export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "dmohanadi" );
  }
  if (query.toLowerCase().includes("what is your name?")) {
    return ( "deema" );
  }

  const match = query.toLowerCase().match(/what is (\d+) plus (\d+)\?/);
  if (match) {
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      return (num1 + num2).toString();
  }

  const largestMatch = query.toLowerCase().match(/which of the following numbers is the largest: ([\d, ]+)\?/);
  if (largestMatch) {
    const numbers = largestMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    const largestNumber = Math.max(...numbers);
    return largestNumber.toString();
  }

  const multiplyMatch = query.toLowerCase().match(/what is (\d+) multiplied by (\d+)\?/);
  if (multiplyMatch) {
      const num1 = parseInt(multiplyMatch[1], 10);
      const num2 = parseInt(multiplyMatch[2], 10);
      return (num1 * num2).toString();
  }

  const squareCubeMatch = query.toLowerCase().match(/which of the following numbers is both a square and a cube: ([\d, ]+)\?/);
  if (squareCubeMatch) {
      const numbers = squareCubeMatch[1].split(',').map(num => parseInt(num.trim(), 10));
      for (const num of numbers) {
          const sqrt = Math.sqrt(num);
          const cbrt = Math.cbrt(num);
          if (Number.isInteger(sqrt) && Number.isInteger(cbrt)) {
              return num.toString();
          }
      }
      return "None";
  }
  const minusMatch = query.toLowerCase().match(/what is (\d+) minus (\d+)\?/);
  if (minusMatch) {
      const num1 = parseInt(minusMatch[1], 10);
      const num2 = parseInt(minusMatch[2], 10);
      return (num1 - num2).toString();
  }

  const primeMatch = query.toLowerCase().match(/which of the following numbers are primes: ([\d, ]+)\?/);
  if (primeMatch) {
      const numbers = primeMatch[1].split(',').map(num => parseInt(num.trim(), 10));
      const primes = numbers.filter(num => {
          if (num <= 1) return false;
          for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) return false;
          }
          return true;
      });
      return primes.length > 0 ? primes.join(', ') : "None";
  }

  return "";
}
