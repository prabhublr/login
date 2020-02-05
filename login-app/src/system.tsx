import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  system,
  typography,
} from 'styled-system';

const ccProps = ['showFor'];

const forwardProp = (propName: string) =>
  shouldForwardProp(propName) && !ccProps.includes(propName);

const fontFamily = `'Roboto', sans-serif`;
const fontSize = '14px';

const Base: any = styled('div', { shouldForwardProp: forwardProp })(
  {
    fontFamily,
    fontSize,
  },
  space,
  layout,
  flexbox,
  color,
  typography,
  background,
  border,
  position,
  shadow
);

// usage <Box showFor={[1, 0]}/>
const showForProp = (dflt: string) =>
  system({
    showFor: {
      property: 'display',
      transform: (val: number) => (val ? dflt : 'none'),
    },
  });

export const Box: any = styled(Base)(showForProp('block'));
export const Flex: any = styled(Base)({ display: 'flex' }, showForProp('flex'));
