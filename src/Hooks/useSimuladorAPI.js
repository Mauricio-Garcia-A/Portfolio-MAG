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
        Descripcion: 'Mi nombre es Mauricio Garcia, pero me pueden decir  "MAURO". Estudie la carrera de Ingeniería en Sistemas de Información, y actualmente me dedico a encontrar soluciones software a diferentes problemáticas de una forma  innovadoras, eficiente y eficaz',
        AñosDeExperiencia: '3',
        CaracteristicasPersonales: [
            {   titulo:'Creativa',
                colorTexto:'blue',
                colorFondo:'rgba(67, 91, 162, 0.4)'
            },
            {   titulo:'Proactiva',
                colorTexto:'red',
                colorFondo:'rgba(162, 67, 67, 0.4)'
            },
            {   titulo:'Autodidacta',
                colorTexto:'green',
                colorFondo:'rgba(84, 162, 67, 0.4)'
            },
            {   titulo:'Diciplinada',
                colorTexto:'yellow',
                colorFondo:'rgba(186, 186, 53, 0.411)'
            },
            {   titulo:'Responsable',
                colorTexto:'pink',
                colorFondo:'rgba(57, 57, 57, 0.4)'
            },

        ]
    }
    const SECCION_HABILIDADES = {
        Titulo: 'SECCION 2: HABILIDADES',
        descripcionSeccion:[
            'A lo largo del tiempo he aprendido diferentes tecnologías, y desarrollado diversas habilidades, en el área IT (Tecnología de la Información).',
            'Debido a que estudie la carrera de “Ingeniería en Sistemas de Información”, muchos de estos conocimientos y habilidades fueron adquiridas y desarrolladas en el ámbito universitario. Las cuales pude llevar a la práctica trabajando un Centro de Investigación y en una consultora Internacional de Sistemas, y a su vez, en estos mismos lugares seguir aprender nuevas habilidades y tecnologías.',
            'Actualmente soy Desarrollador FrontEnd en ReactJS y realizando diferentes actividades como Diseñador UX/UI. Hoy me encuentro  mesclado un poco de ambos mundo, “El Desarrollo” y “El Diseño Web”, para encontrar y desarrollar soluciones software a diferentes problemáticas, de una forma innovadoras, creativas, eficaz y eficiente, que logren cumplir y superar con los objetivo planteados, sacado así una ventajas competitivas en el mercado, utilizando como medio las tecnologías más utilizadas en la actualidad.',
            "Relacionando el proceso de diseño y el proceso de desarrollo de una forma agil, mediantes las actuales metodologias agiles, como Scrum y Kanban."
        ],  
        ImagenHabilidad1:ImagenHabilidad1,
        ImagenHabilidad2:ImagenHabilidad2,
        tituloHabilidad1:'Developer',
        descripcionHabilidad1:'Desarrollador FrontEnd en ReactJS de forma Freelance. Incursionando el desarrollo BackEnd con NodeJs, entre otras tecnologías.', 
        iconosHabilidad1: ['reactjs','html5','js','css3'],
        tituloHabilidad2:'UX/UI', 
        descripcionHabilidad2:'Diseñador de Interfaces y de Experiencias de Usuarios.',
        iconosHabilidad2: ['photoshop','coreldraw'],
        ActividadesRealizadas1:[
            "Análisis del sistema (Relevamiento de los requerimientos)",
            "Diseño del sistemas (Diagramas UML y Patrones de diseño)",
            "Diseño de Arquitectura e infraestructura (Redes y Bases Datos)",
            "Desarrollador (Programador FrontEnd y BackEnd)",
            "QA y testing",
            "Soporte para la implementación y mantenimiento del sistema"
        ],
        ActividadesRealizadas2:[
            "Diseño UI (Diseños de Interacción y de Interfaz de Usuario)",
            "Patrones de Diseño UI y Heurísticas de Nielsen",
            "Diseño UX (Fundamentos de diseño de Experiencias de Usuario)",
            "Leyes de UX",
            "Estudios de Accesibilidad y Usabilidad",
            "Creación de Prototipos"
        ],
        SkillsDev: [
            {   titulo:"Tecnologias Web FrontEnd:",
                items:['html5', 'css3', 'js']
            },
            {   titulo:"Frameworks y Librerías Web:",
                items: ['reactjs', 'angular', 'vuejs', 'wordpress', 'drupal', 'dreamweaver']
            },
            {   titulo:"Librerías y Preprocesadores de Estilos:",
                items: ['sass', 'less', 'postcss', 'bootstrap', 'materialui']
            },
            {   titulo:"Tecnologias Web BackEnd:",
                items: ['nodejs', 'python', 'php']
            },
            {   titulo:"Tecnologias de Bases de Datos:",
                items: ['mysql', 'postgresql', 'mongodb']
            },
            {   titulo:"Herramienta de control de versiones:",
                items: ['github', 'svn']
            },
            {   titulo:"Metodologías Agiles:",
                items: ['scrum', 'kanban']
            },           

        ],
        SkillsDesing: [
            {   titulo:"Tecnologias de Diseño:",
                items:['photoshop','coreldraw','autocad']
            },
            {   titulo:"Herramientas de Prototipado:",
                items: ['']
            },
        ]

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