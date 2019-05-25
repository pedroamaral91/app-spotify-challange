import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21041/large_thumb_473-Techo-CD-Album-Cover.jpg"
          alt="playlist"
        />
        <strong>Jazz nos fundos</strong>
        <p>As melhores improvisações estão aqui!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21041/large_thumb_473-Techo-CD-Album-Cover.jpg"
          alt="playlist"
        />
        <strong>Jazz nos fundos</strong>
        <p>As melhores improvisações estão aqui!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21041/large_thumb_473-Techo-CD-Album-Cover.jpg"
          alt="playlist"
        />
        <strong>Jazz nos fundos</strong>
        <p>As melhores improvisações estão aqui!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
