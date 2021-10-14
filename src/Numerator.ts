import { Result, success } from "./util/Result";

const NUMERATOR_SYMBOL = Symbol();

export type Numerator = {
  type: typeof NUMERATOR_SYMBOL
  value: number;
};

const createNumerator = (value: number): Result<Numerator> => success({
  type: NUMERATOR_SYMBOL,
  value,
});

export default createNumerator;
