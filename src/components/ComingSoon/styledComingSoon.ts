import styled from "styled-components";
import { TextField, Button } from '@mui/material';

export const Header = styled.header`
  position: absolute;
  top: 0;
  right: 5;
  width: 95%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 10; 
`;

export const Logo = styled.img`
  height:  clamp(1rem, 2.5vw, 3rem);
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 95%;
  height: 95%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export const ContentContainer = styled.div`
  position: absolute;
  bottom: clamp(0rem, 15%, 20rem); 
  right: clamp(0rem, 15%, 20rem); 
  color: #000;
  z-index: 1;

  .notification__box{
    width: 60%;
    margin-bottom:1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: clamp(18.5rem, 7vw, 30rem);

  .MuiInputLabel-formControl {
    font-size: clamp(0.6rem,2vw,1rem);
    font-weight: 600;
    margin-left: 20px;

  &.Mui-focused {
    font-weight: 500;
    margin-left: 1px;
  }
}

  .MuiInputBase-input{
    padding: 10px;
  }
`;

export const NotificationLabel = styled.label`
  font-size: clamp(1rem,2vw,3.5rem);
  font-weight: clamp(500,650,750);
  margin-bottom: clamp(1rem, 2vw, 2rem);
  width: 100px;
  font-family: "Inter", sans-serif;
`;

export const EmailInput = styled(TextField)`
  margin-bottom: clamp(0.5rem, 1vw, 1rem);
  width: 100%;
  box-sizing: border-box;
`;

export const ButtonSubmit = styled.button`
  margin-left: 30px;
  width: clamp(7rem, 6.2vw, 17rem);
  height: clamp(2.4rem, 3vw, 15rem);
  font-size: clamp(0.6rem,0.7vw,0.7rem);
  border: none;
  cursor: pointer;
  background-color: #660708;
  color: #fff;

  &:hover {
    background-color: #660708;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;

  @media (min-width: 1300px) {
    .content__form{
      width: 500px ;
    }
  }

  @media (max-width: 1200px) {
    .background__video {
      height: 60%;
    }
  }
  @media (max-width: 992px) {
    .background__video {
      height: 50%;
    }
  }
  @media (max-width: 768px) {
    .background__video {
      height: 40%;
    }
  }
  @media (max-width: 576px) {
    .background__video {
      height: 30%;
    }
  }

  @media (max-width: 410px) {
    .background__video {
      height: 20%;
    }

    .MuiInputLabel-formControl {
      font-weight: 500;
      margin-left: 10px;

      &.Mui-focused {
        font-weight: 500;
        margin-left: 1px;
      }
    }

    .MuiInputBase-input{
      padding: 4px;
    }
  }
`;