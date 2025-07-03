# utility-pickle

> **Note**: This project was built for my own convenience and is intended for personal use across my other projects. It comes without any promise of completeness, stability, or ongoing maintenance.

`utility-pickle` bundles several small TypeScript helpers under a single static `Pickle` class. The utilities focus on common runtime checks, functional piping, value transformations and handy regular expressions.

## Features

- **Guard** – type-safe predicates for runtime validation
- **Pipe** – fluent utility to compose function pipelines
- **Transformation** – string and number manipulation helpers
- **Regex** – collection of frequently used regular expression patterns

## Installation

```bash
npm install utility-pickle
```

## Quick Start

```ts
import { Pickle } from 'utility-pickle';

// Runtime guard
if (Pickle.guard.isString('hello')) {
  // narrowed to string
}

// Function pipeline
const addDouble = Pickle.pipe
  .then((n: number) => n + 1)
  .then((n) => n * 2)
  .build();
console.log(addDouble(3)); // 8

// String transformation
const kebab = Pickle.transformation.string.toKebabCase('Hello World'); // 'hello-world'

// Regex example
const tokens = 'foo-bar_baz'.split(Pickle.regex.separatorAndChar);
```

## API Overview

### `Pickle`
Central namespace that exposes all utilities.

```ts
export class Pickle {
  public static readonly guard = Guard;
  public static readonly pipe = Pipe;
  public static readonly transformation = Transformation;
  public static readonly regex = Regex;
}
```

### Guard
Runtime type guards such as `isString`, `isNumber`, and tuple checks. See `src/guard/guard.ts` for the full set of helpers and `GuardFactory` for dynamic guard creation.

### Pipe
Fluent builder for composing functions. Begin with `Pipe.then()` and finalize with `build()` to obtain the composed function. Implemented in `src/pipe/pipe.ts` and `src/pipe/pipeBuilder.ts`.

### Transformation
String and number utilities along with a helper to start pipelines via `Transformation.pipe()`.

### Regex
Useful regular expression constants like whitespace or digit matches, located in `src/regex/regex.ts`.

## API Documentation
**[View the full API documentation here.](https://chrisitopherus.github.io/utility-pickle/)**

## License

MIT