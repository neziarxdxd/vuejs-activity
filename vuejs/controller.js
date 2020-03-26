var app = new Vue({
    el:'#app',
    data:{
    txt_Task:'',
    markup:'itdone',
    message: {
       head: 'TODO APPLICATION',
       
    },
    todos: [
       
      ]
    },

    methods:{
        insertData:function()
        {
          
            app.todos.push({text:this.txt_Task})
            this.txt_Task=""
        },
        deleteData:function(index)
        {
          this.todos.splice(index,1)          
        },

        doneData:function(todo){
          todo.done = !todo.done;
          
            
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
