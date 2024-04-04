import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props = {
  width?: string;
  height?: string;
  iframeSrc?: string;
};
export default function Map(props: PropsWithChildrenAndClassName<Props>) {
  const {
    children,
    className,
    width = "576px",
    height = "717px",
    iframeSrc,
  } = props;
  return (
    <div>
      <iframe
        src={
          iframeSrc ||
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.734005069806!2d105.77032909999998!3d10.02234645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a06298aae43e71%3A0xc6a64bdac582285d!2sNinh%20Kieu%20Wharf!5e0!3m2!1sen!2s!4v1699498164181!5m2!1sen!2s"
        }
        // width="800"
        // height="600"
        // style="border:0;"
        width={width}
        height={height}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={clsx("rounded-lg max-lg:w-full", className)}
      ></iframe>
    </div>
  );
}
