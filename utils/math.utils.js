export const generateFibonacci = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Invalid fibonacci input");
  }

  const result = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }

  return result;
};

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export const filterPrimes = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Invalid prime input");
  return arr.filter(isPrime);
};

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

export const calculateHCF = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Invalid HCF input");
  }
  return arr.reduce((acc, val) => gcd(acc, val));
};

export const calculateLCM = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Invalid LCM input");
  }
  return arr.reduce((acc, val) => (acc * val) / gcd(acc, val));
};
