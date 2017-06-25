/* @flow */
import React, { Component } from "react";
import get from "./components/fetch";
import {
  Container,
  Heading,
  Sidebar,
  Content,
  Button,
  ButtonContainer,
  UserContainer
} from "./components/Styled";
import UserRow from "./components/UserRow";

class App extends Component {
  state = {
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
    return (
      <Container>
        <Sidebar>
          <Heading>
            FCC Twitch API
          </Heading>
          <ButtonContainer>
            <Button onClick={this.showAll} isActive={this.state.show === "all"}>
              All Streamers
            </Button>
            <Button
              onClick={this.showOnline}
              isActive={this.state.show === "online"}
            >
              Online
            </Button>
            <Button
              onClick={this.showOffline}
              isActive={this.state.show === "offline"}
            >
              Offline
            </Button>
          </ButtonContainer>
        </Sidebar>
        <Content>
          <UserContainer>
            {this.state.shownStreams.map(twitch =>
              <UserRow
                key={twitch.user.toLowerCase()}
                user={twitch.user}
                stream={twitch.stream}
              />
            )}
          </UserContainer>
        </Content>
      </Container>
    );
  }
}

export default App;
