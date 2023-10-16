<script lang="ts">
  import Page from '$lib/deck/page.svelte'
  import Code from '$lib/deck/code.svelte'
  import Markdown from '$lib/deck/markdown.svelte'
  import Notes from '$lib/deck/notes.svelte'
</script>

<Page animate restart>
  <Page animate>
    <div data-id="t7" class="text-4xl mb-12">
      Reference
    </div>
    <div class="text-3xl">
      <ol>
        <li>
          https://www.researchgate.net/publication/<br>342335554_Architecture_and_Advantages_of_SIMD_in_Multimedia_<br />Applications
        </li>
        <li>
          https://www.tutorialspoint.com/concurrency_in_python/<br>concurrency_in_python_system_and_memory_architecture.htm
        </li>
        <li>
          https://www.liquisearch.com/simd/disadvantages
        </li>
        <li>
          https://zhuanlan.zhihu.com/p/337756824
        </li>
        <li>
          http://www.jos.org.cn/html/2015/6/4811.htm
        </li>
        <li>
          https://www.ukessays.com/essays/computer-science/evaluation-of-mimd-vs-simd-architecture.php
        </li>
      </ol>
    </div>
    <Notes>
      Lastly, the references.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t7" class="text-4xl mb-12">
      Reference
    </div>
    <div class="text-3xl">
      <ol style="counter-reset: item 6;">
        <li>
          https://arxiv.org/pdf/2101.11049
        </li>
        <li>
          https://www.intel.cn/content/www/cn/zh/developer/articles/<br>technical/simd-made-easy-with-intel-ispc.html
        </li>
        <li>
          https://arxiv.org/abs/1812.04070v1
        </li>
        <li>
          https://stackoverflow.com/questions/1417681/simd-programming-<br>languages
        </li>
        <li>
          https://www.intel.com/content/www/us/en/developer/articles/<br>technical/optimize-scan-operations-explicit-vectorization.html
        </li>
      </ol>
    </div>
  </Page>
</Page>

<style>
  ol {
    list-style-type: none;
    counter-reset: item;
    padding-left: 0;
  }
  li {
    counter-increment: item;
  }
  li::before {
    content: "[" counter(item) "] ";
  }
</style>
