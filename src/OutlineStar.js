import React from 'react';

import styled from 'styled-components'
import {Star} from 'styled-icons/boxicons-regular/Star'
import palette from './constants/palette'


const OutlineStar = styled(Star)`
  width: 50px;
  height: 50px;
  color: ${palette.teal};
  position: absolute;
  top: 0;
  left: 0;
`

export default OutlineStar;
