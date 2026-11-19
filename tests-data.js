/* Tests psicológicos de Qhali Nuna.
   Cada test: preguntas con sus propias respuestas y puntos, cómo se interpreta y su información.
   Los cuestionarios con autor externo son herramientas de cribado reconocidas y de uso libre;
   los de "Qhali Nuna" son cuestionarios de orientación preparados por el equipo. */
(function () {
  var F4 = [['Ningún día', 0], ['Varios días', 1], ['Más de la mitad de los días', 2], ['Casi todos los días', 3]];
  var FREQ5 = [['Nunca', 0], ['Menos de una vez al mes', 1], ['Mensualmente', 2], ['Semanalmente', 3], ['A diario o casi a diario', 4]];
  var NET = [['Nunca', 0], ['Rara vez', 1], ['A veces', 2], ['A menudo', 3], ['Siempre', 4]];
  var NIN = [['Nunca', 0], ['A veces', 1], ['A menudo', 2], ['Siempre', 3]];
  var TDAH = [['Nunca o rara vez', 0], ['A veces', 1], ['A menudo', 2], ['Muy a menudo', 3]];
  var HITO = [['Igual que otros niños de su edad', 0], ['Un poco menos que otros niños', 1], ['Todavía no, o mucho menos', 2]];
  var q = function (texto, opciones, extra) { var o = { texto: texto, opciones: opciones }; for (var k in extra || {}) o[k] = extra[k]; return o; };

  window.QN_TESTS = [
    {
      slug: 'ansiedad', titulo: 'Test de ansiedad', ilustracion: 'ansiedad', color: 'pink',
      instrumento: 'GAD-7 (Generalized Anxiety Disorder-7)', autor: 'Spitzer, Kroenke, Williams y Löwe (2006)',
      resumen: 'Mide con qué frecuencia has sentido nervios, preocupación o inquietud en las últimas dos semanas.',
      consigna: 'Durante las últimas 2 semanas, ¿con qué frecuencia te han molestado estos problemas?',
      preguntas: [
        q('Sentirte nervioso, ansioso o con los nervios de punta', F4),
        q('No poder dejar de preocuparte o no poder controlar la preocupación', F4),
        q('Preocuparte demasiado por diferentes cosas', F4),
        q('Tener dificultad para relajarte', F4),
        q('Estar tan inquieto que te cuesta quedarte sentado tranquilo', F4),
        q('Molestarte o ponerte irritable con facilidad', F4),
        q('Sentir miedo, como si algo terrible fuera a pasar', F4)
      ],
      maximo: 21,
      rangos: [
        [4, 'Ansiedad mínima', 'Tus respuestas muestran pocos síntomas de ansiedad. Sigue cuidando tu descanso y tus momentos de calma.', 'ok'],
        [9, 'Ansiedad leve', 'Tienes algunos síntomas de ansiedad. Si se mantienen o aumentan, conversar con un psicólogo te puede ayudar a manejarlos.', 'leve'],
        [14, 'Ansiedad moderada', 'Tus síntomas de ansiedad son importantes y pueden estar afectando tu día a día. Te recomendamos consultar con un psicólogo.', 'medio'],
        [21, 'Ansiedad severa', 'Tus síntomas de ansiedad son intensos. Te recomendamos buscar atención psicológica pronto: no tienes que pasar por esto solo.', 'alto']
      ],
      info: {
        que: 'La ansiedad es una reacción natural ante situaciones que percibimos como amenazantes. Se vuelve un problema cuando es muy intensa, dura mucho tiempo o aparece sin un motivo claro, y empieza a afectar el sueño, el trabajo, los estudios o las relaciones. En el trastorno de ansiedad generalizada la preocupación es constante y difícil de controlar.',
        senales: 'Preocupación excesiva, nerviosismo, inquietud, dificultad para concentrarse, irritabilidad, tensión muscular, problemas de sueño y molestias físicas como palpitaciones o malestar estomacal.',
        articulo: 'ansiedad-senales'
      }
    },
    {
      slug: 'depresion', titulo: 'Test de depresión', ilustracion: 'depresion', color: 'teal',
      instrumento: 'PHQ-9 (Patient Health Questionnaire-9)', autor: 'Kroenke, Spitzer y Williams (2001)',
      resumen: 'Te ayuda a saber si tienes síntomas de depresión y con qué intensidad.',
      consigna: 'Durante las últimas 2 semanas, ¿con qué frecuencia te han molestado estos problemas?',
      preguntas: [
        q('Poco interés o placer en hacer las cosas', F4),
        q('Sentirte decaído, deprimido o sin esperanza', F4),
        q('Dificultad para dormir o para seguir durmiendo, o dormir demasiado', F4),
        q('Sentirte cansado o con poca energía', F4),
        q('Poco apetito o comer en exceso', F4),
        q('Sentirte mal contigo mismo, sentir que eres un fracaso o que has quedado mal contigo o con tu familia', F4),
        q('Dificultad para concentrarte, por ejemplo al leer o ver televisión', F4),
        q('Moverte o hablar tan despacio que otros lo notaron, o lo contrario: estar tan inquieto que te movías mucho más de lo normal', F4),
        q('Pensar que estarías mejor muerto o que podrías hacerte daño de alguna forma', F4, { alerta: true })
      ],
      maximo: 27,
      rangos: [
        [4, 'Síntomas mínimos', 'Tus respuestas muestran pocos síntomas de depresión. Sigue atento a cómo te sientes.', 'ok'],
        [9, 'Síntomas leves', 'Tienes algunos síntomas de depresión. Si duran varias semanas, conversar con un psicólogo te puede ayudar.', 'leve'],
        [14, 'Síntomas moderados', 'Tus síntomas de depresión son importantes. Te recomendamos consultar con un psicólogo.', 'medio'],
        [19, 'Síntomas moderadamente severos', 'Tus síntomas están afectando tu vida diaria. Te recomendamos buscar atención psicológica pronto.', 'alto'],
        [27, 'Síntomas severos', 'Tus síntomas son intensos. Busca atención profesional lo antes posible; puede ser necesaria también una evaluación médica.', 'alto']
      ],
      info: {
        que: 'La depresión es más que sentirse triste unos días. Es un estado que dura semanas, en el que se pierde el interés por lo que antes se disfrutaba y que afecta la energía, el sueño, el apetito y la forma de verse a uno mismo. Es frecuente y tiene tratamiento.',
        senales: 'Tristeza persistente, pérdida de interés, cansancio, cambios en el sueño o el apetito, dificultad para concentrarse, sentimientos de culpa o inutilidad y, en algunos casos, pensamientos de muerte.',
        articulo: 'psicologo-o-psiquiatra'
      }
    },
    {
      slug: 'alcoholismo', titulo: 'Test de consumo de alcohol', ilustracion: 'alcohol', color: 'pink',
      instrumento: 'AUDIT (Alcohol Use Disorders Identification Test)', autor: 'Organización Mundial de la Salud (OMS)',
      resumen: 'Diez preguntas de la Organización Mundial de la Salud para saber si tu forma de beber alcohol es un riesgo.',
      consigna: 'Responde pensando en el último año. Una bebida es una botella personal de cerveza, una copa de vino o un trago de licor.',
      preguntas: [
        q('¿Con qué frecuencia tomas alguna bebida alcohólica?', [['Nunca', 0], ['Una vez al mes o menos', 1], ['De 2 a 4 veces al mes', 2], ['De 2 a 3 veces por semana', 3], ['4 o más veces por semana', 4]]),
        q('En un día en que tomas, ¿cuántas bebidas sueles tomar?', [['1 o 2', 0], ['3 o 4', 1], ['5 o 6', 2], ['De 7 a 9', 3], ['10 o más', 4]]),
        q('¿Con qué frecuencia tomas 6 o más bebidas en una misma ocasión?', FREQ5),
        q('¿Con qué frecuencia, en el último año, no pudiste parar de beber una vez que empezaste?', FREQ5),
        q('¿Con qué frecuencia, en el último año, no pudiste hacer lo que se esperaba de ti porque habías bebido?', FREQ5),
        q('¿Con qué frecuencia, en el último año, necesitaste tomar al levantarte para recuperarte de haber bebido mucho el día anterior?', FREQ5),
        q('¿Con qué frecuencia, en el último año, sentiste culpa o remordimiento después de beber?', FREQ5),
        q('¿Con qué frecuencia, en el último año, no pudiste recordar lo que pasó la noche anterior porque habías bebido?', FREQ5),
        q('¿Tú u otra persona resultaron heridos porque habías bebido?', [['No', 0], ['Sí, pero no en el último año', 2], ['Sí, en el último año', 4]]),
        q('¿Un familiar, amigo, médico u otro profesional se ha preocupado por cómo bebes o te ha sugerido que tomes menos?', [['No', 0], ['Sí, pero no en el último año', 2], ['Sí, en el último año', 4]])
      ],
      maximo: 40,
      rangos: [
        [7, 'Consumo de bajo riesgo', 'Tu forma de beber parece de bajo riesgo. Si tomas, hazlo con moderación y nunca antes de manejar.', 'ok'],
        [15, 'Consumo de riesgo', 'Tu forma de beber puede traerte problemas de salud o en tus relaciones. Vale la pena reducir el consumo y, si te cuesta, pedir orientación.', 'leve'],
        [19, 'Consumo perjudicial', 'Tu consumo de alcohol ya podría estar dañando tu salud o tu vida diaria. Te recomendamos consultar con un profesional.', 'medio'],
        [40, 'Posible dependencia del alcohol', 'Tus respuestas sugieren una posible dependencia. Te recomendamos una evaluación profesional; dejar el alcohol de golpe puede necesitar acompañamiento médico.', 'alto']
      ],
      info: {
        que: 'El consumo de alcohol se vuelve un problema cuando se toma con frecuencia o en grandes cantidades, cuando cuesta controlarlo o cuando empieza a afectar la salud, el trabajo, la familia o la seguridad. La dependencia aparece cuando el cuerpo y la mente necesitan el alcohol para sentirse bien.',
        senales: 'Tomar más de lo planeado, no poder parar, necesitar más cantidad para sentir el efecto, olvidos después de beber, problemas en casa o en el trabajo, y malestar cuando no se toma.',
        articulo: 'psicologo-o-psiquiatra'
      }
    },
    {
      slug: 'adiccion-a-internet', titulo: 'Test de adicción a internet', ilustracion: 'internet', color: 'teal',
      instrumento: 'Cuestionario de orientación de Qhali Nuna', autor: 'Equipo de Qhali Nuna, basado en las señales más frecuentes del uso problemático de internet',
      resumen: 'Revisa si el tiempo que pasas en internet, redes sociales o juegos está afectando tu vida.',
      consigna: 'Piensa en los últimos meses. ¿Con qué frecuencia te pasa lo siguiente?',
      preguntas: [
        q('Pasas más tiempo conectado del que pensabas', NET),
        q('Dejas de lado tareas, estudios o trabajo por estar en internet, redes o juegos', NET),
        q('Prefieres estar conectado antes que pasar tiempo con tu familia o tus amigos', NET),
        q('Personas cercanas se quejan del tiempo que pasas conectado', NET),
        q('Te pones de mal humor, nervioso o inquieto cuando no puedes conectarte', NET),
        q('Duermes menos por quedarte conectado hasta tarde', NET),
        q('Has intentado pasar menos tiempo conectado y no lo has logrado', NET),
        q('Usas internet para no pensar en tus problemas o para sentirte mejor', NET)
      ],
      maximo: 32,
      rangos: [
        [10, 'Uso equilibrado', 'Tu forma de usar internet parece equilibrada. Sigue cuidando tus horas de descanso y tus momentos sin pantallas.', 'ok'],
        [20, 'Algunas señales de uso problemático', 'Hay señales de que internet ocupa más espacio del que quisieras. Prueba poner horarios sin celular y notar cómo te sientes.', 'leve'],
        [32, 'Uso problemático de internet', 'Tu uso de internet parece estar afectando tu descanso, tus responsabilidades o tus relaciones. Un psicólogo puede ayudarte a recuperar el control.', 'alto']
      ],
      info: {
        que: 'El uso problemático de internet aparece cuando el tiempo en redes sociales, videos o juegos se vuelve difícil de controlar y empieza a quitar espacio al descanso, los estudios, el trabajo o las relaciones. Es más frecuente en adolescentes y jóvenes, aunque puede darse a cualquier edad.',
        senales: 'Perder la noción del tiempo conectado, irritabilidad sin el celular, dormir menos, bajar el rendimiento, discusiones en casa por las pantallas y usar internet para escapar de los problemas.',
        articulo: 'mi-hijo-necesita-psicologo'
      }
    },
    {
      slug: 'autismo', titulo: 'Test de autismo (TEA)', ilustracion: 'autismo', color: 'teal', padres: true,
      instrumento: 'Cuestionario de orientación de Qhali Nuna', autor: 'Equipo de Qhali Nuna, basado en las señales tempranas del trastorno del espectro autista más reconocidas',
      resumen: 'Para mamás y papás de niños pequeños: revisa si tu hijo muestra señales que conviene evaluar.',
      consigna: 'Piensa en cómo es tu hijo o hija en su día a día. ¿Con qué frecuencia pasa lo siguiente?',
      preguntas: [
        q('Cuando lo llamas por su nombre, no voltea ni responde', NIN),
        q('Evita mirarte a los ojos cuando le hablas o juegan', NIN),
        q('No señala con el dedo para mostrarte algo que le interesa', NIN),
        q('No muestra interés en jugar o estar con otros niños', NIN),
        q('No juega con los juguetes como los demás niños: los alinea, los gira o se fija solo en una parte', NIN),
        q('Le molestan mucho algunos sonidos, luces, texturas u olores: se tapa los oídos, llora o se altera', NIN),
        q('Repite movimientos como aletear las manos, balancearse o girar sobre sí mismo', NIN),
        q('Habla poco para su edad o repite palabras y frases que escucha, en lugar de usarlas para conversar', NIN),
        q('Se altera mucho cuando cambia su rutina, aunque sea un cambio pequeño', NIN),
        q('No imita lo que haces (aplaudir, decir chau con la mano) ni juega a “hacer como si” (dar de comer a un muñeco)', NIN)
      ],
      maximo: 30,
      rangos: [
        [7, 'Pocas señales de autismo', 'Tus respuestas muestran pocas señales. Sigue observando su desarrollo; si algo te preocupa, consúltalo sin esperar.', 'ok'],
        [15, 'Algunas señales que conviene revisar', 'Tu hijo muestra algunas señales que vale la pena observar con un especialista. Una evaluación temprana ayuda mucho.', 'medio'],
        [30, 'Varias señales de autismo', 'Tu hijo muestra varias señales que conviene evaluar pronto. Detectar el autismo a tiempo permite empezar antes la intervención, y eso hace una gran diferencia.', 'alto']
      ],
      info: {
        que: 'El trastorno del espectro autista (TEA) es una condición del desarrollo que afecta la forma en que el niño se comunica, se relaciona con los demás y percibe el mundo. Cada niño es distinto: por eso se habla de un espectro. Las señales suelen notarse antes de los 3 años y, cuanto antes se empieza la intervención, mejores son los avances.',
        senales: 'No responder a su nombre, poco contacto visual, no señalar, preferir jugar solo, jugar de forma repetitiva, molestia intensa con algunos sonidos o texturas, movimientos repetitivos y retraso o diferencias en el lenguaje.',
        articulo: 'mi-hijo-necesita-psicologo'
      }
    },
    {
      slug: 'tdah', titulo: 'Test de TDAH', ilustracion: 'tdah', color: 'peach', padres: true,
      instrumento: 'Cuestionario de orientación de Qhali Nuna', autor: 'Equipo de Qhali Nuna, basado en los síntomas de inatención, hiperactividad e impulsividad del TDAH',
      resumen: 'Para mamás, papás y profesores: revisa si tu hijo tiene señales de déficit de atención o hiperactividad.',
      consigna: 'Piensa en los últimos 6 meses, en casa y en el colegio. ¿Con qué frecuencia tu hijo o hija…?',
      preguntas: [
        q('Se distrae con facilidad con cualquier ruido o cosa que pasa a su alrededor', TDAH),
        q('Parece no escuchar cuando le hablas directamente', TDAH),
        q('Le cuesta seguir instrucciones o no termina sus tareas', TDAH),
        q('Comete errores por descuido en sus tareas o actividades', TDAH),
        q('Pierde sus cosas: útiles, juguetes, ropa', TDAH),
        q('Evita las tareas que le exigen concentrarse por mucho tiempo', TDAH),
        q('Mueve mucho las manos o los pies, o no se queda quieto en el asiento', TDAH),
        q('Se levanta cuando debe estar sentado, por ejemplo en clase o en la mesa', TDAH),
        q('Corre o trepa en momentos en que no corresponde', TDAH),
        q('Habla demasiado', TDAH),
        q('Responde antes de que terminen de preguntarle o interrumpe a los demás', TDAH),
        q('Le cuesta esperar su turno', TDAH)
      ],
      maximo: 36,
      rangos: [
        [12, 'Pocas señales de TDAH', 'Tus respuestas muestran pocas señales. Muchos niños son inquietos o distraídos a ratos: es parte de su edad.', 'ok'],
        [23, 'Algunas señales de TDAH', 'Tu hijo muestra algunas señales de inatención o hiperactividad. Si afectan sus estudios o su conducta, conviene una evaluación.', 'medio'],
        [36, 'Varias señales de TDAH', 'Tu hijo muestra varias señales de TDAH. Te recomendamos una evaluación psicológica: con apoyo a tiempo, el niño puede rendir y convivir mucho mejor.', 'alto']
      ],
      info: {
        que: 'El trastorno por déficit de atención e hiperactividad (TDAH) es una condición del desarrollo que dificulta mantener la atención, controlar los impulsos o quedarse quieto, más de lo esperado para la edad. Para pensar en TDAH, las señales deben durar más de 6 meses y notarse tanto en casa como en el colegio.',
        senales: 'Distraerse con facilidad, no terminar tareas, perder sus cosas, olvidar lo que se le pide, moverse todo el tiempo, hablar mucho, interrumpir y no poder esperar su turno.',
        articulo: 'mi-hijo-necesita-psicologo'
      }
    },
    {
      slug: 'estimulacion-temprana', titulo: 'Test de estimulación temprana', ilustracion: 'estimulacion', color: 'pink', padres: true,
      instrumento: 'Cuestionario de orientación de Qhali Nuna', autor: 'Equipo de Qhali Nuna, basado en los hitos del desarrollo infantil',
      resumen: 'Para mamás y papás de niños de 0 a 5 años: revisa si su desarrollo va como el de otros niños de su edad.',
      consigna: 'Compara a tu hijo o hija con otros niños de su misma edad. ¿Cómo está en lo siguiente?',
      preguntas: [
        q('Se mueve como otros niños de su edad: sostiene la cabeza, se sienta, gatea o camina, según su edad', HITO),
        q('Usa sus manos para agarrar cosas, pasarlas de una mano a otra o tomar objetos pequeños con los dedos', HITO),
        q('Hace sonidos, balbucea o dice palabras y frases como otros niños de su edad', HITO),
        q('Entiende lo que le dices: voltea cuando le hablas o sigue órdenes sencillas como “dame” o “ven”', HITO),
        q('Sonríe, te mira y responde cuando juegas con él o ella', HITO),
        q('Muestra curiosidad: explora, toca y busca los juguetes', HITO),
        q('Imita gestos, sonidos o acciones, como aplaudir o decir chau', HITO),
        q('Mantiene el equilibrio y coordina sus movimientos sin caerse más de lo normal', HITO),
        q('Participa en lo de cada día según su edad: comer, vestirse, avisar lo que necesita', HITO),
        q('Disfruta jugar con otros niños o con adultos', HITO)
      ],
      maximo: 20,
      rangos: [
        [3, 'Desarrollo como el esperado', 'Tu hijo parece avanzar como otros niños de su edad. Sigue jugando, hablándole y leyéndole: eso estimula su desarrollo.', 'ok'],
        [9, 'Algunas áreas para estimular', 'Hay algunas áreas en las que tu hijo podría necesitar más estímulo. La estimulación temprana le ayuda a avanzar a su ritmo.', 'medio'],
        [20, 'Varias áreas que conviene evaluar', 'Tu hijo muestra diferencias en varias áreas de su desarrollo. Te recomendamos una evaluación: empezar pronto la estimulación hace una gran diferencia.', 'alto']
      ],
      info: {
        que: 'La estimulación temprana es un conjunto de actividades y juegos que ayudan a bebés y niños pequeños a desarrollar su movimiento, su lenguaje, su forma de pensar y de relacionarse. Los primeros años son los de mayor aprendizaje, por eso es el mejor momento para acompañarlos.',
        senales: 'Retraso para sostener la cabeza, sentarse o caminar, poco balbuceo o pocas palabras para su edad, no entender órdenes sencillas, poco interés por los juguetes o por las personas y dificultad para imitar.',
        articulo: 'mi-hijo-necesita-psicologo'
      }
    },
    {
      slug: 'auxilio', titulo: 'Test de auxilio', ilustracion: 'auxilio', color: 'pink', tipo: 'auxilio',
      instrumento: 'Cuestionario de orientación de Qhali Nuna', autor: 'Equipo de Qhali Nuna, para saber qué tipo de ayuda necesitas y qué tan pronto',
      resumen: 'Cinco preguntas para saber qué ayuda necesitas ahora: cómo te sientes, cómo estás reaccionando, si vives violencia o si necesitas un documento psicológico.',
      consigna: 'Responde con sinceridad. Tus respuestas no se guardan ni se envían a nadie.',
      preguntas: [
        q('¿Cómo te sientes en este momento?', [['Tranquilo(a)', 0], ['Preocupado(a) o triste', 1], ['Muy angustiado(a), con ganas de llorar o sin poder calmarme', 2], ['Desesperado(a), siento que ya no puedo más', 3]], { alerta: 3 }),
        q('Últimamente, ¿cómo estás reaccionando ante lo que te pasa?', [['Como siempre, puedo manejarlo', 0], ['Me aíslo o dejé de hacer mis actividades', 1], ['Reacciono con enojo, gritos o golpes', 2], ['He pensado en hacerme daño o ya me lo he hecho', 3]], { alerta: 3 }),
        q('¿Estás sufriendo algún tipo de violencia (física, psicológica, sexual o económica)?', [['No', 0], ['No estoy seguro(a)', 1], ['Sí, en el pasado', 1], ['Sí, actualmente', 3]], { violencia: [1, 3] }),
        q('¿Necesitas algún documento psicológico?', [['No', 0], ['Certificado psicológico', 0], ['Constancia psicológica', 0], ['Informe psicológico', 0]], { documento: true }),
        q('¿Qué tan pronto necesitas que te atendamos?', [['Puedo esperar unos días', 0], ['Esta semana', 1], ['Hoy mismo', 2]], { urgencia: true })
      ],
      maximo: 11,
      rangos: [
        [2, 'Podemos acompañarte', 'Por lo que nos cuentas, no parece una urgencia. Igual puedes escribirnos para conversar o pedir una cita.', 'ok'],
        [5, 'Te recomendamos atención pronto', 'Estás pasando por un momento difícil. Escríbenos y buscamos juntos el horario más cercano para atenderte.', 'medio'],
        [11, 'Necesitas apoyo lo antes posible', 'Lo que estás viviendo es importante y no tienes que enfrentarlo solo(a). Escríbenos ahora y te atendemos lo antes posible.', 'alto']
      ],
      info: {
        que: 'El test de auxilio no mide un trastorno: es una guía rápida para saber qué tipo de ayuda necesitas y qué tan pronto. Te pregunta cómo te sientes, cómo estás reaccionando, si estás viviendo violencia y si necesitas un certificado, una constancia o un informe psicológico.',
        senales: 'Sentirte desbordado(a), no poder calmarte, aislarte, reaccionar con violencia, pensar en hacerte daño, vivir maltrato en casa o en la pareja, o necesitar un documento psicológico para un trámite.',
        articulo: 'psicologo-o-psiquiatra'
      }
    }
  ];

  /* Ilustraciones: un portapapeles con checks sobre una mancha de color, y un objeto según el test */
  var BOARD = '<path d="M70 18c22-6 52 2 60 26s-6 50-26 62-52 12-66-8-14-60 8-74z" style="fill:var(--blob)"/>' +
    '<g transform="rotate(-12 92 62)"><rect x="66" y="16" width="56" height="78" rx="6" fill="#fff" stroke="#1d2326" stroke-width="2.5"/>' +
    '<rect x="80" y="10" width="28" height="12" rx="4" fill="#1d2326"/>' +
    '<path d="M74 34h22M74 46h22M74 58h22M74 70h22M74 82h18" stroke="#c9c2b4" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M102 33l4 4 7-8M102 45l4 4 7-8M102 57l4 4 7-8M102 69l4 4 7-8" style="stroke:var(--accent)" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>';
  var OBJ = {
    ansiedad: '<path d="M30 70c-12 0-18-10-14-18 2-10 14-12 18-6 2-10 18-12 22-2 10-4 18 6 14 14 8 4 4 16-6 14-2 6-14 6-18 0-6 4-14 2-16-2z" style="fill:var(--accent)"/><path d="M28 58c6-6 10 4 16-2s8 6 14 0" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="40" cy="84" r="3" style="fill:var(--accent)"/><circle cx="46" cy="92" r="2" style="fill:var(--accent)"/>',
    depresion: '<path d="M18 62c-8 0-12-8-8-14 2-8 12-10 16-4 4-10 22-10 26 2 10-2 16 8 10 16z" style="fill:var(--accent)"/><path d="M30 56c2-6 12-6 14 0" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M22 72l-3 8M34 72l-3 8M46 72l-3 8M58 72l-3 8" style="stroke:var(--accent)" stroke-width="3" stroke-linecap="round"/>',
    alcohol: '<path d="M26 40h12v10c6 4 8 10 8 16v26H18V66c0-6 2-12 8-16z" style="fill:var(--accent)"/><rect x="27" y="30" width="10" height="10" rx="2" fill="#1d2326"/><path d="M50 64h18l-3 28H53z" fill="#fff" stroke="#1d2326" stroke-width="2.2"/><path d="M52 74h14" style="stroke:var(--accent)" stroke-width="3"/>',
    internet: '<rect x="14" y="52" width="52" height="34" rx="4" style="fill:var(--accent)" stroke="#1d2326" stroke-width="2.2"/><rect x="20" y="57" width="40" height="24" rx="2" fill="#fff"/><path d="M8 92h64l-6-6H14z" fill="#1d2326"/><path d="M30 69a10 10 0 0 1 20 0M34 72a6 6 0 0 1 12 0" style="stroke:var(--accent)" stroke-width="2.4" fill="none" stroke-linecap="round"/>',
    autismo: '<path d="M16 50h14a7 7 0 1 1 14 0h14v14a7 7 0 1 0 0 14v14H44a7 7 0 1 0-14 0H16z" style="fill:var(--accent)" stroke="#1d2326" stroke-width="2.2" stroke-linejoin="round"/><circle cx="37" cy="71" r="5" fill="#fff"/>',
    tdah: '<path d="M44 24L20 62h16l-6 32 28-42H42l8-28z" style="fill:var(--accent)" stroke="#1d2326" stroke-width="2.2" stroke-linejoin="round"/><path d="M10 42h8M8 54h6M62 74h8M64 86h6" stroke="#1d2326" stroke-width="2.4" stroke-linecap="round"/>',
    estimulacion: '<rect x="12" y="66" width="26" height="26" rx="4" style="fill:var(--accent)" stroke="#1d2326" stroke-width="2.2"/><rect x="40" y="66" width="26" height="26" rx="4" fill="#bfe8e3" stroke="#1d2326" stroke-width="2.2"/><rect x="26" y="38" width="26" height="26" rx="4" fill="#f3b47e" stroke="#1d2326" stroke-width="2.2" transform="rotate(-8 39 51)"/><path d="M20 86l5-14 5 14M22 81h6M49 72v14h5a3.5 3.5 0 0 0 0-7h-5 4a3.5 3.5 0 0 0 0-7z" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 46a6 6 0 1 0 0 10" stroke="#1d2326" stroke-width="2.4" fill="none" stroke-linecap="round" transform="rotate(-8 39 51)"/>',
    auxilio: '<circle cx="40" cy="64" r="25" style="fill:var(--accent)" stroke="#1d2326" stroke-width="2.2"/><path d="M40 39v13M40 76v13M15 64h13M52 64h13" stroke="#fff" stroke-width="8"/><circle cx="40" cy="64" r="12" fill="#fff8ee" stroke="#1d2326" stroke-width="2.2"/><circle cx="40" cy="64" r="25" fill="none" stroke="#1d2326" stroke-width="2.2"/>'
  };
  var COLORS = { pink: ['#fbd6e1', '#e5487b'], teal: ['#bfe8e3', '#1a7f7c'], peach: ['#fde0c6', '#e0843f'] };
  window.qnIllu = function (t) {
    var c = COLORS[t.color] || COLORS.teal;
    return '<svg viewBox="0 0 140 112" aria-hidden="true" style="--blob:' + c[0] + ';--accent:' + c[1] + '">' + BOARD + (OBJ[t.ilustracion] || '') + '</svg>';
  };
})();
