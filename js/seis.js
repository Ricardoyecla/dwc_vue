const app = new Vue ({
    el:'#app',
    data:{
        titulo:'Mis encuestas',
        alumnos:[],
        nuevoAlumno:''
    },
    methods:{
        anadirAlumno:function () {
            console.log('Añadimos ',this.nuevoAlumno);
            this.alumnos.push({
                nombre:this.nuevoAlumno,
                estado:false
            });
            this.nuevoAlumno='';
            localStorage.setItem('alumnos-vue',JSON.stringify(this.alumnos));

        },
        editarAlumno:function (alumno) {
            console.log('editar alumno',alumno.estado);
            alumno.estado=true;
            localStorage.setItem('alumnos-vue',JSON.stringify(this.alumnos));
        },
        eleminarAlumno: function (alumno) {
            console.log('Elimina',alumno.nombre);
            this.alumnos.splice(this.alumnos.indexOf(alumno),1);
            localStorage.setItem('alumnos-vue',JSON.stringify(this.alumnos));

        }
    },
    created:function () {
        let datosDB =JSON.parse(localStorage.getItem('alumnos-vue'));
        if(datosDB===null){
            this.alumnos=[];
        } else {
            this.alumnos=datosDB;
        }

    }
});
