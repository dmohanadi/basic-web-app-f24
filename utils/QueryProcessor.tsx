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

  const sumMatch = query.toLowerCase().match(/what is ((?:\d+ plus )+\d+)\?/);
  if (sumMatch) {
      const numbers = sumMatch[1].split(' plus ').map(num => parseInt(num.trim(), 10));
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      return sum.toString();
  }

  const powerMatch = query.toLowerCase().match(/what is (\d+) to the power of (\d+)\?/);
  if (powerMatch) {
      const base = parseInt(powerMatch[1], 10);
      const exponent = parseInt(powerMatch[2], 10);
      const result = Math.pow(base, exponent);
      return result.toString();
  }

  const complexMatch = query.toLowerCase().match(/what is (\d+) plus (\d+) multiplied by (\d+)\?/);
  if (complexMatch) {
      const num1 = parseInt(complexMatch[1], 10);
      const num2 = parseInt(complexMatch[2], 10);
      const num3 = parseInt(complexMatch[3], 10);
      const result = num1 + (num2 * num3);
      return result.toString();
  }

  const multiplyAddMatch = query.toLowerCase().match(/what is (\d+) multiplied by (\d+) plus (\d+)\?/);
  if (multiplyAddMatch) {
      const num1 = parseInt(multiplyAddMatch[1], 10);
      const num2 = parseInt(multiplyAddMatch[2], 10);
      const num3 = parseInt(multiplyAddMatch[3], 10);
      const result = (num1 * num2) + num3;
      return result.toString();
  }

  const anagramMatch = query.toLowerCase().match(/which of the following is an anagram of (\w+): ([\w, ]+)\?/);
  if (anagramMatch) {
      const word = anagramMatch[1];
      const candidates = anagramMatch[2].split(',').map(w => w.trim());
      
      const sortedWord = word.split('').sort().join('');
      for (const candidate of candidates) {
          if (candidate.split('').sort().join('') === sortedWord) {
              return candidate;
          }
      }
      return "None";
  }

  const scrabbleMatch = query.toLowerCase().match(/what is the scrabble score of (\w+)\?/);
  if (scrabbleMatch) {
      const word = scrabbleMatch[1];
      const scrabbleScores = {
          a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10
      };
      const score = word.split('').reduce((acc, char) => acc + (scrabbleScores[char] || 0), 0);
      return score.toString();
  }



  return "";
}
