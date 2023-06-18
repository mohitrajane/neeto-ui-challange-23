import React, { useState } from "react";

import { Alert } from "neetoui";
import { useTranslation } from "react-i18next";

const DeleteAlert = ({
  onClose,
  selectedNoteId,
  setSelectedNoteId,
  setNotes,
  notes,
}) => {
  const [deleting, setDeleting] = useState(false);

  const { t } = useTranslation();

  const handleDelete = () => {
    setDeleting(true);
    setNotes(notes.filter(note => note.id !== selectedNoteId));
    onClose();
    setSelectedNoteId("");
    setDeleting(false);
  };

  return (
    <Alert
      isOpen
      isSubmitting={deleting}
      message={t("notes.deleteDescription")}
      title={t("notes.deleteTitle")}
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
