new Vue({
  el: "#app",
  data:{
  	message:"Hello Google",
    url:"https://www.google.com.mx"
  },
  methods:{
  	sayhello:function(){
     return this.message;
    }
  }
})
