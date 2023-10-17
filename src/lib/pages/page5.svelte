<script lang="ts">
  import Page from '$lib/deck/page.svelte'
  import Code from '$lib/deck/code.svelte'
  import Markdown from '$lib/deck/markdown.svelte'
  import Notes from '$lib/deck/notes.svelte'
  import Editor from '$lib/pages/Anime/src/lib/Editor.svelte'
  import Visualization from '$lib/pages/Anime/src/lib/Visualization.svelte'
  import Button from '$lib/pages/Anime/src/lib/Button.svelte'
  import { code, registers } from '$lib/pages/Anime/src/store.js'
  import { Instructions } from '$lib/pages/Anime/src/instructions.js'
  import { onMount } from 'svelte'
  registers.update(() => [
    { name: 'YMM0', size: 4, values: [3, 2, 1, 0] },
    { name: 'YMM1', size: 4, values: [7, 6, 5, 4] },
    { name: 'YMM2', size: 4, values: [11, 10, 9, 8] },
    { name: 'YMM3', size: 4, values: [15, 14, 13, 12] },
    { name: 'XMM0', size: 2, values: [0, 0] },
    { name: 'YMM4', size: 4, values: [0, 0, 0, 0] },
    { name: 'YMM5', size: 4, values: [0, 0, 0, 0] },
    { name: 'YMM6', size: 4, values: [0, 0, 0, 0] },
    { name: 'YMM7', size: 4, values: [0, 0, 0, 0] },
    { name: 'YMM8', size: 4, values: [0, 0, 0, 0] },
    { name: 'YMM9', size: 4, values: [0, 0, 0, 0] },
    { name: 'YMM10', size: 4, values: [0, 0, 0, 0] },
    { name: 'YMM11', size: 4, values: [0, 0, 0, 0] },
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
  code.update(() => {
    return '; Calculate 1st row of result (YMM8)\n' +
      'vextractf128 xmm0, ymm0, 1\n' +
      'vbroadcastsd ymm5, xmm0\n' +
      'shufpd xmm0, xmm0, 1\n' +
      'vbroadcastsd ymm4, xmm0\n' +
      'vextractf128 xmm0, ymm0, 0\n' +
      'vbroadcastsd ymm7, xmm0\n' +
      'shufpd xmm0, xmm0, 1\n' +
      'vbroadcastsd ymm6, xmm0\n' +
      'vmulpd ymm7, ymm3, ymm7\n' +
      'vfmadd213pd ymm6, ymm2, ymm7\n' +
      'vfmadd213pd ymm5, ymm1, ymm6\n' +
      'vfmadd213pd ymm4, ymm0, ymm5\n' +
      'vmovapd ymm8, ymm4\n' +
      '; Calculate 2nd row of result (YMM9)\n' +
      'vextractf128 xmm0, ymm1, 1\n' +
      'vbroadcastsd ymm5, xmm0\n' +
      'shufpd xmm0, xmm0, 1\n' +
      'vbroadcastsd ymm4, xmm0\n' +
      'vextractf128 xmm0, ymm1, 0\n' +
      'vbroadcastsd ymm7, xmm0\n' +
      'shufpd xmm0, xmm0, 1\n' +
      'vbroadcastsd ymm6, xmm0\n' +
      'vmulpd ymm7, ymm3, ymm7\n' +
      'vfmadd213pd ymm6, ymm2, ymm7\n' +
      'vfmadd213pd ymm5, ymm1, ymm6\n' +
      'vfmadd213pd ymm4, ymm0, ymm5\n' +
      'vmovapd ymm9, ymm4\n' +
      '; Calculate 3rd row of result (YMM10)\n' +
      'vextractf128 xmm0, ymm2, 1\n' +
      'vbroadcastsd ymm5, xmm0\n' +
      'shufpd xmm0, xmm0, 1\n' +
      'vbroadcastsd ymm4, xmm0\n' +
      'vextractf128 xmm0, ymm2, 0\n' +
      'vbroadcastsd ymm7, xmm0\n' +
      'shufpd xmm0, xmm0, 1\n' +
      'vbroadcastsd ymm6, xmm0\n' +
      'vmulpd ymm7, ymm3, ymm7\n' +
      'vfmadd213pd ymm6, ymm2, ymm7\n' +
      'vfmadd213pd ymm5, ymm1, ymm6\n' +
      'vfmadd213pd ymm4, ymm0, ymm5\n' +
      'vmovapd ymm10, ymm4\n' +
      '; Calculate 4th row of result (YMM11)\n' +
      'vextractf128 xmm0, ymm3, 1\n' +
      'vbroadcastsd ymm5, xmm0\n' +
      'shufpd xmm0, xmm0, 1\n' +
      'vbroadcastsd ymm4, xmm0\n' +
      'vextractf128 xmm0, ymm3, 0\n' +
      'vbroadcastsd ymm7, xmm0\n' +
      'shufpd xmm0, xmm0, 1\n' +
      'vbroadcastsd ymm6, xmm0\n' +
      'vmulpd ymm7, ymm3, ymm7\n' +
      'vfmadd213pd ymm6, ymm2, ymm7\n' +
      'vfmadd213pd ymm5, ymm1, ymm6\n' +
      'vfmadd213pd ymm4, ymm0, ymm5\n' +
      'vmovapd ymm11, ymm4'
  })
  const executeInstruction = (instructionStr:string) => {
    const tokens = instructionStr.split(/[\s,]+/)
    const instructionName = tokens[0]
    const args = tokens.slice(1)
    if (typeof i[instructionName] === 'function') {
      i[instructionName].apply(i, args)
    }
    else if (instructionName[0] === ';' || instructionName === '') {
      console.log('Not runnable code')
    }
    else {
      console.error(`Unknown instruction: ${instructionName}`)
    }
  }
  let step = 1
  const run = () => {
    editorRef.removeHighlight()
    if (step > $code.split('\n').length) {
      step = 1
      registers.update(() => [
        { name: 'YMM0', size: 4, values: [3, 2, 1, 0] },
        { name: 'YMM1', size: 4, values: [7, 6, 5, 4] },
        { name: 'YMM2', size: 4, values: [11, 10, 9, 8] },
        { name: 'YMM3', size: 4, values: [15, 14, 13, 12] },
        { name: 'XMM0', size: 2, values: [0, 0] },
        { name: 'YMM4', size: 4, values: [0, 0, 0, 0] },
        { name: 'YMM5', size: 4, values: [0, 0, 0, 0] },
        { name: 'YMM6', size: 4, values: [0, 0, 0, 0] },
        { name: 'YMM7', size: 4, values: [0, 0, 0, 0] },
        { name: 'YMM8', size: 4, values: [0, 0, 0, 0] },
        { name: 'YMM9', size: 4, values: [0, 0, 0, 0] },
        { name: 'YMM10', size: 4, values: [0, 0, 0, 0] },
        { name: 'YMM11', size: 4, values: [0, 0, 0, 0] },
      ])
    }
    else {
      editorRef.highlightLine(step)
      const instructionStr = $code.split('\n')[step - 1]
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
    <div class="text-xl">
      Instruction Visualization example: Calculating matrix multiplication.
    </div>
    <div class="w-[100%] h-[500px] flex text-xl">
      <div class="w-[50%] text-left p-[5px]">
        <Editor bind:this={editorRef} />
      </div>
      <div class="w-[50%] p-[5px]">
        <div class="vc">
          <Visualization bind:this={visualizationRef} />
        </div>
        <div class="mt-[20px]">
          <Button click={run} text="Step" />
        </div>
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

<style>
  .vc {
    height: 450px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .vc::-webkit-scrollbar {
    width: 12px;
  }
  .vc::-webkit-scrollbar-track {
    background-color: #777;
  }
  .vc::-webkit-scrollbar-thumb {
    background-color: #666;
  }
  .vc::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
</style>
