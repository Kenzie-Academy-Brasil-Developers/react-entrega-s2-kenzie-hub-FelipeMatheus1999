import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.whiteSchema ? "#FFFFFF" : "#7540E5")};
  color: ${(props) => (props.whiteSchema ? "#7540E5" : "#FFFFFF")};
  width: 65%;
  height: 48px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 7px;
  border: none;
  transition: 0.5s;
  margin: 10px;

  :hover {
    color: #2F2E41;
  }
`;
