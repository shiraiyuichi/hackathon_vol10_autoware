<template>
  <form @submit.prevent="addText">
  <div id="format" class="format"> 
    <div id="top" class="top">
      <!-- <h2 v-if="isActive">質問フォーム</h2>
      <h2 v-else>送信待ち...</h2> -->
      <textarea class="name" v-model="name" placeholder="名前"></textarea>
    </div>
    <div id="textform" class="textform">
      <textarea class="question" v-model="message" placeholder="質問内容" :disabled="isActive == false"></textarea>
    </div>
    <div id="button" class="button">
      <!-- 送信する際のボタン -->
      <input v-if="isActive"
      href="" class="btn-sender"
      type="button" value="Slackに送信" 
      :disabled="activateSubmit" 
      @click="addInputText"/>
      <!-- 送信取り消しのボタン -->
      <input v-else 
      href="" class="btn-canceller"
      type="button" value="解決" 
      :disabled="activateSubmit" 
      @click="addInputText"/>
    </div>
    <!-- 以下https://reffect.co.jp/vue/vue-js-circle-progress-barのパクリ -->
    <div style="transform:rotate(-90deg)" id="progressbar" class="progressbar">
      <svg v-if="noActive" height="100%" width="100%" viewBox="0 0 20 20" style="overflow: visible;">
      <circle cx="52.5%" cy="5px" fill="none" stroke-width="2" r="9" stroke="#E6ECF0" />
        <circle
        cx="52.5%"
        cy="5px"
        fill="none"
        stroke-width="2"
        r="9"
        stroke="#1DA1F2"
        stroke-linecap="round"
        :style="style"/>
      </svg>
    </div>
    <div id="timer" class="timer">
      <h3 v-if="noActive"> {{ formatTime }}</h3>
    </div>
  </div>
  </form>
</template>

<script>
import SteinStore from 'stein-js-client'

const store = new SteinStore("https://api.steinhq.com/v1/storages/6174c7eac582292380aec74a");

export default {
  name: 'Button',
  data() {
    return{
      isActive: true,
      noActive: false,
      ok: "ok",
      message: [],
      min: 15,
      sec: 0,
      progress: 0,
      style: "stroke-dashoffset: 56.5487; stroke-dasharray: 56.5487;",
    }
  },
  
  computed:{
    activateSubmit() {
      if (this.isActive==true){
        return this.message.length <= 0;
      }
      else{
        return false;
      }
    },
    formatTime: function() {
      let timeStrings = [
        this.min.toString(),
        this.sec.toString()
      ].map(function(str) {
        if (str.length < 2) {
          return "0" + str
        } else {
          return str
        }
      })
      return timeStrings[0] + ":" + timeStrings[1]
    }
  },

  methods:{
    // クリック時の処理
    addInputText() {
      if (this.isActive==true){
        let self = this;
        this.timerObj = setInterval(function() {self.count()}, 1000)
        this.timerOn = true; //timerがONであることを状態として保持
        
      }
      else if (this.isActive==false){
        clearInterval(this.timerObj);
        this.timerOn = false; //timerがOFFであることを状態として保持
      }
      this.reset()
    },
    // 時間をカウントする
    count: function() {
      if (this.sec <= 0 && this.min >= 1) {
        this.min --;
        this.sec = 59;
      } 
      else if(this.sec <= 0 && this.min <= 0) {
        this.complete();
      } 
      else {
        this.sec --;
      }
      // 以下プログレスバーを動かすためのもの
      this.progress = 56.5487*(this.min*60 + this.sec)/10 // 15ふんの設定
      this.style = "stroke-dashoffset: " + this.progress.toString() + "; stroke-dasharray: 56.5487;"
    },
    // データ送信などなど
    complete: function() {
      clearInterval(this.timerObj)
      let array = [];
      array.push({名前: this.name, 質問: this.message, 送信時間: this.time(), 送信確認: this.ok});
      store.append("シート1", array).then(res => {
        // done
        console.log(res);
      });
      this.$emit('input-text', this.name + " : " + this.message);
      this.reset()
    },
    reset: function () {
      this.min = 0;
      this.sec = 1;
      this.progress = 0;
      this.style = "stroke-dashoffset: 56.5487; stroke-dasharray: 56.5487;"
      if (this.isActive==false){
        this.message = '';
      }
      this.isActive = !this.isActive;
      this.noActive = !this.noActive;
    },
    time: function(){
      var date = new Date();
      this.sendtime = date.getHours()*3600 + date.getMinutes()*60;
      return this.sendtime
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 入力フォームのスタイル */
.format {
  width: 940px;
  margin: 0px 0px;
  display: grid;
  grid-template-columns: 470px 470px;
  grid-template-rows: 100px 350px 200px;
}
#top{
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
#textform{
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}
#button{
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
}
#progressbar{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
}
#timer{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
}

/* この子プロセスの題名のスタイル */
h2{
  font-family: ms;
  font-size: 40px;
  color: rgb(255, 255, 255);
  margin: 20px 350px;
}

.name{
  font-family: ms; 
  font-size: 40px; 
  color: rgb(0, 0, 0); 
  background: linear-gradient(rgb(255, 255, 255), rgb(150, 150, 255));
  height: 60px;
  width: 837px;
  margin: 30px 50px;
  resize: none;
}

/* 質問フォームのスタイル */
.question{
  font-family: ms; 
  font-size: 40px; 
  color: rgb(0, 0, 0); 
  background: linear-gradient(rgb(255, 255, 255), rgb(150, 150, 255));
  height: 300px;
  width: 837px;
  margin: 30px 50px;
  resize: none;
}

/* 送信の際に使用するボタンのスタイル */
input.btn-sender {
  font-family: ms;
  font-size: 40px;
  background: linear-gradient(rgb(255, 255, 255), rgb(150, 150, 255));
  margin: 55px -120px;
  height: 70px;
  width: 250px;
  border-top: 4px solid #48ecc4;
  border-right: 4px solid #0a5f4a;
  border-bottom: 4px solid #0f745b;
  border-left: 4px solid #8cf9de;
  border-radius: 10px;
  background: rgb(255, 150, 0);
  cursor: pointer;
  color: #fff;
}
input.btn-sender:hover {
  color: #fff;
  border-top: 4px solid #0f745b;
  border-right: 4px solid #8cf9de;
  border-bottom: 4px solid #48ecc4;
  border-left: 4px solid #0a5f4a;
}

/* 送信取り消しの際に使用 */
input.btn-canceller{
  font-family: ms;
  font-size: 40px;
  background: linear-gradient(rgb(255, 255, 255), rgb(150, 150, 255));
  margin: 55px 20px;
  height: 70px;
  width: 250px;
  border-top: 4px solid #48ecc4;
  border-right: 4px solid #0a5f4a;
  border-bottom: 4px solid #0f745b;
  border-left: 4px solid #8cf9de;
  border-radius: 10px;
  background: rgb(255, 150, 0);
  cursor: pointer;
  color: #fff;
}
input.btn-canceller:hover {
  color: #fff;
  border-top: 4px solid #0f745b;
  border-right: 4px solid #8cf9de;
  border-bottom: 4px solid #48ecc4;
  border-left: 4px solid #0a5f4a;
}

/* プログレスバーの位置調整 */
svg{
  margin: 150px 0px;
}

/* タイマーの位置調整 */
h3{
  font-size: 40px;
  margin: 60px 279.5px;
}
</style>
