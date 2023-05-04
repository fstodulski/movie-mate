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
      top: anchor.offsetTop - 110,
      behavior: 'smooth'
    });
  };
</script>

<div class="flex items-center overflow-x-auto gap-2 mb-4 scrollbar-hide py-2 pl-4">
  {#each LINKS as link}
    <a
      href={link.href}
      class="badge flex items-center bg-background-dark-default-alpha/[0.2] border-border-default-muted-alpha/[0.32]"
      on:click={handleAnchorClick}
    >
      <div class="flex items-center gap-2">
        <Icon
          src={link.icon}
          size="20px"
          class={link.css}
          theme={includes($page.url.hash, link.href) ? 'solid' : ''}
        />
        <span class="whitespace-nowrap text-text-light-strong text-t200">
          {link.label}
        </span>
      </div>
    </a>
  {/each}
</div>

<style lang="scss">
  .badge {
    @apply flex items-center flex-1 h-[40px] px-3  border rounded-md w-full flex items-center last-of-type:mr-4;
  }
</style>
