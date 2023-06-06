<script lang="ts">
  import { Star } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';

  import { DOWNLOAD_THE_APP } from '$lib/components/DownloadTheApp/download-the-app.const';
</script>

<section
  class="flex flex-col rounded-xl bg-background-dark-muted-alpha/[0.16] p-6 gap-4 mx-4 mt-6 mb-4"
>
  <span class="text-text-light-strong text-h500">Download our App and get rewarded:</span>

  <div class="flex flex-col gap-2">
    {#each DOWNLOAD_THE_APP as { label }, index}
      <div class="flex items-center gap-2">
        <Icon
          src={Star}
          size="20px"
          theme={index === 0 && 'solid'}
          class={index === 0 ? 'text-text-action-success' : 'text-text-light-default'}
        />
        <span
          class="text-t200 {index === 0 ? 'text-text-action-success' : 'text-text-light-default'}"
          >{label}</span
        >
      </div>
    {/each}
  </div>

  <div class="flex items-center w-full gap-3">
    <figure class="relative h-12 w-12">
      <img class="absolute top-0 left-0 w-full h-full object-cover" src="/app_icon.svg" alt="" />
    </figure>
    <div class="flex flex-col">
      <span class="text-t200 text-text-light-strong">Moviemate</span>
      <span class="text-t100 text-text-light-default">Your personal movie buddy</span>
    </div>

    <button class="ml-auto text-h100 text-blue-500 px-3 py-1 rounded-full capitalize bg-white">
      Download
    </button>
  </div>
</section>
