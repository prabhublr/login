import React, { useState } from 'react';
import { Box, Flex } from './system';
import loginImage from './images/login-bg.jpg';
import styled from '@emotion/styled';

const Root = styled(Flex)`
  background: url(${loginImage}) no-repeat center/cover;
  form {
    text-align: center;
    input {
      color: #504943;
      display: block;
      margin: auto;
      outline: none;
      border: 1px solid #504943;
      padding: 12px 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      width: 70%;
    }
    button {
      box-sizing: content-box;
      width: 70%;
      padding: 12px 10px;
      border-radius: 5px;
      box-shadow: none;
      border: 0;
      outline: none;
      color: #504943;
    }
  }
`;

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);

  function formHandle(e: any) {
    e.preventDefault();
    if (userName === 'appiness' && password === 'appiness') {
      setRedirect(true);
    } else {
      setError('Cannot find Username and Password');
      setTimeout(() => {
        setError('');
      }, 2000);
    }
    setPassword('');
    setUserName('');
  }
  return (
    <Root widhth="100%" height="100vh" alignItems="center" justifyContent="center">
      <Box width="300px" borderRadius="5px" overflow="hidden">
        {redirect && (
          <Box bg="#504943" color="#ffffff" textAlign="center" fontSize={2}>
            Successfull Login
          </Box>
        )}
        {!redirect && (
          <>
            <Box
              bg="#504943"
              color="#ffffff"
              textAlign="center"
              fontSize={2}
              p="15px 10px"
            >
              Log In
            </Box>
            <Box bg="#ffffff" p="15px 10px">
              <form onSubmit={formHandle}>
                <input
                  type="text"
                  placeholder="User Name"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
              </form>
              {error && (
                <Box mt="2" fontSize="1" color="red">
                  {error}
                </Box>
              )}
            </Box>
          </>
        )}
      </Box>
    </Root>
  );
}
