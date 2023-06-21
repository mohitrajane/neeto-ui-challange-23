import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";
import { useTranslation } from "react-i18next";

const DeleteAlert = ({
  onClose,
  selectedContactId,
  setSelectedContactId,
  setContacts,
  contacts,
}) => {
  const { t } = useTranslation();

  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    setDeleting(true);
    setContacts(contacts.filter(note => note.id !== selectedContactId));
    onClose();
    Toastr.success(t("contacts.deleteSuccess"));
    setSelectedContactId("");
    setDeleting(false);
  };

  return (
    <Alert
      isOpen
      isSubmitting={deleting}
      message={t("contacts.deleteDescription")}
      title={t("contacts.deleteTitle")}
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
