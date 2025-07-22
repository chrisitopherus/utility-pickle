import { ObjectTransformation } from "../../src/transformation/objectTransformation";

describe("ObjectTransformation", () => {
    describe("merge", () => {
        it("should merge primitive values with incoming overriding existing", () => {
            const a = { name: "Alice" };
            const b = { name: "Bob" };
            const result = ObjectTransformation.merge(a, b);
            expect(result).toEqual({ name: "Bob" });
        });

        it("should keep existing value if incoming is null or undefined", () => {
            const a = { name: "Alice" };
            const b = { name: null };
            const result = ObjectTransformation.merge(a, b);
            expect(result).toEqual({ name: "Alice" });
        });

        it("should concatenate arrays", () => {
            const a = { tags: ["a", "b"] };
            const b = { tags: ["c"] };
            const result = ObjectTransformation.merge(a, b);
            expect(result).toEqual({ tags: ["a", "b", "c"] });
        });

        it("should deeply merge nested objects", () => {
            const a = { settings: { theme: "light", volume: 50 } };
            const b = { settings: { volume: 100 } };
            const result = ObjectTransformation.merge(a, b);
            expect(result).toEqual({ settings: { theme: "light", volume: 100 } });
        });

        it("should merge new keys", () => {
            const a = { a: 1 };
            const b = { b: 2 };
            const result = ObjectTransformation.merge(a, b);
            expect(result).toEqual({ a: 1, b: 2 });
        });
    });

    describe("patch", () => {
        it("should apply a partial update to an object", () => {
            const original = {
                name: "Alice",
                preferences: {
                    theme: "light",
                    language: "en"
                }
            };
            const patch = {
                preferences: {
                    theme: "dark"
                }
            };
            const result = ObjectTransformation.patch(original, patch);
            expect(result).toEqual({
                name: "Alice",
                preferences: {
                    theme: "dark",
                    language: "en"
                }
            });
        });

        it("should return unchanged object if patch is empty", () => {
            const original = { a: 1 };
            const patch = {};
            const result = ObjectTransformation.patch(original, patch);
            expect(result).toEqual({ a: 1 });
        });
    });
});