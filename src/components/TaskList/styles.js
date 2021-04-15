import styled from 'styled-components'

export const TaskListTable = styled.div`
  tr {
    display:flex;
    justify-content:center;

    td {
      background: #323232;
      color:#D0D0D0;
      border: none;
      border-radius: 0.2rem;
      width: 50%;
      padding: 0.8rem;
      margin-right: 1rem;
      text-align:initial;
      font-size:1rem;
  }
    button {
      background-color: #dd2000;
      color: #D0D0D0;
      margin:0;
      border: none;
      border-radius: 0.25rem;
      padding: 0.6rem .8rem;
      cursor: pointer;
      transition: 0.3s;
    
    img{
      width:1.2rem;
    }

    &:hover {
      background-color: #e82e00;
    }
  }
  }

`