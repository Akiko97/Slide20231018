<script lang="ts">
  import Page from '$lib/deck/page.svelte'
  import Code from '$lib/deck/code.svelte'
  import Markdown from '$lib/deck/markdown.svelte'
  import Notes from '$lib/deck/notes.svelte'
</script>

<Page animate restart>
  <Page animate>
    <div data-id="t6" class="text-5xl">
      Research Progress
    </div>
    <Notes>
      Next, I will discuss the progress of my research.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t6" class="text-4xl mb-12">
      Implemented Features
    </div>
    <div class="text-3xl">
      Instruction Visualization example: Calculating matrix multiplication.
    </div>
    <div></div>
    <Notes>
      Currently, the instruction visualization functionality has been realized, and we can see a small example. This is an example of visualizing a SIMD code snippet in a program calculating matrix multiplication.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t6" class="text-4xl mb-12">
      Future Development Plans
    </div>
    <div class="text-3xl">
      <ul>
        <li>
          Complete the instruction generation functionality (based on deep learning).
        </li>
        <li>
          Add support for more SIMD instructions to the visualization engine.
        </li>
      </ul>
    </div>
    <Notes>
      The roadmap for future development within this project is clearly earmarked into two primary objectives. Initially, the focus is on completing the instruction generation functionality, leveraging deep learning to automate and enhance the accuracy of translating graphical actions into corresponding SIMD instructions. <br><br>
      Subsequently, the plan is to broaden the spectrum of SIMD instructions that the visualization engine can handle. By expanding support for a more extensive set of SIMD instructions, the visualization engine will become more robust and versatile, providing users with a comprehensive platform to observe, verify, and interact with SIMD code.
    </Notes>
  </Page>
</Page>
