import React from "react";
import { Container } from "./Styled";

export default function UserRow(props) {
  const { user, stream } = props;

  return (
    <Container>
      <img src={user.logo} alt={user.name} />
      <a href={`https://www.twitch.tv/${user.name}`}>{user.display_name}</a>
      <div style={{ width: "100%" }}>
        {stream === null
          ? "Offline"
          : `${stream.channel.game}: ${stream.channel.status}`}
      </div>
    </Container>
  );
}
