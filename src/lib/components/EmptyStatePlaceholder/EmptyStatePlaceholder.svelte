<section class="w-full h-full flex flex-col justify-center items-center px-4">
  <div class="flex flex-col items-center gap-4">
    <figure class="w-[128px] h-[128px] bg-[#7B61FF]/10 border border-dotted border-[#7B61FF]" />
    <div class="flex flex-col items-center gap-2">
      <span class="text-h600 text-text-light-strong">
        <slot name="title" />
      </span>
      <span class="text-text-light-default text-center text-t300">
        <slot name="subtitle" />
      </span>
    </div>

    <div class="flex items-center gap-4 w-full">
      <slot name="cta" />
    </div>
  </div>
</section>
