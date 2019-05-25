import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21041/large_thumb_473-Techo-CD-Album-Cover.jpg"
        alt="playlist"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>Jazz</h1>
        <p>3 musics</p>
        <button type="button">PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Title</th>
        <th>Artist</th>
        <th>Album</th>
        <th>
          <img src={ClockIcon} alt="clock icon" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Michael Brecker</td>
          <td>Nothing Personal</td>
          <td>Greatest Hits</td>
          <td>2:21</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Michael Brecker</td>
          <td>Nothing Personal</td>
          <td>Greatest Hits</td>
          <td>2:21</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Michael Brecker</td>
          <td>Nothing Personal</td>
          <td>Greatest Hits</td>
          <td>2:21</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
