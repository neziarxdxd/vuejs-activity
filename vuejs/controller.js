var app = new Vue({
    el:'#app',
    data:{
    message: {
        m: 'Raizen',
       
    },
    todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
})

var app2 = new Vue({
    el:'#app-4',
    data: {
        todos:[
            {text: 'Java'},
            {text:'C#'},
            {text:'Python'}
        ]
    }
})
