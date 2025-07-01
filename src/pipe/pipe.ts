import type { PipeFunc } from "../types/pipe/pipe";
import { PipeBuilder } from "./pipeBuilder";

export class Pipe {
    public static then<Input, Output>(fn: PipeFunc<Input, Output>) {
        return new PipeBuilder<Input, Output>([fn]);
    }
}