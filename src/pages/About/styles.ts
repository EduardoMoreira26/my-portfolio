import styled from 'styled-components';

import background from '../../assets/background.png';

export const Container = styled.div`
  max-width: 100%;
`;



export const Content = styled.div`
  button {
    cursor: pointer;
  }

  .intro {
    background: url(${background}) no-repeat center;
    background-size: cover;
    height: 550px;
    text-align: center;
    padding-top: 200px;
    color: #e1e1e6;


    h1 {
      margin-top: 10px;
      font-size: 66px;
      text-align: center;
    }
  }


  h1 {
    margin: 20px 0;
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .projects_container {
    max-width: 1200px;
    margin: 0 auto;

    .background-card {
      display: flex;
      flex-wrap: wrap;
      border-radius: 5px;
      text-align: center;
      border: 1px solid #1f1f1f;
      max-width: 100%;
      background: #1f1f1f;
      padding: 20px;



      .card {
        border-radius: 5px;
        border: 1px solid #121214;
        height: 400px;
        width: 365px;
        background: #121214;
        margin: 10px;
        transition: transform 0.2s;



        img {
          width: 360px;
          height: 300px;
          margin-bottom: 20px;
        }

        &:hover {
          transform: translatey(-10px);
          border: 3px solid #81c043;
        }

        strong {
          font-size: 24px;
          color: #e1e1e6;
        }

      }
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
`;

export const ModalArea = styled.div`

  width: 1600px;
  height: 700px;
  background: #345;
  border-radius: 5px;


`;
