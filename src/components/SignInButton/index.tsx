import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client';

import styles from './styles.module.scss';

export const SignInButton: React.FC = () => {
  const [session] = useSession();

  return session ? (
    <button
      type="button"
      className={styles.button}
      onClick={() => signOut()}
    >
      <FaGithub color="var(--green-500)" />
      {session.user.name}
      <FiX color="var(--gray-300)" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.button}
      onClick={() => signIn('github')}
    >
      <FaGithub color="var(--yellow-500)" />
      Sign in with Github
    </button>
  );
}
