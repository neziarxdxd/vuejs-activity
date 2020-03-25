var app = new Vue({
    el:'#app',
    data:{
    txt_Task:'',
    message: {
       head: 'TODO APPLICATION',
       
    },
    todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    },
    methods:{
        insertData:function(){
            app.todos.push({text:this.txt_Task})
        }
    }

   
})

/**
 methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}) 
 
 */

var app2 = new Vue({
    el:'#app-4',
    data: {
        title: "PROGRAMMING THE BEST",
        todos:[
            {text: 'Java'},
            {text:'C#'},
            {text:'Python'}
        ]

    }
})
