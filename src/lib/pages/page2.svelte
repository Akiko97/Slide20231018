<script lang="ts">
  import Page from '$lib/deck/page.svelte'
  import Code from '$lib/deck/code.svelte'
  import Markdown from '$lib/deck/markdown.svelte'
  import Notes from '$lib/deck/notes.svelte'
</script>

<Page animate restart>
  <Page animate>
    <div data-id="t1" class="text-5xl">
      Research Motivation
    </div>
    <Notes>
      First of all, I would like to introduce my research motivation.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t1" class="text-4xl mb-12 text-green-500">
      Advantages of SIMD
    </div>
    <div class="text-3xl">
      <ul>
        <li>
          Computational parallelism: SIMD allows a form of computational parallelism where a single instruction is applied to multiple data elements, optimizing processing efficiency, especially in modern computing environments<sup class="text-2xl">[1]</sup>.
        </li>
        <li>
          Operational efficiency: The architecture achieves operational efficiency by allowing the same operation to be performed on multiple elements using only one instruction. This characteristic significantly increases the processing speed compared to the single instruction single data (SISD) architecture<sup class="text-2xl">[2]</sup>.
        </li>
        <li>
          Enhanced throughput: By increasing the number of processor cores, the system throughput can be significantly enhanced<sup class="text-2xl">[2]</sup>.
        </li>
      </ul>
    </div>
    <Notes>
      It is well known that utilizing SIMD has many advantages, such as improving operational efficiency and enhancing system throughput, among others. I have introduced this in my previous presentations and provided ample data to support this viewpoint.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t1" class="text-4xl mb-12 text-red-500">
      Disadvantages of SIMD
    </div>
    <div class="text-3xl">
      <ul>
        <li>
          Vectorization limitations: Not all algorithms can be vectorized for SIMD, which can be a limitation for some tasks. For example, control-flow-intensive tasks (such as code parsing) may not benefit from a SIMD architecture<sup class="text-2xl">[3]</sup>.
        </li>
        <li>
          Large register files: The SIMD architecture uses large register files, which can lead to increased power consumption and chip area<sup class="text-2xl">[3]</sup>.
        </li>
        <li>
          <div data-id="t2" class="text-red-300">
            Programming complexity: SIMD programming is typically more complex than traditional sequential programming. Programmers need to have some knowledge of parallel programming and consider how to maximize data parallelism<sup class="text-2xl">[4][5]</sup>.
          </div>
        </li>
        <li>
          Other: Reduced portability, increased hardware costs, excessive dependency on data parallelism (if the task or data itself does not have parallelism, SIMD technology may not provide much help and may even degrade performance).
        </li>
      </ul>
    </div>
    <Notes>
      However, SIMD also has many downsides. For instance, its over-reliance on vectorization results in some algorithms being unoptimizable, utilizing SIMD also increases hardware costs, and SIMD can reduce the portability of programs. Of course, these disadvantages are not what I want to discuss today. Among the many downsides, there's one that deals a fatal blow to writing programs using SIMD: it significantly increases programming complexity!
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t2" class="text-4xl mb-12 text-blue-500">
      Challenges of SIMD Programming
    </div>
    <div class="text-3xl">
      <ul>
        <li>
          Data parallelism: SIMD instructions allow programmers to execute the same operation on multiple data elements in one operation, which is particularly useful when processing vector and matrix calculations. However, this also means that programmers need to think about problems in a vector rather than a scalar way, which might require some transformation and extra thought.
        </li>
        <li>
          Correspondence between registers and data: In standard scalar programming, the correspondence between registers and individual data values is relatively intuitive and simple. But in SIMD programming, a register may contain multiple data values, making the correspondence between registers and data less intuitive. Programmers need to pay more attention to how to organize data into SIMD registers and apply SIMD instructions correctly.
        </li>
      </ul>
    </div>
    <Notes>
      So, there are some challenges of writing SIMD Programs. <br><br>
      SIMD instructions allow programmers to execute the same operation on multiple data elements in one operation, which is particularly useful when processing vector and matrix calculations. However, this also means that programmers need to think about problems in a vector rather than a scalar way, which might require some transformation and extra thought. <br><br>
      In standard scalar programming, the correspondence between registers and individual data values is relatively intuitive and simple. But in SIMD programming, a register may contain multiple data values, making the correspondence between registers and data less intuitive. Programmers need to pay more attention to how to organize data into SIMD registers and apply SIMD instructions correctly.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t2" class="text-4xl mb-12 text-blue-500">
      Challenges of SIMD Programming
    </div>
    <div class="text-3xl">
      <ul>
        <li>
          Debugging and maintenance: SIMD programming can make the debugging and maintenance of code more complex. For example, tracking and interpreting the content of SIMD registers may be more difficult than tracking the content of scalar registers. In addition, due to the specificity of the SIMD instruction set, more experience and knowledge may be needed to write and maintain SIMD code.
        </li>
        <li>
          Learning curve: SIMD programming requires a certain learning curve, especially for programmers who are used to scalar programming. Understanding and mastering the SIMD instruction set and related programming models may require additional time and effort.
        </li>
      </ul>
    </div>
    <Notes>
      Utilizing SIMD also presents some challenges in debugging. SIMD programming can make the debugging and maintenance of code more complex. For example, tracking and interpreting the content of SIMD registers may be more difficult than tracking the content of scalar registers. In addition, due to the specificity of the SIMD instruction set, more experience and knowledge may be needed to write and maintain SIMD code. <br><br>
      And, SIMD programming requires a certain learning curve, especially for programmers who are used to scalar programming. Understanding and mastering the SIMD instruction set and related programming models may require additional time and effort.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t2" class="text-4xl mb-12 text-blue-500">
      Challenges of SIMD Programming
    </div>
    <div class="text-3xl">
      In conclusion: when writing assembly language, computer instructions are all operated with registers as the main body, which is no problem in ordinary programming, because each single register saves a single value that the programmer needs to care about, and the programmer can simply establish a corresponding relationship between the register and the value they need to care about. However, SIMD registers save multiple values that need to be cared about, but SIMD instructions still operate on SIMD registers as the main body, which makes it impossible for programmers to intuitively establish a connection between each register and the actual values they need to care about.
    </div>
    <Notes>
      In conclusion: when writing assembly language, computer instructions are all operated with registers as the main body, which is no problem in ordinary programming, because each single register saves a single value that the programmer needs to care about, and the programmer can simply establish a corresponding relationship between the register and the value they need to care about. However, SIMD registers save multiple values that need to be cared about, but SIMD instructions still operate on SIMD registers as the main body, which makes it impossible for programmers to intuitively establish a connection between each register and the actual values they need to care about.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t2" class="text-4xl mb-12">
      How to Solve the Difficulties of SIMD Programming
    </div>
    <div class="text-3xl">
      Facing the difficulties of SIMD programming, there are already some solutions and tools to help programmers do SIMD programming more efficiently:
      <ul>
        <li>
          <div data-id="t3">
            Development frameworks and language extensions:
          </div>
          <ul>
            <li>
              C-for-Metal (CM) development framework: This is an explicit SIMD programming model designed specifically for Intel GPUs. It is an extension of C/C++, providing an intuitive interface to express explicit data parallelism at a high level. The CM language allows programmers to do fine-grained register management and control SIMD size and cross-channel data sharing through special vector and matrix types, making SIMD programming more intuitive<sup class="text-2xl">[7]</sup>.
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <Notes>
      Thus, addressing the difficulties brought about by SIMD programming has become a discussable issue. Facing the difficulties of SIMD programming, there are already some solutions and tools to help programmers do SIMD programming more efficiently:<br><br>
      There are many development frameworks and language extensions currently available that aim to alleviate the difficulties of SIMD programming. Here, I have listed three projects: C-for-Metal, Intel® ISPC, and SIMD-X. Both C-for-Metal and SIMD-X offer designs that allow programmers to more easily exploit explicit vectorization when writing GPU programs.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t2" class="text-4xl mb-12">
      How to Solve the Difficulties of SIMD Programming
    </div>
    <div class="text-3xl">
      <ul>
        <li>
          <div data-id="t3">
            Development frameworks and language extensions:
          </div>
          <ul>
            <li>
              SIMD-X: This is a framework designed for GPU programming and processing graphics algorithms. It provides programming convenience to programmers and creates possibilities for system-level optimizations by using the new Active-Compute-Combine (ACC) model<sup class="text-2xl">[9]</sup>.
            </li>
            <li>
              Intel® ISPC: This is a C-like language that employs an SPMD (Single Program, Multiple Data) execution model, enabling parallel execution of multiple program instances. ISPC abstracts the width of SIMD registers, allowing programmers to write the program for just one instance, while the compiler handles parallelization across SIMD units.<sup class="text-2xl">[8]</sup>.
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <Notes>
      On the other hand, Intel® ISPC simplifies program design by implicitly invoking SIMD through SPMD (Single Program, Multiple Data).<br><br>
      For the usage and implementation details of these frameworks, one can obtain the information by consulting the references I have listed.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t2" class="text-4xl mb-12">
      How to Solve the Difficulties of SIMD Programming
    </div>
    <div class="text-3xl">
      <ul>
        <li>
          Implicit vectorization: <br>
          Auto-vectorizing compilers aim to simplify the writing of code for multiple instruction sets, but usually at the expense of performance. Nevertheless, they can reduce the complexity of targeting multiple ISAs. However, for many SIMD developers, direct use of SIMD instructions remains the most effective way to achieve SIMD performance: By relying on compiler intrinsic functions or directly writing assembly code, programmers can control the SIMD instructions generated and their level of use (explicit vectorization). This method may require a deep understanding of SIMD and underlying hardware, but it can achieve very high performance (although it still relies on compilers for crucial aspects of tuning, such as register renaming and instruction scheduling)<sup class="text-2xl">[8][10][11]</sup>.
        </li>
      </ul>
    </div>
    <Notes>
      Implicit vectorization allows for the automatic application of SIMD in programs by having the compiler automatically implement vectorization. Clearly, this approach is extremely programmer-friendly, as the compiler can help achieve vectorization without any extra effort. However, a significant drawback of this method is that it doesn't enhance performance as much as explicit vectorization does. In other words, it sacrifices some level of performance to gain ease of use.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t2" class="text-4xl mb-12">
      How to Solve the Difficulties of SIMD Programming
    </div>
    <div class="text-3xl">
      <ul>
        <li>
          <div data-id="t3">
            Visualization:
          </div>
          Visualization can help solve the difficulty of SIMD programming because it provides an intuitive way to understand and analyze the use of SIMD instructions and registers, as well as the behavior of parallel data operations.
        </li>
      </ul>
    </div>
    <Notes>
      Lastly, I would like to mention visualization. Visualization can help solve the difficulty of SIMD programming because it provides an intuitive way to understand and analyze the use of SIMD instructions and registers, as well as the behavior of parallel data operations.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t2" class="text-4xl mb-12">
      How to Solve the Difficulties of SIMD Programming
    </div>
    <div class="text-3xl">
      <ul>
        <li>
          <div data-id="t3">
            Visualization:
          </div>
          <ul>
            <li>
              Provides intuitive understanding: Visualization tools can help programmers intuitively understand the operation of SIMD instructions and registers, and how data is moving and transforming within the processor. This intuitive understanding can help programmers better grasp the basic concepts and skills of SIMD programming.
            </li>
            <li>
              Automatic code generation and optimization: Programmers can automatically generate and test different SIMD instruction sequences with the help of visualization tools.
            </li>
            <li>
              Reduces Learning Curve: For programmers new to SIMD programming, visualization tools can reduce the learning curve, provide a more friendly and intuitive learning environment, and thereby reduce the difficulty of SIMD programming.
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <Notes>
      Utilizing visualization tools can provide significant assistance to programmers. For example, it can help programmers intuitively understand the operation of SIMD instructions and registers, and how data is moving and transforming within the processor. This intuitive understanding can help programmers better grasp the basic concepts and skills of SIMD programming.<br><br>
      Also, Programmers can automatically generate and test different SIMD instruction sequences with the help of visualization tools.<br><br>
      On the level of programming learning, visualization tools can reduce the learning curve, provide a more friendly and intuitive learning environment, and thereby reduce the difficulty of SIMD programming.
    </Notes>
  </Page>

  <Page animate>
    <div data-id="t2" class="text-4xl mb-12">
      Research Motivation
    </div>
    <div class="text-3xl">
      To address the challenges of SIMD programming mentioned above, I decided to create a visualization tool and graphical instruction generation tool for SIMD instructions. The tool provides intuitive understanding of SIMD instructions, and is able to automatically generate code as needed. The tool is designed to help reduce the learning curve of the SIMD instruction set, help programmers quickly get started with "vectorization" thinking, and improve efficiency when dealing with errors in SIMD programs.
    </div>
    <Notes>
      To address the challenges of SIMD programming mentioned above, I decided to create a visualization tool and graphical instruction generation tool for SIMD instructions. The tool provides intuitive understanding of SIMD instructions, and is able to automatically generate code as needed. The tool is designed to help reduce the learning curve of the SIMD instruction set, help programmers quickly get started with "vectorization" thinking, and improve efficiency when dealing with errors in SIMD programs.
    </Notes>
  </Page>
</Page>
