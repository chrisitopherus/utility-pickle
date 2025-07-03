import { Regex } from "../../src/regex/regex";

describe("Regex", () => {
    describe("whitespace", () => {
        it("matches one or more whitespace characters", () => {
            expect("foo   bar".replace(Regex.whitespace, "-")).toBe("foo-bar");
            expect("foo\tbar\nbaz".replace(Regex.whitespace, "-")).toBe("foo-bar-baz");
            expect("noWhitespace".replace(Regex.whitespace, "-")).toBe("noWhitespace");
        });
    });

    describe("digits", () => {
        it("matches one or more digit characters", () => {
            expect("abc123def456".replace(Regex.digits, "#")).toBe("abc#def#");
            expect("no digits".replace(Regex.digits, "#")).toBe("no digits");
        });
    });

    describe("letters", () => {
        it("matches one or more letter characters", () => {
            expect("123abc456DEF789".replace(Regex.letters, "#")).toBe("123#456#789");
            expect("123456".replace(Regex.letters, "#")).toBe("123456");
        });
    });

    describe("nonAlphanumeric", () => {
        it("matches non-alphanumeric characters", () => {
            expect("a!b@c#1$2%3^".replace(Regex.nonAlphanumeric, "-")).toBe("a-b-c-1-2-3-");
            expect("abc123".replace(Regex.nonAlphanumeric, "-")).toBe("abc123");
        });
    });

    describe("lowerUpper", () => {
        it("matches lowercase followed by uppercase", () => {
            const match = "fooBar TestString helloWorld".match(Regex.lowerUpper);
            expect(match).toContain("oB");
            expect(match).toContain("tS");
            expect(match).toContain("oW");
        });
    });

    describe("spaces", () => {
        it("matches one or more spaces for splitting", () => {
            expect("a   b c\t\td e".split(Regex.spaces)).toEqual(["a", "b", "c", "d", "e"]);
        });
    });

    describe("separatorAndChar", () => {
        it("matches dash, underscore, or space plus next char", () => {
            const str = "foo-bar_baz qux";
            const matches = [...str.matchAll(Regex.separatorAndChar)].map(m => m[0]);
            expect(matches).toEqual(["-b", "_b", " q"]);
        });
    });

    describe("pascalCamelBoundary", () => {
        it("matches PascalCase/CamelCase word boundaries", () => {
            const match = "HelloWorldCamel".match(Regex.pascalCamelBoundary);
            expect(match).toContain("oW");
            expect(match).toContain("dC");
        });
    });

    describe("firstUpper", () => {
        it("matches uppercase at the start of a string", () => {
            expect(Regex.firstUpper.test("Abc")).toBe(true);
            expect(Regex.firstUpper.test("abc")).toBe(false);
        });
    });

    describe("firstLower", () => {
        it("matches lowercase at the start of a string", () => {
            expect(Regex.firstLower.test("abc")).toBe(true);
            expect(Regex.firstLower.test("Abc")).toBe(false);
        });
    });

    describe("wordBoundary", () => {
        it("matches the start of words for capitalization", () => {
            const str = "hello world! test";
            const matches = [...str.matchAll(Regex.wordBoundary)].map(m => m[0]);
            expect(matches).toEqual(["h", "w", "t"]);
        });
    });

    describe("lineBreaks", () => {
        it("matches all line breaks", () => {
            const input = "a\nb\r\nc";
            expect(input.split(Regex.lineBreaks)).toEqual(["a", "b", "c"]);
            expect("line1\nline2".replace(Regex.lineBreaks, "|")).toBe("line1|line2");
        });
    });
});