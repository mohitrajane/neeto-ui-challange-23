import React, { useState } from "react";

import { Header, Container } from "@bigbinary/neetoui/layouts";
import { Button, Table } from "neetoui";
import { useTranslation } from "react-i18next";

import { DUMMY_CONTACTS } from "components/constants";

import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./Pane";
import { buildContactTableColumn } from "./utils";

const Contacts = () => {
  const [contacts, setContacts] = useState(DUMMY_CONTACTS);
  const [searchTerm, setSearchTerm] = useState("");
  const [isShowNewContactPane, setIsShowNewContactPane] = useState(false);
  const [isShowDeleteAlert, setIsShowDeleteAlert] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState("");

  const { t } = useTranslation();

  const filterByNameOrEmail = ({ contact: { name, email }, searchTerm }) => {
    const formattedSearchTerm = searchTerm.trim().toLowerCase();
    const hasSearchTerm =
      name.toLowerCase().includes(formattedSearchTerm) ||
      email.toLowerCase().includes(formattedSearchTerm);

    return hasSearchTerm;
  };

  const handleSearch = e => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredContacts = DUMMY_CONTACTS.filter(contact =>
      filterByNameOrEmail({ contact, searchTerm })
    );
    setContacts(filteredContacts);
  };

  const handleDelete = id => {
    setIsShowDeleteAlert(true);
    setSelectedContactId(id);
  };

  return (
    <Container>
      <Header
        className="mb-6"
        title={t("contacts.contacts")}
        actionBlock={
          <Button
            icon="ri-add-line"
            label="Add new contact"
            size="small"
            onClick={() => setIsShowNewContactPane(true)}
          />
        }
        searchProps={{
          value: searchTerm,
          onChange: handleSearch,
        }}
      />
      <Table
        fixedHeight
        rowSelection
        columnData={buildContactTableColumn(handleDelete)}
        rowData={contacts}
      />
      <NewContactPane
        setContacts={setContacts}
        setShowPane={setIsShowNewContactPane}
        showPane={isShowNewContactPane}
      />
      {isShowDeleteAlert && (
        <DeleteAlert
          contacts={contacts}
          selectedContactId={selectedContactId}
          setContacts={setContacts}
          setSelectedContactId={setSelectedContactId}
          onClose={() => setIsShowDeleteAlert(false)}
        />
      )}
    </Container>
  );
};

export default Contacts;
