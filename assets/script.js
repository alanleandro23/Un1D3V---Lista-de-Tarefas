const { createApp } = Vue

createApp({
  data() {
    return {
      novaTarefa: "",
      tarefas:["comprar pao" , "comprar leite", "comprar cafe"]
    }
  },
  methods:{
    cadastrarNovaTarefa(){
      if(this.novaTarefa.trim() !== "") {
        this.tarefas.push(this.novaTarefa)
        this.novaTarefa = ""
      }
    },
    excluirTarefa(index){
      this.tarefas.splice(index, 1)
    }
  },
}).mount('#app')
