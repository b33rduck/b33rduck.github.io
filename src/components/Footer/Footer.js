import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  background-color: rgba(34, 34, 34, 0.6);
  position: absolute;
  bottom: 0;
  font-size: 32px;
  color: #ffffff;
`;
const Social = styled.div`
  text-align: center;
  line-height: 3.5em;
`;
const Image = styled.img`
  height: 1.5em;
  width: 1.5em;
`;
const Copyright = styled.p`
  font-size: 0.5em;
  bottom: 0;
  margin: 0 0 0.25em 0.75em;
  position: absolute;
`;
const Link = styled.a`
  text-decoration: none;
`;

export default class Footer extends React.Component {

  render() {
    const year = new Date().getFullYear();
    return (
      <Container>
        <Social>
          <Link href="https://twitter.com/b33rduck" target="_blank">
            <Image src="public/images/twitter.png" alt="twitter.png" />
          </Link>
          <Link href="https://github.com/b33rduck" target="_blank">
            <Image src="public/images/gitHub.png" alt="gitHub.png" />
          </Link>
          <Link href="http://stackoverflow.com/users/6817880/b33rduck" target="_blank">
            <Image src="public/images/stackoverflow.png" alt="stackoverflow.png" />
          </Link>
        </Social>
        <Copyright>>> beerduck {year}</Copyright>
      </Container>
    );
  }
}
