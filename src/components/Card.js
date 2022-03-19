import React, { Component } from "react";
import styled from "styled-components";
import {
  CardDiv,
  CardFirst,
  CardImg,
  CardText,
  TagContainer,
} from "../assets/styles/CardStyles";
import { Jobs } from "../data/Jobs";

export default class Card extends Component {
  render() {
    const DivContent = styled.main`
      padding: 3% 7%;
    `;

    return (
      <DivContent>
        {Jobs.map((job) => {
          return (
            <CardDiv key={job.id}>
              <CardFirst>
                <CardImg>
                  <img src="" alt="logo-company"></img>
                </CardImg>
                <CardText>
                  <p>
                    {job.company}
                    <span
                      style={
                        job.new
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                    >
                      NEW!
                    </span>
                    <span
                      style={
                        job.featured
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                    >
                      FEATURED
                    </span>
                  </p>
                  <p>{job.name}</p>
                  <p>
                    <span>{job.created}</span>
                    <span>{job.type}</span>
                    <span>{job.Location}</span>
                  </p>
                </CardText>
              </CardFirst>
              <TagContainer>
                {job.tags.map((tag) => {
                  return <div key={tag}>{tag}</div>;
                })}
              </TagContainer>
            </CardDiv>
          );
        })}
      </DivContent>
    );
  }
}
