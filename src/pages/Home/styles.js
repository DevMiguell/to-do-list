import styled from 'styled-components'


export const ContainerGlobal = styled.main`
  width: min(90vw, 800px);
  margin: 0 auto;
  text-align: center;
  position: relative;

  .logout {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem;
    border-radius: 50%;
    text-align: center;
    transition: 0.3s;

    &:hover {
      background-color: #4e4e4e;
    }

    img {
      width: 2rem;
    }
  }
`