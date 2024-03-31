import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginForm from './LoginForm';

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
	  t: (key: string) => ({
		'login.emailPlaceholder': 'Email',
		'login.passwordPlaceholder': 'Password',
	  }[key]),
	}),
  }));

describe('LoginForm component', () => {

  const mockProps = {
    email: '',
    setEmail: jest.fn(),
    password: '',
    setPassword: jest.fn(),
    focusedField: null,
    setFocusedField: jest.fn(),
    emailError: '',
    passwordError: ''
  };
  test('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <LoginForm
        email=""
        setEmail={() => {}}
        password=""
        setPassword={() => {}}
        focusedField={null}
        setFocusedField={() => {}}
        emailError=""
        passwordError=""
      />
    );

    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });

  test('toggle show password', () => {
    const { getByTestId } = render(
      <LoginForm
        email=""
        setEmail={() => {}}
        password=""
        setPassword={() => {}}
        focusedField={null}
        setFocusedField={() => {}}
        emailError=""
        passwordError=""
      />
    );

    fireEvent.press(getByTestId('eye-icon'));

    expect(getByTestId('password-input').props.secureTextEntry).toBeFalsy();
  });

  test('renders email and password inputs', () => {
    const { getByPlaceholderText } = render(<LoginForm {...mockProps} />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
  });

  test('toggles password visibility on eye icon click', () => {
    const { getByTestId } = render(<LoginForm {...mockProps} />);
    const eyeIcon = getByTestId('eye-icon');
    const passwordInput = getByTestId('password-input');
    fireEvent.press(eyeIcon);
    expect(passwordInput.props.secureTextEntry).toBe(false);
    fireEvent.press(eyeIcon);
    expect(passwordInput.props.secureTextEntry).toBe(true);
  });

  test('displays email error message', () => {
    const { getByText } = render(<LoginForm {...mockProps} emailError="Email is required." />);
    const errorMessage = getByText('Email is required.');
    expect(errorMessage).toBeDefined();
  });

  test('displays password error message', () => {
    const { getByText } = render(<LoginForm {...mockProps} passwordError="Password is required." />);
    const errorMessage = getByText('Password is required.');
    expect(errorMessage).toBeDefined();
  });

  test('highlights email input on focus', () => {
    const { getByPlaceholderText } = render(<LoginForm {...mockProps} focusedField="email" />);
    const emailInput = getByPlaceholderText('Email');
    expect(emailInput.props.style).toContainEqual({ borderColor: '#3C7D47' });
  });
});
