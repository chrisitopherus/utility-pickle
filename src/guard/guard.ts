import { Literal, Nullable, Nullish, PropertyName } from "../types/core";
import { GuardFuncCollection } from "../types/guard/guard";
import { GuardFactory } from "./guardFactory ";

/**
 * A static utility class providing type-safe runtime type guards.
 * These methods help with type narrowing and validation in TypeScript code.
 */
export class Guard {
    /**
 * Provides access to a set of factory methods for generating reusable, 
 * parameterized type guards (e.g., for specific values or types).
 *
 * Use `Guard.factory` to construct custom guards dynamically, such as:
 * - Checking for specific literal values
 * - Creating guards for user-defined constraints
 *
 * @example
 * ```ts
 * const isHello = Guard.factory.fromValue("hello");
 * if (isHello(value)) {
 *   // value is "hello"
 * }
 * ```
 */

    /**
     * Provides access to a set of factory methods for generating reusable,
     * parameterized type guards (e.g., for specific values or types).
     * 
     * Use `Guard.factory` to construct custom guards dynamically, such as:
     * - Checking for specific literal values
     * - Creating guards for user-defined constraints
     */
    public static factory = GuardFactory;
    private constructor() { }

    /**
     * Checks if a value is strictly equal to a specific expected value.
     * @param value The value to check.
     * @param expected The specific value to compare against.
     * @returns `True` if `value` equals `expected`.
     */
    public static isSpecificValue<T>(value: unknown, expected: T): value is T {
        return value === expected;
    }

    /**
     * Checks if a value is a boolean.
     * @param value The value to check.
     * @returns `True` if `value` is of type `boolean`.
     */
    public static isBoolean(value: unknown): value is boolean {
        return typeof value === "boolean";
    }

    /**
     * Checks if a value is nullish.
     * @param value The value to check.
     * @returns `True` if `value` is {@link Nullish} (`null` or `undefined`).
     */
    public static isNullish(value: unknown): value is Nullish {
        return value === undefined || value === null;
    }

    /**
     * Checks if a value is not nullish.
     * @param value The value to check.
     * @returns `True` if `value` is not {@link Nullish} (`null` or `undefined`).
     */
    public static isNotNullish<T>(value: Nullable<T>): value is T {
        return value !== undefined && value !== null;
    }

    /**
     * Checks if a value is a string.
     * @param value The value to check.
     * @returns `True` if `value` is a `string`.
     */
    public static isString(value: unknown): value is string {
        return typeof value === "string";
    }

    /**
     * Checks if a string is exactly the empty string `("")`.
     * @param value The string to check.
     * @returns `True` if the string is empty.
     */
    public static isEmptyString(value: string): value is "" {
        return value === "";
    }

    /**
     * Checks if a string is not empty.
     * @param value The string to check.
     * @returns `True` if the string is `non-empty`.
     */
    public static isNotEmptyString<T extends string>(value: T): value is T {
        return value !== "";
    }

    /**
     * Checks if a value is a number.
     * @param value The value to check.
     * @returns `True` if `value` is a `number`.
     */
    public static isNumber(value: unknown): value is number {
        return typeof value === "number";
    }

    /**
     * Checks if a value is an array.
     * @param value The value to check.
     * @returns `True` if `value` is an `array`.
     */
    public static isArray<T extends unknown>(value: unknown): value is T[] {
        return Array.isArray(value);
    }

    /**
     * Checks if an array is empty.
     * @param value The array to check.
     * @returns `True` if the array has no elements.
     */
    public static isEmptyArray(value: unknown[]): value is [] {
        return value.length === 0;
    }

    /**
     * Checks if an array is not empty.
     * @param value The array to check.
     * @returns `True` if the array has at least one element.
     */
    public static isNotEmptyArray<T>(value: T[]): value is T[] {
        return value.length !== 0;
    }

    /**
     * Checks if a value is a tuple with the exact length and types,
     * verified using the provided guard functions for each position.
     * @param value The value to check.
     * @param guards A guard function for each element in the tuple.
     * @returns `True` if `value` is a `tuple` matching the guard pattern.
     */
    public static isTuple<T extends unknown[]>(
        value: unknown,
        ...guards: GuardFuncCollection<T>
    ): value is T {
        if (!Array.isArray(value)) return false;
        if (value.length !== guards.length) return false;
        return guards.every((guard, index) => guard(value[index]));
    }

    /**
     * Checks if a value is a plain object (excluding arrays and null).
     * @param value The value to check.
     * @returns `True` if `value` is a `non-null object`.
     */
    public static isObject(value: unknown): value is Record<PropertyName, unknown> {
        return typeof value === "object" && this.isNotNullish(value) && !this.isArray(value);
    }

    /**
     * Checks if an object has a given property key.
     * @param obj The object to check.
     * @param key The property key to look for.
     * @returns `True` if the object contains the property key.
     */
    public static hasProperty<T extends PropertyName>(
        obj: unknown,
        key: T
    ): obj is Record<T, unknown> {
        return this.isObject(obj) && key in obj;
    }

    /**
     * Checks if a value equals one of the provided literal values.
     * @param value The value to check.
     * @param literals A list of literal values to compare against.
     * @returns `True` if `value` is included in the provided literals.
     */
    public static isLiteral<T extends Literal>(
        value: unknown,
        ...literals: readonly T[]
    ): value is T {
        return literals.includes(value as T);
    }
}
