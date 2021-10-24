<template>
  <div class="hello">
    <h1 :style="mcolor">{{ msg }}</h1>
    <textarea v-model="message" :placeholder="placeholder" 
    :style="qcolor" :rows="rows" :cols="cols">
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'Question',

  // props: templateで設定した子クラスの変数を親クラスから受け取る
  props: {
    msg: { type: String, required: false},
    placeholder: { type: String, required: false},
    mcolor: { type: String, required: false},
    qcolor: { type: String, required: false},
    rows: { type: Number, required: false},
    cols: { type: Number, required: false},
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
