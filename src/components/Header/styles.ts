import styled from 'styled-components';

export const Container = styled.header`
  padding: 20px 0;

  header {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      text-decoration: none;
      border: none;
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
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 425px;
  width: 1150px; */

`;

export const ModalArea = styled.div`
  padding: 10px;

  div {
    max-width: 400px;
    margin: 40px;

    strong {
      font-size: 48px;
      transition: color 0.2s;

      &:hover {
        color: #81c043;
      }
    }
  }

      svg {
      font-size: 22px;
      margin: 0 10px;
      transition: color 0.2s;


      &:hover {
          color: #81c043;
        }
  }
`;
