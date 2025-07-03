import { Guard } from "../guard/guard";

export class NumberTransformation {
    private constructor() { }

    public static toInt(i: string | number) {
        return Guard.isString(i) ? Number.parseInt(i) : i | 0;
    }
}