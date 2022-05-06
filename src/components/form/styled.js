import styled from 'styled-components';


export const Former = styled.div`
  background-color: #fff;
  width: 400px;
  height: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  form input {
    margin: 10px;
    height: 40px;
    width: 320px;
    padding: 10px;
    font-size: 15px;
    border: 1px solid #ccc;
    border-radius: 7px;

    &:focus {
      border: 1px solid purple;
    }
  }

  button {
    margin: 10px;
    height: 40px;
    width: 320px;
    background-color: #7704C6;
    border: none;
    border-radius: 7px;
    font-size: 15px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    &:hover{
      background-color: #8A10DE;
    }
  }

`;

export const MsgError = styled.div`
font-size: 11px;
  color: #F00;
  position: absolute;
  bottom: -3px;
  left: 10px;
`

export const Icon = styled.div`
  position: absolute;

  right:  20px;
  bottom: 15px;
`;

export const Right = styled.div`
color: green;
`
export const Wrong = styled.div`
color: red;
`

export const Line = styled.div`
 position: relative;
`;

export const Cont = styled.div`
`;
