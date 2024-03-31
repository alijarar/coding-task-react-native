import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';

// Mocking the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));

describe('Login component', () => {
  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({
      navigate: jest.fn(),
    });
  });

  it('renders without crashing', () => {
    render(<Login />);
  });

  it('displays email input field', () => {
    const { getByPlaceholderText } = render(<Login />);
    const emailInput = getByPlaceholderText('Email');
    expect(emailInput).toBeTruthy();
  });

  it('displays password input field', () => {
    const { getByPlaceholderText } = render(<Login />);
    const passwordInput = getByPlaceholderText('Password');
    expect(passwordInput).toBeTruthy();
  });

  it('disables login button when fields are empty', () => {
    const { getByText } = render(<Login />);
    const loginButton = getByText('Log in');
    expect(loginButton.props.style).toContainEqual({ backgroundColor: '#6EE095', opacity: 0.2 });
  });

  it('enables login button when both email and password are filled', () => {
    const { getByPlaceholderText, getByText } = render(<Login />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Log in');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');

    expect(loginButton.props.style).not.toContainEqual({ backgroundColor: '#6EE095', opacity: 0.2 });
  });
});

