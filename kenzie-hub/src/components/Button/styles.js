import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.whiteSchema ? "#FFFFFF" : "#7540E5")};
  color: ${(props) => (props.whiteSchema ? "#7540E5" : "#FFFFFF")};
  width: 65%;
  height: 48px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 7px;
  border: none;
  transition: 0.5s;

  :hover {
    color: var(--purple2);
  }
`;
