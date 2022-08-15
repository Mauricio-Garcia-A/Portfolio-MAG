//Seccion PRESENTACION
import ImagenPerfil from '../Imagenes/imagenPerfil.png'

//Seccion HABILIDADES
import ImagenHabilidad1 from 'Imagenes/fotoHabilidades1.png'
import ImagenHabilidad2 from 'Imagenes/fotoHabilidades2.png'

//Seccion PORTAFOLIO
import imagenMovilEGO from 'Imagenes/ego-movil.png'
import imagenMovilMeli from 'Imagenes/meli-movil.png'
import imagenBrowseEGO from 'Imagenes/ego-browser.png'
import imagenBrowseMeli from 'Imagenes/meli-browser.png'
import logoEGO from 'Imagenes/logo-ego.png'
import logoMeli from 'Imagenes/logo-meli.png'



export function useSimuladorAPI() {
    const SECCION_PRESENTACION = {
        ImagenPefil:ImagenPerfil,
        NombreYApellido:'Mauricio Ariel Garcia',
        Estudio: 'Ingeniería en Sistemas de Información',
        Nacinalidad: 'ARGENTINO',
        IconoBandera:'argentina',
        Titulo: 'SOY MAURO',
        Descripcion: '< HOLA MUNDO /> Mi nombre es Mauricio Garcia y me conocen como "MAURO". Estudie la carrera de ingenieria en sistemas de informacion, y actualmente soy Developers FromtEnd'
    }
    const SECCION_HABILIDADES = {
        Titulo: 'SECCION 2: HABILIDADES',
        descripcionSeccion:'Lorem ipsum dolor sit amet. Ut obcaecati velit in sint dolor vel odio autem ut eligendi sint. Lorem ipsum dolor sit amet. Ut obcaecati velit in sint dolor vel odio autem ut eligendi sint', 
        ImagenHabilidad1:ImagenHabilidad1,
        ImagenHabilidad2:ImagenHabilidad2,
        tituloHabilidad1:'Developer',
        descripcionHabilidad1:'Lorem ipsum dolor sit amet. Ut obcaecati velit in sint dolor vel odio autem ut eligendi sint', 
        tituloHabilidad2:'UX/UI', 
        descripcionHabilidad2:'Lorem ipsum dolor sit amet. Ut obcaecati velit in sint dolor vel odio autem ut eligendi sint'
    }

    const SECCION_EXPERIENCIAS = {
        Titulo: 'SECCION 3: Formacion Tecnica y Academica',
        DescripcionExperiencias:'Lorem Lorem ipsum dolor sit amet consectetur adipiscing elit, eget velit malesuada primis vulputate diam. Ultrices eget lacinia phasellus sapien in curabitur pulvinar conubia metusipsum dolor sit amet. Ut obcaecati velit in sint dolor vel odio autem ut eligendi sint',
        experiencias:[
            { 
                titulo:'Freelancer',
                subtitulo:'proyectos',
                duracionAños:'2020-Actualidad',
                descripcion:'Lorem ipsum dolor sit amet consectetur adipiscing elit, eget velit malesuada primis vulputate diam. Ultrices eget laciniaLorem ipsum dolor sit amet consectetur adipiscing elit, eget velit malesuada primis vulputate diam. Ultrices eget lacinia phasellus sapien in curabitur pulvinar conubia metus phasellus sapien in curabitur pulvinar conubia metus ut eligendi sint',
                logo:'freelancer'
            },
            { 
                titulo:'Consultora Internacional',
                subtitulo:'Global Logic',
                duracionAños:'2018-2020',
                descripcion:'Lorem Lorem ipsum Lorem ipsum dolor sit amet consectetur adipiscing elit, eget velit malesuada primis vulputate diam. Ultrices eget lacinia phasellus sapien in curabitur pulvinar conubia metus velit malesuada primis vulputate diam. Ultrices eget lacinia phasellus sapien in curabitur pulvinar conubia metus in sint dolor vel odio autem ut eligendi sint',
                logo:'globalLogic',
            },
            { 
                titulo:'Trabajo en Investigacion',
                subtitulo:'GIDAS',
                duracionAños:'2017-2018',
                descripcion:'Lorem ipsum dolor sit amet. Ut obcaecati velit in sint dolor vel odio autem ut eligendi sint',
                logo:'gidas'
            },
            { 
                titulo:'Estudio Universitario',
                subtitulo:'UTN FRLP',
                duracionAños:'2008-Actualidad',
                descripcion:'Lorem ipsum dolor sit amet. Ut obcaecati velit in sint dolor vel odio autem ut eligendi sint',
                logo:'utn'
            },
            { 
                titulo:'Estudios Secundarios',
                subtitulo:'Escuela Tecnica N1',
                duracionAños:'2003-2007',
                descripcion:'Lorem ipsum dolor sit amet. Ut Lorem ipsum dolor sit amet consectetur adipiscing elit, eget velit malesuada primis vulputate diam. Ultrices eget lacinia phasellus sapien in curabitur pulvinar conubia metus',
                logo:'escuela'
            }
        ]
    }

    const SECCION_PORTAFOLIO = {
        Titulo:'SECCION 4: PORTFOLIO DE PROYECTOS',
        proyectos: [
            {
                titulo:'Challenge de Mercado Libre',
                tituloHttp:'meli',
                descripcion:'Lorem ipsum dolor sit amet. Ut Lorem ipsum dolor sit amet consectetur adipiscing elit, eget velit malesuada primis vulputate diam. Ultrices eget lacinia phasellus sapien in curabitur pulvinar conubia metus',
                imagenMovil: imagenMovilMeli,
                imagenBrowser:imagenBrowseMeli,
                logo: logoMeli,
                colorFondo: 'rgba(216, 152, 13, 0.511)',
            },
            {
                titulo:'Challenge de Agencia EGO',
                tituloHttp:'ego',
                descripcion:'Lorem ipsum dolor sit amet. Ut Lorem ipsum dolor sit amet consectetur adipiscing elit, eget velit malesuada primis vulputate diam. Ultrices eget lacinia phasellus sapien in curabitur pulvinar conubia metus',
                imagenMovil: imagenMovilEGO,
                imagenBrowser:imagenBrowseEGO,
                logo: logoEGO,
                colorFondo: 'rgba(108, 20, 20, 0.511)'
            }
        ]
    }

    const SECCION_CONTACTO ={
        redesSociales: [
            {
                titulo: 'Linkedin',
                icono:'linkedin',
                link: 'https://www.linkedin.com/in/mauricio-ariel-garcía',
                usuario:'mauricio-ariel-garcía'
            },
            {
                titulo: 'Instagram',
                icono:'instagram',
                link: 'https://www.instagram.com/mauro.mam/',
                usuario:'mauro_mam'
            },
            {
                titulo: 'Facebook',
                icono:'facebook',
                link: 'https://www.facebook.com/mauro.mam',
                usuario:'mauro.mam'
            }
        ],
        formasDeContacto: [
            {
                titulo: 'email',
                icono: 'gmail',
                descripcion: 'garcia.mauricio.ariel@gmail.com'
            },
            {
                titulo: 'celular',
                icono: 'whatsapp',
                descripcion: '02314-443314'
            },
            {
                titulo: 'linkedin',
                icono:'linkedin',
                descripcion: 'www.linkedin.com/in/mauricio-ariel-garcía'
            }
        ]
    }


    return {SECCION_PRESENTACION, SECCION_HABILIDADES, SECCION_EXPERIENCIAS, SECCION_PORTAFOLIO, SECCION_CONTACTO } 
}