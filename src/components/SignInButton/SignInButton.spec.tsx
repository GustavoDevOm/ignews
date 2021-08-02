import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/client';
import { mocked } from 'ts-jest/utils';
import { SignInButton } from '.';

jest.mock('next-auth/client');

describe('SignInButton component', () => {
  const useSessionMocked = mocked(useSession);

  it('renders correctly when user is not authenticated', () => {
    useSessionMocked.mockReturnValueOnce([null, false]);

    render(
      <SignInButton />
    );

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
  });

  it('renders correctly when user is authenticated', () => {
    useSessionMocked.mockReturnValueOnce([
      { user: { name: 'Gustavo', email: 'gustavo@gmail.com' }, expires: 'fake' },
      false
    ]);

    render(
      <SignInButton />
    );

    expect(screen.getByText('Gustavo')).toBeInTheDocument();
  });
});
