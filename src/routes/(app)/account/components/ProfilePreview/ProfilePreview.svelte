<script lang="ts">
  import { page } from '$app/stores';

  console.log($page.data);
</script>

<section class="p-4 bg-background-dark-muted-alpha/[0.16] gap-4 rounded-xl w-full flex flex-col">
  <div class="flex gap-3">
    <figure class="w-12 h-12 rounded-md overflow-hidden bg-background-dark-muted-alpha">
      <img
        src={$page.data.session.user.user_metadata.avatar_url}
        alt=""
        class="w-full object-cover"
      />
    </figure>

    <div class="flex flex-col">
      <span class="text-h500 text-text-light-strong">
        {$page.data.session.user.user_metadata.full_name}
      </span>
      <span class="text-t200 text-text-light-default">Novice Viewer</span>
    </div>
  </div>

  <div class="flex flex-col w-full gap-2">
    <div
      class="overflow-hidden w-full rounded-lg bg-core-neutral-darken-400 h-4 shadow-inner relative"
    >
      <div class="absolute w-1/2 h-full rounded-lg bg-background-action-primary-default" />
    </div>
    <div class="flex items-center justify-between w-full">
      <span class="text-t200 text-text-action-primary">4 watched movies</span>
      <span class="text-t200 text-text-light-default">8</span>
    </div>
  </div>
</section>
