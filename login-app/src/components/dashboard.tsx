import React from 'react';
import { Flex } from '../system';
import styled from '@emotion/styled';
import loginImage from './images/login-bg.jpg';
import { dashboardData } from './data';
import TabComp from './table';

const Root = styled(Flex)`
  background: url(${loginImage}) no-repeat center/cover;
`;

const userData = dashboardData;

export default function Dashboard() {
  return (
    <Root height="100vh" alignItems="center" justifyContent="center">
      <TabComp
        headers={[
          { label: 'id' },
          { label: 'name' },
          { label: 'age' },
          { label: 'gender' },
          { label: 'email' },
          { label: 'phoneNo' },
        ]}
        values={userData && userData.user}
      ></TabComp>
    </Root>
  );
}
