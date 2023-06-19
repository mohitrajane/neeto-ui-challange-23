import React, { useState } from "react";

import { Header, Container } from "@bigbinary/neetoui/layouts";
import { Button, Table } from "neetoui";
import { useTranslation } from "react-i18next";

import { DUMMY_CONTACTS } from "components/Dashboard/Notes/constants";

import { buildContactTableColumn } from "./utils";

const Contacts = () => {
  const [contacts, setContacts] = useState(DUMMY_CONTACTS);
  const [searchTerm, setSearchTerm] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [showNewContactPane, setShowNewContactPane] = useState(false);

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
            onClick={() => setShowNewContactPane(true)}
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
        columnData={buildContactTableColumn()}
        rowData={contacts}
      />
    </Container>
  );
};

export default Contacts;
