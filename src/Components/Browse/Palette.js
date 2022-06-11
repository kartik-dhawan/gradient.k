import styled from "styled-components";

export const ColorPalette = styled.nav`
  position: fixed;
  width: 100%;
  top: 7.6rem;
  z-index: 10000;
  height: 7.2rem;
  @media (min-width: 768px) {
    top: 7.4rem;
    height: 8rem;
  }
  @media (min-width: 938px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  padding: 2px 20px;
  background-color: rgb(16, 11, 23);
  display: flex;
  padding: 20px 15px;
  justify-content: start;
  align-items: center;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  button {
    font-weight: 900;
    background: none;
    color: white;
    border-radius: 50%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px 7px;
    margin: 2px;
    position: fixed;
    cursor: pointer;
    z-index: 1;
  }
  > :nth-child(1) {
    left: 0;
    @media (min-width: 930px) {
      display: none;
    }
  }
  > :nth-child(2) {
    right: 0;
    @media (min-width: 930px) {
      display: none;
    }
  }
  > :nth-child(1)::before {
    content: "";
    position: fixed;
    height: 12vh;
    width: 43px;
    left: -3px;
    background: linear-gradient(to right, rgb(13, 9, 20), #45454500);
    z-index: -1;
    @media (min-width: 768px) {
      height: 13vh;
    }
  }
  > :nth-child(2)::before {
    content: "";
    position: fixed;
    height: 12vh;
    width: 43px;
    right: -3px;
    background: linear-gradient(to left, rgb(13, 9, 20), #45454500);
    z-index: -1;
  }
`;

export const Color = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
  width: 60px;
  height: 120px;
  justify-content: center;
  .colorTitle {
    color: wheat;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  margin: 0px 15px;
  > .border {
    padding: 2px;
    height: 100px;
    width: 100px;
  }
`;

export const ColorCircle = styled.div`
  height: 65px;
  width: 65px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.201);
  justify-content: center;
  background-color: red;
  cursor: pointer;
`;
