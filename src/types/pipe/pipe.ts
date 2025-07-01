/**
 * Defines a function of a pipe.
 */
export type PipeFunc<Input = unknown, Output = unknown> = (input: Input) => Output;