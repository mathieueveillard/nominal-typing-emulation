import { Result, error, success } from "./util/Result";

const DENOMINATOR_SYMBOL = Symbol();

export type Denominator = {
  [DENOMINATOR_SYMBOL]: "Denominator";
  value: number;
};

const createDenominator = (value: number): Result<Denominator> => {
  if (value === 0) {
    return error("0 is not a valid denominator.");
  }
  return success({
    [DENOMINATOR_SYMBOL]: "Denominator",
    value,
  });
};

export default createDenominator;
