import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import EmptyState from "components/commons/EmptyState";
import { DUMMY_NOTES } from "components/constants";

import Card from "./Card";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteId, setSelectedNoteId] = useState("");
  const [notes, setNotes] = useState(DUMMY_NOTES);

  const { t } = useTranslation();

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    const filteredNotes = DUMMY_NOTES.filter(note =>
      note.title.toLowerCase().includes(event.target.value.trim().toLowerCase())
    );
    setNotes(filteredNotes);
  };

  const handleDelete = id => {
    setShowDeleteAlert(true);
    setSelectedNoteId(id);
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
            t("common.emptyState.description", { entity: t("notes.note") })
          }
          title={
            searchTerm
              ? t("common.noSearchResults")
              : t("common.emptyState.message", { entity: t("notes.note") })
          }
        />
      )}
      <NewNotePane
        setNotes={setNotes}
        setShowPane={setShowNewNotePane}
        showPane={showNewNotePane}
      />
      {showDeleteAlert && (
        <DeleteAlert
          notes={DUMMY_NOTES}
          selectedNoteId={selectedNoteId}
          setNotes={setNotes}
          setSelectedNoteId={setSelectedNoteId}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </Container>
  );
};

export default Notes;
