// sum.test.js
import { expect, test } from "vitest";
import { sum, multiply, divide, power } from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
  // expect(sum(2, 2)).not.toBe(4);
});

test("adds 0 + 0 to equal 0", () => {
  expect(sum(0, 0)).toBe(0);
});

test("multiplies 2 * 2 to equal 4", () => {
  expect(multiply(2, 2)).toBe(4);
});

test("multiplies 3 * 3 to equal 9", () => {
  expect(multiply(3, 3)).toBe(9);
});

test("multiplies 0 * 0 to equal 0", () => {
  expect(multiply(0, 0)).toBe(0);
});

test("divides by 0 gives an error", () => {
  expect(() => divide(4, 0)).toThrow();
});

test("divides 4 / 2 to equal 2", () => {
  expect(divide(4, 2)).toBe(2);
});

test("powers 2^2 to equal 4", () => {
  expect(power(2, 2)).toBe(4);
});

test("powers 3^3 to equal 27", () => {
  expect(power(3, 3)).toBe(27);
});
