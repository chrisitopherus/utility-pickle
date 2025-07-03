import { GuardFactory } from "../../src/guard/guardFactory ";

describe("GuardFactory", () => {
    describe("fromValue", () => {
        it("should return a guard that checks for strict equality (primitives)", () => {
            const is42 = GuardFactory.fromValue(42);
            expect(is42(42)).toBe(true);
            expect(is42(43)).toBe(false);

            const isHello = GuardFactory.fromValue("hello");
            expect(isHello("hello")).toBe(true);
            expect(isHello("HELLO")).toBe(false);
        });

        it("should work with booleans", () => {
            const isTrue = GuardFactory.fromValue(true);
            expect(isTrue(true)).toBe(true);
            expect(isTrue(false)).toBe(false);
        });

        it("should work with null and undefined", () => {
            const isNull = GuardFactory.fromValue(null);
            expect(isNull(null)).toBe(true);
            expect(isNull(undefined)).toBe(false);

            const isUndef = GuardFactory.fromValue(undefined);
            expect(isUndef(undefined)).toBe(true);
            expect(isUndef(null)).toBe(false);
        });

        it("should check object reference equality", () => {
            const ref = { foo: "bar" };
            const isRef = GuardFactory.fromValue(ref);
            expect(isRef(ref)).toBe(true);
            expect(isRef({ foo: "bar" })).toBe(false);
        });

        it("should preserve literal type for type narrowing", () => {
            const isAdmin = GuardFactory.fromValue("admin");
            const role: string = "admin";
            expect(isAdmin(role)).toBe(true);
        });
    });
});