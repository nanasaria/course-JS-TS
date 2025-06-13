import styled from 'styled-components';

export const Title = styled.h1`
  /*
  Para fazer condições via Styled Components
  color: ${(props) => (props.isRed ? 'red' : 'blue')};
  */
  small {
    font-size: 12pt;
    margin-left: 15px;
    color: #999;
  }
`;

export const Paragrafo = styled.p``;
