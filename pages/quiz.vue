<template>
  <div>
    <!--container-->
    <section class="container-fluid">
      <!--questionBox-->
      <div class="questionBox" id="app">
        <!-- transition -->
        <transition
          :duration="{ enter: 500, leave: 300 }"
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut"
          mode="out-in"
        >
          <!--qusetionContainer-->
          <div
            class="questionContainer"
            v-if="questionIndex < quiz.questions.length"
            v-bind:key="questionIndex"
          >
            <header>
              <h1 class="title is-6">VueQuiz</h1>
              <!--progress-->
              <div class="progressContainer">
                <progress
                  class="progress is-info is-small"
                  :value="(questionIndex / quiz.questions.length) * 100"
                  max="100"
                >
                  {{ (questionIndex / quiz.questions.length) * 100 }}%
                </progress>
                <p>
                  {{ (questionIndex / quiz.questions.length) * 100 }}% complete
                </p>
              </div>
              <!--/progress-->
            </header>

            <!-- questionTitle -->
            <h2 class="titleContainer title">
              {{ quiz.questions[questionIndex].text }}
            </h2>

            <!-- quizOptions -->
            <div class="optionContainer">
              <div
                class="option"
                v-for="(response, index) in quiz.questions[questionIndex]
                  .responses"
                @click="selectOption(index)"
                :class="{
                  'is-selected': userResponses[questionIndex] == index,
                }"
                :key="index"
              >
                {{ index | charIndex }}. {{ response.text }}
              </div>
            </div>

            <!--quizFooter: navigation and progress-->
            <footer class="questionFooter">
              <!--pagination-->
              <nav class="pagination" role="navigation" aria-label="pagination">
                <!-- back button -->
                <a
                  class="button"
                  v-on:click="prev()"
                  :disabled="questionIndex < 1"
                >
                  Back
                </a>

                <!-- next button -->
                <a
                  class="button"
                  :class="
                    userResponses[questionIndex] == null ? '' : 'is-active'
                  "
                  v-on:click="next()"
                  :disabled="questionIndex >= quiz.questions.length"
                >
                  {{ userResponses[questionIndex] == null ? "Skip" : "Next" }}
                </a>
              </nav>
              <!--/pagination-->
            </footer>
            <!--/quizFooter-->
          </div>
          <!--/questionContainer-->

          <!--quizCompletedResult-->
          <div
            v-if="questionIndex >= quiz.questions.length"
            v-bind:key="questionIndex"
            class="quizCompleted has-text-centered"
          >
            <!-- quizCompletedIcon: Achievement Icon -->
            <span class="icon">
              <i
                class="fa"
                :class="
                  score() > 3
                    ? 'fa-check-circle-o is-active'
                    : 'fa-times-circle'
                "
              ></i>
            </span>

            <!--resultTitleBlock-->
            <h2 class="title">
              You did
              {{
                score() > 7 ? "an amazing" : score() < 4 ? "a poor" : "a good"
              }}
              job!
            </h2>
            <p class="subtitle">
              Total score: {{ score() }} / {{ quiz.questions.length }}
            </p>
            <br />
            <a class="button" @click="restart()"
              >restart <i class="fa fa-refresh"></i
            ></a>
            <!--/resultTitleBlock-->
          </div>
          <!--/quizCompetedResult-->
        </transition>
      </div>
      <!--/questionBox-->
    </section>
    <!--/container-->
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      dataLength: 0,
      quiz: {
        user: "Dave",
        questions: [
          {
            text: "What is the full form of HTTP?",
            responses: [
              { text: "Hyper text transfer package" },
              { text: "Hyper text transfer protocol", correct: true },
              { text: "Hyphenation text test program" },
              { text: "None of the above" },
            ],
          },
          {
            text: "HTML document start and end with which tag pairs?",
            responses: [
              { text: "HTML", correct: true },
              { text: "WEB" },
              { text: "HEAD" },
              { text: "BODY" },
            ],
          },
          {
            text: "Which tag is used to create body text in HTML?",
            responses: [
              { text: "HEAD" },
              { text: "BODY", correct: true },
              { text: "TITLE" },
              { text: "TEXT" },
            ],
          },
          {
            text: "Outlook Express is _________",
            responses: [
              { text: "E-Mail Client", correct: true },
              { text: "Browser" },
              {
                text: "Search Engine",
              },
              { text: "None of the above" },
            ],
          },
          {
            text: "What is a search engine?",
            responses: [
              { text: "A hardware component " },
              {
                text: "A machinery engine that search data",
              },
              { text: "A web site that searches anything", correct: true },
              { text: "A program that searches engines" },
            ],
          },
          {
            text: "What does the .com domain represents?",
            responses: [
              { text: "Network" },
              { text: "Education" },
              { text: "Commercial", correct: true },
              { text: "None of the above" },
            ],
          },
          {
            text: "In Satellite based communication, VSAT stands for? ",
            responses: [
              { text: " Very Small Aperture Terminal", correct: true },
              { text: "Varying Size Aperture Terminal " },
              {
                text: "Very Small Analog Terminal",
              },
              { text: "None of the above" },
            ],
          },
          {
            text: "What is the full form of TCP/IP? ",
            responses: [
              { text: "Telephone call protocol / international protocol" },
              {
                text: "Transmission control protocol / internet protocol",
                correct: true,
              },
              { text: "Transport control protocol / internet protocol " },
              { text: "None of the above" },
            ],
          },
          {
            text: "What is the full form of HTML?",
            responses: [
              {
                text: "Hyper text marking language",
              },
              { text: "Hyphenation text markup language " },
              { text: "Hyper text markup language", correct: true },
              { text: "Hyphenation test marking language" },
            ],
          },
          {
            text: '"Yahoo", "Infoseek" and "Lycos" are _________?',
            responses: [
              { text: "Browsers " },
              { text: "Search Engines", correct: true },
              { text: "News Group" },
              { text: "None of the above" },
            ],
          },
        ],
      },
      questionIndex: 0,
      userResponses: Array(this.dataLength).fill(null),
      isActive: false,
    };
  },
  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    },
  },
  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length) this.questionIndex++;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.quiz.questions[i].responses[this.userResponses[i]] !==
            "undefined" &&
          this.quiz.questions[i].responses[this.userResponses[i]].correct
        ) {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    },
  },
  created() {
    this.dataLength = this.quiz.questions.length;
  },
};
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable.scss';
$trans_duration: 0.3s;

.button {
  transition: $trans_duration;
}
.title,
.subtitle {
  font-family: Montserrat, sans-serif;
  font-weight: normal;
}
.animated {
  transition-duration: $trans_duration/2;
}

.container {
  margin: 0 0.5rem;
}

.questionBox {
  width: 100%;
  min-height: 30rem;

  background: #fafafa;
  position: relative;
  display: flex;

  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  header {
    background: rgba(0, 0, 0, 0.025);
    padding: 1.5rem;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    h1 {
      font-weight: bold;
      margin-bottom: 1rem !important;
    }
    .progressContainer {
      width: 60%;
      margin: 0 auto;
      > progress {
        margin: 0;
        border-radius: 5rem;
        overflow: hidden;
        border: none;
        width: 100%;

        color: $mainColor;
        &::-moz-progress-bar {
          background: $mainColor;
        }
        &::-webkit-progress-value {
          background: $mainColor;
        }
      }
      > p {
        margin: 0;
        margin-top: 0.5rem;
      }
    }
  }
  .titleContainer {
    text-align: center;
    margin: 0 auto;
    padding: 1.5rem;
  }

  .quizForm {
    display: block;
    white-space: normal;

    height: 100%;
    width: 100%;

    .quizFormContainer {
      height: 100%;
      margin: 15px 18px;

      .field-label {
        text-align: left;
        margin-bottom: 0.5rem;
      }
    }
  }
  .quizCompleted {
    width: 100%;
    padding: 1rem;
    text-align: center;

    > .icon {
      color: #ff5252;
      font-size: 5rem;

      .is-active {
        color: #00e676;
      }
    }
  }
  .questionContainer {
    white-space: normal;

    height: 100%;
    width: 100%;

    .optionContainer {
      margin-top: 12px;
      flex-grow: 1;
      .option {
        border-radius: 290486px;
        padding: 9px 18px;
        margin: 0 18px;
        margin-bottom: 12px;
        transition: $trans_duration;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.05);
        color: rgba(0, 0, 0, 0.85);
        border: transparent 1px solid;

        &.is-selected {
          border-color: rgba(black, 0.25);
          background-color: $mainColor;
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
        &:active {
          transform: scaleX(0.9);
        }
      }
    }

    .questionFooter {
      background: rgba(0, 0, 0, 0.025);
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      width: 100%;
      align-self: flex-end;

      .pagination {
        //padding: 10px 15px;
        margin: 15px 25px;
      }
    }
  }
}
.pagination {
  display: flex;
  justify-content: space-between;
}
.button {
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5rem;
  margin: 0 0.25rem;

  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: #eceff1;
    border-color: rgba(0, 0, 0, 0.25);
  }
  &.is-active {
    background: $mainColor;
    color: white;
    border-color: transparent;

    &:hover {
      background: darken($mainColor, 10%);
    }
  }
}

@media screen and (min-width: 769px) {
  .questionBox {
    align-items: center;
    justify-content: center;

    .questionContainer {
      display: flex;
      flex-direction: column;
    }
  }
}

@media screen and (max-width: 768px) {
  .sidebar {
    height: auto !important;
    border-radius: 6px 6px 0px 0px;
  }
}
</style>