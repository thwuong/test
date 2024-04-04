import { requestHeader } from "./const";

export const fetcher = (...args: any) =>
  fetch(args, requestHeader()).then((res) => res.json());
