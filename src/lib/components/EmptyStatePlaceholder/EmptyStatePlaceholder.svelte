<script lang="ts">
  export let size: 'sm' | 'md' | 'lg' = 'sm';
  export let css: string;

  const sizes = {
    sm: 'w-[128px] h-[128px]',
    md: 'w-[256px] h-[256px]',
    lg: 'w-[512px] h-[512px]'
  };
</script>

<section class="w-full h-full flex flex-col justify-center items-center {css}">
  <div class="flex flex-col items-center">
    <figure class="{sizes[size]} bg-[#7B61FF]/10 border border-dotted border-[#7B61FF] mb-12" />
    <div class="flex flex-col items-center gap-2 mb-12">
      <span class="text-h600 text-center text-text-light-strong">
        <slot name="title" />
      </span>
      <span class="text-text-light-default text-center text-t300">
        <slot name="subtitle" />
      </span>
    </div>

    <div class="flex items-center gap-4 w-full mb-2">
      <slot name="cta" />
    </div>

    <div class="flex items-center justify-center gap-4 w-full">
      <slot name="footer" />
    </div>
  </div>
</section>
