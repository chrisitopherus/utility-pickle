import { Transformation } from "../../src/transformation/transformation";

describe("Transformation", () => {
    describe("toString", () => {
        it("should convert values to string", () => {
            expect(Transformation.toString(123)).toBe("123");
            expect(Transformation.toString(true)).toBe("true");
            expect(Transformation.toString(null)).toBe("null");
        });
    });

    describe("pipe", () => {
        it("should create a one-step pipeline", () => {
            const pipe = Transformation.pipe((n: number) => n + 1).build();
            expect(pipe(5)).toBe(6);
        });

        it("should create a multi-step pipeline", () => {
            const pipe = Transformation
                .pipe((x: string) => x.length)
                .then((len) => len * 2)
                .build();
            expect(pipe("abcde")).toBe(10);
        });

        it("should allow type changes across pipeline steps", () => {
            const pipe = Transformation
                .pipe((n: number) => n.toString())
                .then((s) => s + "!")
                .build();
            expect(pipe(42)).toBe("42!");
        });
    });

    describe("string and number APIs", () => {
        it("should delegate to StringTransformation", () => {
            expect(Transformation.string.toUpper("abc")).toBe("ABC");
            expect(Transformation.string.toSnakeCase("FooBar")).toBe("foo_bar");
        });

        it("should delegate to NumberTransformation", () => {
            expect(Transformation.number.toInt("42")).toBe(42);
            expect(Transformation.number.toInt(12.8)).toBe(12);
        });
    });
});