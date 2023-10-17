<script lang="ts">
  import Page from '$lib/deck/page.svelte'
  import Code from '$lib/deck/code.svelte'
  import Markdown from '$lib/deck/markdown.svelte'
  import Notes from '$lib/deck/notes.svelte'
  import Editor from '$lib/pages/Anime/src/lib/Editor.svelte'
  import Visualization from '$lib/pages/Anime/src/lib/Visualization.svelte'
  import Button from '$lib/pages/Anime/src/lib/Button.svelte'
  import { registers } from '$lib/pages/Anime/src/store.js'
  import { Instructions } from '$lib/pages/Anime/src/instructions.js'
  import { onMount } from 'svelte'
  registers.update(() => [
    { name: 'YMM0', size: 8, values: [8, 1, 3, 5, 7, 9, 2, 4] },
    { name: 'YMM1', size: 8, values: [1, 3, 5, 7, 9, 2, 4, 6] },
    { name: 'YMM2', size: 8, values: [0, 0, 0, 0, 0, 0, 0, 0] },
    { name: 'YMM3', size: 8, values: [0, 0, 0, 0, 0, 0, 0, 0] },
    { name: 'YMM4', size: 8, values: [0, 0, 0, 0, 0, 0, 0, 0] },
    { name: 'YMM5', size: 8, values: [0, 0, 0, 0, 0, 0, 0, 0] },
  ])
  let i:any
  onMount(() => {
    i = new Instructions(
      visualizationRef.duplicate,
      visualizationRef.exchange,
      visualizationRef.assignment
    )
  })
  let visualizationRef: {
    exchange:(regName1:string,index1:number,regName2:string,index2:number)=>void,
    assignment:(regName:string,index:number,newValue:number,fromRegs:{name:string,index:number}[])=>void,
    duplicate:(regName:string,index:number,fromRegName:string,fromIndex:number)=>void
  }
  let editorRef: {
    highlightLine:(lineNumber:number)=>void,
    highlightInline:(lineNumber:number,from:number,to:number)=>void,
    removeHighlight:()=>void
  }
  const code = 'vperm2f128 ymm0, ymm0, ymm0, 0x01\n' +
    'movaps ymm2, ymm0\n' +
    'movaps ymm3, ymm1\n' +
    'vshufps ymm4, ymm2, ymm3, 0x4E\n' +
    'vperm2f128 ymm5, ymm2, ymm3, 0x20\n' +
    'vpermq ymm5, ymm5, 0x4E\n' +
    'vxorps ymm0, ymm0, ymm0\n' +
    'vxorps ymm0, ymm1, ymm2'
  const executeInstruction = (instructionStr:string) => {
    const tokens = instructionStr.split(/[\s,]+/)
    const instructionName = tokens[0]
    const args = tokens.slice(1)
    if (typeof i[instructionName] === 'function') {
      i[instructionName].apply(i, args)
    } else {
      console.error(`Unknown instruction: ${instructionName}`)
    }
  }
  let step = 1
  const run = () => {
    editorRef.removeHighlight()
    if (step > code.split('\n').length) {
      step = 1
      registers.update(() => [
        { name: 'YMM0', size: 8, values: [8, 1, 3, 5, 7, 9, 2, 4] },
        { name: 'YMM1', size: 8, values: [1, 3, 5, 7, 9, 2, 4, 6] },
        { name: 'YMM2', size: 8, values: [0, 0, 0, 0, 0, 0, 0, 0] },
        { name: 'YMM3', size: 8, values: [0, 0, 0, 0, 0, 0, 0, 0] },
        { name: 'YMM4', size: 8, values: [0, 0, 0, 0, 0, 0, 0, 0] },
        { name: 'YMM5', size: 8, values: [0, 0, 0, 0, 0, 0, 0, 0] },
      ])
    }
    else {
      editorRef.highlightLine(step)
      const instructionStr = code.split('\n')[step - 1]
      executeInstruction(instructionStr)
      step++
    }
  }
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
    <div class="w-[100%] h-[500px] flex text-xl">
      <div class="w-[40%] text-left p-[5px]">
        <Editor bind:this={editorRef} {code} />
      </div>
      <div class="w-[60%] p-[5px]">
        <Visualization bind:this={visualizationRef} />
        <Button click={run} text="Run" />
      </div>
    </div>
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
