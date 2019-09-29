import React, { Component } from "react";
import { Tween, Timeline, SplitLetters } from "react-gsap";

export default class Loading extends Component {
  render() {
    return (
      <Timeline
        wrapper={<div className="full-screen loading dark-mode-title" />}
        target={
          <SplitLetters>
            <h1>Loading...</h1>
          </SplitLetters>
        }
      >
        <Tween
          staggerTo={{
            y: -50,
            ease: "Bounce.easeOut",
            repeat: -1,
            yoyo: true
          }}
          stagger={0.07}
        />
      </Timeline>
    );
  }
}
