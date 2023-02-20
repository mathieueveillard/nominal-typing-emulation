# Nominal typing emulation

```typescript
import { error, Result, success } from "./util/Result";

const DenominatorSymbol = Symbol();

export type Denominator = {
  [DenominatorSymbol]: "Denominator";
  value: number;
};

const createDenominator = (value: number): Result<Denominator> => {
  if (value === 0) {
    return error("0 is not a valid denominator.");
  }
  return success({
    [DenominatorSymbol]: "Denominator",
    value,
  });
};

export default createDenominator;
```
