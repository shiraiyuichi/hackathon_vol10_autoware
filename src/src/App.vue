<template>
  <!-- https://deshinon.com/2019/03/06/koseiteki-haikei-css/ 背景はこのサイト○パクリ -->
  <div id="icon">
    <svg viewBox="-3000 0 10000 1270">
    <path id="planePath" class="planePath" d="M-0 626c439,4 636,-213 934,-225 755,-31 602,769 1334,658 562,-86 668,-698 266,-908 -401,-210 -893,189 -632,630 260,441 747,121 1051,91 360,-36 889,179 889,179" />
    <g id="plane">
      <polygon class="fil1" points="-141,-10 199,0 -198,-72 -188,-61 -171,-57 -184,-57 " />
      <polygon class="fil2" points="199,0 -141,-10 -163,63 -123,9 " />
      <polygon class="fil3" points="-95,39 -113,32 -123,9 -163,63 -105,53 -108,45 -87,48 -90,45 -103,41 -94,41 " />
      <path class="fil4" d="M-87 48l-21 -3 3 8 19 -4 -1 -1zm-26 -16l18 7 -2 -1 32 -7 -29 1 11 -4 -24 -1 -16 -18 10 23zm10 9l13 4 -4 -4 -9 0z" />
      <polygon class="fil1" points="-83,28 -94,32 -65,31 -97,38 -86,49 -67,70 199,0 -123,9 -107,27 " />
    </g>
    <!-- Define the motion path animation -->
    <animateMotion xlink:href="#plane" dur="5s" repeatCount="indefinite" rotate="auto">
      <mpath xlink:href="#planePath" />
    </animateMotion>
    </svg>
  </div>
  <div id="projectname">
    <h1>Slackボット</h1>
  </div>
  <br>
  <br>
  <div id="wrapform" class="wrapform">
    <div id="boxA" class="boxA">
      <Form @input-text="addText"></Form>
    </div>
    <div id="boxB" class="boxB">
      <Ans :fuga="textList"></Ans>
    </div>
  </div>
  <br>
  <div id="wrap1" class="wrap1">
    <div id="boxC" class="boxC">
      <Question></Question>
    </div>
    <div id="boxD" class="boxD">
    </div>
  </div>
</template>

<script>
import Form from './components/form.vue'
import Ans from './components/ans.vue'
// import Question from './components/question.vue'

export default {
  name: 'App',
  components: {
    Form, Ans,
    // Form, Question, Ans,
  },
  data() {
    return {
      title: 'ボタンを押してテキストを一覧に追加',
      textList: [],
    }
  },
  methods: {
    addText(value) {
      const newText = value;
      this.textList.unshift(newText);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap');

/* 以下紙飛行機の設定 */
html {
  background-color: #28505D;
}

.planePath {
  stroke: #D9DADA;
  stroke-width: .1%;
  stroke-width: .5%;
  stroke-dasharray: 1% 2%;
  stroke-linecap: round;
  fill: none;
}

.fil1 {
  fill: #D9DADA;
}

.fil2 {
  fill: #C5C6C6;
}

.fil4 {
  fill: #9D9E9E;
}

.fil3 {
  fill: #AEAFB0;
}

/* 題名のスタイル */
#projectname{
  border-radius: 999px;
  box-shadow: 0 3px 10px #FFFFFF;
  margin: 0px 200px;
  background: linear-gradient(rgb(0, 255, 255), rgb(0, 150, 150));
  height: 70px
}
h1{
  font-family: 'Kosugi Maru', sans-serif;
  color: rgb(255, 255, 255);
  font-size: 50px;
  text-align: center;
  height: 70px;
  padding: 10px 0px;
}

/* 入力フォームのスタイル */
.wrapform {
  background: linear-gradient(rgb(0, 0, 200), rgb(0, 255, 255));
  width: 1920px;
  margin: 0px 50px;
  display: grid;
  grid-template-columns: 940px 40px 940px;
  grid-template-rows: 650px;
}
#boxA{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}
#boxB{
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
}
</style>
