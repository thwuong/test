"use client";

import Category from "@/components/Category/Category";
import { CategoryModel } from "@/hooks/useProductCategory";
import Link from "next/link";

type Props = {
  currentCategory: string;
  categories: CategoryModel[];
  trans: any;
};
export default function Categories({
  currentCategory = "all",
  categories,
  trans,
}: Props) {
  return (
    <>
      <Link href={`?category=all`} shallow={true}>
        <Category
          active={currentCategory == "all" || !currentCategory ? true : false}
        >
          {trans && trans("all")}
        </Category>
      </Link>
      {categories?.map((c, index) => (
        <Link key={index} href={`?category=${c.slug}`} shallow={true}>
          <Category
            active={
              currentCategory
                ? currentCategory == c.slug
                : c.slug == ""
                ? true
                : false
            }
          >
            {c.name}
          </Category>
        </Link>
      ))}
    </>
  );
}
