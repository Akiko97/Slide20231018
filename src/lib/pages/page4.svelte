<script lang="ts">
  import Page from '$lib/deck/page.svelte'
  import Code from '$lib/deck/code.svelte'
  import Markdown from '$lib/deck/markdown.svelte'
  import Notes from '$lib/deck/notes.svelte'
  import Node from '$lib/pages/Anime/src/lib/Node.svelte'
  import { events } from '$lib/deck/events'
  import { onMount } from 'svelte'
  import { demo, registers2 } from './demo'
  const register1 = { name: 'YMM6', size: 8, values: [0, 1, 2, 3, 4, 5, 6, 7], stroke: 'yellow', fill: 'aqua' }
  // @ts-ignore
  export const exchange = (regName1, index1, regName2, index2) => {
    // @ts-ignore
    demo.__exchange($registers2, () => {
      registers2.update(regs => {
        const reg1 = regs.find(register => register.name === regName1)
        const reg2 = regs.find(register => register.name === regName2)
        // @ts-ignore
        const tmp = reg1.values[index1]
        // @ts-ignore
        reg1.values[index1] = reg2.values[index2]
        // @ts-ignore
        reg2.values[index2] = tmp
        return regs
      })
    }, regName1, index1, regName2, index2)
  }
  // @ts-ignore
  export const assignment = (regName, index, newValue, fromRegs = []) => {
    const _assignment = () => {
      // @ts-ignore
      demo.__assignment($registers2, () => {
        registers2.update(regs => {
          const reg = regs.find(register => register.name === regName)
          // @ts-ignore
          reg.values[index] = newValue
          return regs
        })
      }, regName, index, newValue)
    }
    const allRegsAreSame = fromRegs.every(reg => {
      // @ts-ignore
      return reg.name === regName
    })
    if (allRegsAreSame) {
      _assignment()
    }
    else {
      fromRegs.forEach(fromReg => {
        // @ts-ignore
        demo.__duplicate($registers2, () => {
          _assignment()
          // @ts-ignore
        }, regName, index, fromReg.name, fromReg.index)
      })
    }
  }
  // @ts-ignore
  export const duplicate = (regName, index, fromRegName, fromIndex) => {
    // @ts-ignore
    demo.__duplicate($registers2, () => {
      registers2.update(regs => {
        const reg = regs.find(register => register.name === regName)
        const fromReg = regs.find(register => register.name === fromRegName)
        // @ts-ignore
        reg.values[index] = fromReg.values[fromIndex]
        return regs
      })
    }, regName, index, fromRegName, fromIndex)
  }
  const anime = () => {
    exchange('YMM0', 0, 'YMM0', 4)
    exchange('YMM0', 1, 'YMM0', 5)
    exchange('YMM0', 2, 'YMM0', 6)
    exchange('YMM0', 3, 'YMM0', 7)
    setTimeout(() => {
      duplicate('YMM0', 0, 'YMM1', 4)
      duplicate('YMM0', 1, 'YMM1', 5)
      duplicate('YMM0', 2, 'YMM1', 6)
      duplicate('YMM0', 3, 'YMM1', 7)
      setTimeout(() => {
        assignment('YMM0', 0, 0, [])
        assignment('YMM0', 1, 1, [])
        assignment('YMM0', 2, 2, [])
        assignment('YMM0', 3, 3, [])
        assignment('YMM0', 4, 4, [])
        assignment('YMM0', 5, 5, [])
        assignment('YMM0', 6, 6, [])
        assignment('YMM0', 7, 7, [])
      }, 1500)
    }, 1500)
  }
  onMount(() => {
    events.slidechanged = anime
  })
</script>

<Page animate restart>
  <Page animate>
    <div data-id="t4" class="text-5xl">
      My Visualization Approach
    </div>
    <Notes>
      Now I will present the design of my visualization solution.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t4" class="text-4xl mb-12">
      Design Goals and Trade-offs
    </div>
    <div class="text-3xl">
      <ul>
        <li>
          Observe/verify SIMD code using a visualization approach.
        </li>
        <li>
          Generate SIMD code snippets through graphical programming.
        </li>
        <li>
          The overall design is based on the data flow of the program. The decision was made to de-emphasize program control flow. Control flow SIMD instructions with the ability to change flags are given lower priority (not implemented initially).
        </li>
        <li>
          Focus on visualizing AVX register data within the CPU context. Choose to ignore memory and other CPU contexts.
        </li>
      </ul>
    </div>
    <Notes>
      The main goals and trade-offs in this design are all about boosting how we interact with SIMD code. First off, the design aims to use a visualization method to check out and confirm SIMD code, making it simpler to get and fix. Next up, it brings in a graphical programming setup to whip up SIMD code, offering a more natural coding vibe. The big picture design digs deep into the program's data flow, on purpose playing down the control flow to keep things simple; especially, control flow SIMD commands that can tweak flags are pushed back and not brought in from the get-go. Lastly, the spotlight shifts to visualizing AVX register data right in the CPU context, choosing to skip over memory and other CPU context, to keep a sharp focus on interacting with and visualizing SIMD code.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t4" class="text-4xl mb-12">
      Abstraction
    </div>
    <div class="text-2xl">
      <ul>
        <li>
          Within the scope of interest, I have abstracted the behavior of SIMD instructions into two parts: assignment and movement. Assignment operations are used to assign a value to a particular position in a SIMD register, which can be an immediate value or a computed result; movement entails copying data from one position in a SIMD register to another register or another position within the same register.
        </li>
        <li>
          To facilitate visual expression, I have designed three types of visual abstractions: assignment, movement, and swapping. The swapping operation actually corresponds to two movement operations—moving A to B and B to A. However, for clarity in visual expression, I have distilled this operation into a new "swap" operation.
        </li>
        <li>
          Why is abstraction important? The abstraction of instructions determines the visual abstraction. The visual abstraction, in turn, dictates the basic logic of visual and graphical programming for data flow control. SIMD and assembly language are inherently difficult to express visually and to program graphically; these new abstractions provide a fresh perspective on vector programming at the data flow level, and they are more amenable to visual expression.
        </li>
      </ul>
    </div>
    <Notes>
      The abstraction spotlighted here is all about making it easier to work with and understand SIMD instructions, by splitting them into two main actions: assignment and movement. Assignment tasks are all about setting values to certain spots in a SIMD register, whether they're immediate values or figured-out results. On the flip side, movement covers copying data from one spot in a SIMD register to another, either within the same register or to a different one.<br><br>
      To spice up the visual part, three types of visual abstractions have been cooked up: assignment, movement, and swapping. Cool thing is, the swapping action is a simplified version of two movement actions - shuffling data from point A to B and back again. This simplification into a "swap" action aims to offer a clear visual display.<br><br>
      The heart of abstraction here is to bridge the gap between the detailed instruction-level view and visual display. It's a key move as it lays the groundwork for visual and graphical programming, making handling the data flow more intuitive. SIMD and assembly languages throw a wrench in the works for visual display and graphical programming due to their built-in trickiness. However, by rolling out these new abstractions, a fresh and easier-to-digest view on vector programming at the data flow level is unlocked, making visual display more doable and simple.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t4" class="text-4xl mb-12">
      Functional Division
    </div>
    <div class="text-3xl">
      <ul>
        <li>
          <div data-id="t5">
            Visualization of SIMD Instructions
          </div>
        </li>
        <li>
          Graphical Generation of SIMD Instructions
        </li>
      </ul>
    </div>
    <Notes>
      Without delving into design details, we can simply divide the functionality into two parts: the visualization of SIMD instructions and the graphical generation of SIMD instructions.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t5" class="text-4xl mb-12">
      Visualization of SIMD Instructions
    </div>
    <div class="text-3xl">
      <ul>
        <li>
          <div>
            Visualization of Registers (Graphics - Static)
          </div>
          <div class="register_container">
            <p>{register1.name}:</p>
            <div id={`${register1.name}`} class="register_container">
              {#each Array.from({length: register1.size}, (_, i) => i) as index}
                <Node id={`${register1.name}_${register1.size}_${register1.size - 1 - index}_demo`} text={`${register1.values[register1.size - index - 1]}`} stroke={`${register1.stroke}`} fill={`${register1.fill}`} />
              {/each}
            </div>
          </div>
        </li>
        <li>
          <div>
            Visualization of SIMD Instructions (Animation - Dynamic)
          </div>
          <div>
            <div>
              {#each $registers2 as register}
                <div class="register_container">
                  <p>{register.name}:</p>
                  <div id={`${register.name}`} class="register_container">
                    {#each Array.from({length: register.size}, (_, i) => i) as index}
                      <Node id={`${register.name}_${register.size}_${register.size - 1 - index}_demo`} text={`${register.values[register.size - index - 1]}`} stroke={`${register.stroke}`} fill={`${register.fill}`} />
                    {/each}
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </li>
        <li>
          Development Approach: Map each SIMD instruction to a set of behavioral abstractions, then use the visualization engine to execute the visual representation of this set of abstractions.
        </li>
      </ul>
    </div>
    <Notes>
      Breaking down the visualization of SIMD instructions, we've got a two-tier plan: static and dynamic visualization. First off, the static part is about picturing registers in a graphic way, giving a clear and instant visual snapshot of the data they’re holding. This lays down the base for the dynamic visualization, which jazzes up SIMD instructions with animation, serving up a real-time visual scoop on how data is tossed around and shifted within and between registers.<br><br>
      The roadmap to nail this visualization is pretty structured. Each SIMD instruction is paired up with a predefined set of behavioral abstractions. Once this pairing is all set, a visualization engine is brought into play to run and visually show off these abstractions. This way, each SIMD instruction gets turned into a visual animation, making the ride of understanding SIMD instructions more intuitive and lively. This strategy not only helps in getting a better grip but also in the graphical coding of SIMD instructions, ultimately building a bridge between the instruction sets and visual, interactive displays.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t5" class="text-4xl mb-12">
      Graphical Generation of SIMD Instructions
    </div>
    <div class="text-3xl">
      <ul>
        <li>
          Based on the Blockly framework.
        </li>
        <li>
          Graphically writing a set of "actions" (with at most three SIMD registers involved in a set), where the code generation engine translates a set of "actions" into corresponding SIMD instructions.
        </li>
        <li>
          This process is quite complicated: it's a search problem, and due to the vast number of instructions and registers, there might be an issue of state explosion during the search. Grouping "actions" and limiting the number of registers in a set is a trade-off made to simplify the problem.
        </li>
        <li>
          Deep learning could potentially address this issue well, but it cannot guarantee the correctness of the generated code, necessitating the simplification of conditions and fine-tuning of the model.
        </li>
        <li>
          Ongoing explorations: How to solve this without employing machine learning? Is there a better algorithm to tackle this issue?
        </li>
      </ul>
    </div>
    <Notes>
      Creating SIMD instructions graphically in this design is based on the Blockly framework. It’s about graphically scribbling a group of "actions," with each group dabbling with up to three SIMD registers. These graphically drawn actions are then tossed into a code generation engine that turns them into matching SIMD instructions.<br><br>
      But, this process is a tough nut to crack, it resembles a search problem due to the extensive array of instructions and registers, which might lead to a state explosion during the search phase. To tone down this complexity, a trade-off’s been made by grouping up "actions" and putting a cap on the number of registers in a set, aiming to clear up the problem scene.<br><br>
      One way to lighten up this issue could be bringing deep learning into the mix. But, despite it can translate the graphically scribbling into the real SIMD code, deep learning falls short in guaranteeing the correctness of the generated code. This limitation needs the simplification of conditions and the fine-tuning of the model to ensure correctness, which can be a difficult process.<br><br>
      The discourse is still open, and ongoing explorations are being conducted to find alternative solutions. One avenue being considered is how to resolve this challenge without begging help from machine learning. Additionally, the search for a more efficient algorithm to address this issue is in progress, aiming to find a robust solution that ensures both the correctness and efficiency in generating SIMD instructions graphically.
    </Notes>
  </Page>
</Page>

<style>
  .register_container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
