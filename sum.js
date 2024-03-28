// sum.js
export function sum(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

export function subtract(a, b) {
  return a - b;
}

export function mod(a, b) {
  return a % b;
}
