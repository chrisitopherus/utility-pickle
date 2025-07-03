import { NumberTransformation } from "../../src/transformation/numberTransformation";

describe("NumberTransformation", () => {
    it("should parse string to int", () => {
        expect(NumberTransformation.toInt("42")).toBe(42);
        expect(NumberTransformation.toInt("10abc")).toBe(10);
        expect(NumberTransformation.toInt("abc")).toBeNaN();
    });

    it("should truncate numbers to int", () => {
        expect(NumberTransformation.toInt(12.9)).toBe(12);
        expect(NumberTransformation.toInt(-3.7)).toBe(-3);
    });
});