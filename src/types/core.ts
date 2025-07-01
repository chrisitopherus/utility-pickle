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
 */
export type Nullable<T> = T | Nullish;