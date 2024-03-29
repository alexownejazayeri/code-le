import React from 'react';

import styled from 'styled-components';

const BackKey = (props) => (
  <BackKeyContainer>
    <BackKeyButton id="bck-key" className="btn-svg" onClick={props.onClick} aria-label="BACK">
      <svg id="bck-key" width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="bck-key"
          d="M10.4311 6.16227L25.2236 6.16224C25.7758 6.16224 26.2235 6.60983 26.2236 7.16203L26.2279 27.1784C26.2281 27.7308 25.7803 28.1786 25.2279 28.1786L10.447 28.1786C10.0714 28.1786 9.72743 27.9681 9.55651 27.6336L4.36216 17.4681C4.21428 17.1787 4.21627 16.8354 4.3675 16.5478L9.54596 6.69696C9.7188 6.36817 10.0597 6.16227 10.4311 6.16227Z"
          stroke="white"
          strokeWidth="2"
        />
        <path
          id="bck-key"
          d="M11.9869 24.808C11.7149 24.616 11.5789 24.392 11.5789 24.136C11.5789 23.992 11.6429 23.816 11.7709 23.608L16.3309 16.912L11.7229 10.432C11.5949 10.224 11.5309 10.048 11.5309 9.904C11.5309 9.648 11.6669 9.424 11.9389 9.232C12.1469 9.104 12.3229 9.04 12.4669 9.04C12.7229 9.04 12.9469 9.176 13.1389 9.448L17.4589 15.496L21.8509 9.448C22.0429 9.176 22.2589 9.04 22.4989 9.04C22.6749 9.04 22.8589 9.112 23.0509 9.256C23.3229 9.448 23.4589 9.664 23.4589 9.904C23.4589 10.08 23.3869 10.264 23.2429 10.456L18.5149 16.984L23.2189 23.584C23.3469 23.792 23.4109 23.968 23.4109 24.112C23.4109 24.384 23.2749 24.616 23.0029 24.808C22.7949 24.936 22.6189 25 22.4749 25C22.2189 25 21.9949 24.864 21.8029 24.592L17.3869 18.4L13.1869 24.592C12.9949 24.864 12.7789 25 12.5389 25C12.3789 25 12.1949 24.936 11.9869 24.808Z"
          fill="white"
        />
      </svg>
    </BackKeyButton>
  </BackKeyContainer>
);

export default BackKey;

const BackKeyContainer = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: bold;
  margin: 2px;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border: 2px white solid;
  border-radius: 10px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.425);
  }
`;
const BackKeyButton = styled.button`
  border: none !important;
  background-color: transparent !important;
  outline: none;
  cursor: pointer;
`;