import styled from 'styled-components';

export const Container = styled.header`
  padding: 20px 0;

  header {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #80c148;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 20px;
        transition: opacity 0.2s;
        font-weight: 500;
        margin-right: 20px;

        &:hover {
          opacity: 0.6;
        }

      }
    }
  }
`;
