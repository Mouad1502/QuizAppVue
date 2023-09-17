<template>
  <div class="app bg-white w-11/12 max-w-2xl mt-24 mx-auto mb-0 rounded-lg p-7">
    <h1 class="text-2xl text-blueTheme font-semibold border-b border-solid border-gray-700 pb-7">Simple Quiz</h1>
    <div class="quiz py-5 px-0">
        <h2 id="question" class="text-lg text-blueTheme font-bold">Question goes here</h2>
        <div id="answer-buttons">
          <button id="next-btn" class="bg-white text-base text-gray-800 font-medium w-full border border-solid border-gray-800 p-2.5 my-2.5 mx-0 text-left rounded-md cursor-pointer transition-all duration-300 hover:text-white hover:bg-gray-800">Answer 1</button>
          <button id="next-btn" class="bg-white text-base text-gray-800 font-medium w-full border border-solid border-gray-800 p-2.5 my-2.5 mx-0 text-left rounded-md cursor-pointer transition-all duration-300 hover:text-white hover:bg-gray-800">Answer 2</button>
          <button id="next-btn" class="bg-white text-base text-gray-800 font-medium w-full border border-solid border-gray-800 p-2.5 my-2.5 mx-0 text-left rounded-md cursor-pointer transition-all duration-300 hover:text-white hover:bg-gray-800">Answer 3</button>
          <button id="next-btn" class="bg-white text-base text-gray-800 font-medium w-full border border-solid border-gray-800 p-2.5 my-2.5 mx-0 text-left rounded-md cursor-pointer transition-all duration-300 hover:text-white hover:bg-gray-800">Answer 4</button>
        </div>
        <button id="next-btn" class="bg-blueTheme text-white font-medium w-36 border-none p-2.5 mt-5 mx-auto mb-0 rounded-sm cursor-pointer block">Next</button>
    </div>
  </div>  
</template>

<script setup>

</script>