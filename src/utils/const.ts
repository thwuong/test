export const API_PREFIX = process.env.NEXT_PUBLIC_RESOURCE_API;
export const ASSET_PREFIX = API_PREFIX + "/assets";
export const API_KEY = process.env.NEXT_PUBLIC_RESOURCE_API_KEY;
export const requestHeader = (args?: RequestInit) => {
  return {
    headers: {
      secretKey: `${API_KEY}`,
      contentType: "application/json; charset=UTF-8",
    },
    ...args,
  };
};
