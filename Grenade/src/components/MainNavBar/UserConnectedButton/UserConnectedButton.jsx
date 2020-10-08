import React from "react";
import { object } from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

import "./UserConnectedButton.css";

function UserConnectedButton({ user }) {
    return (
        <Button href={user.link} variant="outline-warning">
            <FontAwesomeIcon icon={faUser} />
            <b> {user.username}</b>
        </Button>
    );
}

UserConnectedButton.propTypes = { user: object };

export default UserConnectedButton;
