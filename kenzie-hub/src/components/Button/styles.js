import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.whiteSchema ? "#FFFFFF" : "#7540E5")};
  color: ${(props) => (props.whiteSchema ? "#7540E5" : "#FFFFFF")};
  border: 2px solid var(--black);
  width: 100%;
  height: 34px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  transition: 0.5s;

  :hover {
    border-color: var(--lilac);
  }
`;
