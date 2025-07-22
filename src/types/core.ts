/**
 * Represents a valid property name for an object.
 * This includes both `string` and `symbol` types.
 */
export type PropertyName = string | symbol;

/**
 * Represents a literal value that can be either a `string` or a `number`.
 * Often used to constrain a set of valid constant values.
 */
export type Literal = string | number;

/**
 * Represents a nullish value — either `null` or `undefined`.
 * Useful for safely typing optional values or guard conditions.
 */
export type Nullish = undefined | null;

/**
 * Represents a type `T` that may also be `null` or `undefined`.
 * Commonly used to annotate values that may be missing or uninitialized.
 * 
 * @template T - The type that could be nullish.
 */
export type Nullable<T> = T | Nullish;

/**
 * Represents a recursive partial version of a given type `T`.
 * 
 * @template T - The type to transform into a deeply partial version.
 */
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object
    ? T[P] extends Function
    ? T[P]
    : DeepPartial<T[P]>
    : T[P];
};