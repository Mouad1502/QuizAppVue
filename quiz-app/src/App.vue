<template>
  <div class="app bg-white w-11/12 max-w-2xl mt-24 mx-auto mb-0 rounded-lg p-7">
    <h1 class="text-2xl text-blueTheme font-semibold border-b border-solid border-gray-700 pb-7">Simple Quiz</h1>
    <div class="quiz py-5 px-0">
        <h2 id="question" class="text-lg text-blueTheme font-bold">{{ (index+1) + '. ' + questions[index].question }}</h2>
        <div id="buttons" v-for="(answer,answerIndex) in questions[index].answers" :key="answerIndex">
          <button id="answer-button" class="bg-white text-base text-gray-800 font-medium w-full border border-solid border-gray-800 p-2.5 my-2.5 mx-0 text-left rounded-md cursor-pointer transition-all duration-30" @click="answerSelected(answerIndex)" :class="[
            isCorrect[answerIndex] === null ? 'bg-white hover:bg-gray-200' : '',
            isCorrect[answerIndex] === true ? 'bg-correct' : '',
            isCorrect[answerIndex] === false ? 'bg-incorrect' : '',
          ]" :disabled="answerDisabled">{{ answer.text }}</button>
          
        </div>
        <button id="next-btn" class="bg-blueTheme text-white font-medium w-36 border-none p-2.5 mt-5 mx-auto mb-0 rounded-sm cursor-pointer block" v-if="answerDisabled" @click="nextQuestion">Next</button>
    </div>
  </div>  
</template>

<script setup>
import { ref } from 'vue';
const index = ref(0);
const isCorrect = ref(Array(4).fill(null));
const answerDisabled = ref(false);
const questions = [
    {
       question: "What is the largest animal in the world?",
       answers:[
        { text: "Shark", correct: false},
        { text: "Blue whale", correct: true},
        { text: "Elephant", correct: false},
        { text: "Giraffe", correct: false},
        ] 
    },
    {
        question: "Which gas do plants absorb from the atmosphere and use for photosynthesis?",
        answers: [
        { text: "Oxygen", correct: false },
        { text: "Carbon dioxide", correct: true },
        { text: "Nitrogen", correct: false },
        { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "What is the capital city of Japan?",
        answers: [
        { text: "Beijing", correct: false },
        { text: "Seoul", correct: false },
        { text: "Tokyo", correct: true },
        { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
        { text: "William Shakespeare", correct: true },
        { text: "Charles Dickens", correct: false },
        { text: "Jane Austen", correct: false },
        { text: "F. Scott Fitzgerald", correct: false }
        ]
    }
];
const answerSelected = (answerIndex) => {
  // If answer has already been selected, do nothing
  if (answerDisabled.value) {
    return;
  }
  
  // Reset correctness status for all answers
  isCorrect.value.fill(null);

  // Set the correctness status for the selected answer
  isCorrect.value[answerIndex] = questions[index.value].answers[answerIndex].correct;
  answerDisabled.value = true; // Disable further clicking
};
const nextQuestion = () => {
    index.value++;
    isCorrect.value.fill(null);
    answerDisabled.value = false;
};
</script>