import React from "react";

import { Avatar, Dropdown, Typography } from "@bigbinary/neetoui";
import dayjs from "dayjs";
import { t } from "i18next";
import { MenuHorizontal } from "neetoicons";

const renderNameAndProfile = ({ name, imageUrl }) => (
  <div className="flex items-center space-x-3">
    <Avatar size="large" user={{ imageUrl, name }} />
    <Typography style="h4" type="semibold">
      {name}
    </Typography>
  </div>
);

const renderAction = ({ id, handleDelete }) => (
  <Dropdown buttonStyle="text" icon={MenuHorizontal}>
    <Dropdown.Menu>
      <Dropdown.MenuItem.Button>{t("common.edit")}</Dropdown.MenuItem.Button>
      <Dropdown.MenuItem.Button style="danger" onClick={() => handleDelete(id)}>
        {t("common.delete")}
      </Dropdown.MenuItem.Button>
    </Dropdown.Menu>
  </Dropdown>
);

export const buildContactTableColumn = handleDelete => [
  {
    title: t("contacts.table.name"),
    dataIndex: "name",
    key: "name",
    render: (_, row) => renderNameAndProfile(row),
  },
  {
    title: t("contacts.table.email"),
    dataIndex: "email",
    key: "email",
  },
  {
    title: t("contacts.table.createdAt"),
    dataIndex: "createdAt",
    key: "createdAt",
    render: createdAt => dayjs(createdAt).format("MMM, D, YYYY"),
  },
  {
    dataIndex: "action",
    key: "action",
    render: (_, row) => renderAction({ id: row.id, handleDelete }),
  },
];
