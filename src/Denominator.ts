const DenominatorSymbol = Symbol();

type Denominator = {
  [DenominatorSymbol]: "Denominator";
  value: number;
};

const createDenominator = (value: number): Denominator => {
  if (value === 0) {
    throw Error("0 is not a valid denominator.");
  }
  return {
    [DenominatorSymbol]: "Denominator",
    value,
  };
};

const isDenominator = (denominator: Object): denominator is Denominator => {
  return !!denominator[DenominatorSymbol];
};

export { Denominator, createDenominator, isDenominator };
