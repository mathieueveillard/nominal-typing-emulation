import createDenominator, { Denominator } from "./Denominator";
import createNumerator, { Numerator } from "./Numerator";

type Fraction = {
  numerator: Numerator;
  denominator: Denominator;
};

const createFraction = (numerator: Numerator, denominator: Denominator): Fraction => ({
  numerator,
  denominator,
})

const numerator = createNumerator(0);

const denominator = createDenominator(1);

// @ts-expect-error
createFraction(denominator, numerator);

export { createNumerator, createDenominator, createFraction };
