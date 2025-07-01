import { Guard } from "../../src/guard/guard";

describe("Guard", () => {
    describe("isSpecificValue", () => {
        it("should return true if value equals expected", () => {
            expect(Guard.isSpecificValue("test", "test")).toBe(true);
        });

        it("should return false if value does not equal expected", () => {
            expect(Guard.isSpecificValue("test", "other")).toBe(false);
        });

        it("should return true if objects share the same reference", () => {
            const obj = {};
            expect(Guard.isSpecificValue(obj, obj)).toBe(true);
        });

        it("should return false if objects do not share the same reference", () => {
            expect(Guard.isSpecificValue({}, {})).toBe(false);
        });
    });

    describe("isBoolean", () => {
        it("should return true for boolean values", () => {
            expect(Guard.isBoolean(true)).toBe(true);
            expect(Guard.isBoolean(false)).toBe(true);
        });

        it("should return false for non-boolean values", () => {
            expect(Guard.isBoolean("true")).toBe(false);
        });
    });

    describe("isNullish", () => {
        it("should return true for null and undefined", () => {
            expect(Guard.isNullish(null)).toBe(true);
            expect(Guard.isNullish(undefined)).toBe(true);
        });

        it("should return false for non-nullish values", () => {
            expect(Guard.isNullish(0)).toBe(false);
        });
    });

    describe("isNotNullish", () => {
        it("should return true for defined, non-null values", () => {
            expect(Guard.isNotNullish("value")).toBe(true);
        });

        it("should return false for null and undefined", () => {
            expect(Guard.isNotNullish(null)).toBe(false);
            expect(Guard.isNotNullish(undefined)).toBe(false);
        });
    });

    describe("isString", () => {
        it("should return true for strings", () => {
            expect(Guard.isString("hello")).toBe(true);
        });

        it("should return false for non-strings", () => {
            expect(Guard.isString(123)).toBe(false);
        });
    });

    describe("isEmptyString", () => {
        it("should return true for empty string", () => {
            expect(Guard.isEmptyString("")).toBe(true);
        });

        it("should return false for non-empty string", () => {
            expect(Guard.isEmptyString("a")).toBe(false);
        });
    });

    describe("isNotEmptyString", () => {
        it("should return true for non-empty string", () => {
            expect(Guard.isNotEmptyString("a")).toBe(true);
        });

        it("should return false for empty string", () => {
            expect(Guard.isNotEmptyString("")).toBe(false);
        });
    });

    describe("isNumber", () => {
        it("should return true for numbers", () => {
            expect(Guard.isNumber(123)).toBe(true);
        });

        it("should return false for non-numbers", () => {
            expect(Guard.isNumber("123")).toBe(false);
        });
    });

    describe("isArray", () => {
        it("should return true for arrays", () => {
            expect(Guard.isArray([1, 2, 3])).toBe(true);
        });

        it("should return false for non-arrays", () => {
            expect(Guard.isArray("not array")).toBe(false);
        });
    });

    describe("isEmptyArray", () => {
        it("should return true for empty arrays", () => {
            expect(Guard.isEmptyArray([])).toBe(true);
        });

        it("should return false for non-empty arrays", () => {
            expect(Guard.isEmptyArray([1])).toBe(false);
        });
    });

    describe("isNotEmptyArray", () => {
        it("should return true for non-empty arrays", () => {
            expect(Guard.isNotEmptyArray([1])).toBe(true);
        });

        it("should return false for empty arrays", () => {
            expect(Guard.isNotEmptyArray([])).toBe(false);
        });
    });

    describe("isTuple", () => {
        it("should return true for tuple matching the guards", () => {
            expect(Guard.isTuple(
                [1, "hello"],
                Guard.isNumber,
                Guard.isString
            )).toBe(true);

            expect(Guard.isTuple<[2, "servus"]>(
                [2, "servus"],
                Guard.factory.fromValue(2),
                Guard.factory.fromValue("servus")
            )).toBe(true);
        });

        it("should return false for mismatched tuple", () => {
            expect(Guard.isTuple(
                [1, 2],
                Guard.isNumber,
                Guard.isString
            )).toBe(false);
        });
    });

    describe("isObject", () => {
        it("should return true for plain objects", () => {
            expect(Guard.isObject({ key: "value" })).toBe(true);
        });

        it("should return false for arrays and null", () => {
            expect(Guard.isObject(null)).toBe(false);
            expect(Guard.isObject([1, 2, 3])).toBe(false);
        });
    });

    describe("hasProperty", () => {
        it("should return true if object has property", () => {
            expect(Guard.hasProperty({ a: 1 }, "a")).toBe(true);
        });

        it("should return false if object lacks property", () => {
            expect(Guard.hasProperty({ b: 2 }, "a")).toBe(false);
        });
    });

    describe("isLiteral", () => {
        it("should return true if value matches a literal", () => {
            expect(Guard.isLiteral("yes", "yes", "no")).toBe(true);
        });

        it("should return false if value does not match any literal", () => {
            expect(Guard.isLiteral("maybe", "yes", "no")).toBe(false);
        });
    });
});