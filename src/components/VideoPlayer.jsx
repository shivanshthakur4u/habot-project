import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer() {
  return (
    <div className="flex overflow-hidden rounded-[5px] w-full h-auto xl:w-[640px] lg:h-[350px]">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=IZLp-TZyDkQ"
        controls
        width="100%"
        height="100%"
        className="rounded-[5px]"
      />
    </div>
  )
}

export default VideoPlayer
