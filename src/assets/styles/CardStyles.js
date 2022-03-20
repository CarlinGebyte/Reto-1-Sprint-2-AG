import styled from "styled-components";

export const TagContainer = styled.div`
  display: flex;
  width: 45%;
  justify-content: end;
  @media (max-width: 950px) {
    justify-content: start;
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const CompanyImg = styled.img`
  @media (max-width: 950px) {
    width: 4em;
  }
`;

export const CardDiv = styled.div`
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    padding-top: 2em;
    margin-bottom: 3em;
    padding-left: 6%;
  }
  @media (max-width: 340px) {
    width: 90%;
  }
  box-shadow: 1px 4px 24px 10px rgba(0, 0, 0, 0.03);
  margin-bottom: 1.5em;
  border-radius: 0.5em;
  width: 96%;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 3%;
`;

export const CardFirst = styled.div`
  width: 100%;
`;

export const CardImg = styled.div`
  width: 120px;
  display: inline-block;
  align-items: center;
  @media (max-width: 950px) {
    position: relative;
    top: -95px;
    width: 0;
  }
`;

export const CardText = styled.div`
  display: inline-block;
  flex-direction: column;
  width: 55%;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const New = styled.span`
  padding: 0.5em 1em 0.3em;
  font-size: 10px;
  font-weight: 600;
  margin: 0em 0em 0em 1em;
  border-radius: 2em;
  color: #fff;
  background-color: hsl(180, 29%, 50%);
`;
export const Featured = styled.span`
  padding: 0.5em 1em 0.3em;
  font-size: 10px;
  vertical-align: middle;
  font-weight: 600;
  margin: 0 0 0 0.5em;
  border-radius: 2em;
  color: #fff;
  background-color: #000;
`;
export const Li = styled.li`
  &:first-child {
    list-style: none;
    width: 60px;
  }
  list-style-position: inside;
  display: list-item;
  width: 90px;
  margin: 0 !important;
`;

export const Ul = styled.ul`
  padding: 0;
  display: flex;
  font-size: 13px;
  font-weight: 400;
  color: hsl(180, 8%, 52%);
`;

export const Company = styled.p`
  color: hsl(180, 29%, 50%);
  font-weight: 600;
  font-size: 14px;
`;

export const JobName = styled.p`
  font-weight: 700;
`;

export const Tag = styled.div`
  &:hover {
    background-color: hsl(180, 29%, 50%);
    color: #fff;
  }
  cursor: pointer;
  color: hsl(180, 29%, 50%);
  margin-right: 4%;
  margin-bottom: 4%;
  padding: 0.7em 0.5em 0.5em;
  border-radius: 0.2em;
  background-color: hsl(180, 52%, 96%);
  font-weight: 700;
  font-size: 12px;
`;