import { StringTransformation } from "../../src/transformation/stringTransformation";

describe("StringTransformation", () => {
    describe("trim", () => {
        test("removes whitespace from both ends", () => {
            expect(StringTransformation.trim("  hi ")).toBe("hi");
        });
    });

    describe("toLower", () => {
        test("converts to lowercase", () => {
            expect(StringTransformation.toLower("ABC")).toBe("abc");
        });
    });

    describe("toUpper", () => {
        test("converts to uppercase", () => {
            expect(StringTransformation.toUpper("abc")).toBe("ABC");
        });
    });

    describe("capitalize", () => {
        test("capitalizes the first letter", () => {
            expect(StringTransformation.capitalize("hello")).toBe("Hello");
        });
    });

    describe("removeWhitespace", () => {
        test("removes all whitespace characters", () => {
            expect(StringTransformation.removeWhitespace(" a b \t c \n ")).toBe("abc");
        });
    });

    describe("split", () => {
        test("splits by character", () => {
            expect(StringTransformation.split("a,b,c", ",")).toEqual(["a", "b", "c"]);
        });

        test("splits by empty string into characters", () => {
            expect(StringTransformation.split("abc", "")).toEqual(["a", "b", "c"]);
        });
    });

    describe("toInt", () => {
        test("parses string as integer", () => {
            expect(StringTransformation.toInt("42")).toBe(42);
        });

        test("truncates float to integer", () => {
            expect(StringTransformation.toInt(17.9)).toBe(17);
        });
    });

    describe("toNumber", () => {
        test("parses float string to number", () => {
            expect(StringTransformation.toNumber("12.5")).toBe(12.5);
        });

        test("returns fallback if NaN", () => {
            expect(StringTransformation.toNumber("foo", 5)).toBe(5);
        });
    });

    describe("padLeft", () => {
        test("pads the left side", () => {
            expect(StringTransformation.padLeft("1", 3, "0")).toBe("001");
        });
    });

    describe("padRight", () => {
        test("pads the right side", () => {
            expect(StringTransformation.padRight("1", 3, "0")).toBe("100");
        });
    });

    describe("repeat", () => {
        test("repeats a string", () => {
            expect(StringTransformation.repeat("x", 3)).toBe("xxx");
        });
    });

    describe("truncate", () => {
        test("truncates a long string", () => {
            expect(StringTransformation.truncate("abcdef", 3)).toBe("abc");
        });

        test("does not truncate a short string", () => {
            expect(StringTransformation.truncate("ab", 3)).toBe("ab");
        });
    });

    describe("toSnakeCase", () => {
        test("converts to snake_case", () => {
            expect(StringTransformation.toSnakeCase("Foo BarTest")).toBe("foo_bar_test");
        });
    });

    describe("toKebabCase", () => {
        test("converts to kebab-case", () => {
            expect(StringTransformation.toKebabCase("Foo BarTest")).toBe("foo-bar-test");
        });
    });

    describe("toCamelCase", () => {
        test("converts from complex string", () => {
            expect(StringTransformation.toCamelCase("foo-bar_baz qux")).toBe("fooBarBazQux");
        });

        test("converts from PascalCase to camelCase", () => {
            expect(StringTransformation.toCamelCase("HelloWorld")).toBe("helloWorld");
        });
    });

    describe("toPascalCase", () => {
        test("converts from complex string", () => {
            expect(StringTransformation.toPascalCase("foo-bar_baz qux")).toBe("FooBarBazQux");
        });

        test("converts from camelCase to PascalCase", () => {
            expect(StringTransformation.toPascalCase("helloWorld")).toBe("HelloWorld");
        });
    });

    describe("reverse", () => {
        test("reverses a string", () => {
            expect(StringTransformation.reverse("abc")).toBe("cba");
        });
    });

    describe("countOccurrences", () => {
        test("counts overlapping substrings", () => {
            expect(StringTransformation.countOccurrences("aabbaaa", "aa")).toBe(2);
        });

        test("returns 0 if not found", () => {
            expect(StringTransformation.countOccurrences("abcabc", "d")).toBe(0);
        });
    });

    describe("removeAll", () => {
        test("removes all instances of a substring", () => {
            expect(StringTransformation.removeAll("ababa", "a")).toBe("bb");
        });
    });

    describe("left", () => {
        test("gets the left part of a string", () => {
            expect(StringTransformation.left("abc", 2)).toBe("ab");
        });
    });

    describe("right", () => {
        test("gets the right part of a string", () => {
            expect(StringTransformation.right("abc", 2)).toBe("bc");
        });
    });

    describe("removeDigits", () => {
        test("removes digits", () => {
            expect(StringTransformation.removeDigits("a1b2c3")).toBe("abc");
        });
    });

    describe("removeLetters", () => {
        test("removes letters", () => {
            expect(StringTransformation.removeLetters("a1b2c3")).toBe("123");
        });
    });

    describe("removeNonAlphanumeric", () => {
        test("removes non-alphanumeric characters", () => {
            expect(StringTransformation.removeNonAlphanumeric("a1!b2@c3")).toBe("a1b2c3");
        });
    });

    describe("charCode", () => {
        test("returns the char code of 'A'", () => {
            expect(StringTransformation.charCode("A")).toBe(65);
        });

        test("returns the char code of 'z'", () => {
            expect(StringTransformation.charCode("z")).toBe(122);
        });
    });
});