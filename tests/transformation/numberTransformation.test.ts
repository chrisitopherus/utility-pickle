import { NumberTransformation } from "../../src/transformation/numberTransformation";

describe("NumberTransformation", () => {
    describe("toInt (string input)", () => {
        test("parses pure numeric string", () => {
            expect(NumberTransformation.toInt("42")).toBe(42);
        });

        test("parses numeric prefix from mixed string", () => {
            expect(NumberTransformation.toInt("10abc")).toBe(10);
        });

        test("returns NaN for non-numeric string", () => {
            const result = NumberTransformation.toInt("abc");
            expect(Number.isNaN(result)).toBe(true);
        });
    });

    describe("toInt (number input)", () => {
        test("truncates positive float to int", () => {
            expect(NumberTransformation.toInt(12.9)).toBe(12);
        });

        test("truncates negative float to int", () => {
            expect(NumberTransformation.toInt(-3.7)).toBe(-3);
        });
    });
});