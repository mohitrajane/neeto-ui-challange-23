import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import { NOTES_FORM_INITIAL_FORM_VALUES } from "./constants";
import Form from "./Form";

const Create = ({ showPane, setShowPane, setNotes }) => {
  const { t } = useTranslation();
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("notes.createTitle")}
        </Typography>
      </Pane.Header>
      <Form
        isEdit={false}
        note={NOTES_FORM_INITIAL_FORM_VALUES}
        setNotes={setNotes}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;
