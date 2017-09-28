import React from "react";
import Transition from 'react-transition-group/Transition';
import {
  Container,
  Icon,
  IconImg,
  Info,
  Link,
  Status
} from "./Styled";

import iconPlaceholder from "../../images/icon-placeholder.png";

// transition styles
const duration = 300;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  transform: "scale(0)",
  maxHeight: 0,
  opacity: 0,
}

const transitionStyles = {
  entered: {
    opacity: 1,
    maxHeight: 100,
    transform: "scale(1)"
  }
};

// component
function UserRow(props) {
  const { user, stream } = props;
  const isOnline = stream !== null;

  return (
    <Transition
      in={props.in}
      timeout={duration}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {(state) => (
        <Container
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
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
      )}
    </Transition>
  );
}

export default UserRow;
