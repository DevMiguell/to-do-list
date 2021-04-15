import styled from 'styled-components'

export const List = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    display: flex;
    margin-bottom: 1rem;

    div {
      width: 400px;
      padding: 0.8rem;
      margin-right: 1rem;
      background: #323232;
      border-radius: 0.5rem;

      span {
        color: #D0D0D0;
        text-align: initial;
        font-size: 1rem;
      }
    }

    button {
      background-color: #dd2000;
      border: none;
      border-radius: 0.25rem;
      color: #D0D0D0;
      cursor: pointer;
      margin: 0;
      padding: 0.6rem .8rem;
      transition: 0.3s;
    
      img {
        width: 1.2rem;
      }

      &:hover {
        background-color: #e82e00;
      }
    }
  }
`