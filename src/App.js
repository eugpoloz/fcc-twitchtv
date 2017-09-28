/* @flow */
import React, { Component } from "react";
import get from "./components/fetch";
import {
  Container,
  Heading,
  Sidebar,
  Content,
  Button,
  ButtonContainer
} from "./components/Styled";
import UserRow from "./components/UserRow";

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
        <Sidebar>
          <Heading>FCC Twitch API</Heading>
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
          {shownStreams.map(twitch => {
            const { user_info } = twitch;
            return (
              <UserRow
                key={user_info.name}
                user={user_info}
                stream={twitch.stream}
              />
            );
          })}
        </Content>
      </Container>
    );
  }
}

export default App;
