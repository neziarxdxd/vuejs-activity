var app = new Vue({
    el:'#app',
    data:{
    txt_Task:'',
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

        updateData:function(index,value){
          app.$set(app.todos, index,{text:value})

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
