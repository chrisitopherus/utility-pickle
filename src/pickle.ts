import { Guard } from "./guard/guard";
import { Pipe } from "./pipe/pipe";
import { Regex } from "./regex/regex";
import { Transformation } from "./transformation/transformation";

/**
 * Pickle
 *
 * Central static API and namespace for utility functions and transformation pipelines.
 * Aggregates all core utilities (guard, pipe, transformation, regex) under a single,
 * convenient static class. This class is non-instantiable and intended for direct static usage.
 *
 * @example
 * // Transform a string to uppercase
 * Pickle.transformation.string.toUpper("hello"); // "HELLO"
 *
 * @example
 * // Check if a value is a string
 * Pickle.guard.isString("foo"); // true
 *
 * @example
 * // Build and run a pipeline (adds 1, then multiplies by 2)
 * Pickle.pipe.then((x: number) => x + 1).then(x => x * 2).build()(3); // 8
 *
 * @example
 * // Use a predefined regular expression
 * Pickle.regex.whitespace.test("abc def"); // true
 */
export class Pickle {
    /**
     * Provides access to guard utilities for runtime type and value checks.
     */
    public static readonly guard = Guard;

    /**
     * Provides access to pipe composition utilities for function pipelines.
     */
    public static readonly pipe = Pipe;

    /**
     * Provides access to string and number transformation utilities.
     */
    public static readonly transformation = Transformation;

    /**
     * Provides access to common regular expression patterns.
     */
    public static readonly regex = Regex;

    /**
     * Prevents instantiation of the utility class.
     */
    private constructor() { }
}