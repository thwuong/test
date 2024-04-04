"use client";

import { API_PREFIX, requestHeader } from "@/utils/const";
import { useContext, useState } from "react";
import {
  useDefaultTranslation,
  useLocaleTranslation,
} from "@/hooks/useTranslation";

import Button from "../Button/Button";
import { CurrentLanguage } from "@/app/context";
import Input from "../Input/Input";
import { PropsWithChildrenAndClassName } from "@/types";
import axios from "axios";
import clsx from "clsx";
import { useFormik } from "formik";

const contactApi = `${API_PREFIX}/flows/trigger/a4810f4e-e6c2-4cc8-8ae8-6ebccfb0a111`;

type Props = {
  handleSubmit?: Function;
};
export default function ContactForm(
  props: PropsWithChildrenAndClassName<Props>
) {
  const { handleSubmit, className } = props;
  const [submitted, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      full_name: "",
      phone: "",
      email: "",
      message: "",
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.full_name) {
        errors.full_name = "Tên không được để trống";
      } else if (values.full_name.length > 120) {
        errors.full_name = "Tên không được vượt quá 120 kí tự";
      }

      if (!values.email) {
        errors.email = "Email không được để trống";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Email không hợp lệ";
      }

      if (!values.phone) {
        errors.phone = "Số điện thoại không được để trống";
      } else if (
        !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(values.phone)
      ) {
        errors.phone = "Số điện thoại không hợp lệ";
      }
      return errors;
    },
    onSubmit: (values) => {
      // handleSubmit && handleSubmit(values);
      axios
        .post(contactApi, values)
        .then((res) => {
          setSubmitted(true);
        })
        .finally(() => {
          setTimeout(() => {
            setSubmitted(false);
            formik.resetForm();
          }, 5000);
        });
    },
  });
  const currentLocale = useContext(CurrentLanguage);
  const { t, isLoading } = useLocaleTranslation(currentLocale, "contact");
  const { t: defaultT, isLoading: isDefaultLoading } =
    useDefaultTranslation("contact");
  if (!isDefaultLoading && !isLoading) {
    const trans = t ? t : defaultT;
    return (
      <form
        onSubmit={formik.handleSubmit}
        className={clsx("space-y-4 transition-all flex flex-col", className)}
      >
        <div>
          <Input
            label={trans("fullName")}
            type="text"
            placeholder={trans("fullNamePlaceholder")}
            name="full_name"
            onChange={formik.handleChange}
            value={formik.values.full_name}
            errorMessage={formik.errors.full_name}
          />
        </div>
        <div>
          <Input
            label={trans("phoneNumber")}
            type="tel"
            placeholder={trans("phoneNumberPlaceHolder")}
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            errorMessage={formik.errors.phone}
          />
        </div>
        <div>
          <Input
            label="Email"
            type="email"
            placeholder={trans("emailPlaceholder")}
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            errorMessage={formik.errors.email}
          />
        </div>
        <div>
          <Input
            multiple
            label={trans("message")}
            name="message"
            placeholder={trans("messagePlaceholder")}
            onChange={formik.handleChange}
            value={formik.values.message}
            row={5}
            extraAttribute={{ maxLength: 1000 }}
          />
        </div>
        <Button
          extraAttribute={{ type: "submit" }}
          variant="primary"
          className="capitalize max-lg:self-center"
        >
          {trans("sendInformation")}
        </Button>
        {submitted && <p>{trans("thankForSubmitting")}!</p>}
      </form>
    );
  }
}
