import React from "react";
import {
  Container,
  Icon,
  IconImg,
  Info,
  Link,
  Status
} from "./Styled";

import iconPlaceholder from "../../images/icon-placeholder.png";

export default function UserRow(props) {
  const { user, stream } = props;
  const isOnline = stream !== null;

  return (
    <Container>
      <Icon>
        <IconImg
          src={user.logo ? user.logo : iconPlaceholder}
          alt={user.name}
        />
      </Icon>
      <Info>
        <Link href={`https://www.twitch.tv/${user.name}`}>
          {user.display_name}
        </Link>
        <Status online={isOnline}>
          {isOnline
            ? `${stream.channel.game}: ${stream.channel.status}`
            : "Offline"}
        </Status>
      </Info>
    </Container>
  );
}
