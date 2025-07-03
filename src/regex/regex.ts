/**
 * A static utility class containing commonly used regular expressions
 */
export class Regex {
    private constructor() { }

    /**
     * Matches one or more whitespace characters.
     */
    public static readonly whitespace = /\s+/g;

    /**
     * Matches one or more digit characters.
     */
    public static readonly digits = /\d+/g;

    /**
     * Matches one or more letter characters (A-Z, a-z).
     */
    public static readonly letters = /[a-zA-Z]+/g;

    /**
     * Matches non-alphanumeric characters (inverse of [A-Za-z0-9]).
     */
    public static readonly nonAlphanumeric = /[^a-zA-Z0-9]+/g;

    /**
     * Matches lowercase followed by uppercase.
     */
    public static readonly lowerUpper = /([a-z])([A-Z])/g;

    /**
     * Matches one or more spaces for splitting.
     */
    public static readonly spaces = /\s+/g;

    /**
     * Matches dash, underscore, or space plus next char.
     */
    public static readonly separatorAndChar = /[-_ ]+./g;

    /**
     * Matches PascalCase/CamelCase word boundaries (split for e.g. `HelloWorld` to `Hello World`).
     */
    public static readonly pascalCamelBoundary = /([a-z])([A-Z])/g;

    /**
     * Matches uppercase at the start of a string for camel case conversion.
     */
    public static readonly firstUpper = /^[A-Z]/;

    /**
     * Matches lowercase at the start of a string for pascal case conversion.
     */
    public static readonly firstLower = /^[a-z]/;

    /**
     * Matches the start of a word for capitalization.
     */
    public static readonly wordBoundary = /\b\w/g;

    /**
     * Matches all line breaks (\r?\n).
     */
    public static readonly lineBreaks = /\r?\n/g;
}