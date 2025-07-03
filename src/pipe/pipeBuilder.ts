import type { PipeFunc } from "../types/pipe/pipe";

/**
 * A utility class for fluently composing a pipeline of functions, where each function
 * receives the output of the previous function as its input. Call `.then()` to add steps,
 * and `.build()` to generate the composed pipeline function.
 * 
 * @typeParam Input The type of the pipeline's initial input value.
 * @typeParam Output The type of the pipeline's final output value.
 */
export class PipeBuilder<Input, Output> {
    /**
     * Constructs a PipeBuilder with an initial list of functions.
     * @param fns The list of pipe functions to be composed.
     */
    constructor(private readonly fns: PipeFunc<any, any>[] = []) { }

    /**
     * Adds another step to the function pipeline.
     * @param fn The next function to apply to the pipeline output.
     * @typeParam NextOutput The type of the output of the new function.
     * @returns A new PipeBuilder with the added function.
     */
    public then<NextOutput>(fn: PipeFunc<Output, NextOutput>) {
        return new PipeBuilder<Input, NextOutput>([...this.fns, fn]);
    }

    /**
     * Builds the composed pipeline function.
     * When invoked, the returned function will pass its input through all steps in order.
     * @returns The composed function that applies all pipeline steps in sequence.
     */
    public build(): PipeFunc<Input, Output> {
        return (input: Input) =>
            this.fns.reduce((product, fn) => fn(product), input as any);
    }
}