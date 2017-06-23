/* @flow */
import React, { Component } from "react";
import { get } from "./components/fetch";
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
    streams: []
  };

  componentDidMount() {
    this.state.users.forEach((user, i) =>
      get(`/streams/${user}`).then(stream =>
        this.setState({
          streams: [
            ...this.state.streams,
            {
              user,
              stream: stream.stream
            }
          ]
        })
      )
    );
  }

  render() {
    return (
      <Container>
        <Heading>
          FCC Twitch API wireframe
        </Heading>
        {this.state.streams.map(twitch => {
          return (
            <div>
              <a href={`https://www.twitch.tv/${twitch.user.toLowerCase()}`}>
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
