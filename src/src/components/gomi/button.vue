<template>
  <div class="button">
    <textarea v-model="msg"></textarea>
    <button
      @click="ques_txt" 
      :style="style"
      :rows="rows" :cols="cols"
      @mouseover="mouseover"
      @mouseleave="mouseleave"
      :disabled="isButtonDisabled">
      {{message}}
    </button>
    <p><input type="submit" value="保存" :disabled="activateSubmit"></p>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return{
      message: "Slackに送信",
      msg: []
    }
  },
  // props: templateで設定した子クラスの変数を親クラスから受け取る
  props: {
    style: { type: String, required: false},
    rows: { type: Number, required: false},
    cols: { type: Number, required: false},
  },

  computed:{
    activateSubmit() {
      return this.msg.length <= 0;
    }
  },

  methods: {
    mouseover: function () {
      
    },
    mouseleave: function () {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
