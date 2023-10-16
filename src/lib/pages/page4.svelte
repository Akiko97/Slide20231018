<script lang="ts">
  import Page from '$lib/deck/page.svelte'
  import Code from '$lib/deck/code.svelte'
  import Markdown from '$lib/deck/markdown.svelte'
  import Notes from '$lib/deck/notes.svelte'
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
      The core objectives and trade-offs outlined in this design are aimed at enhancing the interaction with SIMD code. Firstly, the design seeks to employ a visualization approach to observe and verify SIMD code, making it easier to understand and debug. Secondly, it introduces a graphical programming environment to generate SIMD code snippets, promoting a more intuitive coding experience. The overarching design is heavily rooted in the data flow of the program, intentionally de-emphasizing the control flow to simplify the focus; particularly, control flow SIMD instructions capable of flag alterations are deprioritized and not initially implemented. Lastly, the focus narrows down on visualizing AVX register data within the CPU context, while opting to overlook memory and other CPU contexts, to maintain a clear concentration on SIMD code interaction and visualization.
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
      The abstraction highlighted here seeks to simplify the representation and interaction with SIMD (Single Instruction, Multiple Data) instructions, breaking them down into two primary behaviors: assignment and movement. Assignment operations are designated for assigning values to specific positions in a SIMD register, whether they be immediate values or computed results. On the other hand, movement encompasses the act of copying data from one position in a SIMD register to another, either within the same register or to a different one.<br><br>
      To make visual representation more expressive, three types of visual abstractions have been designed: assignment, movement, and swapping. Interestingly, the swapping operation is a distilled representation of two movement operations - moving data from position A to B and vice versa. This distillation into a "swap" operation aims to provide a clear visual expression.<br><br>
      The essence of abstraction in this context is to bridge the gap between instruction-level representation and visual expression. It's a crucial step as it sets the foundation for visual and graphical programming, making the control of data flow more intuitive. SIMD and assembly languages pose a challenge for visual expression and graphical programming due to their inherent complexities. However, by introducing these new abstractions, a fresh and more comprehensible perspective on vector programming at the data flow level is achieved, making visual expression more attainable and straightforward.
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
          <div></div>
        </li>
        <li>
          <div>
            Visualization of SIMD Instructions (Animation - Dynamic)
          </div>
          <div></div>
        </li>
        <li>
          Development Approach: Map each SIMD instruction to a set of behavioral abstractions, then use the visualization engine to execute the visual representation of this set of abstractions.
        </li>
      </ul>
    </div>
    <Notes>
      The visualization of SIMD (Single Instruction, Multiple Data) instructions is broken down into a two-tier approach: static and dynamic visualization. Initially, the static aspect involves visualizing registers graphically, providing a clear and immediate visual representation of the data they hold. This sets the groundwork for the dynamic aspect, which brings SIMD instructions to life through animation, offering a real-time visual understanding of how data is manipulated and moved within and across registers. <br><br>
      The development approach to achieve this visualization is methodical. Each SIMD instruction is mapped to a predefined set of behavioral abstractions. Once this mapping is complete, a visualization engine is employed to execute and visually represent these abstractions. This way, each SIMD instruction is translated into a visual narrative, making the process of understanding SIMD instructions more intuitive and engaging. This approach not only aids in better comprehension but also in the graphical programming of SIMD instructions, ultimately bridging the gap between complex instruction sets and visual, interactive representation.
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
      The graphical generation of SIMD instructions in this design is rooted in the Blockly framework. The process involves graphically scripting a set of "actions," with each set engaging at most three SIMD registers. These graphically represented actions are then fed into a code generation engine that translates them into corresponding SIMD instructions. <br><br>
      However, this process is quite complicated and resembles a search problem due to the extensive array of instructions and registers, which might lead to a state explosion during the search phase. To mitigate this complexity, a trade-off has been made by grouping "actions" and capping the number of registers involved in a set, aiming to simplify the problem landscape. <br><br>
      One potential solution to ease this issue could be employing deep learning. However, despite its potential, deep learning falls short in guaranteeing the correctness of the generated code. This limitation necessitates the simplification of conditions and the fine-tuning of the model to ensure accuracy, which can be a cumbersome process. <br><br>
      The discourse is still open, and ongoing explorations are being conducted to find alternative solutions. One avenue being considered is how to resolve this challenge without resorting to machine learning. Additionally, the search for a more efficient algorithm to address this issue is in progress, aiming to find a robust solution that ensures both the correctness and efficiency in generating SIMD instructions graphically.
    </Notes>
  </Page>
</Page>
