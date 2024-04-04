"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import React, { ReactNode } from "react";

import ReactPaginate from "react-paginate";
import clsx from "clsx";

type Props = {
  totalPages?: number;
  activePage?: number;
  className?: string;
  handlePageChange?: any;
};
export default function Pagination({
  totalPages = 1,
  activePage = 1,
  className,
  handlePageChange,
}: Props) {
  if (totalPages <= 1) return null;
  return (
    <ReactPaginate
      breakLabel={"..."}
      nextLabel={<ChevronRightIcon width={16} height={16} className="ml-3" />}
      previousLabel={
        <ChevronLeftIcon width={16} height={16} className="mr-3" />
      }
      pageRangeDisplayed={3}
      forcePage={activePage - 1}
      pageCount={totalPages}
      renderOnZeroPageCount={null}
      marginPagesDisplayed={2}
      pageClassName="rounded-[4px] hover:bg-mint"
      pageLinkClassName="py-[2px] px-[9px] rounded-[4px] hover:bg-mint"
      activeClassName="bg-mint text-primary"
      containerClassName="flex gap-x-2 items-center"
      onPageChange={handlePageChange}
    />
  );
}
