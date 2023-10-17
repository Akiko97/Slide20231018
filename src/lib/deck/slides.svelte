<script lang="ts">
  import { onMount } from 'svelte'
  import Reveal from 'reveal.js'
  import Markdown from 'reveal.js/plugin/markdown/markdown'
  import Highlight from 'reveal.js/plugin/highlight/highlight'
  import Notes from 'reveal.js/plugin/notes/notes'
  import 'reveal.js/dist/reveal.css'
  import 'reveal.js/dist/theme/black.css'
  import 'reveal.js/plugin/highlight/monokai.css'
  import Presentation from './presentation.svelte'
  import { events } from './events'
  let intervalID:any = null
  onMount(() => {
    const deck = new Reveal({
      autoAnimateEasing: 'ease',
      autoAnimateDuration: 1,
      hash: true,
      controls: true,
      progress: true,
    })
    deck.initialize({
      plugins: [ Markdown, Highlight, Notes ],
      slideNumber: 'c/t',
    })
    deck.on('slidechanged', event => {
      if (event.indexh === 3 && event.indexv === 4) {
        intervalID = setInterval(() => {
          if (events.slidechanged !== null) {
            events.slidechanged()
          }
        }, 4500)
      }
      else if (intervalID !== null) {
        clearInterval(intervalID)
        intervalID = null
      }
    })
  })
</script>

<div class="reveal">
  <div class="slides">
    <Presentation />
  </div>
</div>
