import React from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import CheckBox from '../../components/CheckBox';
import Input from '../../components/Input';
import {
  Container,
  Form,
  InputContainer,
  InputGroup,
  SubmitContainer,
  Title,
} from './styles';

export function SignUp() {
  // Form for sign up user
  const [formValues, setFormValues] = React.useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    birthDate: '',
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
    // Check form validity
    console.log(event.currentTarget.checkValidity());
    const formData = new FormData(event.target as HTMLFormElement);
    console.log(formData);
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
          />
          <InputGroup>
            <InputContainer size="large">
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
            </InputContainer>
            <InputContainer>
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
              <Input
                required
                id="birthDate"
                name="birthDate"
                type="date"
                label="Birth Date"
                value={formValues.birthDate}
                onChange={handleFormValues}
              />
            </InputContainer>
          </InputGroup>
          <SubmitContainer>
            <CheckBox checked={formValues.terms} onChange={handleTerms}>
              I accept the therms and privacy
            </CheckBox>
            <Button type="submit">Register</Button>
          </SubmitContainer>
        </Form>
      </Card>
    </Container>
  );
}
