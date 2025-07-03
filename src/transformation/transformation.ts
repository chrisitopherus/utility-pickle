import { Pipe } from "../pipe/pipe";
import { PipeFunc } from "../types/pipe/pipe";
import { NumberTransformation } from "./numberTransformation";
import { StringTransformation } from "./stringTransformation";

export class Transformation {
    public static readonly string = StringTransformation;
    public static readonly number = NumberTransformation;

    private constructor() { }

    public static toString(i: any) {
        return String(i);
    }

    // util

    public static pipe<Input, Output>(fn: PipeFunc<Input, Output>) {
        return Pipe.then(fn);
    }
}