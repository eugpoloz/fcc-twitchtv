/* @flow */
import React, { Component } from "react";
import get from "./components/fetch";
import { Container, Heading } from "./components/Styled";

class App extends Component {
  state = {
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
      shownStreams: this.state.streams
    });
  };

  showOnline = () => {
    this.setState({
      shownStreams: this.state.streams.filter(stream => stream.stream !== null)
    });
  };

  showOffline = () => {
    this.setState({
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
        <Heading>
          FCC Twitch API wireframe
        </Heading>
        <div>
          <div onClick={this.showAll}>
            Show All
          </div>
          <div onClick={this.showOnline}>
            Show Online
          </div>
          <div onClick={this.showOffline}>
            Show Offline
          </div>
        </div>
        <br />
        <br />
        {this.state.shownStreams.map(twitch => {
          const lowkey_user = twitch.user.toLowerCase();
          return (
            <div key={lowkey_user}>
              <a href={`https://www.twitch.tv/${lowkey_user}`}>
                {twitch.user}
              </a>
              <br />
              {twitch.stream === null
                ? "Offline"
                : `${twitch.stream.channel.game}: ${twitch.stream.channel
                    .status}`}
            </div>
          );
        })}
      </Container>
    );
  }
}

export default App;
