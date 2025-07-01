/**
 * Represents a type guard function that checks whether a given `unknown` value
 * is of type `Outcome`. Returns `true` if the value matches, and enables
 * type narrowing within a conditional block.
 *
 * @template Outcome The type that the guard function asserts.
 */
export type GuardFunc<Outcome> = (v: unknown) => v is Outcome;

/**
 * Represents a tuple of guard functions, where each function validates the
 * corresponding element in a tuple `T`.
 *
 * Used for guarding structured arrays (tuples) with fixed element types.
 *
 * @template T A tuple type to be guarded, e.g., `[string, number]`.
 */
export type GuardFuncCollection<T extends unknown[]> = {
    [K in keyof T]: GuardFunc<T[K]>;
};