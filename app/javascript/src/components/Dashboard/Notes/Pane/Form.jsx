import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import { NOTES_FORM_VALIDATION_SCHEMA } from "./constants";

import { DUMMY_CONTACTS, DUMMY_TAGS } from "../constants";

const Form = ({ onClose, note, isEdit, setNotes }) => {
  const { t } = useTranslation();

  const handleSubmit = values => {
    const { assignedContact, tags, ...rest } = values;

    const newNote = {
      ...rest,
      assignedContact: assignedContact.value,
      tags: tags.map(tag => ({ id: tag.value, name: tag.label })),
    };
    setNotes(previousNotes => [...previousNotes, newNote]);
    Toastr.success(t("notes.createSuccess"));
    onClose();
  };

  return (
    <Formik
      initialValues={note}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm noValidate className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label={t("notes.fields.title")}
              name="title"
            />
            <Input
              required
              className="w-full flex-grow-0"
              label={t("notes.fields.description")}
              name="description"
              size="large"
            />
            <Select
              required
              className="w-full flex-grow-0"
              label={t("notes.fields.assignedContact")}
              name="assignedContact"
              options={DUMMY_CONTACTS.map(contact => ({
                value: contact.id,
                label: contact.name,
              }))}
            />
            <Select
              isMulti
              required
              className="w-full flex-grow-0"
              label={t("notes.fields.tags")}
              name="tags"
              options={DUMMY_TAGS.map(contact => ({
                value: contact.id,
                label: contact.name,
              }))}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label={isEdit ? t("common.update") : t("common.saveChanges")}
              loading={isSubmitting}
              style="primary"
              type="submit"
            />
            <Button label={t("common.cancel")} style="text" onClick={onClose} />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
