import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import EmptyState from "components/commons/EmptyState";

import Card from "./Card";
import { DUMMY_NOTES } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState(DUMMY_NOTES);

  const { t } = useTranslation();

  const handleSearch = e => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredNotes = DUMMY_NOTES.filter(note =>
      note.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
    setNotes(filteredNotes);
  };

  const handleDelete = id => {
    logger.info(id);
  };

  const handleEdit = id => {
    logger.info(id);
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <Header
        className="mb-6"
        title="Notes"
        actionBlock={
          <Button
            icon="ri-add-line"
            label="Add new note"
            size="small"
            onClick={() => setShowNewNotePane(true)}
          />
        }
        searchProps={{
          value: searchTerm,
          onChange: handleSearch,
        }}
      />
      {notes.length ? (
        <>
          {notes.map(note => (
            <Card
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              key={note.id}
              note={note}
            />
          ))}
        </>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          primaryAction={() => setShowNewNotePane(true)}
          primaryActionLabel={t("common.emptyState.addEntity", {
            entity: "Note",
          })}
          subtitle={
            !searchTerm &&
            t("common.emptyState.description", { entity: "notes" })
          }
          title={
            searchTerm
              ? t("common.noSearchResults")
              : t("common.emptyState.message", { entity: "notes" })
          }
        />
      )}
      <NewNotePane
        // fetchNotes={fetchNotes}
        setShowPane={setShowNewNotePane}
        showPane={showNewNotePane}
      />
      {showDeleteAlert && (
        <DeleteAlert
          // refetch={fetchNotes}
          selectedNoteIds={selectedNoteIds}
          setSelectedNoteIds={setSelectedNoteIds}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </Container>
  );
};

export default Notes;
