<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { page } from '$app/stores';
  import { VolumeMute, VolumeUp } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import YouTubePlayer from 'youtube-player';

  import BackButton from './components/BackButton.svelte';
  import ProgressBar from './components/ProgressBar.svelte';
  import ShareButton from './components/ShareButton.svelte';

  const dispatch = createEventDispatcher();

  let windowWidth: number;
  let player;
  let totalTime: number;
  let currentTime: number;
  let progress = 0;
  let isVideoMuted = true;

  const trailerSrs = $page.data.trailers.results.filter((video) =>
    video.name.toLowerCase().includes('trailer')
  );

  const toggleMute = () => {
    player.isMuted().then((muted) => {
      if (muted) {
        player.unMute();
        isVideoMuted = false;
      } else {
        player.mute();
        isVideoMuted = true;
      }
    });
  };

  onMount(async () => {
    player = YouTubePlayer('player', {
      videoId: trailerSrs[0].key,
      width: windowWidth,
      height: 240,
      playerVars: {
        autoplay: 1,
        controls: 0,
        fs: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1
      }
    });

    player
      .playVideo()
      .then(() => {
        dispatch('play');
        player.mute();
      })
      .catch(() => {
        player.unMute();
      });

    player.on('stateChange', async (event) => {
      totalTime = await player.getDuration();

      setInterval(async () => {
        currentTime = await player.getCurrentTime();

        if (event.data === 0) {
          dispatch('end');
        }
      }, 100);
    });
  });

  $: progress = (currentTime / totalTime) * 100;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="flex h-[240px] w-full bg-background-dark-default-default">
  <div class="flex flex-col pointer-events-none" id="player" />
</div>

<BackButton />
<ShareButton />

<div class="absolute bottom-3 left-0 w-full px-4 flex items-center justify-between z-[52]">
  <span class="text-h200 text-text-light-strong">Trailer</span>

  <div class="flex items-center gap-2">
    <!--    <Button size="sm" class="!p-2" color="light">-->
    <!--      <Icon src={Fullscreen} size="16px" />-->
    <!--    </Button>-->
    <button class="btn xs secondary icon" on:click={toggleMute}>
      <Icon src={isVideoMuted ? VolumeMute : VolumeUp} size="16px" />
    </button>
  </div>
</div>

<ProgressBar {progress} />
