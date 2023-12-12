const {createApp}=Vue;
createApp({
    data(){
        return{
            text_campo:"",
             todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ],
        }
    },
    // MILESTONE 2
    methods:{
        DeleteTask(indice){
            this.todos.splice(indice, 1);
        },
        addTask(){
            this.todos.unshift({ text: this.text_campo});
        }
    }
}).mount('#app');
