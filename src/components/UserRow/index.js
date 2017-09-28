import React from "react";
import Transition from 'react-transition-group/Transition';

import Link from "../Link";
import {
  Container,
  Icon,
  IconImg,
  Info,
  Status
} from "./Styled";

import iconPlaceholder from "../../images/icon-placeholder.png";

// transition styles
const duration = 300;

const defaultStyle = {
  transition: `all ${duration}ms ease-out`,
  transitionProperty: "transform, max-height, opacity",
  transform: "scale(0)",
  maxHeight: 0,
  opacity: 0
}

const transitionStyles = {
  entered: {
    transform: "scale(1)",
    maxHeight: 200,
    opacity: 1
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
      appear={true}
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
