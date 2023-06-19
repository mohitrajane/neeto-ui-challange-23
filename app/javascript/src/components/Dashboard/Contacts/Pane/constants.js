import { t } from "i18next";
import * as yup from "yup";

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: {},
};

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required(
      t("form.validation.required", { field: t("contacts.fields.firstName") })
    ),
  lastName: yup
    .string()
    .trim()
    .required(
      t("form.validation.required", { field: t("contacts.fields.lastName") })
    ),
  email: yup
    .string()
    .trim()
    .email()
    .required(
      t("form.validation.required", { field: t("contacts.fields.email") })
    ),
  role: yup
    .object()
    .shape({ label: yup.string(), value: yup.string() })
    .nullable()
    .required(
      t("form.validation.required", { field: t("contacts.fields.role") })
    ),
});
