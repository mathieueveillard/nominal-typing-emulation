import { Result, error, success } from "./util/Result";

const DENOMINATOR_SYMBOL = Symbol();

export type Denominator = {
  type: typeof DENOMINATOR_SYMBOL;
  value: number;
};

const createDenominator = (value: number): Result<Denominator> => {
  if (value === 0) {
    return error("0 is not a valid denominator.");
  }

  return success({
    type: DENOMINATOR_SYMBOL,
    value,
  });
};

export default createDenominator;
