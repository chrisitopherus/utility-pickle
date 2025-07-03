import { StringTransformation } from "../../src/transformation/stringTransformation";

describe("StringTransformation", () => {
    it("should trim strings", () => {
        expect(StringTransformation.trim("  hi ")).toBe("hi");
    });

    it("should convert to lower and upper case", () => {
        expect(StringTransformation.toLower("ABC")).toBe("abc");
        expect(StringTransformation.toUpper("abc")).toBe("ABC");
    });

    it("should capitalize the first letter", () => {
        expect(StringTransformation.capitalize("hello")).toBe("Hello");
    });

    it("should remove all whitespace", () => {
        expect(StringTransformation.removeWhitespace(" a b \t c \n ")).toBe("abc");
    });

    it("should split strings", () => {
        expect(StringTransformation.split("a,b,c", ",")).toEqual(["a", "b", "c"]);
        expect(StringTransformation.split("abc", "")).toEqual(["a", "b", "c"]);
    });

    it("should convert to int and number", () => {
        expect(StringTransformation.toInt("42")).toBe(42);
        expect(StringTransformation.toInt(17.9)).toBe(17);
        expect(StringTransformation.toNumber("12.5")).toBe(12.5);
        expect(StringTransformation.toNumber("foo", 5)).toBe(5);
    });

    it("should pad left and right", () => {
        expect(StringTransformation.padLeft("1", 3, "0")).toBe("001");
        expect(StringTransformation.padRight("1", 3, "0")).toBe("100");
    });

    it("should repeat a string", () => {
        expect(StringTransformation.repeat("x", 3)).toBe("xxx");
    });

    it("should truncate a string", () => {
        expect(StringTransformation.truncate("abcdef", 3)).toBe("abc");
        expect(StringTransformation.truncate("ab", 3)).toBe("ab");
    });

    it("should convert to snake_case", () => {
        expect(StringTransformation.toSnakeCase("Foo BarTest")).toBe("foo_bar_test");
    });

    it("should convert to kebab-case", () => {
        expect(StringTransformation.toKebabCase("Foo BarTest")).toBe("foo-bar-test");
    });

    it("should convert to camelCase", () => {
        expect(StringTransformation.toCamelCase("foo-bar_baz qux")).toBe("fooBarBazQux");
        expect(StringTransformation.toCamelCase("HelloWorld")).toBe("helloWorld");
    });

    it("should convert to PascalCase", () => {
        expect(StringTransformation.toPascalCase("foo-bar_baz qux")).toBe("FooBarBazQux");
        expect(StringTransformation.toPascalCase("helloWorld")).toBe("HelloWorld");
    });

    it("should reverse a string", () => {
        expect(StringTransformation.reverse("abc")).toBe("cba");
    });

    it("should count occurrences", () => {
        expect(StringTransformation.countOccurrences("aabbaaa", "aa")).toBe(2);
        expect(StringTransformation.countOccurrences("abcabc", "d")).toBe(0);
    });

    it("should remove all substrings", () => {
        expect(StringTransformation.removeAll("ababa", "a")).toBe("bb");
    });

    it("should return left/right substrings", () => {
        expect(StringTransformation.left("abc", 2)).toBe("ab");
        expect(StringTransformation.right("abc", 2)).toBe("bc");
    });

    it("should remove digits, letters, non-alphanumeric", () => {
        expect(StringTransformation.removeDigits("a1b2c3")).toBe("abc");
        expect(StringTransformation.removeLetters("a1b2c3")).toBe("123");
        expect(StringTransformation.removeNonAlphanumeric("a1!b2@c3")).toBe("a1b2c3");
    });

    it("should get the char code", () => {
        expect(StringTransformation.charCode("A")).toBe(65);
        expect(StringTransformation.charCode("z")).toBe(122);
    });
});