<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { page } from '$app/stores';
  import YouTubePlayer from 'youtube-player';

  import BackButton from './components/BackButton.svelte';
  import MuteButton from './components/MuteButton.svelte';
  import PlayButton from './components/PlayButton.svelte';
  import ProgressBar from './components/ProgressBar.svelte';
  import ShareButton from './components/ShareButton.svelte';
  import StopButton from './components/StopButton.svelte';

  const dispatch = createEventDispatcher();
  const _buttonsTimeout = 3000;

  let windowWidth: number;
  let player;
  let totalTime: number;
  let currentTime: number;
  let progress = 0;
  let isVideoMuted = true;
  let isPlaying = false;
  let areButtonsVisible = true;

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

  const startVideo = () => {
    player
      .playVideo()
      .then(() => {
        isPlaying = true;
        dispatch('play');
        setTimeout(() => {
          areButtonsVisible = false;
        }, _buttonsTimeout);
        player.mute();
      })
      .catch(() => {
        player.unMute();
      });
  };

  const stopVideo = () => {
    player
      .pauseVideo()
      .then(() => {
        isPlaying = false;
        dispatch('paused');
        setTimeout(() => {
          areButtonsVisible = false;
        }, _buttonsTimeout);
      })
      .catch(() => {
        player.unMute();
      });
  };

  const toggleControls = () => {
    areButtonsVisible = true;

    setTimeout(() => {
      areButtonsVisible = false;
    }, _buttonsTimeout);
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

    player.on('stateChange', async (event) => {
      totalTime = await player.getDuration();

      setInterval(async () => {
        currentTime = await player.getCurrentTime();

        if (event.data === 0) {
          dispatch('end');
          areButtonsVisible = true;
        }
      }, 100);
    });
  });

  $: progress = (currentTime / totalTime) * 100;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div
  on:click={toggleControls}
  class="flex h-[240px] w-full bg-background-dark-default-default z-20"
>
  <div class="flex flex-col pointer-events-none" id="player" />
</div>

{#if areButtonsVisible}
  <BackButton />

  {#if isPlaying}
    <StopButton on:click={stopVideo} />
  {:else}
    <PlayButton on:click={startVideo} />
  {/if}
  <ShareButton />
{/if}

<div class="absolute bottom-3 left-0 w-full px-4 flex items-center justify-between z-10">
  <span class="text-h200 text-text-light-strong">Trailer</span>

  <div class="flex items-center gap-2">
    <!--    <Button size="sm" class="!p-2" color="light">-->
    <!--      <Icon src={Fullscreen} size="16px" />-->
    <!--    </Button>-->

    <MuteButton {isVideoMuted} {toggleMute} />
  </div>
</div>

<ProgressBar {progress} />
