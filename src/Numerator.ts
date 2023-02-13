const NumeratorSymbol = Symbol();

type Numerator = {
  [NumeratorSymbol]: "Numerator";
  value: number;
};

const createNumerator = (value: number): Numerator => {
  return {
    [NumeratorSymbol]: "Numerator",
    value,
  };
};

const isNumerator = (numerator: Object): numerator is Numerator => {
  return !!numerator[NumeratorSymbol];
};

export { Numerator, createNumerator, isNumerator };
