import type { PipeFunc } from "../types/pipe/pipe";
import { PipeBuilder } from "./pipeBuilder";

/**
 * A static entry class for composing function pipelines in a fluent, type-safe manner.
 * Enables the creation of function chains that transform an input value through a sequence of steps.
 * Use this class to start building a pipeline using `.then()`, and finalize with `.build()`.
 * 
 * Example:
 *   const pipeline = Pipe
 *     .then((n: number) => n + 1)
 *     .then((n) => n * 2)
 *     .build();
 *   pipeline(3); // 8
 */
export class Pipe {
    /**
     * Prevents instantiation of the utility class.
     */
    private constructor() { }

    /**
     * Begins a new pipe with the provided function as the first step.
     * @param fn The function to add as the first step in the pipeline.
     * @typeParam Input The type of the input value.
     * @typeParam Output The type of the output value.
     * @returns A PipeBuilder that allows chaining additional steps.
     */
    public static then<Input, Output>(fn: PipeFunc<Input, Output>) {
        return new PipeBuilder<Input, Output>([fn]);
    }
}