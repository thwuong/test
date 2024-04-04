"use client";

import * as Select from "@radix-ui/react-select";

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { forwardRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { ASSET_PREFIX } from "@/utils/const";
import Image from "next/image";
import clsx from "clsx";
import { useLanguages } from "@/hooks/useLanguages";

type Props = {
  lang: string;
};
export default function LanguageSwitcher({ lang }: Props) {
  const [selected, setSelected] = useState(lang);
  const { languages, languagesCode, languagesShortCode, isLoading } =
    useLanguages();
  const router = useRouter();
  const pathName = usePathname();
  const handleChangeLanguage = (value: string) => {
    setSelected(value);
    router.push(`/${value}/${pathName?.slice(3)}`);
  };
  if (languages)
    return (
      <Select.Root value={selected} onValueChange={handleChangeLanguage}>
        <Select.Trigger
          className={clsx(
            "inline-flex items-center justify-center rounded px-[15px] leading-none h-[35px] gap-[5px] data-[placeholder]:text-amulet-500 outline-none",
            languages && languages.length <= 1 && "pointer-events-none"
          )}
          aria-label="Languages"
        >
          <Select.Value>
            <div className="flex gap-x-2 items-center">
              <div className="relative w-6 h-4">
                <Image
                  src={
                    ASSET_PREFIX +
                    "/" +
                    languages.find((l: any) => l.code.slice(0, 2) == lang)
                      ?.cover
                  }
                  alt={lang}
                  fill
                  className="border-[0.2px] border-neutral-600 object-cover"
                />
              </div>

              <div className="text-amulet text-sm font-medium leading-6">
                {selected.toUpperCase()}
              </div>
            </div>
          </Select.Value>
          <Select.Icon
            className={clsx(
              "text-amulet",
              languages && languages.length <= 1 && "hidden"
            )}
          >
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            className={clsx(
              "z-10 overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
            )}
            position="popper"
          >
            <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className="p-[5px]">
              <Select.Group>
                {languages &&
                  languages.map((lang: any, index: number) => (
                    <SelectItem
                      key={lang?.name}
                      value={languagesShortCode[index]}
                    >
                      <div className="flex gap-x-2">
                        <div className="relative w-6 h-4">
                          <Image
                            src={ASSET_PREFIX + "/" + lang.cover}
                            alt={lang.name}
                            fill
                            className="border-[0.2px] border-neutral-600 object-cover"
                          />
                        </div>

                        <div>{lang.name}</div>
                      </div>
                    </SelectItem>
                  ))}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    );
}

// eslint-disable-next-line react/display-name
const SelectItem = forwardRef(
  ({ children, className, ...props }: any, forwardedRef: any) => {
    return (
      <Select.Item
        className={clsx(
          "text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary data-[highlighted]:text-amulet-100",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);
