<script lang="ts">
  import { page } from '$app/stores';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { includes } from 'ramda';

  import { LINKS } from './feed.const';

  const handleAnchorClick = (event) => {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace('#', '');
    const anchor = document.getElementById(anchorId);

    window.scrollTo({
      top: anchor.offsetTop,
      behavior: 'smooth'
    });
  };
</script>

<div
  class="flex items-center bg-bg-default-muted-default overflow-x-auto gap-2 mb-4 scrollbar-hide py-2 pl-4"
>
  {#each LINKS as link}
    <a href={link.href} class="badge flex items-center" on:click={handleAnchorClick}>
      <div class="flex items-center gap-2">
        <Icon
          src={link.icon}
          size="20px"
          class={link.css}
          theme={includes($page.url.hash, link.href) ? 'solid' : ''}
        />
        <span class="whitespace-nowrap text-text-default-strong text-t200">
          {link.label}
        </span>
      </div>
    </a>
  {/each}
</div>

<style lang="scss">
  .badge {
    @apply flex items-center flex-1 h-[40px] border-bg-default-muted-alpha px-3  bg-bg-default-muted-alpha border rounded-md w-full flex items-center last-of-type:mr-4;
  }
</style>
