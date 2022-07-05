import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { ButtonContainer, Container, Title } from './styles';

export function Success() {
  const navigate = useNavigate();
  return (
    <Container>
      <Card>
        <img src="./public/sign-up.svg" style={{ margin: '0px auto' }} />
        <Title>Success!</Title>
        <ButtonContainer>
          <Button size="lg" onClick={() => navigate('/sign-up')}>
            Go Back!
          </Button>
        </ButtonContainer>
      </Card>
    </Container>
  );
}
