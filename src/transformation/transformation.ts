import { Pipe } from "../pipe/pipe";
import { PipeFunc } from "../types/pipe/pipe";
import { NumberTransformation } from "./numberTransformation";
import { StringTransformation } from "./stringTransformation";

/**
 * A static utility class that serves as a single entry point for all type- and value-transformations.
 * Provides easy access to common string and number transformations and utility functions such as pipe composition.
 */
export class Transformation {
    /**
     * Provides access to all string transformation utilities.
     */
    public static readonly string = StringTransformation;

    /**
     * Provides access to all number transformation utilities.
     */
    public static readonly number = NumberTransformation;

    /**
     * Prevents instantiation of the utility class.
     */
    private constructor() { }

    /**
     * Converts any value to a string.
     * @param i The value to convert.
     * @returns The string representation of the value.
     */
    public static toString(i: any) {
        return String(i);
    }

    // util

    /**
     * Starts a new transformation pipeline with the given function.
     * @param fn The initial function in the transformation pipeline.
     * @typeParam Input The type of the pipeline input.
     * @typeParam Output The type of the pipeline output.
     * @returns A PipeBuilder for further composition.
     */
    public static pipe<Input, Output>(fn: PipeFunc<Input, Output>) {
        return Pipe.then(fn);
    }
}