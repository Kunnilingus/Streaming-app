import { FC } from "react";
import { MediaOutlet, MediaPlayer } from "@vidstack/react";

interface PlayerProps {
  width?: number;
  height?: number;
}
const Player: FC<PlayerProps> = ({ width, height }) => {
  return (
    <div style={{ width: width, height: height }}>
      <MediaPlayer
        src="https://media-files.vidstack.io/720p.mp4"
        poster="https://media-files.vidstack.io/poster.png"
        controls
      >
        <MediaOutlet />
      </MediaPlayer>
    </div>
  );
};

export default Player;
