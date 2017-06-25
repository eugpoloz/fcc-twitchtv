import React from "react";
import { UserRowView } from "./Styled";

export default function UserRow(props) {
  const lowkey_user = props.user.toLowerCase();

  return (
    <UserRowView>
      <a href={`https://www.twitch.tv/${lowkey_user}`}>
        {props.user}
      </a>
      <div style={{ width: "100%" }}>
        {props.stream === null
          ? "Offline"
          : `${props.stream.channel.game}: ${props.stream.channel.status}`}
      </div>
    </UserRowView>
  );
}
