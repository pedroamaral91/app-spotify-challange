import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import { Creators as PlayerActions } from '../../store/ducks/player';
import Loading from '../../components/Loading';
import {
  Container, Header, SongList, SongItem,
} from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
      loading: PropTypes.bool,
      title: PropTypes.string,
      songs: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          author: PropTypes.string,
          album: PropTypes.string,
        }),
      ),
    }).isRequired,
    loadSong: PropTypes.func.isRequired,
    currentSong: PropTypes.shape({
      id: PropTypes.number,
    }),
  };

  static defaultProps = {
    currentSong: null,
  };

  state = {
    selectedSong: null,
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const { match, getPlaylistDetailsRequest } = this.props;
    const { id } = match.params;
    getPlaylistDetailsRequest(id);
  };

  renderDetails = () => {
    const { playlistDetails } = this.props;
    return (
      <Container>
        <Header>
          <img src={playlistDetails.data.thumbnail} alt={playlistDetails.data.title} />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlistDetails.data.title}</h1>
            {!!playlistDetails.data.songs && (
            <p>
              {playlistDetails.data.songs.length}
              {' '}
songs
            </p>
            )}
            <button type="button">PLAY</button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th />
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>
                <img src={ClockIcon} alt="clock icon" />
              </th>
            </tr>
          </thead>

          <tbody>
            {!playlistDetails.data.songs ? (
              <tr>
                <td colSpan={5}>None songs to show.</td>
              </tr>
            ) : (
              playlistDetails.data.songs.map(song => (
                <SongItem
                  key={song.id}
                  onClick={() => this.setState({ selectedSong: song.id })}
                  onDoubleClick={() => this.props.loadSong(song, playlistDetails.data.songs)}
                  selected={this.state.selectedSong === song.id}
                  playing={this.props.currentSong && this.props.currentSong.id === song.id}
                >
                  <td>
                    <img src={PlusIcon} alt="Add" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:26</td>
                </SongItem>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  };

  render() {
    const { playlistDetails } = this.props;
    return playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
  currentSong: state.player.currentSong,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
