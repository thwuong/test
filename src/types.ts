import { PropsWithChildren } from "react";

export type PropsWithChildrenAndClassName<P> = PropsWithChildren<P> & {
  className?: string;
};
