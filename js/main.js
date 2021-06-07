var app = new Vue({
    el:'#app',
    data:{
        palabras:['laptop','angular','vuejs','flask','adonis','sistemas'],
        game: true,
        win: false,
        lost: false,
        contador_aciertos: 0,
        contador_errores: 0,
        aleatorio: 0,
        palabra_escrita: [],
        botones:[],
        color_botones: [],
        letras:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    },
    methods: {
        generarAleatorio:function(){
            this.game = true
            this.win = false
            this.lost = false
            this.palabra_escrita = []
            this.botones = []
            this.color_botones = []
            this.contador_aciertos = 0
            this.contador_errores = 0
            this.aleatorio = Math.floor(Math.random()*this.palabras.length)
            for(var i = 0; i < this.palabras[this.aleatorio].length; i++){
                this.palabra_escrita.push('')
            }
            return this.aleatorio
        },
        comp:function(caracter,posicion){
            if(this.game){
                Cflag = 0
                this.botones[posicion] = true
                for(i=0;i <= this.palabra_generada.length;i++){
                    if(caracter.toLowerCase()== this.palabra_generada[i]){
                        this.palabra_escrita[i] = caracter
                        Cflag++
                        this.contador_aciertos++
                    }
                }
                if(Cflag == 0){
                    this.contador_errores++
                    this.color_botones[posicion] = 'rojo'
                }
                else{
                    this.color_botones[posicion] = 'verde'
                }
                if(this.contador_aciertos == this.palabra_generada.length){
                    this.win = true
                    this.game = false
                }
                if(this.contador_errores == 5){
                    this.lost = true
                    this.game = false
                }
            }
        }
    },
    computed: {
        palabra_generada:function(){
            return this.palabras[this.aleatorio]
        }
    }, 
    created:function() {
        this.generarAleatorio()
    }
})