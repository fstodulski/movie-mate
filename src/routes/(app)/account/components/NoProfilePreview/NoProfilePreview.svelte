<script lang="ts">
  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
</script>

<section
  class="p-4 bg-background-dark-muted-alpha/[0.16] gap-4 rounded-xl w-full flex flex-col items-center"
>
  <figure class="w-full">
    <img src="/levels.svg" alt="" />
  </figure>
  <h1 class="text-h600 text-text-light-strong">Level up by watching movies</h1>
  <div class="flex flex-col w-full items-center gap-2">
    <button class="btn primary md w-full"> Sign up FREE </button>
    <div class="flex items-center">
      <span class="text-t300 text-text-light-default">Already have an account?</span>
      <a class="btn tertiary xl" href={APP_ROUTES.auth.index}>Log in</a>
    </div>
  </div>
</section>
