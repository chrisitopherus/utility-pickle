import { Guard } from "../guard/guard";
import { DeepPartial } from "../types/core";

/**
 * A static utility class for common object transformation and manipulation tasks.
 */
export class ObjectTransformation {
    /**
     * Prevents instantiation of the utility class.
     */
    private constructor() { }

    /**
     * Recursively merges two objects into a new object.
     *
     * The merging logic is as follows:
     * - If a key exists in both objects and both values are arrays, the arrays are concatenated.
     * - If a key exists in both objects and both values are plain objects, the objects are recursively merged.
     * - Otherwise, the value from the incoming object takes precedence. If the incoming value is `null` or `undefined`,
     *   the existing value is used instead.
     *
     * Value precedence: `incoming` > `existing`
     *
     * @template T - The type of the base object.
     * @template U - The type of the incoming object.
     * @param existing - The base object, providing default or existing values.
     * @param incoming - The object with new or updated values to merge.
     * @returns A new object representing the merged result.
     */
    public static merge<T extends object, U extends object>(
        existing: T,
        incoming: U
    ): T & U {
        const result: any = {};
        const keys = new Set([...(Object.keys(existing) as (keyof T)[]), ...(Object.keys(incoming) as (keyof U)[])]);

        for (const key of keys) {
            const existingValue = existing[key as keyof T];
            const incomingValue = incoming[key as keyof U];

            if (Array.isArray(incomingValue) && Array.isArray(existingValue)) {
                result[key] = [...existingValue, ...incomingValue];
            } else if (Guard.isPlainObject(existingValue) && Guard.isPlainObject(incomingValue)) {
                result[key] = this.merge(existingValue, incomingValue);
            } else {
                result[key] = incomingValue ?? existingValue;
            }
        }

        return result;
    }

    /**
     * Applies a deep partial update to an existing object and returns the merged result.
     *
     * This method is useful when you want to patch only some fields of an object, 
     * possibly deeply nested ones, without modifying the original.
     * Internally, it uses {@link merge} method.
     *
     * @template T - The type of the object to be patched.
     * @param existing - The existing base object.
     * @param incoming - A deep partial object containing updates.
     * @returns A new object with the patch applied.
     */
    public static patch<T extends object>(
        existing: T,
        incoming: DeepPartial<T>
    ) {
        return this.merge(existing, incoming);
    }
}