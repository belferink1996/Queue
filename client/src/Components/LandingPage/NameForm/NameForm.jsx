import { useState, useContext, Fragment } from 'react';
import { TokenContext } from '../../../contexts/TokenContext';
import { newSession, newUser } from '../../../api';
import styles from './NameForm.module.css';
import { CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function NameForm({ isHost, sessionId }) {
  const { setToken } = useContext(TokenContext);
  const [input, setInp] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = isHost
      ? await newSession({ username: input })
      : await newUser(sessionId, { username: input });
    setToken(data.token);
  };

  return (
    <Fragment>
      {loading ? (
        <CircularProgress color='secondary' />
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type='text' value={input} onChange={(e) => setInp(e.target.value)} required />
          <Button
            type='submit'
            variant='contained'
            startIcon={<AddCircleIcon />}
            disabled={input === ''}>
            {isHost ? 'CREATE' : 'JOIN'}
          </Button>
        </form>
      )}
    </Fragment>
  );
}

export default NameForm;
