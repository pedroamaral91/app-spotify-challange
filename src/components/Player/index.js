import React from 'react';
import Slider from 'rc-slider';

import {
  Container, Current, Volume, Progress, Controls, Time, ProgressSlider,
} from './styles';
import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

function Player() {
  return (
    <Container>
      <Current>
        <img
          src="https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21041/large_thumb_473-Techo-CD-Album-Cover.jpg"
          alt="Qualquercoisa"
        />
        <div>
          <span>Times like these</span>
          <small>Foo fighters</small>
        </div>
      </Current>
      <Progress>
        <Controls>
          <button type="button">
            <img src={ShuffleIcon} alt="shuffle" />
          </button>
          <button type="button">
            <img src={BackwardIcon} alt="backward" />
          </button>
          <button type="button">
            <img src={PlayIcon} alt="play-pause" />
          </button>
          {/* <button>
            <img src={PauseIcon} alt="shuffle" />
          </button> */}
          <button type="button">
            <img src={ForwardIcon} alt="forward" />
          </button>
          <button type="button">
            <img src={RepeatIcon} alt="repeat" />
          </button>
        </Controls>
        <Time>
          <span>1:39</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: '#404040', borderRadius: 10 }}
              trackStyle={{ background: '#1ED760' }}
              handleStyle={{ border: 0 }}
            />
          </ProgressSlider>
          <span>4:11</span>
        </Time>
      </Progress>
      <Volume>
        <img src={VolumeIcon} alt="volume" />
        <Slider
          railStyle={{ background: '#404040', borderRadius: 10 }}
          trackStyle={{ background: '#fff' }}
          handleStyle={{ display: 'none' }}
          value={100}
        />
      </Volume>
    </Container>
  );
}

export default Player;
