import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  PageContainer,
  VideoBackground,
  ContentContainer,
  NotificationLabel,
  EmailInput,
  ButtonSubmit,
  Form,
  Header,
  Logo,
} from './styledComingSoon';
import { Inter } from 'next/font/google';
import { Box } from '@mui/material';

const inter = Inter({ subsets: ['latin']});

// Definir esquema de validação com yup
const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

type FormData = {
  email: string;
};

const ComingSoon: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <PageContainer>
      <Header className="header">
        <Logo className="header__logo" src="/logo.png" alt="Logo" />
      </Header>
      <VideoBackground className="background__video" autoPlay muted loop>
        <source src="/coming.mp4" type="video/mp4" />
      </VideoBackground>
      <ContentContainer className="content__container">
        <Box className="notification__box">
          <NotificationLabel className={`notification__label ${inter.className}`}>
            Get notified when we launch
          </NotificationLabel>
        </Box>
        <Form className="content__form" onSubmit={handleSubmit(onSubmit)}>
          <EmailInput
            {...register('email')}
            type="email"
            className={`content__input ${inter.className}`}
            id="email"
            label="Email Address"
            variant="standard"
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
          />
          <ButtonSubmit type="submit" className={`content__button ${inter.className}`}>
            Sign Up
          </ButtonSubmit>
        </Form>
      </ContentContainer>
    </PageContainer>
  );
};

export default ComingSoon;
