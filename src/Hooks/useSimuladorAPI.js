//Seccion PRESENTACION
import ImagenPerfil from '../Imagenes/fotoPerfil.png'

//Seccion HABILIDADES
import ImagenHabilidad1 from 'Imagenes/fotoHabilidades1.png'
import ImagenHabilidad2 from 'Imagenes/fotoHabilidades2.png'


export function useSimuladorAPI() {
    const SECCION_PRESENTACION = {
        ImagenPefil:ImagenPerfil,
        NombreYApellido:'Mauricio Ariel Garcia',
        Estudio: 'Ingeniería en Sistemas de Información',
        Nacinalidad: 'Argentina',
        Titulo: 'SECCION 1: PRESENTACION',
        Descripcion: 'Lorem ipsum dolor sit amet. Ut obcaecati velit in sint dolor vel odio autem ut eligendi sint cum odit dolorum non perferendis nihil est consequatur quas. Delectus vitae aut deserunt nisi a iste cupiditate et excepturi exercitationem et consequatur rerum non tempore repudiandae.'
    }
    const SECCION_HABILIDADES = {
        Titulo: 'SECCION 2: HABILIDADES',
        ImagenHabilidad1:ImagenHabilidad1,
        ImagenHabilidad2:ImagenHabilidad2,
        tituloHabilidad1:'Developer',
        descripcionHabilidad1:'Lorem ipsum dolor sit amet. Ut obcaecati velit in sint dolor vel odio autem ut eligendi sint', 
        tituloHabilidad2:'UX/UI', 
        descripcionHabilidad2:'Lorem ipsum dolor sit amet. Ut obcaecati velit in sint dolor vel odio autem ut eligendi sint'
    }

    return {SECCION_PRESENTACION, SECCION_HABILIDADES} 
}