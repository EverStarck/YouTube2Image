import styled from "@emotion/styled";

export const MainSearch = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
`;

export const NameGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: clamp(1.5rem, 5vw, 4.5rem);
    margin: 0;
  }
  h2 {
    font-size: clamp(0.75rem, 2vw, 1.5rem);
    margin: 8px 0 24px 0;
    font-weight: 600;
  }
`;

export const FormSearch = styled.form`
  display: flex;
  /* Button */
  label:last-of-type {
    span {
      display: none;
    }
    button[type="submit"] {
      width: 117px;
      height: 64px;
      border: 2px solid var(--blue);
      background-color: var(--blue);
      border-radius: 0 var(--radius) var(--radius) 0;
      background-image: url("./search.svg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 50% 50%;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background-color: var(--blutton);
        border: 2px solid var(--blutton);
      }
      &:focus {
        box-shadow: 0px 0px 15px 2px rgba(151, 196, 247, 1);
      }
    }
  }

  /* Tablet */
  @media only screen and (max-width: 820px) {
    label:first-of-type {
      input[type="url"] {
        width: 100%;
        padding-left: 16px;
      }
    }

    label:last-of-type {
      button[type="submit"] {
        width: 300%;
        background-size: 40% 40%;
      }
    }
  }

  /* Mobile */
  @media only screen and (max-width: 500px) {
    label:first-of-type {
      input[type="url"] {
        width: 100%;
        height: 48px;
        font-size: 0.75rem;
        &:hover,
        :focus {
          border: 1px solid var(--black);
        }
      }
    }

    label:last-of-type {
      button[type="submit"] {
        width: 44px;
        height: 48px;
        background-size: 40% 40%;
      }
    }
  }
`;

export const FooterSearch = styled.footer`
  font-size: clamp(0.7rem, 2vw, 1rem);
  position: absolute;
  bottom: 0;
`;
