<template>
  <div>
    <div class="card text-center" style="margin: 5% 5% 5% 5%;">
        <div class="hero is-danger">
            <h1>Noticia</h1>
        </div>
        <div class="card-body">
            <h2 class="card-title title"><b>{{ event.name }}</b></h2>
            <carousel >
              <slide v-for="image in event.images" :key="image.id">
                <img v-bind:src="require('../assets/' + image)" alt="Noticia"/>
              </slide>
            </carousel>
        </div>
        <p class="card-text" style="text-align: justify; padding: 5% 5% 5% 5%;">
        {{ event.description }}
        </p>
        <router-link to="/" class="button is-dark">Regresar Inicio</router-link>
    </div>
    <div class="card-footer text-muted" style="text-align: center;">
        2 days ago
    </div>

  </div>
</template>
<script>

export default {
  name: "EventSingle",
  data() {
    return {
      events: [
        {
          id: 1,
          name: "Finalizan Obras",
          category: "Noticias",
          theme:
            "La ANSV y ENterritorio finalizan obras de alto impacto en Buga con una inversión de más de 150 millones de pesos.",
          description:
            "Bogotá D.C., 2 de Septiembre 2021 (@ansvcol). El programa “Pequeñas Grandes Obras” (PGO), liderado por la Agencia Nacional de Seguridad Vial (ANSV) y desarrollado en convenio con la Empresa Nacional Promotora del Desarrollo Territorial, (ENTerritorio), finalizó durante el mes de agosto la intervención en un punto crítico del municipio de Guadalajara de Buga, cuya inversión superó los $150 millones, y con el cual se busca disminuir la siniestralidad vial y las víctimas en general asociadas a este tipo de eventos. Para la Ministra de Transporte, Ángela María Orozco, “Buga es uno de los municipios más representativos y turísticos del Valle del Cauca, el objetivo de esta obra es precisamente beneficiar a los actores viales del municipio y a sus visitantes con la implementación de medidas como: demarcación de vía, instalación de reductores de velocidad e implementación de señalización vertical y horizontal, entre otras medidas que permitan disminuir el riesgo de un siniestro vial”"+
            "Cabe resaltar, que las obras estuvieron acompañadas de actividades y sensibilizaciones dirigidas a la comunidad para darles a conocer de primera mano la información del tipo de implementación y los diseños de la intervención. Así mismo, mediante talleres de educación vial, se capacitó en responsabilidad que se tiene en materia de seguridad vial a 16 adultos y 78 niños, niñas y adolescentes. "+
            "“Con la implementación del programa PGO se fortalece la seguridad vial en los territorios con la priorización de zonas escolares en donde, 32 de las 80 intervenciones de la fase II, están dirigidas a la regulación de la velocidad en el país. En este sentido, con la obra ejecutada en el municipio de Guadalajara de Buga se beneficiará a cerca de 1.900 estudiantes”, agregó Luis Lota, director de la ANSV."+
            "Para la tercera fase del Programa Pequeñas Grandes Obras se avanza en la elaboración de más de 550 diseños en zonas que se han identificado como de alta siniestralidad. Para el valle del Cauca serán 12 los municipios a los cuales se les desarrollarán diseños para la implementación de este programa (Ansermanuevo, Buenaventura, Cali, Cartago, Dagua, Guadalajara de Buga, La Cumbre, La Unión, Palmira, Restrepo, Yumbo y Zarzal)."+
            "fuente: https://www.mintransporte.gov.co/",
          featuredImage: "not_1.jpg",
          images: [
            "not_1.jpg",
            "not_1.jpg",
            "not_1.jpg",
          ],
        },
        {
          id: 2,
          name: "Nueva Malla Vial ",
          category: "Noticias",
          theme:
            "Arranca la fase de preconstrucción de la Nueva Malla Vial del Valle del Cauca- Corredor Accesos Cali.",
          description:
            "Cali, Valle del Cauca. Septiembre 2 de 2021. (@Ani_Colombia).- El Gobierno Nacional sigue marcando hitos en materia de infraestructura en el país y hoy puso en marcha la fase de preconstrucción de 310 km del proyecto Nueva Malla Vial del Valle del Cauca – Corredor accesos Cali y Palmira, que fue la primera iniciativa en ser adjudicada de las Concesiones del Bicentenario-5G y con la cual se estima la generación  de 40.000 empleos en la región."+
            "Durante la firma protocolaria de la adjudicación de este proyecto, efectuada el pasado 17 de mayo en la ciudad de Cali, el presidente Iván Duque destacó en su momento que es con hechos que se marca el rumbo de un país, “mi compromiso con el Valle del Cauca siempre han sido las obras de infraestructura. Una de ellas era materializar esta Malla Vial Accesos Cali-Palmira y lo que prometimos hace cuatro años en Cali hoy es una realidad, con esta firma y adjudicación”"+
            "La fase de preconstrucción de este proyecto, a cargo de la Agencia Nacional de Infraestructura-ANI, inicia con la operación y mantenimiento de la infraestructura existente, además garantiza para los usuarios, el servicio gratuito de grúa, carro taller, ambulancias, y la vigilancia del corredor, las 24 horas del día"+
            "El valor del contrato es de 1,223 billones de pesos (cifras estimadas en capex a diciembre de 2020) y comprende la construcción, rehabilitación y mantenimiento de 310 km de vía, entre los departamentos del Valle del Cauca y Cauca. Los trabajos estarán a cargo de la Concesionaria Rutas del Valle SAS, la firma que además de cumplir con todos los requisitos previos para su adjudicación acreditó la capacidad financiera y la experiencia en inversión a través del Fondo de Capital Privado Patria Infrastructure Fund IV"+
            "“Queremos mejorar la calidad de vida de los ciudadanos, con proyectos de infraestructura modernos y seguros que impacten positivamente en las regiones, pues el objetivo del Gobierno nacional siempre será llevar progreso, pero con equidad y así lo haremos con este proyecto que generará cerca de 40 mil empleos en su área de influencia”, indicó Carmen Ligia Valderrama Rojas, Ministra de Transporte (e)"+
            "Es importante destacar que el corredor Nueva Malla Vial del Valle del Cauca ya había marcado un hito, durante el proceso de selección, ya que fue la primera vez en la historia de los procesos de licitación de proyectos de infraestructura de transporte concesionado que se reciben ocho (8) ofertas para participar, lo que ratifica la confianza de los inversionistas nacionales e internacionales en la estructuración de proyectos concesionados en nuestro país"+
            "Sobre el proyecto Accesos Cali y Palmir"+
            "El corredor contempla la construcción de 15,8 km de nueva calzada sencilla, entre Cali y Jamundí, siendo esta la prolongación de la Av. Ciudad de Cali, por donde se moverá el tráfico pesado"+
            "El proyecto además tendrá la construcción de 12,4 km de nuevas segundas calzadas, 291 km de rehabilitación (puesta a punto) de corredores existentes, construcción de dos intercambiadores a desnivel (Sameco y Versalles), un puente vehicular sobre el río Cauca entre Jamundí y Villarrica. Un puente vehicular sobre el río Jamundí, entre Cali y Jamundí, y un puente vehicular sobre el río Bolo, entre Palmira y Candelaria. También contempla la construcción de 22 puentes peatonales, construcción de ciclo-rutas y adecuación de iluminación de varios corredores, entre otros"+
            "El corredor vial prevé, entre otros aspectos, la generación de 40.000 empleos directos, indirectos e inducidos. La operación y mantenimiento de este proyecto tiene un plazo hasta de 29 años"+
            "Con esta iniciativa se estima serán beneficiados cerca de 3.300.000 habitantes de 12 municipios del Valle del Cauca, entre ellos: Buga, Candelaria, El Cerrito, Florida, Guacarí, Ginebra, Jamundí, Palmira, Vijes, Yotoco, Yumbo y Cali, al igual que cinco municipios del Cauca: Caloto, Miranda, Puerto Tejada, Santander de Quilichao y Villarica"+
            "Con las oncesiones del Bicentenario, uno de nuestros principales retos del Gobierno nacional es fortalecer la institucionalidad de la Agencia Nacional de Infraestructura para mejorar los procesos, la transparencia, la integridad de la Entidad y recuperar la confianza de los ciudadanos, pero además garantizar el desarrollo sostenible e inclusivo de los proyectos en todas las regiones del país."+
            "fuente: fuente: https://www.mintransporte.gov.co/",
          featuredImage: "not_2.jpg",
          images: [
            "not_2.jpg",
            "not_2.jpg",
            "not_2.jpg"
          ],
        },
        {
          id: 3,
          name: "Emergencia Vial",
          category: "Noticias",
          theme:
            "Gobierno nacional atiende emergencia vial en el km 121+200 de la vía Los Curos - Málaga, departamento de Santander.",
          description:
            "Bogotá, D. C., 1 de septiembre de 2021 (@InviasOficial). Tras la emergencia registrada en las últimas horas por el deslizamiento de material en el kilómetro 121+200 de la vía Los Curos - Málaga, en el departamento de Santander, el Instituto Nacional de Vías (INVÍAS) dispuso toda su capacidad técnica y operativa para recuperar la transitabilidad segura de los usuarios en el menor tiempo posible."+
            "La ministra (e) de Transporte, Carmen Ligia Valderrama aseguró: “Nuestro compromiso como Gobierno nacional siempre es velar por la movilidad segura de los usuarios en nuestras vías, por esto a través del INVÍAS hemos dispuesto de todos los recursos para recuperar la movilidad por este importante corredor vial en el menor tiempo po"+
            "El director técnico del INVÍAS, Guillermo Toro Acuña, manifestó: “Desde el momento en que se registró la emergencia en el km 121+200 de la vía, técnicos y operarios del INVÍAS trabajan con maquinaria (retroexcavadoras y volquetas) para recuperar la transitabilidad por este importante corredor vial. Debido a la emergencia, la vía se encuentra cerrada y recomendamos a los usuarios tomar la vía alterna Málaga - Presidente - Pamplona - Bucaramanga”.",

          featuredImage: "not_3.jpg",
          images: [
            "not_3.jpg",
            "not_3.jpg",
            "not_3.jpg"
          ],
        },
        {
          id: 4,
          name: "Licencias de Conducción",
          category: "Noticias",
          theme:
            "Tras resultados de estudios de la Universidad de los Andes, Gobierno avanza en reglamentación de licencia de conducción para la comunidad sord.",
          description:
             "Bogotá D.C., 30 de agosto 2021 (@MintransporteCo). Siguiendo con el compromiso del Ministerio de Transporte y la Agencia Nacional de Seguridad Vial, de trabajar constructivamente con la comunidad sorda, La Universidad de Los Andes, explicó en detalle los resultados obtenidos del “Estudio epidemiológico sobre niveles de idoneidad de conductores”, mediante el cual se analizaron tanto los temas clínicos y de siniestralidad, elementos fundamentales para regular un proceso de licencias de conducción en transporte privado "+
            "De igual manera, dentro de los principales resultados obtenidos por la Universidad de los Andes y socializados con representantes de la comunidad sorda, se evidencia que no hay insumos concluyentes que determinen la relación entre los índices de siniestralidad vial y la población con discapacidad auditiva."+
             "“Desde el Ministerio de Transporte entendemos la necesidad que tenía esta comunidad para poder hacer y acceder a este trámite, por eso hemos avanzado efectivamente en varias mesas de trabajo con el fin de entender los diferentes puntos de vista; beneficiarios y expertos, y de esta forma llegar a una solución que hoy podemos decir garantizará la libre movilización de estas personas, sin que sus problemas de audición sean una barrera”, aseguró la Ministra de Transporte encargada, Carmen Ligia Valderrama."+
             "Entre las conclusiones, la Universidad de los Andes, realizó un análisis de perfiles de riesgo . Gracias a estos resultados, se decidió iniciar la construcción, de manera conjunta, de   un plan de acción y explorar la normativa necesaria para reglamentar la licencia de conducción de transporte privado a la comunidad sorda, todo esto cumpliendo con los requisitos necesarios que garanticen la seguridad para todos los actores viales."+
             "La decimo segunda mesa técnica se llevó a cabo con la participación del Director de la Agencia Nacional de Seguridad Vial, Luis Lota; Fabio Restrepo, director de Tránsito y Transporte del Ministerio de Transporte; Olga Lucía Sarmiento, Mónica Pinilla y Luis Guzmán de Universidad de los Andes; Natalia Martínez del INSOR; Daniel Ocampo, Erika Melgarejo, Nathalia Ardila de la comunidad sorda y el líder promotor Henry Mejía, así como representantes regionales de las agremiaciones de la comunidad sorda y FENASCOL, entre otros participantes."+
             "“Este trabajo nos lo hemos tomado con mucha seriedad, por eso estamos viendo avances efectivos en este sentido. Un trabajo que desarrollamos paso a paso y que lo hemos hecho de manera conjunta. Es importante seguir este proceso bajo esta metodología: que nos garantice que estemos todos cubiertos y que la comunidad sorda tenga la claridad de cómo pueden acceder a la licencia para transporte privado y contar con todos los elementos necesarios para tal fin. Reiteramos nuestro compromiso desde ANSV y el Ministerio de Transporte por garantizar los derechos con reglas claras y transparentes, y con un cronograma de trabajo conjunto que respete los tiempos”, puntualizó Luis Lota, director de la ANSV.   ",
          featuredImage: "not_5.jpg",
          images: [
            "not_5.jpg",
            "not_5.jpg",
            "not_5.jpg"
          ],
        }
      ],
      event: {}
    };
  },
  created() {
    const ID = Number(this.$route.params.id);
    let event = this.events.find(event => event.id === ID);
    this.event = event;
  }
};
</script>
