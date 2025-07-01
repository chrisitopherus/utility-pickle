import { GuardFunc } from "../types/guard/guard";
import { Guard } from "./guard";

/**
 * A static utility class for constructing parameterized type guard functions.
 *
 * `GuardFactory` provides factory methods that generate reusable type guards,
 * enabling more expressive and composable runtime type checks.
 */
export class GuardFactory {
    private constructor() { }

    /**
     * Creates a type guard function that checks for strict equality
     * against a specific reference value.
     *
     * The returned function preserves literal types (e.g., `"admin"` instead of `string`),
     * making it useful for narrow type inference in discriminated unions or constant checks.
     *
     * @example
     * ```ts
     * const isAdmin = GuardFactory.fromValue("admin");
     * if (isAdmin(role)) {
     *   // role is now narrowed to "admin"
     * }
     * ```
     *
     * @param value The fixed value to compare against.
     * @returns A type guard function that returns `true` if a given value is strictly equal to `value`.
     */
    public static fromValue<const T>(value: T): GuardFunc<T> {
        return (guardValue: unknown): guardValue is T => Guard.isSpecificValue(guardValue, value);
    }
}