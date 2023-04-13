<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { filter } from 'ramda';
  import YouTubePlayer from 'youtube-player';

  const trailerSrs = filter(
    (video) => video.name.toLowerCase().includes('trailer'),
    $page.data.videos.results
  );

  let trailerKey = trailerSrs[0].key || $page.data.videos.results[0].key;

  onMount(async () => {
    const player = YouTubePlayer('player', {
      videoId: trailerKey,
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: undefined
      }
    });
    await player.mute();
    await player.playVideo();
  });
</script>

<div class="flex flex-col pointer-events-none" id="player" />
