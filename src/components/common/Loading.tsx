import React, { memo } from 'react';
import styled from 'styled-components';

type Props = {
  isLoading: boolean;
};

function Loading({ isLoading }: Props) {
  return (
    <LoadingContainer isLoading={isLoading}>
      <Loader>
        <span className="bar1"></span>
        <span className="bar2"></span>
        <span className="bar3"></span>
        <span className="bar4"></span>
        <span className="bar5"></span>
        <span className="bar6"></span>
      </Loader>
    </LoadingContainer>
  );
}

export default memo(Loading);

const LoadingContainer = styled.div<Props>`
  opacity: ${({ isLoading }) => (isLoading ? '1' : '0')};
  visibility: ${({ isLoading }) => (isLoading ? 'visible' : 'hidden')};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  background-color: #465a65;
  z-index: 99;
  transition: all 0.8s;
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 5rem;
  height: 4.5rem;
  text-align: center;

  span {
    display: inline-block;
    width: calc(100% / 6 - 2px);
    height: 100%;
    margin-left: 2px;
    animation: delay 0.8s infinite ease-in-out;
  }

  .bar1 {
    background-color: #754fa0;
  }
  .bar2 {
    background-color: #09b7bf;
    animation-delay: -0.7s;
  }
  .bar3 {
    background-color: #90d36b;
    animation-delay: -0.6s;
  }
  .bar4 {
    background-color: #f2d40d;
    animation-delay: -0.5s;
  }
  .bar5 {
    background-color: #fcb12b;
    animation-delay: -0.4s;
  }
  .bar6 {
    background-color: #ed1b72;
    animation-delay: -0.3s;
  }

  @keyframes delay {
    0%,
    40%,
    100% {
      transform: scaleY(0.05);
    }
    20% {
      transform: scaleY(1);
    }
  }
`;
