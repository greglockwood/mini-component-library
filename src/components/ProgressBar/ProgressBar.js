/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';
import { bySize } from '../styleUtils';

const ProgressBar = ({ value, size }) => {
  return <Wrapper size={size} role="progressbar" aria-valuenow={value}>
    <Bar size={size} value={value} />
  </Wrapper>;
};

const Shared = styled.div`
  border-radius: 4px;
`;

const Wrapper = styled(Shared)`
  height: ${bySize(8, 12, 24)}px;
  min-width: 100px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  position: relative;
  ${p => p.size === 'large' && css`border-radius: 8px`};
`;

const barSpacing = bySize(0, 0, 4);
const borderRadius = ({value}) => {
  if (value < 98) return 0;
  return `${4 - (100 - value)}px`;
}
const Bar = styled(Shared)`
  height: ${p => css`calc(100% - ${2 * barSpacing(p)}px)`};
  width: ${p => css`calc(${p.value}% - ${2 * barSpacing(p)}px)`};
  background-color: ${COLORS.primary};
  border-top-right-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
  margin: ${barSpacing}px;
  position: absolute;
  transition: width 0.3s ease-in-out, border-radius 0.3s linear;
`;

export default ProgressBar;
