import React from "react";

import { Avatar, Dropdown, Tag, Tooltip, Typography } from "@bigbinary/neetoui";
import { Clock, MenuVertical } from "neetoicons";
import { useTranslation } from "react-i18next";

import { calculateTimePassed, getDayTime } from "utils/dateTime";

import { DUMMY_CONTACTS } from "./constants";

const Card = ({
  note: { id, title, description, tags, status, updatedAt, assignedContact },
  handleEdit,
  handleDelete,
}) => {
  const { t } = useTranslation();

  return (
    <div className="neeto-ui-shadow-s mb-4 w-full rounded border border-gray-300 p-4">
      <div className=" flex">
        <Typography className="mr-auto" style="h4">
          {title}
        </Typography>
        <Dropdown buttonStyle="text" icon={MenuVertical} style="text">
          <Dropdown.Menu>
            <Dropdown.MenuItem.Button onClick={() => handleEdit(id)}>
              {t("common.edit")}
            </Dropdown.MenuItem.Button>
            <Dropdown.MenuItem.Button onClick={() => handleDelete(id)}>
              {t("common.delete")}
            </Dropdown.MenuItem.Button>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Typography className="text-gray-600" style="body2">
        {description}
      </Typography>
      <hr className="mb-4 mt-3" />
      <div className="flex">
        <div className="space-x-2">
          {tags?.map(tag => (
            <Tag key={tag.id} label={tag.name} />
          ))}
        </div>
        <Tooltip content={getDayTime(updatedAt)} position="bottom">
          <div className="ml-auto flex items-center gap-2 text-gray-600">
            <Clock size={12} />
            <Typography style="body3" textTransform="capitalize">
              {status}
            </Typography>
            <Typography style="body3">
              {calculateTimePassed(updatedAt)}
            </Typography>
            <Avatar
              size="small"
              user={
                DUMMY_CONTACTS.filter(
                  contact => contact.id === assignedContact
                )[0]
              }
            />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Card;
