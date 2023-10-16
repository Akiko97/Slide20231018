<script lang="ts">
  import Page from '$lib/deck/page.svelte'
  import Code from '$lib/deck/code.svelte'
  import Markdown from '$lib/deck/markdown.svelte'
  import Notes from '$lib/deck/notes.svelte'
</script>

<Page animate restart>
  <Page animate>
    <div data-id="t3" class="text-5xl">
      SIMD Visualization Tools
    </div>
    <Notes>
      Now I will introduce some existing SIMD Visualization Tools.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t3" class="text-4xl mb-12">
      SIMDGiraffe
    </div>
    <div class="text-2xl grid place-items-center">
      <img class="h-[300px]" src="img/simdgiraffe.png" alt="SIMDGiraffe img">
      <p>
        This project establishes a model that can describe code behavior, along with a visual encoding model representing the vector code domain. However, it's important to note that the model described in its <a href="https://d1wqtxts1xzle7.cloudfront.net/76286320/101952-libre.pdf?1639499213=&response-content-disposition=inline%3B+filename%3DSIMDGiraffe_Visualizing_SIMD_Functions.pdf&Expires=1697469813&Signature=fSBih-ZKl~jglNkpLinnPMxuSsZUlOwQUf5S4nyrQSi23v7a1U2M3xhf3vY3EMc9Y8lOBpAxEmUvV63rGggCXf2kITHscuKAXmI3yFjRpB4VFSPvHShQaZG4WFyviylNmkB51yOualdS2HF~THWfoRvAdRGCKv5k7xvWAqM3PcRf0zLaB8IDmattRsPfwwF534FvNGCFhj7fFAJq3Gan9GVcKJMCcOF63Wv-5HMuoAOoByjNT0woIIQu6fnZZ6IcRLGvy2K3AhoFiZLzLTWvYpUMeYZxpFJuCccKQL2ifyjh0~sR0Yj4euEGAo9PiVbKEEUUeNhyTy9ucvwMdGiMHA__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA">paper</a> and the code deployed on its <a href="https://github.com/pmntang/SIMDGiraffe">Github homepage</a> are <span class="text-red-500">NOT the same</span>. The above description and images are merely a recount of its paper, and we cannot observe the actual operation of these models on its demonstration page. The author believes that, thanks to the visual representation, a person with little experience in vector programming was able to make this slicing.
      </p>
    </div>
    <Notes>
      This project establishes a model that can describe code behavior, along with a visual encoding model representing the vector code domain. However, it's important to note that the model described in its paper and the code deployed on its Github homepage are NOT the same. The above description and images are merely a recount of its paper, and we cannot observe the actual operation of these models on its demonstration page. The author believes that, thanks to the visual representation, a person with little experience in vector programming was able to make this slicing.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t3" class="text-4xl mb-12">
      SIMD-Visualiser
    </div>
    <div class="text-xl grid place-items-center">
      <img class="h-[450px]" src="img/SIMD-Visualizer-Demo.gif" alt="SIMD-Visualizer img">
      <p>
        This image is an example provided on the SIMD-Visualiser project <a href="https://github.com/piotte13/SIMD-Visualiser">homepage</a>, showcasing how the project can visually display the changes to each register value by AVX intrinsic functions. There are some issues with the demonstration page of the project, but with minor modifications after cloning the code, it can run smoothly.
      </p>
    </div>
    <Notes>
      This image is an example provided on the SIMD-Visualiser project homepage, showcasing how the project can visually display the changes to each register value by AVX intrinsic functions. There are some issues with the demonstration page of the project, but with minor modifications after cloning the code, it can run smoothly.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t3" class="text-4xl mb-12">
      NEVADA
    </div>
    <div class="text-xl grid place-items-center">
      <img class="h-[400px]" src="img/nevada.png" alt="nevada img">
      <p>
        In the <a href="https://github.com/szeged/nevada">NEVADA</a> tool, the left side displays SIMD assembly instructions, while the right side shows the CPU context. By using the Run or Step function at the top, users can execute or step through the assembly instructions on the left. The instruction being executed and the CPU context being modified are highlighted with a green background. Through this design, users can intuitively observe how the executing assembly instruction will modify the CPU context.
      </p>
    </div>
    <Notes>
      The next tool is call NEVADA. In the NEVADA tool, the left side displays SIMD assembly instructions, while the right side shows the CPU context. By using the Run or Step function at the top, users can execute or step through the assembly instructions on the left. The instruction being executed and the CPU context being modified are highlighted with a green background. Through this design, users can intuitively observe how the executing assembly instruction will modify the CPU context.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t3" class="text-4xl mb-12">
      A Visual SIMD Simulator Application (No Name)
    </div>
    <div class="text-3xl">
      <p>
        The <a href="https://forums.developer.nvidia.com/t/visual-simd-sumulator-application/12940">webpage</a> discusses a Visual SIMD Simulator application aimed at simplifying SIMD programming. A user shares details about the application they are developing, which includes features like a graphical mapping tool, static performance analysis, and runtime binary code generator. The tool appears to help in understanding and optimizing SIMD operations, especially in NVIDIA GPU architectures, by providing visual simulation and code generation capabilities, which could assist developers in optimizing performance for both CPU and GPU. The author mentions that this tool is in the process of patent application, but no further details have been released, nor is there any source code or examples available for execution.
      </p>
    </div>
    <Notes>
      The webpage discusses a Visual SIMD Simulator application aimed at simplifying SIMD programming. A user shares details about the application they are developing, which includes features like a graphical mapping tool, static performance analysis, and runtime binary code generator. The tool appears to help in understanding and optimizing SIMD operations, especially in NVIDIA GPU architectures, by providing visual simulation and code generation capabilities, which could assist developers in optimizing performance for both CPU and GPU. The author mentions that this tool is in the process of patent application, but no further details have been released, nor is there any source code or examples available for execution.
    </Notes>
  </Page>
</Page>
