import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane as NeetoUIPane, Typography, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import { DUMMY_ROLES } from "components/constants";

import {
  CONTACTS_FORM_INITIAL_FORM_VALUES,
  CONTACTS_FORM_VALIDATION_SCHEMA,
} from "./constants";

const Pane = ({ showPane, setShowPane, setContacts }) => {
  const { t } = useTranslation();

  const onClose = () => setShowPane(false);

  const handleSubmit = ({ firstName, lastName, email, role }) => {
    const newContact = {
      name: `${firstName} ${lastName}`,
      email,
      role: role.value,
    };
    setContacts(previousContacts => [...previousContacts, newContact]);
    Toastr.success(t("contacts.createSuccess"));
    onClose();
  };

  return (
    <NeetoUIPane isOpen={showPane} size="large" onClose={onClose}>
      <NeetoUIPane.Header>
        <Typography style="h2" weight="semibold">
          {t("contacts.createTitle")}
        </Typography>
      </NeetoUIPane.Header>
      <Formik
        initialValues={CONTACTS_FORM_INITIAL_FORM_VALUES}
        validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormikForm noValidate className="w-full">
            <NeetoUIPane.Body className="space-y-6">
              <div className="flex gap-4">
                <Input
                  required
                  className="w-full flex-grow-0"
                  label={t("contacts.fields.firstName")}
                  name="firstName"
                />
                <Input
                  required
                  className="w-full flex-grow-0"
                  label={t("contacts.fields.lastName")}
                  name="lastName"
                />
              </div>
              <Input
                required
                className="w-full flex-grow-0"
                label={t("contacts.fields.email")}
                name="email"
              />
              <Select
                required
                className="w-full flex-grow-0"
                label={t("contacts.fields.role")}
                name="role"
                options={DUMMY_ROLES.map(role => ({
                  value: role.id,
                  label: role.name,
                }))}
              />
            </NeetoUIPane.Body>
            <NeetoUIPane.Footer>
              <Button
                className="mr-3"
                disabled={isSubmitting}
                label={t("common.saveChanges")}
                loading={isSubmitting}
                style="primary"
                type="submit"
              />
              <Button
                label={t("common.cancel")}
                style="text"
                onClick={onClose}
              />
            </NeetoUIPane.Footer>
          </FormikForm>
        )}
      </Formik>
    </NeetoUIPane>
  );
};

export default Pane;
