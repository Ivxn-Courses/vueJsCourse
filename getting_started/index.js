new Vue({
  el: "#app",
  data: {
    title:"Hello World"
  },
  methods: {
  	toggle: function(event){
    	this.title = event.target.value;
    }
  }
})
