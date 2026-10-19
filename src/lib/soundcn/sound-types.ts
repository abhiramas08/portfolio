export interface SoundEffect {
  name: string
  dataUri: string
}

export interface PlaySoundOptions {
  volume?: number
  playbackRate?: number
  onEnd?: () => void
}

export interface SoundPlayback {
  stop: () => void
}
