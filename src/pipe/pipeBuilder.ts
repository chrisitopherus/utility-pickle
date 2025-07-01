import type { PipeFunc } from "../types/pipe/pipe";

export class PipeBuilder<Input, Output> {
    constructor(private readonly fns: PipeFunc<any, any>[] = []) { }

    public then<NextOutput>(fn: PipeFunc<Output, NextOutput>) {
        return new PipeBuilder<Input, NextOutput>([...this.fns, fn]);
    }

    public build(): PipeFunc<Input, Output> {
        return (input: Input) =>
            this.fns.reduce((product, fn) => fn(product), input as any);
    }
}