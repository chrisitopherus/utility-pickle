import { Pipe } from "../../src/pipe/pipe";

describe("Pipe", () => {
    it("should build a single-step pipeline", () => {
        const pipeline = Pipe.then((x: number) => x + 1).build();
        expect(pipeline(5)).toBe(6);
    });

    it("should build a multi-step pipeline", () => {
        const pipeline = Pipe
            .then((n: number) => n + 1)
            .then(n => n * 2)
            .then(n => `Value is ${n}`)
            .build();

        expect(pipeline(3)).toBe("Value is 8");
    });

    it("should handle different types through the pipeline", () => {
        const pipeline = Pipe
            .then((n: string) => n.length)
            .then(len => len > 3)
            .build();

        expect(pipeline("test")).toBe(true);
        expect(pipeline("hi")).toBe(false);
    });

    it("should return the input unchanged if no functions added", () => {
        const identity = Pipe.then((x: number) => x).build();
        expect(identity(123)).toBe(123);
    });

    it("should allow chaining multiple then() calls", () => {
        let called = 0;
        const pipeline = Pipe
            .then((x: number) => { called++; return x + 2; })
            .then((x: number) => { called++; return x * 3; })
            .build();

        expect(pipeline(1)).toBe(9);
        expect(called).toBe(2);
    });

    it("should support branching pipelines with independent build results", () => {
        const start = Pipe.then((n: number) => n + 1);
        const a = start.then(n => n * 2).build();
        const b = start.then(n => n * 3).build();

        expect(a(4)).toBe(10);
        expect(b(4)).toBe(15);
    });
});