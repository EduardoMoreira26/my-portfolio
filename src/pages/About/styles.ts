import styled from 'styled-components';

import background from '../../assets/background.png';

export const Container = styled.div`
  max-width: 100%;



`;

export const Content = styled.div`
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

        &:hover {
          transform: translatey(-10px);
          border: 2px solid #6345;
        }

        img {
          width: 363px;
          height: 300px;
          margin-bottom: 30px;

        }

        strong {
          font-size: 24px;
          color: #e1e1e6;
        }

      }
    }



  }
`;
