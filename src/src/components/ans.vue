<template>
  <div>
    <h2>送信済み</h2>
    <!-- <input
      href="" class="btn-sender"
      type="button" value="更新" 
      @click="put"/> -->
  </div>
  <div id="send" class="send">
    <ul>
      <h3 v-for="item in list" :key="item">{{ item }}</h3>
    </ul>
  </div>
</template>

<script>
// import SteinStore from 'stein-js-client'

// const store = new SteinStore("https://api.steinhq.com/v1/storages/6174c7eac582292380aec74a");

export default {
  name: 'Ans',
  props: ['fuga'],
  data() {
    return {
      list: this.fuga,
    }
  },
  // methods:{
  //   put () {
  //       let array = []
  //       store.read("シート1", { limit: 100, offset: 0 }).then(data => {
  //       for (let i = 0; i < data.length; i++) {
  //         const element = data[i];
  //         array.unshift("title:"+element.text);
  //         this.list = array
  //       }
  //     });
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
  font-family: ms;
  font-size: 40px;
  color: rgb(255, 255, 255);
  margin: 20px 380px;
}

#send{
  box-shadow: 0 3px 10px #FFFFFF;
  background: rgb(250, 250, 250);
  margin: 30px 50px;
  width: 835px;
  height: 500px;
}
h3{
  font-size: 30px;
  color: rgb(0, 0, 0);
}
</style>
