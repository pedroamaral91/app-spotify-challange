import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars2.githubusercontent.com/u/29899172?v=4" alt="foto perfil" />
      Pedro Amaral
    </User>
  </Container>
);

export default Header;
