export type MappingFunction<U, V> = (u: U) => Result<V>;

type ResultInterface<Type, U> = {
  type: Type;
  pipe: <V>(fn: MappingFunction<U, V>) => Result<V>;
};

export type Success<U> = ResultInterface<"SUCCESS", U> & { result: U };

export type Error<U> = ResultInterface<"ERROR", U> & { error: string };

export type Result<U> = Success<U> | Error<U>;

export const success = <U>(result: U): Success<U> => ({
  type: "SUCCESS",
  result,
  pipe: <V>(fn: MappingFunction<U, V>) => fn(result),
});

export const error = <U>(e: string): Error<U> => ({
  type: "ERROR",
  error: e,
  pipe: <V>(_fn: MappingFunction<U, V>) => error<V>(e),
});

/*
 * Testing facilities
 */

export const getResult = <U>(maybe: Result<U>): U => {
  return (maybe as Success<U>).result;
};

export const getError = <U>(maybe: Result<U>): string => {
  return (maybe as Error<U>).error;
};
