<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="index">
      <div v-transfer-dom>
          <Alert v-model="show">{{message}}</Alert>
          <div class="bbb">
            <div class="cccc">2322</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import {Alert,TransferDom} from 'vux'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'Hello Vux!',
			show: true,
    }
  },
	directives:{
		TransferDom,
	},
	components:{
		Alert,
	},
	methods:{
		onHide(){
			alert('123456');
    },
    ajaxLoadAllTags () {
      return new Promise((resolve, reject) => {
        this.$axios.post({
          url: 'loadAllTag',
          // loading: false
        }).then(result => {
          resolve(result)
        })
      })
    },
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.bbb{
    .cccc{
      color: red;
    }
  } 
</style>
