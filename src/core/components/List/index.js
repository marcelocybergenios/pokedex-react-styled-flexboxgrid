import styled from "styled-components";

export const List = styled.ul`
  background-color: #242830;
  width: 100%;
  margin-top: 1rem;

  //apply to width > 768px
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    list-style: none;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  }

  //apply to width < 768px
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    list-style: none;
    background-color: #242830;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  }

  Link,
  a {
    width: 95%;
    text-decoration: none;
  }
`;
