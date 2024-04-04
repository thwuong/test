"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export type BreadCrumb = {
  label: string;
  href: string;
};
export default function SectionBannerBreadcrumb({ label, href }: BreadCrumb) {
  const pathName = usePathname();
  return (
    <div>
      <span className="mx-2 text-neutral-500">/</span>
      <Link
        href={href}
        className={clsx(
          pathName?.startsWith(href)
            ? "text-primary text-base"
            : "text-neutral-500",
          "capitalize"
        )}
      >
        {label}
      </Link>
    </div>
  );
}
