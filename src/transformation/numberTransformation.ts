import { Guard } from "../guard/guard";

/**
 * A static utility class for common number transformations and parsing operations.
 */
export class NumberTransformation {
    /**
     * Prevents instantiation of the utility class.
     */
    private constructor() { }

    /**
     * Converts a string or number to an integer (using base 10).
     * If the input is a string, it is parsed; otherwise, the number is truncated.
     * @param i The string or number to convert.
     * @returns The integer value.
     */
    public static toInt(i: string | number) {
        return Guard.isString(i) ? Number.parseInt(i) : i | 0;
    }
}