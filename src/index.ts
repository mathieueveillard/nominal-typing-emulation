// Numerator
const NumeratorSymbol = Symbol();

type Numerator = {
  symbol: typeof NumeratorSymbol;
  value: number;
};

const createNumerator = (value: number): Numerator => {
  return {
    symbol: NumeratorSymbol,
    value,
  };
};

// Denominator
const DenominatorSymbol = Symbol();

type Denominator = {
  symbol: typeof DenominatorSymbol;
  value: number;
};

const createDenominator = (value: number): Denominator => {
  if (value === 0) {
    throw Error("0 is not a valid denominator.");
  }
  return {
    symbol: DenominatorSymbol,
    value,
  };
};

// Fraction
type Fraction = {
  numerator: Numerator;
  denominator: Denominator;
};

const createFraction = (numerator: Numerator, denominator: Denominator): Fraction => {
  return {
    numerator,
    denominator,
  };
};

const numerator = createNumerator(0);

const denominator = createDenominator(1);

// @ts-expect-error
const fraction = createFraction(denominator, numerator);

export { createNumerator, createDenominator, createFraction };
