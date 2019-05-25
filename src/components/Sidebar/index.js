import React from 'react';

import { Container, NewPlaylist, Nav } from './styles';
import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Navegar</a>
        </li>
        <li>
          <a href="">Radio</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>YOUR LIBRARY</span>
        </li>
        <li>
          <a href="">Daily Mix</a>
        </li>
        <li>
          <a href="">Recents</a>
        </li>
        <li>
          <a href="">Musics</a>
        </li>
        <li>
          <a href="">Albums</a>
        </li>
        <li>
          <a href="">Artists</a>
        </li>
        <li>
          <a href="">Local Artists</a>
        </li>
        <li>
          <a href="">Poadcast</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="">Run with high thoughs!</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Add Playlist" />
      New Playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
