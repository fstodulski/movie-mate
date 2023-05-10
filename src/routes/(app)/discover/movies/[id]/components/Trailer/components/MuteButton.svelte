<script lang="ts">
  import { VolumeMute, VolumeUp } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';

  export let toggleMute: () => void;
  export let isVideoMuted: boolean;
</script>

<button class="btn xs tertiary icon no-focus" on:click={toggleMute}>
  <Icon src={isVideoMuted ? VolumeMute : VolumeUp} size="16px" />
</button>
