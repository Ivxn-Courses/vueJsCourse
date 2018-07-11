new Vue ({
  el:'#app',
  data:{
    title:"Hello World",
    link:'http://google.com'
  },
  methods:{
    sayhello: function () {
      this.title ="Hello";
      return this.title;
    }
  }
})
