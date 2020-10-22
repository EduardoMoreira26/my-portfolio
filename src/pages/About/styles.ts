/* eslint no-use-before-define: 0 */

import styled from "styled-components";

import background from "../../assets/background.png";

export const Container = styled.div`
  max-width: 100%;
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
  height: 90vh;
  width: 1190px;
  overflow-y: auto;
  padding: 20px;

  a {
    text-decoration: none;
    color: #81c043;
    transition: color 0.2s;

    &:hover {
      color: #6ba036;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #121214;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    box-shadow: inset 0 0 2px #81c043;
  }

  background: #1f1f1f;
  border-radius: 5px;

  .description {
    width: 900px;
    margin: 0 auto;

    p {
      line-height: 30px;
    }
  }

  .close-button {
    display: flex;
    justify-content: flex-end;
    transition: color 0.2s;
    cursor: pointer;

    &:hover {
      color: #81c043;
    }
  }

  .imgs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    img {
      width: 900px;
      height: 400px;
      padding: 10px;
      border-radius: 2px;
    }
  }
`;

export const Content = styled.div`
  button {
    cursor: pointer;
  }

  .img_skills {
    height: 120px;
    width: 120px;
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
    display: flex;
    flex-wrap: wrap;
    background: #1f1f1f;
    border-radius: 5px;

    .background-card {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      border-radius: 5px;
      text-align: center;
      border: 1px solid #1f1f1f;
      max-width: 100%;

      padding: 20px;

      .card {
        border-radius: 5px;
        border: 1px solid #121214;
        height: 400px;
        width: 355px;
        background: #121214;
        transition: transform 0.2s;

        img {
          width: 345px;
          height: 300px;
          margin-bottom: 10px;
          border-radius: 2px;
        }

        &:hover {
          transform: translatey(-10px);
          border: 3px solid #81c043;
        }

        strong {
          font-size: 24px;
          color: #e1e1e6;
        }

        p {
          color: #5f5f5f;
          font-size: 18px;
          font-weight: 500;
        }
      }
    }
  }

  .skills_section {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;

    strong {
      color: #5f5f5f;
      font-style: italic;
      margin-bottom: 20px;
    }

    .skills {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 auto;
      padding: 40px 0;

      h2 {
        color: #5f5f5f;
        margin: 20px 0;
      }

      p {
        color: #e1e1e6;
        line-height: 25px;
      }
    }
  }
`;
