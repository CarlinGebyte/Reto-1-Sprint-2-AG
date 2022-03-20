import React, { Component } from "react";
import styled from "styled-components";
import {
  CardDiv,
  CardFirst,
  CardImg,
  CardText,
  Company,
  CompanyImg,
  Featured,
  JobName,
  Li,
  New,
  Tag,
  TagContainer,
  Ul,
} from "../assets/styles/CardStyles";
import { Jobs } from "../data/Jobs";

export default class Card extends Component {
  render() {
    const DivContent = styled.main`
      padding: 2em 10%;
      background-color: hsl(180, 52%, 96%);
      @media (max-width: 340px) {
        padding: 2em 5%;
      }
    `;

    return (
      <DivContent>
        {Jobs.map((job) => {
          return (
            <CardDiv
              key={job.id}
              style={
                job.featured
                  ? { borderLeft: "6px solid hsl(180, 29%, 50%)" }
                  : { borderLeft: "none" }
              }
            >
              <CardFirst>
                <CardImg>
                  <CompanyImg src={job.img} alt="logo-company"></CompanyImg>
                </CardImg>
                <CardText>
                  <Company>
                    {job.company}
                    <New
                      style={
                        job.new
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                    >
                      NEW!
                    </New>
                    <Featured
                      style={
                        job.featured
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                    >
                      FEATURED
                    </Featured>
                  </Company>
                  <JobName>{job.name}</JobName>
                  <Ul>
                    <Li>{job.created}</Li>
                    <Li>{job.type}</Li>
                    <Li>{job.Location}</Li>
                  </Ul>
                </CardText>
              </CardFirst>
              <TagContainer>
                {job.tags.map((tag) => {
                  return <Tag key={tag}>{tag}</Tag>;
                })}
              </TagContainer>
            </CardDiv>
          );
        })}
      </DivContent>
    );
  }
}
