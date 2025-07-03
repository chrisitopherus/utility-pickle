import { Guard } from "../guard/guard";
import { Regex } from "../regex/regex";

/**
 * StringTransformation
 * 
 * A static utility class for common and advanced string transformation and manipulation tasks.
 */
export class StringTransformation {
    /**
     * Prevents instantiation of the utility class.
     */
    private constructor() { }

    /**
     * Removes whitespace from both ends of a string.
     * @param s The string to trim.
     * @returns The trimmed string.
     */
    public static trim(s: string) {
        return s.trim();
    }

    /**
     * Converts all characters in a string to lowercase.
     * @param s The string to convert.
     * @returns The lowercase version of the input string.
     */
    public static toLower(s: string) {
        return s.toLowerCase();
    }

    /**
     * Converts all characters in a string to uppercase.
     * @param s The string to convert.
     * @returns The uppercase version of the input string.
     */
    public static toUpper(s: string) {
        return s.toUpperCase();
    }

    /**
     * Capitalizes the first character of the string.
     * @param s The string to capitalize.
     * @returns The string with its first character in uppercase.
     */
    public static capitalize(s: string) {
        return this.toUpper(s.charAt(0)) + s.slice(1);
    }

    /**
     * Removes all whitespace characters from a string.
     * @param s The string to process.
     * @returns The string without any whitespace.
     */
    public static removeWhitespace(s: string) {
        return s.replace(Regex.whitespace, "");
    }

    /**
     * Splits a string by a delimiter or regular expression.
     * @param s The string to split.
     * @param delimiter The delimiter string or RegExp.
     * @param limit Optional maximum number of splits.
     * @returns An array of split substrings.
     */
    public static split(s: string, delimiter: string | RegExp, limit?: number) {
        return s.split(delimiter, limit);
    }

    /**
     * Converts a string or number to an integer (using base 10).
     * @param i The string or number to convert.
     * @returns The integer value.
     */
    public static toInt(i: string | number) {
        return Guard.isString(i) ? Number.parseInt(i) : i | 0;
    }

    /**
     * Converts a string to a floating-point number, returning a fallback if conversion fails.
     * @param i The string to convert.
     * @param fallback The fallback value if conversion fails (default: 0).
     * @returns The converted number or the fallback.
     */
    public static toNumber(i: string, fallback = 0) {
        const number = Number(i);
        return isNaN(number) ? fallback : number;
    }

    /**
     * Pads the left side of a string with a given character up to the specified length.
     * @param s The input string.
     * @param length The desired total length.
     * @param char The padding character (default: space).
     * @returns The padded string.
     */
    public static padLeft(s: string, length: number, char = " "): string {
        return s.padStart(length, char);
    }

    /**
     * Pads the right side of a string with a given character up to the specified length.
     * @param s The input string.
     * @param length The desired total length.
     * @param char The padding character (default: space).
     * @returns The padded string.
     */
    public static padRight(s: string, length: number, char = " "): string {
        return s.padEnd(length, char);
    }

    /**
     * Repeats the input string a specified number of times.
     * @param s The string to repeat.
     * @param count The number of times to repeat.
     * @returns The concatenated result string.
     */
    public static repeat(s: string, count: number): string {
        return s.repeat(count);
    }

    /**
     * Truncates a string to a maximum length.
     * @param s The input string.
     * @param maxLength The maximum allowed length.
     * @returns The truncated string, or the original if shorter than maxLength.
     */
    public static truncate(s: string, maxLength: number): string {
        return s.length > maxLength ? s.slice(0, maxLength) : s;
    }

    /**
     * Converts a string to snake_case.
     * @param s The input string.
     * @returns The snake_case version of the input.
     */
    public static toSnakeCase(s: string): string {
        return s
            .replace(Regex.spaces, "_")
            .replace(Regex.lowerUpper, "$1_$2")
            .toLowerCase();
    }

    /**
     * Converts a string to kebab-case.
     * @param s The input string.
     * @returns The kebab-case version of the input.
     */
    public static toKebabCase(s: string): string {
        return s
            .replace(Regex.spaces, "-")
            .replace(Regex.lowerUpper, "$1-$2")
            .toLowerCase();
    }

    /**
     * Converts a string to camelCase.
     * @param s The input string.
     * @returns The camelCase version of the input.
     */
    public static toCamelCase(s: string): string {
        return s
            .replace(Regex.separatorAndChar, x => x.charAt(x.length - 1).toUpperCase())
            .replace(Regex.firstUpper, x => x.toLowerCase());
    }

    /**
     * Converts a string to PascalCase.
     * @param s The input string.
     * @returns The PascalCase version of the input.
     */
    public static toPascalCase(s: string): string {
        return s
            .replace(Regex.separatorAndChar, x => x.charAt(x.length - 1).toUpperCase())
            .replace(Regex.firstLower, x => x.toUpperCase());
    }

    /**
     * Reverses the characters in a string.
     * @param s The input string.
     * @returns The reversed string.
     */
    public static reverse(s: string): string {
        return [...s].reverse().join("");
    }

    /**
     * Counts the number of times a substring occurs in a string.
     * @param s The input string.
     * @param subStr The substring to count.
     * @returns The count of occurrences.
     */
    public static countOccurrences(s: string, subStr: string): number {
        return s.split(subStr).length - 1;
    }

    /**
     * Removes all instances of a substring from a string.
     * @param s The input string.
     * @param subStr The substring to remove.
     * @returns The string with all instances of subStr removed.
     */
    public static removeAll(s: string, subStr: string): string {
        return s.replaceAll(subStr, "");
    }

    /**
     * Returns the leftmost n characters of a string.
     * @param s The input string.
     * @param n The number of characters.
     * @returns The substring containing the first n characters.
     */
    public static left(s: string, n: number): string {
        return s.slice(0, n);
    }

    /**
     * Returns the rightmost n characters of a string.
     * @param s The input string.
     * @param n The number of characters.
     * @returns The substring containing the last n characters.
     */
    public static right(s: string, n: number): string {
        return s.slice(-n);
    }

    /**
     * Removes all digit characters from a string.
     * @param s The input string.
     * @returns The string with digits removed.
     */
    public static removeDigits(s: string): string {
        return s.replace(Regex.digits, "");
    }

    /**
     * Removes all letter characters from a string.
     * @param s The input string.
     * @returns The string with letters removed.
     */
    public static removeLetters(s: string): string {
        return s.replace(Regex.letters, "");
    }

    /**
     * Removes all non-alphanumeric characters from a string.
     * @param s The input string.
     * @returns The string with non-alphanumeric characters removed.
     */
    public static removeNonAlphanumeric(s: string): string {
        return s.replace(Regex.nonAlphanumeric, "");
    }

    /**
     * Returns the Unicode code point of the first character of the string.
     * @param s The input string.
     * @returns The character code of the first character.
     */
    public static charCode(s: string): number {
        return s.charCodeAt(0);
    }
}