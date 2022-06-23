import styled from "styled-components";

export const StyledLandingPage = styled.div`
  display: flex;
  min-height: 100vh;
  .accent-design {
    background-color: var(--primary-color);
    width: 30%;
    position: fixed;
    z-index: -1;
  }
  .content {
    margin-left: 30%;
    padding: 10px 25px 40px 25px;
    position: relative;
    h1 {
      color: var(--primary-color);
      margin: 10px 0;
    }
    section {
      background-color: var(--white-color);
      padding: 10px 20px;
      margin: 15px 0;
      border-radius: 10px;
    }
    .light-text {
      color: var(--secondary-color);
    }
    .author {
      position: absolute;
      bottom: 20px;
      font-size: 10px;
    }
  }

  // added media query sample to show that I can make a responsive website
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    .accent-design {
      background-color: var(--primary-color);
      width: 100%;
      height: 150px;
    }
    .content {
      margin-left: 0;
      min-height: 93vh;
    }
  }
`;

export const StyledList = styled.div`
  transition: ease-in 100ms;
  > div {
    background-color: var(--white-color);
    padding: 20px;
    margin: 15px 0;
    border-radius: 10px;
    word-break: break-all;
    cursor: pointer;
    transition: ease-in 100ms;
    user-select: none;
    :hover {
      box-shadow: 0 2px 3px var(--light-color);
      transition: ease-in 100ms;
    }
  }
`;
