export const makeSuccessBody = <T>(data: T) => data;
export const makeErrorBody = <T>(code: number, message: string, data: T) => ({
  data: { code: code, data, message: message },
});
