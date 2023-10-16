<script lang="ts">
  export let file = 'page.md'
  export let external = false
</script>

{#if external}
  <section data-markdown={file}></section>
{:else}
  <section data-markdown>
    <div data-template>
      <slot />
    </div>
  </section>
{/if}
