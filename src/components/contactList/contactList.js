import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, Button } from "./contactList.styles";

const ContactList = ({ items, onDelete }) => {
  return (
    <>
      <List>
        {items.map((item) => (
          <ListItem key={item.id}>
            {item.name} {item.tel}{" "}
            <Button type="button" onClick={() => onDelete(item.id)}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};
ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
export default ContactList;
