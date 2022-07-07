import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import CheckBox from '../../components/CheckBox';
import Input from '../../components/Input';
import { ErrorLabel, InputLabel } from '../../components/Input/styles';
import {
  Container,
  DateInput,
  Form,
  FirstInputContainer,
  InputGroup,
  SubmitContainer,
  Title,
  SecondInputContainer,
} from './styles';

export function SignUp() {
  const navigate = useNavigate();

  // Form for sign up user
  const [formValues, setFormValues] = React.useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    birthDate: new Date(),
    terms: false,
  });

  function handleFormValues(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function handleTerms(e: React.ChangeEvent<HTMLInputElement>): void {
    const { checked } = e.target;
    setFormValues({ ...formValues, terms: checked });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    localStorage.setItem('@user', JSON.stringify(formValues));
    console.log(formValues);
    navigate('/success');
  }

  return (
    <Container>
      <Card>
        <img src="./public/sign-up.svg" style={{ margin: '0px auto' }} />
        <Title>Intern Sign Up</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            required
            id="name"
            name="name"
            type="text"
            label="Full Name"
            placeholder="Name"
            pattern="^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,}$"
            value={formValues.name}
            onChange={handleFormValues}
          />
          <InputGroup>
            <FirstInputContainer>
              <Input
                required
                id="email"
                name="email"
                type="email"
                label="Email"
                placeholder="foo@bar.com"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                value={formValues.email}
                onChange={handleFormValues}
              />
              <Input
                required
                id="password"
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
                pattern="^\d{6,8}$"
                value={formValues.password}
                onChange={handleFormValues}
              />
            </FirstInputContainer>
            <SecondInputContainer>
              <Input
                id="phone"
                name="phone"
                type="text"
                label="Phone"
                placeholder="(00) 00000-0000"
                pattern="^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$"
                value={formValues.phone}
                onChange={handleFormValues}
              />
              <div style={{ marginBottom: '30px' }}>
                <InputLabel>Birthday *</InputLabel>
                <DateInput
                  required
                  placeholderText="01/01/2000"
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date('1900/1/1')}
                  selected={formValues.birthDate}
                  onChange={(e: Date) =>
                    setFormValues({ ...formValues, birthDate: e })
                  }
                />
                <ErrorLabel>Invalid Date</ErrorLabel>
              </div>
            </SecondInputContainer>
          </InputGroup>
          <SubmitContainer>
            <CheckBox
              required
              checked={formValues.terms}
              onChange={handleTerms}
            >
              I accept the therms and privacy
            </CheckBox>
            <Button type="submit">Register</Button>
          </SubmitContainer>
        </Form>
      </Card>
    </Container>
  );
}
