import React, { Component } from "react";
import { Tween, Timeline, SplitLetters } from "react-gsap";

export default class Loading extends Component {
  render() {
    return (
      <Timeline
        wrapper={<div className="full-screen loading dark-mode-text" />}
        target={
          <SplitLetters>
            <h1>Loading...</h1>
          </SplitLetters>
        }
      >
        <Tween
          staggerFrom={{ opacity: 0 }}
          staggerTo={{ opacity: 1 }}
          stagger={0.07}
          position="+=1"
        />
      </Timeline>
    );
  }
}
