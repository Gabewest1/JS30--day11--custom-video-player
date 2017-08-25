class VideoControls {
    constructor(video) {
        this.video = document.querySelector("iframe")
        this.video.controls = false
        console.log(this.video)
        this.video.addEventListener("play", this.pauseVideo)
    }

    playVideo() {
        this.video.play()
    }

    pauseVideo() {
        console.log("Pausing the video")
        this.video.pause()
    }

    slowDownVideo() {
        this.video.playbackRate = Math.max(0, this.video.playbackRate - .1)
    }

    speedUpVideo() {
        this.video.playbackRate = Math.max(this.video.playbackRate + .1, 1)        
    }

    skipBackwards() {
        this.video.currentTime = Math.max(0, this.video.currentTime - 7)
    }

    skipForwards() {
        this.video.currentTime = Math.min(this.video.currentTime + 7, this.video.duration)
    }
}

let controls = new VideoControls()