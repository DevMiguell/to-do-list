import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;

     img {
      width:30vw;
  }

  form {
    display: flex;
    align-items:center;
    flex-direction: column;
    margin-right: 4rem;

    input {
      font-size:1.2rem;
      background: #323232;
      border: none;
      border-radius: 0.2rem;
      padding: 1.2rem;
      width: 25vw;
      margin-bottom: 1.5rem;
      color:#D0D0D0;
    }

    button {
    width: 15vw;
    border: none;
    padding: 1rem;
    color: white;
    background-color: #24a558;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: 0.3s;
    margin: 0;
    font-size: 1rem;

    &:hover {
      background-color: #43bc6d;
      }
    }
  }

`