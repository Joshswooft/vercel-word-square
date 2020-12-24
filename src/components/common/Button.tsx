import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  padding: 8px 27px;
  border-radius: 4px;
  border: 0;
  outline: none;
  color: ${(p) => p.theme.textColours.primary};
  transition: ${(props) => props.theme.animation.defaultTransition};
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 900;
  background-color: ${(p) => p.theme.colours.primary};

  &:hover {
    background-color: ${(props) => props.theme.colours.secondary};
    color: ${(p) => p.theme.textColours.secondary};
  }
`;
