const app = new Vue ({
    el:'#t_vue',
    data:{
        nombre:'Unicaja',
        nuevoJugador:'',
        propiedades:[
            {nombre:'Vildoza, Luca',puntos:4},
            {nombre:'Henry, Pierriá',punots:5},
            {nombre:'Granger, Jayson',puntos:6},
            {nombre:'García, Sergi',puntos:0},
            {nombre:'González, Miguel',puntos:1},
            {nombre:'Janning, Matt',puntos:2},
            {nombre:'Stauskas, Nik',puntos:3},
            {nombre:'Garino, Patricio',puntos:0},
            {nombre:'Shields, Shavon',puntos:1},
            {nombre:'Polonara, Achille',puntos:2},
            {nombre:'Penava, Ajdin',puntos:3},
            {nombre:'Shengelia, Tornike',puntos:0},
            {nombre:'Diop, Ilimane',puntos:1},
            {nombre:'Fall, Youssoupha',puntos:2},
            {nombre:'Eric, Micheal',puntos:3},
            {nombre:'Christon, Semaj',puntos:2},
            {nombre:'Dragić, Zoran',puntos:3}
        ]
    },
    methods:{
        anadirJugador () {
            this.propiedades.push({
                nombre:this.nuevoJugador,
                puntos:0})
            this.nuevoJugador='';
            console.log('Pulsastge el botón')
        },
        anotar(){

        }
    }
})