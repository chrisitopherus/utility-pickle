import { Guard } from "./guard/guard";
import { Pipe } from "./pipe/pipe";
import { Regex } from "./regex/regex";
import { Transformation } from "./transformation/transformation";

export class Pickle {
    public static readonly guard = Guard;
    public static readonly pipe = Pipe;
    public static readonly transformation = Transformation;
    public static readonly regex = Regex;
    private constructor() { }
}