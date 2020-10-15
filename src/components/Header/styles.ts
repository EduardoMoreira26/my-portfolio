/* eslint no-use-before-define: 0 */

import styled from "styled-components";

export const Container = styled.header`
  padding: 20px 0;
  /* position: fixed; */
  /* width: 100%; */

  header {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    button {
      text-decoration: none;
      border: none;
      background-color: transparent;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 425px;
  width: 1150px; */
`;

export const ModalArea = styled.div`
  padding: 10px;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;

    transition: transform 0.2s;

    &:hover {
      transform: translatey(-10px);
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      width: 300px;
      border: 1px solid #0f1014;
      text-align: center;
      transition: border-color 0.2s;
      border-radius: 5px;
      margin: 4px 4px;

      &:hover {
        border: 3px solid #81c043;
      }

      strong {
        font-size: 48px;
        transition: color 0.2s;

        &:hover {
          color: #81c043;
        }
      }
    }
  }
`;
