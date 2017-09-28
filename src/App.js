// todo:
// - transitions
// - mobile styles

import React, { Component } from "react";
import TransitionGroup from 'react-transition-group/TransitionGroup';

import get from "./components/fetch";
import UserRow from "./components/UserRow";
import Spinner from "./components/Spinner";

import {
  Container,
  Heading,
  Sidebar,
  Content,
  Button,
  ButtonContainer
} from "./components/Styled";

class App extends Component {
  state = {
    loading: true,
    show: "all",
    users: [
      "ESL_SC2",
      "OgamingSC2",
      "cretetion",
      "freecodecamp",
      "storbeck",
      "habathcx",
      "RobotCaleb",
      "noobs2ninjas"
    ],
    streams: [],
    shownStreams: []
  };

  showAll = () => {
    // if we already have some shownStreams in state,
    // we should add unshown streams from this.state.streams
    if (this.state.shownStreams.length > 0) {
      this.setState({
        show: "all",
        shownStreams: [
          ...this.state.shownStreams,
          ...this.state.streams.filter(stream => !this.state.shownStreams.find(existingStreams => stream.user === existingStreams.user))
        ]
      });
      return;  
    }

    // ... if we don't,
    // we just show all streams in this.state.streams
    this.setState({
      show: "all",
      shownStreams: this.state.streams
    });
  };

  showOnline = () => {
    this.setState({
      show: "online",
      shownStreams: this.state.streams.filter(stream => stream.stream !== null)
    });
  };

  showOffline = () => {
    this.setState({
      show: "offline",
      shownStreams: this.state.streams.filter(stream => stream.stream === null)
    });
  };

  componentDidMount() {
    this.state.users.forEach((user, i) =>
      get(`/users/${user}`).then(user_info =>
        get(`/streams/${user}`).then(stream =>
          this.setState({
            streams: [
              ...this.state.streams,
              {
                user,
                user_info,
                stream: stream.stream
              }
            ],
            shownStreams: [
              ...this.state.shownStreams,
              {
                user,
                user_info,
                stream: stream.stream
              }
            ]
          })
        )
      )
    );
  }

  render() {
    const { show, shownStreams } = this.state;

    return (
      <Container>
        <Heading>
          FreeCodeCamp's Twitch API
        </Heading>
        <Sidebar>
          <ButtonContainer>
            <Button onClick={this.showAll} isActive={show === "all"}>
              All Streamers
            </Button>
            <Button onClick={this.showOnline} isActive={show === "online"}>
              Online
            </Button>
            <Button onClick={this.showOffline} isActive={show === "offline"}>
              Offline
            </Button>
          </ButtonContainer>
        </Sidebar>
        <Content>
          {shownStreams.length > 0
            ? <TransitionGroup style={{ width: "100%" }}>
                {shownStreams.map(twitch => {
                  const { user_info, stream } = twitch;

                  return (
                    <UserRow
                      key={user_info.name}
                      user={user_info}
                      stream={stream}
                    />
                  );
                })}
              </TransitionGroup>
            : <Spinner />
          }
        </Content>
      </Container>
    );
  }
}

export default App;
