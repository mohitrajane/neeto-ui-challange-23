import { t } from "i18next";
import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  tags: [],
  assignedContact: {},
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required(
      t("common.form.validation.required", { field: t("notes.fields.title") })
    ),
  description: yup
    .string()
    .trim()
    .required(
      t("common.form.validation.required", {
        field: t("notes.fields.description"),
      })
    ),
  tags: yup
    .array()
    .of(yup.object().shape({ label: yup.string(), value: yup.string() }))
    .min(
      1,
      t("common.form.validation.required", { field: t("notes.fields.tags") })
    ),
  assignedContact: yup
    .object()
    .shape({ label: yup.string(), value: yup.string() })
    .nullable()
    .required(
      t("common.form.validation.required", {
        field: t("notes.fields.assignedContact"),
      })
    ),
});
