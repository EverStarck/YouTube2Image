import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// const spin = keyframes`
//     from {
//       -webkit-transform: rotate(0deg);
//       transform: rotate(0deg);
//     }
//     to {
//       -webkit-transform: rotate(360deg);
//       transform: rotate(360deg);
//     }
// `;

// const Test = styled.div`
//   .triple-spinner {
//     display: block;
//     position: relative;
//     width: 125px;
//     height: 125px;
//     border-radius: 50%;
//     border: 4px solid transparent;
//     border-top: 4px solid #4392f1;
//     -webkit-animation: spin 2s linear infinite;
//     animation: ${spin} 2s linear infinite;
//   }

//   .triple-spinner::before,
//   .triple-spinner::after {
//     content: "";
//     position: absolute;
//     border-radius: 50%;
//     border: 4px solid transparent;
//   }
//   .triple-spinner::before {
//     top: 5px;
//     left: 5px;
//     right: 5px;
//     bottom: 5px;
//     border-top-color: #4392f1;
//     -webkit-animation: spin 3s linear infinite;
//     animation: ${spin} 3.5s linear infinite;
//   }
//   .triple-spinner::after {
//     top: 15px;
//     left: 15px;
//     right: 15px;
//     bottom: 15px;
//     border-top-color: #4392f1;
//     -webkit-animation: spin 1.5s linear infinite;
//     animation: ${spin} 1.75s linear infinite;
//   }
// `;

const Test = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  .svg-loader {
    height: 20vmin;
    padding: 3vmin 20vmin;
  }
`;

const Loader = () => {
  return (
      <Test>
      <svg
        version="1.1"
        className="svg-loader"
        xmlns="http://www.w3.org/2000/svg"
        x="50px"
        y="50px"
        viewBox="0 0 80 80"
      >
        <path
          fill="#4392f1"
          d="M10,40c0,0,0-0.4,0-1.1c0-0.3,0-0.8,0-1.3c0-0.3,0-0.5,0-0.8c0-0.3,0.1-0.6,0.1-0.9c0.1-0.6,0.1-1.4,0.2-2.1
	c0.2-0.8,0.3-1.6,0.5-2.5c0.2-0.9,0.6-1.8,0.8-2.8c0.3-1,0.8-1.9,1.2-3c0.5-1,1.1-2,1.7-3.1c0.7-1,1.4-2.1,2.2-3.1
	c1.6-2.1,3.7-3.9,6-5.6c2.3-1.7,5-3,7.9-4.1c0.7-0.2,1.5-0.4,2.2-0.7c0.7-0.3,1.5-0.3,2.3-0.5c0.8-0.2,1.5-0.3,2.3-0.4l1.2-0.1
	l0.6-0.1l0.3,0l0.1,0l0.1,0l0,0c0.1,0-0.1,0,0.1,0c1.5,0,2.9-0.1,4.5,0.2c0.8,0.1,1.6,0.1,2.4,0.3c0.8,0.2,1.5,0.3,2.3,0.5
	c3,0.8,5.9,2,8.5,3.6c2.6,1.6,4.9,3.4,6.8,5.4c1,1,1.8,2.1,2.7,3.1c0.8,1.1,1.5,2.1,2.1,3.2c0.6,1.1,1.2,2.1,1.6,3.1
	c0.4,1,0.9,2,1.2,3c0.3,1,0.6,1.9,0.8,2.7c0.2,0.9,0.3,1.6,0.5,2.4c0.1,0.4,0.1,0.7,0.2,1c0,0.3,0.1,0.6,0.1,0.9
	c0.1,0.6,0.1,1,0.1,1.4C74,39.6,74,40,74,40c0.2,2.2-1.5,4.1-3.7,4.3s-4.1-1.5-4.3-3.7c0-0.1,0-0.2,0-0.3l0-0.4c0,0,0-0.3,0-0.9
	c0-0.3,0-0.7,0-1.1c0-0.2,0-0.5,0-0.7c0-0.2-0.1-0.5-0.1-0.8c-0.1-0.6-0.1-1.2-0.2-1.9c-0.1-0.7-0.3-1.4-0.4-2.2
	c-0.2-0.8-0.5-1.6-0.7-2.4c-0.3-0.8-0.7-1.7-1.1-2.6c-0.5-0.9-0.9-1.8-1.5-2.7c-0.6-0.9-1.2-1.8-1.9-2.7c-1.4-1.8-3.2-3.4-5.2-4.9
	c-2-1.5-4.4-2.7-6.9-3.6c-0.6-0.2-1.3-0.4-1.9-0.6c-0.7-0.2-1.3-0.3-1.9-0.4c-1.2-0.3-2.8-0.4-4.2-0.5l-2,0c-0.7,0-1.4,0.1-2.1,0.1
	c-0.7,0.1-1.4,0.1-2,0.3c-0.7,0.1-1.3,0.3-2,0.4c-2.6,0.7-5.2,1.7-7.5,3.1c-2.2,1.4-4.3,2.9-6,4.7c-0.9,0.8-1.6,1.8-2.4,2.7
	c-0.7,0.9-1.3,1.9-1.9,2.8c-0.5,1-1,1.9-1.4,2.8c-0.4,0.9-0.8,1.8-1,2.6c-0.3,0.9-0.5,1.6-0.7,2.4c-0.2,0.7-0.3,1.4-0.4,2.1
	c-0.1,0.3-0.1,0.6-0.2,0.9c0,0.3-0.1,0.6-0.1,0.8c0,0.5-0.1,0.9-0.1,1.3C10,39.6,10,40,10,40z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 40 40"
            to="360 40 40"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </Test>
  );
};

export default Loader;