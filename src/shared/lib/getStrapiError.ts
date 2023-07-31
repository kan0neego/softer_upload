import type { ApiError } from "../types";

export const getStrapiError = (err: any): ApiError | void => {
  if (!err.response) return;

  const { data, status, statusText } = err.response;
  const message = data.message;

  return {
    status,
    statusText,
    message: message.toLowerCase(),
  };
};
