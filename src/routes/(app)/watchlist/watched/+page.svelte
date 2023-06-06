<script lang="ts">
  import { Questionnaire, Search2 } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';

  import EmptyStatePlaceholder from '$lib/components/EmptyStatePlaceholder/EmptyStatePlaceholder.svelte';
</script>

<EmptyStatePlaceholder>
  <svelte:fragment slot="title">Time to watch something!</svelte:fragment>
  <svelte:fragment slot="subtitle">
    Talk to Moviemate or use search to find movies which you will love
  </svelte:fragment>
  <svelte:fragment slot="cta">
    <div class="flex flex-col w-full gap-2">
      <button class="btn primary xl w-full">
        <Icon src={Questionnaire} size="20px" />
        Ask Moviemate
      </button>

      <button class="btn secondary xl w-full">
        <Icon src={Search2} size="20px" />
        Search
      </button>
    </div>
  </svelte:fragment>
</EmptyStatePlaceholder>
