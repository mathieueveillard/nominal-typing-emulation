import { Result, success } from "./util/Result";

const NUMERATOR_SYMBOL = Symbol();

export type Numerator = {
  [NUMERATOR_SYMBOL]: "Numerator";
  value: number;
};

const createNumerator = (value: number): Result<Numerator> => {
  return success({
    [NUMERATOR_SYMBOL]: "Numerator",
    value,
  });
};

export default createNumerator;
