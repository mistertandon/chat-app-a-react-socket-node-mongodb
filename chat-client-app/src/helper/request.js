import axiosInstance from "./../api/axios";

// export const parseError = (errorRef) => {};
export const defineHeaders = (headers) => {
  return {
    ...headers,
    "Content-Type": "application/json",
  };
};

export const makeRequest = async (method, url, data, headers = {}) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      headers,
    });
    console.log("response", response);
    return response;
  } catch (err) {
    throw err;
  }
};
