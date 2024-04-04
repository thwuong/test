"use client";

import { Fragment, PropsWithChildren } from "react";

export default function ServerComponentWrapper({
  children,
}: PropsWithChildren) {
  return <Fragment>{children}</Fragment>;
}
