# Nominal typing emulation

```ts
const NumeratorSymbol = Symbol();

interface Numerator {
  symbol: typeof NumeratorSymbol;
  value: number;
}

const DenominatorSymbol = Symbol();

interface Denominator {
  symbol: typeof DenominatorSymbol;
  value: number;
}

interface Fraction {
  numerator: Numerator;
  denominator: Denominator;
}

function createNumerator(value: number): Numerator {
  return {
    symbol: NumeratorSymbol,
    value,
  };
}

function createDenominator(value: number): Denominator {
  if (value === 0) {
    throw Error("0 is not a valid denominator.");
  }
  return {
    symbol: DenominatorSymbol,
    value,
  };
}

function createFraction(numerator: Numerator, denominator: Denominator): Fraction {
  return {
    numerator,
    denominator,
  };
}

const numerator = createNumerator(0);

const denominator = createDenominator(1);

const fraction = createFraction(denominator, numerator);
```
