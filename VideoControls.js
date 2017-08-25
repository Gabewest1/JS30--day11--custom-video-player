class VideoControls {
    constructor(video) {
        this.video = document.querySelector(".video-container video")
        this.videoProgressBar = document.querySelector(".video-progress-bar")
        this.playButton = document.querySelector(".play-btn")
        this.skipForwardsButton = document.querySelector(".skip-forward-btn")
        this.skipBackwardsButton = document.querySelector(".skip-back-btn")
        this.volumeBar = document.querySelector(".volume-bar")

        /* Setup event listeners */
        this.video.addEventListener("timeupdate", () => this.setVideoProgressBar(this.video.currentTime))
        this.video.addEventListener("canplay", () => this.videoProgressBar.max = Math.floor(this.video.duration))
        this.videoProgressBar.addEventListener("change", () => this.video.currentTime = this.videoProgressBar.value)
        this.playButton.addEventListener("click", this.toggleVideo.bind(this))
        this.skipForwardsButton.addEventListener("click", this.skipForwards.bind(this))
        this.skipBackwardsButton.addEventListener("click", this.skipBackwards.bind(this))
        this.volumeBar.addEventListener("change", (e) => this.setVolume(e.target.value))
        
        //Set the volume to match the default value of the volumeBar
        this.setVolume(this.volumeBar.value)
    }

    setVideoProgressBar(value) {
        this.videoProgressBar.value = value
    }

    toggleVideo() {
        this.video.paused ? this.playVideo() : this.pauseVideo()
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

    setVolume(value) {
        console.log("SETTING VOLUME:", value)
        this.video.volume = value
    }
}

let controls = new VideoControls()