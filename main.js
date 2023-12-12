const todoItem = {
    //входные параметры для компонента
    props: ["todo", "index"],
    emits:["complete-todo"],
    methods:{
        makeComplete(){
            this.$emit("complete-todo")
        },
    },
    template: `
        <div> 
            {{todo.title}}
            <input type="checkbox" :checked="todo.completed" v-on:click="makeComplete">
        </div>
    `,
};

const app= Vue.createApp({
    data() {
        return {
            todoList: [
                {
                    "title": "задача 1",
                    "completed": false,
                    "noActive": false
                },
                {
                    "title": "также задача 2",
                    "completed": false,
                    "noActive": false
                },

            ],
        }
    },
    components: {
        "todo-item": todoItem,
    },
    methods: {
        makeDone(index) {
            this.todoList[index].completed=!this.todoList[index].completed;
        
        },
        add(){
            if(!this.itemForAdd.trim()) {
                return; 
            }
            this.todoList.push(
                {
                    "title": this.itemForAdd ,
                    "completed": false,
                    "noActive": false,
                    "id": this.todoList.length+1
                },
            );
            console.log(this.todoList);
        },
        
        del(index) {
            this.todoList.splice(index, 1);
        },
        filter1(){
            this.todoList.forEach(element => {
                if(element.completed==false){
                    element.noActive=true
                }
                
                else{
                    element.noActive=false;
                }
            }); 
        },
        filter2(){
            this.todoList.forEach(element => {
                if(element.completed==true){
                    element.noActive=true
                }
                
                else{
                    element.noActive=false;
                }
            }); 
        },
        filter3(){
            this.todoList.forEach(element => {
                               
                element.noActive=false;
                
            }); 
        },

    },
    mounted() {
        /*
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json =>(this.todoList=json))*/
    }
});

app.mount("#app");










/* создание компонента глобально
// создаем объект - приложение Vue.js
const app = Vue.createApp({});
// создаем компонент
// первый параметр - название компонента, 
// второй параметр - объектсо свойством шаблона
app.component("counter",
{
    // метод data, свойства компонента
    data(){
        return {
            count: 0,
        }
    },
    //методы компонента
    methods: {
        increase(){
            this.count++;
        },
        decrease(){
            this.count--;
        },
        addMess(){
            console.log(this.count);
        }
    },
    // шаблон компонента
    template: `
        <h2> Счетчик </h2>
        <p> {{count}} </p>
        <button v-on:click="increase"> Увеличить</button>
        <button v-on:click="decrease"> Уменьшить</button>
        <button v-on:click="addMess"> Вывод</button>
    `,
});
// связываем приложение Vue.js с элементом на странице
// по id  
app.mount("#app"); */
    
    
    
    

 

