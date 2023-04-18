<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { page } from '$app/stores';
  import YouTubePlayer from 'youtube-player';

  const dispatch = createEventDispatcher();

  let windowWidth: number;

  const trailerSrs = $page.data.videos.data.results.filter((video) =>
    video.name.toLowerCase().includes('trailer')
  );
  let player;

  onMount(async () => {
    player = YouTubePlayer('player', {
      videoId: trailerSrs[0].key,
      width: windowWidth,
      height: 240,
      playerVars: {
        autoplay: 1,
        controls: 0,
        fs: 0,
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
  });
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="flex flex-col pointer-events-none" id="player" />
