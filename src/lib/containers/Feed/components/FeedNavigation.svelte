<script lang="ts">
  import { page } from '$app/stores';
  import { Icon } from '@steeze-ui/svelte-icon';

  import { LINKS } from './feed.const';

  let selectedLink = null;

  const handleAnchorClick = (event) => {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace('#', '');
    const anchor = document.getElementById(anchorId);

    selectedLink = anchorId;

    window.scrollTo({
      top: anchor.offsetTop - 120,
      behavior: 'smooth'
    });
  };

  $: {
    selectedLink = $page.url.hash.replace('#', '');
  }
</script>

<div class="flex items-center overflow-x-auto gap-2 scrollbar-hide py-2">
  {#each LINKS as link}
    {@const active = link.href.includes(selectedLink)}
    <a href={link.href} class:active class="badge flex items-center" on:click={handleAnchorClick}>
      <div class="flex items-center gap-2">
        <Icon src={link.icon} size="20px" class={link.css} theme={active ? 'solid' : ''} />
        <span class="whitespace-nowrap text-text-light-strong text-t200">
          {link.label}
        </span>
      </div>
    </a>
  {/each}
</div>

<style lang="scss">
  .badge {
    @apply flex items-center flex-1 h-[40px] px-3  rounded-md w-full last-of-type:mr-4;
  }

  .active {
    @apply border bg-background-dark-default-alpha/[0.2] border-border-default-muted-alpha/[0.32] #{!important};
  }
</style>
