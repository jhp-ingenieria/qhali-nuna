/* Tests psicológicos de Qhali Nuna.
   Cada test: preguntas con sus propias respuestas y puntos, cómo se interpreta y su información.
   Los cuestionarios marcados como "instrumento" son herramientas de cribado reconocidas y de uso libre. */
(function () {
  var F4 = [['Ningún día', 0], ['Varios días', 1], ['Más de la mitad de los días', 2], ['Casi todos los días', 3]];
  var FREQ5 = [['Nunca', 0], ['Menos de una vez al mes', 1], ['Mensualmente', 2], ['Semanalmente', 3], ['A diario o casi a diario', 4]];
  var PCL = [['Nada', 0], ['Un poco', 1], ['Moderadamente', 2], ['Bastante', 3], ['Extremadamente', 4]];
  var CBI_F = [['Siempre', 100], ['A menudo', 75], ['A veces', 50], ['Rara vez', 25], ['Nunca o casi nunca', 0]];
  var CBI_G = [['En un grado muy alto', 100], ['En un grado alto', 75], ['En cierto grado', 50], ['En un grado bajo', 25], ['En un grado muy bajo', 0]];
  var ROS_POS = [['Muy de acuerdo', 3], ['De acuerdo', 2], ['En desacuerdo', 1], ['Muy en desacuerdo', 0]];
  var ROS_NEG = [['Muy de acuerdo', 0], ['De acuerdo', 1], ['En desacuerdo', 2], ['Muy en desacuerdo', 3]];
  var NET = [['Nunca', 0], ['Rara vez', 1], ['A veces', 2], ['A menudo', 3], ['Siempre', 4]];
  var SOC = [['Nada', 0], ['Un poco', 1], ['Bastante', 2], ['Mucho', 3]];
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
      slug: 'insomnio', titulo: 'Test de insomnio', ilustracion: 'insomnio', color: 'peach',
      instrumento: 'Escala Atenas de Insomnio (AIS)', autor: 'Soldatos, Dikeos y Paparrigopoulos (2000)',
      resumen: 'Revisa cómo has dormido y cómo te has sentido de día durante el último mes.',
      consigna: 'Piensa en el último mes. Marca lo que te pasó al menos tres veces por semana.',
      preguntas: [
        q('¿Cuánto tardas en dormirte desde que apagas la luz?', [['Me duermo sin problema', 0], ['Tardo un poco más de lo normal', 1], ['Tardo bastante más de lo normal', 2], ['Tardo muchísimo o no logro dormir', 3]]),
        q('¿Te despiertas durante la noche?', [['No, duermo de corrido', 0], ['Un poco, es un problema menor', 1], ['Bastante, es un problema considerable', 2], ['Mucho, es un problema serio o no duermo', 3]]),
        q('¿Te despiertas más temprano de lo que quisieras y ya no puedes volver a dormir?', [['No, despierto a mi hora', 0], ['Un poco más temprano', 1], ['Bastante más temprano', 2], ['Mucho más temprano o no duermo', 3]]),
        q('Las horas que duermes en total, ¿te alcanzan?', [['Sí, son suficientes', 0], ['Son un poco insuficientes', 1], ['Son bastante insuficientes', 2], ['Son muy insuficientes o no duermo', 3]]),
        q('Sin importar cuánto duermas, ¿cómo es la calidad de tu sueño?', [['Satisfactoria', 0], ['Un poco insatisfactoria', 1], ['Bastante insatisfactoria', 2], ['Muy insatisfactoria', 3]]),
        q('Durante el día, ¿cómo es tu sensación de bienestar?', [['Normal', 0], ['Un poco más baja', 1], ['Bastante más baja', 2], ['Muy baja', 3]]),
        q('Durante el día, ¿cómo rindes física y mentalmente?', [['Normal', 0], ['Un poco menos', 1], ['Bastante menos', 2], ['Mucho menos', 3]]),
        q('¿Sientes sueño durante el día?', [['No', 0], ['Un poco', 1], ['Bastante', 2], ['Mucho', 3]])
      ],
      maximo: 24,
      rangos: [
        [5, 'Sin señales de insomnio', 'Tu sueño parece estar bien. Mantén horarios regulares para dormir y despertar.', 'ok'],
        [9, 'Posible insomnio leve', 'Tienes algunas dificultades con el sueño. Revisa tus hábitos: horarios, pantallas antes de dormir, café o preocupaciones. Si continúa, consulta.', 'leve'],
        [15, 'Posible insomnio moderado', 'Tus problemas de sueño están afectando tu día. La terapia psicológica para el insomnio suele dar muy buenos resultados: te recomendamos consultar.', 'medio'],
        [24, 'Posible insomnio severo', 'Tus problemas de sueño son intensos y afectan mucho tu bienestar. Te recomendamos consultar con un profesional pronto.', 'alto']
      ],
      info: {
        que: 'El insomnio es la dificultad para quedarse dormido, para mantener el sueño o despertarse antes de tiempo, con cansancio, irritabilidad o bajo rendimiento durante el día. Puede ser pasajero, por una etapa de estrés, o volverse crónico.',
        senales: 'Tardar mucho en dormirse, despertarse varias veces en la noche, despertar muy temprano, sentir que el sueño no descansa, sueño y cansancio durante el día, dificultad para concentrarse y mal humor.',
        articulo: 'ansiedad-senales'
      }
    },
    {
      slug: 'estres-postraumatico', titulo: 'Test de estrés postraumático (TEPT)', ilustracion: 'tept', color: 'peach',
      instrumento: 'PCL-5 (Posttraumatic Stress Disorder Checklist for DSM-5)', autor: 'Weathers y colaboradores, National Center for PTSD (2013)',
      resumen: 'Para quienes vivieron una experiencia muy estresante o traumática: un accidente, una violencia, una pérdida brusca o un desastre.',
      consigna: 'Piensa en la experiencia más estresante que hayas vivido. En el último mes, ¿cuánto te ha molestado…?',
      preguntas: [
        q('Tener recuerdos repetidos, perturbadores y no deseados de esa experiencia', PCL),
        q('Tener sueños repetidos y perturbadores sobre esa experiencia', PCL),
        q('Sentir o actuar de repente como si la experiencia estuviera pasando otra vez, como si la revivieras', PCL),
        q('Sentirte muy mal cuando algo te recuerda la experiencia', PCL),
        q('Tener reacciones físicas fuertes cuando algo te la recuerda, como palpitaciones, falta de aire o sudor', PCL),
        q('Evitar recuerdos, pensamientos o sentimientos relacionados con la experiencia', PCL),
        q('Evitar personas, lugares, conversaciones, actividades u objetos que te la recuerdan', PCL),
        q('Tener problemas para recordar partes importantes de la experiencia', PCL),
        q('Tener creencias muy negativas sobre ti, los demás o el mundo, como “soy malo”, “no se puede confiar en nadie” o “el mundo es peligroso”', PCL),
        q('Culparte a ti o a otros por la experiencia o por lo que pasó después', PCL),
        q('Tener sentimientos negativos intensos como miedo, horror, rabia, culpa o vergüenza', PCL),
        q('Perder el interés en actividades que antes disfrutabas', PCL),
        q('Sentirte distante o desconectado de otras personas', PCL),
        q('Tener dificultad para sentir emociones positivas, como alegría o cariño por tus seres queridos', PCL),
        q('Sentirte irritable, tener arranques de rabia o actuar de forma agresiva', PCL),
        q('Arriesgarte demasiado o hacer cosas que podrían hacerte daño', PCL),
        q('Estar en alerta, vigilante o en guardia todo el tiempo', PCL),
        q('Sobresaltarte o asustarte con facilidad', PCL),
        q('Tener dificultad para concentrarte', PCL),
        q('Tener dificultad para dormirte o para seguir durmiendo', PCL)
      ],
      maximo: 80,
      rangos: [
        [14, 'Pocos síntomas', 'Tus respuestas muestran pocos síntomas de estrés postraumático. Si la experiencia todavía te pesa, hablarlo puede ayudarte.', 'ok'],
        [30, 'Algunos síntomas', 'Tienes algunos síntomas relacionados con la experiencia que viviste. Conversar con un psicólogo puede ayudarte a procesarla.', 'leve'],
        [80, 'Síntomas compatibles con estrés postraumático', 'Tu puntaje está por encima del punto de corte que se usa para detectar un posible estrés postraumático. Te recomendamos una evaluación con un psicólogo: el TEPT tiene tratamiento eficaz.', 'alto']
      ],
      info: {
        que: 'El trastorno de estrés postraumático (TEPT) puede aparecer después de vivir o presenciar una experiencia muy dura: un accidente, una agresión, violencia, un desastre natural o la muerte repentina de alguien cercano. La persona sigue reviviendo lo ocurrido, evita lo que se lo recuerda y se mantiene en alerta mucho tiempo después.',
        senales: 'Recuerdos o pesadillas que vuelven, evitar lugares o conversaciones, sentirse en peligro constante, sobresaltos, irritabilidad, culpa, desconexión de los demás y problemas de sueño.',
        articulo: 'duelo'
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
      slug: 'depresion-posparto', titulo: 'Test de depresión posparto', ilustracion: 'posparto', color: 'pink',
      instrumento: 'Escala de Depresión Posnatal de Edimburgo (EPDS)', autor: 'Cox, Holden y Sagovsky (1987)',
      resumen: 'Para mamás que tuvieron a su bebé en el último año, o que están embarazadas.',
      consigna: 'Marca la respuesta que más se acerque a cómo te has sentido en los últimos 7 días, no solo hoy.',
      preguntas: [
        q('He podido reírme y ver el lado bueno de las cosas', [['Tanto como siempre', 0], ['No tanto como antes', 1], ['Mucho menos que antes', 2], ['Para nada', 3]]),
        q('He mirado el futuro con ilusión', [['Tanto como siempre', 0], ['Algo menos que antes', 1], ['Mucho menos que antes', 2], ['Casi nada', 3]]),
        q('Me he culpado sin necesidad cuando las cosas salían mal', [['Sí, la mayoría de las veces', 3], ['Sí, algunas veces', 2], ['No muy seguido', 1], ['No, nunca', 0]]),
        q('He estado ansiosa o preocupada sin un motivo claro', [['No, para nada', 0], ['Casi nunca', 1], ['Sí, a veces', 2], ['Sí, muy seguido', 3]]),
        q('He sentido miedo o pánico sin un motivo claro', [['Sí, bastante', 3], ['Sí, a veces', 2], ['No mucho', 1], ['No, para nada', 0]]),
        q('Las cosas me han sobrepasado', [['Sí, casi siempre no he podido con ellas', 3], ['Sí, a veces no he podido como antes', 2], ['No, casi siempre he podido', 1], ['No, he podido como siempre', 0]]),
        q('Me he sentido tan infeliz que me ha costado dormir', [['Sí, la mayoría de las veces', 3], ['Sí, a veces', 2], ['No muy seguido', 1], ['No, para nada', 0]]),
        q('Me he sentido triste o desdichada', [['Sí, casi siempre', 3], ['Sí, bastante seguido', 2], ['No muy seguido', 1], ['No, para nada', 0]]),
        q('Me he sentido tan infeliz que he llorado', [['Sí, casi siempre', 3], ['Sí, bastante seguido', 2], ['Solo de vez en cuando', 1], ['No, nunca', 0]]),
        q('He pensado en hacerme daño', [['Sí, bastante seguido', 3], ['A veces', 2], ['Casi nunca', 1], ['Nunca', 0]], { alerta: true })
      ],
      maximo: 30,
      rangos: [
        [9, 'Pocos síntomas de depresión', 'Tus respuestas muestran pocos síntomas. La llegada de un bebé trae cambios grandes: busca apoyo en tu familia y descansa cuando puedas.', 'ok'],
        [12, 'Posible depresión posparto', 'Tus respuestas muestran síntomas que conviene revisar. Te recomendamos conversar con un psicólogo o con tu médico.', 'medio'],
        [30, 'Probable depresión posparto', 'Tus respuestas muestran síntomas importantes de depresión. No es tu culpa y tiene tratamiento: te recomendamos buscar atención pronto.', 'alto']
      ],
      info: {
        que: 'Después del parto muchas mamás sienten tristeza y cambios de humor los primeros días; suele pasar sola en dos semanas. La depresión posparto es más intensa y dura más: puede aparecer en el embarazo o durante el primer año del bebé, y dificulta cuidarse a una misma y al bebé. No es debilidad ni falta de amor: es frecuente y tiene tratamiento.',
        senales: 'Tristeza o llanto frecuente, ansiedad, sentirse sobrepasada, culpa, irritabilidad, cambios en el sueño y el apetito, dificultad para conectar con el bebé y, a veces, pensamientos de hacerse daño.',
        articulo: 'tipos-de-terapia'
      }
    },
    {
      slug: 'burnout', titulo: 'Test de burnout', ilustracion: 'burnout', color: 'peach',
      instrumento: 'Inventario de Burnout de Copenhague (CBI)', autor: 'Kristensen y colaboradores (2005)',
      resumen: 'Mide tu agotamiento personal y el relacionado con tu trabajo.',
      consigna: 'Responde pensando en cómo te has sentido en las últimas semanas.',
      preguntas: [
        q('¿Con qué frecuencia te sientes cansado?', CBI_F),
        q('¿Con qué frecuencia te sientes físicamente agotado?', CBI_F),
        q('¿Con qué frecuencia te sientes emocionalmente agotado?', CBI_F),
        q('¿Con qué frecuencia piensas: “ya no puedo más”?', CBI_F),
        q('¿Con qué frecuencia te sientes desgastado?', CBI_F),
        q('¿Con qué frecuencia te sientes débil y con facilidad para enfermarte?', CBI_F),
        q('¿Tu trabajo te desgasta emocionalmente?', CBI_G),
        q('¿Te sientes quemado por tu trabajo?', CBI_G),
        q('¿Tu trabajo te frustra?', CBI_G),
        q('¿Te sientes agotado al final de tu jornada?', CBI_F),
        q('¿Te sientes cansado en la mañana solo de pensar en otro día de trabajo?', CBI_F),
        q('¿Sientes que cada hora de trabajo te cansa?', CBI_F),
        q('¿Tienes energía para tu familia y tus amigos en tu tiempo libre?', [['Siempre', 0], ['A menudo', 25], ['A veces', 50], ['Rara vez', 75], ['Nunca o casi nunca', 100]])
      ],
      promedio: true, maximo: 100,
      rangos: [
        [49, 'Burnout bajo', 'Tu nivel de agotamiento es bajo. Sigue cuidando tus pausas y tu tiempo libre.', 'ok'],
        [74, 'Burnout moderado', 'Tienes un agotamiento importante. Revisa tu carga y tus descansos; conversar con un psicólogo te puede ayudar a evitar que empeore.', 'medio'],
        [99, 'Burnout alto', 'Estás muy agotado. Este nivel suele afectar la salud y el trabajo: te recomendamos buscar apoyo psicológico.', 'alto'],
        [100, 'Burnout severo', 'Tu agotamiento es extremo. Te recomendamos buscar ayuda profesional pronto y, si puedes, hablar con tu empleador sobre tu carga.', 'alto']
      ],
      info: {
        que: 'El burnout o síndrome de estar quemado es un agotamiento físico y emocional que aparece después de mucho tiempo de estrés, sobre todo en el trabajo o en tareas de cuidado. La persona siente que ya no tiene energía, se distancia de lo que hace y rinde menos.',
        senales: 'Cansancio que no se va con el descanso, irritabilidad, desmotivación, sensación de no poder más, dolores frecuentes, problemas de sueño y enfermarse más seguido.',
        articulo: 'ansiedad-senales'
      }
    },
    {
      slug: 'autoestima', titulo: 'Test de autoestima', ilustracion: 'autoestima', color: 'teal',
      instrumento: 'Escala de Autoestima de Rosenberg', autor: 'Morris Rosenberg (1965)',
      resumen: 'Diez frases para saber cómo te valoras a ti mismo.',
      consigna: '¿Qué tan de acuerdo estás con cada frase?',
      preguntas: [
        q('Siento que soy una persona valiosa, al menos tanto como los demás', ROS_POS),
        q('Estoy convencido de que tengo buenas cualidades', ROS_POS),
        q('En general, tiendo a pensar que soy un fracaso', ROS_NEG),
        q('Puedo hacer las cosas tan bien como la mayoría de las personas', ROS_POS),
        q('Siento que no tengo mucho de qué sentirme orgulloso', ROS_NEG),
        q('Tengo una actitud positiva hacia mí mismo', ROS_POS),
        q('En general, estoy satisfecho conmigo mismo', ROS_POS),
        q('Me gustaría poder respetarme más', ROS_NEG),
        q('A veces me siento realmente inútil', ROS_NEG),
        q('A veces pienso que no sirvo para nada', ROS_NEG)
      ],
      maximo: 30,
      rangos: [
        [14, 'Autoestima baja', 'Tus respuestas muestran una autoestima baja. Cómo te ves influye en todo lo que haces: trabajarla con un psicólogo puede cambiar mucho tu día a día.', 'alto'],
        [25, 'Autoestima normal', 'Tu autoestima está dentro de lo habitual. Hay días mejores y peores; si alguna frase te costó, vale la pena explorarla.', 'leve'],
        [30, 'Autoestima alta', 'Tienes una buena valoración de ti mismo. Sigue cuidándola.', 'ok']
      ],
      info: {
        que: 'La autoestima es la forma en que nos valoramos. Una autoestima sana nos permite reconocer nuestras cualidades y límites, poner límites a los demás y enfrentar los errores sin hundirnos. Cuando es baja, la persona se critica mucho, se compara y siente que no vale lo suficiente.',
        senales: 'Autocrítica constante, miedo a equivocarse, dificultad para decir que no, necesidad de aprobación, compararse con otros y sentir que los logros no cuentan.',
        articulo: 'tipos-de-terapia'
      }
    },
    {
      slug: 'ansiedad-social', titulo: 'Test de ansiedad social', ilustracion: 'social', color: 'pink',
      instrumento: 'Cuestionario de orientación de Qhali Nuna', autor: 'Equipo de Qhali Nuna, basado en las situaciones que más se asocian a la ansiedad social',
      resumen: 'Revisa cuánto miedo o incomodidad sientes en situaciones con otras personas.',
      consigna: '¿Cuánto miedo, nervios o incomodidad sientes en estas situaciones?',
      preguntas: [
        q('Hablar con personas que no conoces', SOC),
        q('Hablar o presentar algo frente a un grupo', SOC),
        q('Comer o beber delante de otras personas', SOC),
        q('Ser el centro de atención', SOC),
        q('Hablar con alguien con autoridad, como un jefe o un profesor', SOC),
        q('Ir a fiestas o reuniones sociales', SOC),
        q('Que otras personas te miren mientras haces algo', SOC),
        q('Dar tu opinión o decir que no estás de acuerdo', SOC),
        q('Llamar por teléfono a alguien que no conoces bien', SOC),
        q('¿Con qué frecuencia evitas estas situaciones por miedo a hacer el ridículo o a que te juzguen?', [['Nunca', 0], ['A veces', 1], ['A menudo', 2], ['Siempre', 3]])
      ],
      maximo: 30,
      rangos: [
        [9, 'Ansiedad social baja', 'Las situaciones sociales no parecen causarte un malestar importante.', 'ok'],
        [19, 'Ansiedad social moderada', 'Algunas situaciones con otras personas te generan bastante malestar. Si te hacen perder oportunidades, un psicólogo puede ayudarte.', 'medio'],
        [30, 'Ansiedad social alta', 'El miedo a ser juzgado parece afectar mucho tu vida. La ansiedad social responde muy bien a la terapia: te recomendamos consultar.', 'alto']
      ],
      info: {
        que: 'La ansiedad social, también llamada fobia social, es un miedo intenso a ser observado, juzgado o a hacer el ridículo delante de otros. Va más allá de la timidez: lleva a evitar situaciones y puede limitar los estudios, el trabajo y las amistades.',
        senales: 'Nervios intensos antes de hablar con otros, sonrojarse, temblar o sudar, quedarse en blanco, pensar mucho en lo que los demás piensan y evitar reuniones o hablar en público.',
        articulo: 'ansiedad-senales'
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
    insomnio: '<path d="M44 28a24 24 0 1 0 26 34 20 20 0 0 1-26-34z" style="fill:var(--accent)"/><path d="M18 30h8l-8 8h8M30 18h6l-6 6h6" stroke="#1d2326" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    tept: '<path d="M30 92h26l4-24H26z" style="fill:var(--accent)"/><path d="M43 68V44" stroke="#1d2326" stroke-width="2.5"/><path d="M43 52c-10-2-16-10-14-18 10 2 14 8 14 18zM43 46c6-8 14-10 20-6-4 8-12 10-20 6z" fill="#2f8a6a"/><circle cx="43" cy="36" r="6" fill="#fff" stroke="#1d2326" stroke-width="2"/>',
    alcohol: '<path d="M26 40h12v10c6 4 8 10 8 16v26H18V66c0-6 2-12 8-16z" style="fill:var(--accent)"/><rect x="27" y="30" width="10" height="10" rx="2" fill="#1d2326"/><path d="M50 64h18l-3 28H53z" fill="#fff" stroke="#1d2326" stroke-width="2.2"/><path d="M52 74h14" style="stroke:var(--accent)" stroke-width="3"/>',
    internet: '<rect x="14" y="52" width="52" height="34" rx="4" style="fill:var(--accent)" stroke="#1d2326" stroke-width="2.2"/><rect x="20" y="57" width="40" height="24" rx="2" fill="#fff"/><path d="M8 92h64l-6-6H14z" fill="#1d2326"/><path d="M30 69a10 10 0 0 1 20 0M34 72a6 6 0 0 1 12 0" style="stroke:var(--accent)" stroke-width="2.4" fill="none" stroke-linecap="round"/>',
    posparto: '<circle cx="40" cy="62" r="22" style="fill:var(--accent)"/><circle cx="40" cy="58" r="9" fill="#fff"/><path d="M28 78c4-6 20-6 24 0" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M64 70c0-6 8-6 8 0 0-6 8-6 8 0 0 6-8 10-8 10s-8-4-8-10z" fill="#e5487b"/>',
    burnout: '<path d="M22 92c0-10 4-14 4-22-10-4-12-24 2-32 12-8 32-2 34 14 1 6-2 10 2 14l-6 2v8c0 4-4 6-10 4v12z" style="fill:var(--accent)"/><rect x="30" y="44" width="22" height="12" rx="2" fill="#fff" stroke="#1d2326" stroke-width="2"/><rect x="52" y="48" width="3" height="4" fill="#1d2326"/><rect x="33" y="47" width="5" height="6" fill="#e5487b"/>',
    autoestima: '<path d="M18 62h30l-4 28H22z" style="fill:var(--accent)"/><path d="M33 62V44" stroke="#2f8a6a" stroke-width="3"/><path d="M33 48c-8 0-12-6-12-12 8 0 12 4 12 12zM33 44c2-10 10-14 16-12-2 8-8 12-16 12z" fill="#2f8a6a"/><path d="M56 30l-8 10M60 36l-6 6M52 26l-4 8" stroke="#6fb7e6" stroke-width="2.4" stroke-linecap="round"/><path d="M58 22h16v8l-6 4H58z" fill="#1d2326"/>',
    social: '<circle cx="30" cy="58" r="13" style="fill:var(--accent)"/><circle cx="54" cy="78" r="12" fill="#fff" stroke="#1d2326" stroke-width="2"/><circle cx="24" cy="86" r="10" fill="#f3b47e"/><path d="M25 61c2 3 8 3 10 0M50 81c2-3 6-3 8 0M20 89h8" stroke="#1d2326" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="26" cy="55" r="1.6" fill="#1d2326"/><circle cx="34" cy="55" r="1.6" fill="#1d2326"/><circle cx="51" cy="75" r="1.6" fill="#1d2326"/><circle cx="57" cy="75" r="1.6" fill="#1d2326"/>'
  };
  var COLORS = { pink: ['#fbd6e1', '#e5487b'], teal: ['#bfe8e3', '#1a7f7c'], peach: ['#fde0c6', '#e0843f'] };
  window.qnIllu = function (t) {
    var c = COLORS[t.color] || COLORS.teal;
    return '<svg viewBox="0 0 140 112" aria-hidden="true" style="--blob:' + c[0] + ';--accent:' + c[1] + '">' + BOARD + (OBJ[t.ilustracion] || '') + '</svg>';
  };
})();
