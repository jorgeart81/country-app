export type Result<T, E> = { success: true; value: T } | { success: false; error: E };

export const Result = {
  success: <T>(value: T): Result<T, never> => ({
    success: true,
    value,
  }),

  failure: <E>(error: E): Result<never, E> => ({
    success: false,
    error,
  }),
};
