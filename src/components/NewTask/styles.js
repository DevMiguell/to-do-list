import styled from 'styled-components'

export const Form = styled.form`
  input{
    font-size:1.2rem;
    background: #323232;
    border: none;
    border-radius: 0.2rem;
    padding: 0.8rem;
    width: 30vw;
    margin-bottom: 2rem;
    color:#D0D0D0;
    margin-right: 1rem;
  }

  button {
    border: none;
    padding: 0.8rem 1rem;
    color: white;
    background-color: #24a558;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: 0.3s;
    font-weight: bold;
    margin: 0;
    font-size: 1rem;

    &:hover {
      background-color: #43bc6d;
    }
  }
`