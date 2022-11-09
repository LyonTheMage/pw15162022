const App ={
    data: function(){
        return{
            mensaje:'hola vuejs',
            muestra: false
        }
 
    },
    methods:{
        cambiarMuestra: function(){
            this.muestra = !this.muestra
        },
        randomuser: function(){
            let n = ""
            axios.get('')
            .then(function(response){
                console.log(response)
            });
          
        }
    }
};
vue.createApp(App).mount('#app')