/* Artículos del blog de Qhali Nuna. Para agregar uno, copia un bloque y cambia sus datos. */
window.QN_ICONS = {
  brain: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M26 10a8 8 0 0 0-8 8 8 8 0 0 0-6 13 8 8 0 0 0 4 14 8 8 0 0 0 10 9V10z"/><path d="M38 10a8 8 0 0 1 8 8 8 8 0 0 1 6 13 8 8 0 0 1-4 14 8 8 0 0 1-10 9V10z"/><path d="M26 24h-4M38 24h4M26 38h-5M38 38h5"/></svg>',
  wave: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 32c5-8 9-8 14 0s9 8 14 0 9-8 14 0 7 6 10 4"/><path d="M6 46c5-8 9-8 14 0s9 8 14 0 9-8 14 0 7 6 10 4" opacity=".5"/><circle cx="32" cy="16" r="6"/></svg>',
  child: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="18" r="7"/><circle cx="44" cy="26" r="5"/><path d="M12 54c1-10 6-16 12-16s11 6 12 16M36 54c1-7 4-11 8-11s7 4 8 11"/></svg>',
  laptop: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="12" y="14" width="40" height="28" rx="4"/><path d="M6 50h52"/><circle cx="32" cy="25" r="5"/><path d="M24 38c2-4 5-6 8-6s6 2 8 6"/></svg>',
  people: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="20" cy="20" r="7"/><circle cx="44" cy="20" r="7"/><path d="M6 52c1-10 7-16 14-16s13 6 14 16M30 52c1-10 7-16 14-16s13 6 14 16"/></svg>',
  leaf: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M14 50C10 26 26 10 52 12c2 26-14 42-38 38z"/><path d="M14 50c10-12 20-20 30-26"/></svg>',
  check: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="8" width="36" height="48" rx="5"/><path d="M22 24l4 4 8-8M22 40h20M22 48h12"/></svg>',
  sun: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="32" cy="32" r="11"/><path d="M32 6v8M32 50v8M6 32h8M50 32h8M13.6 13.6l5.7 5.7M44.7 44.7l5.7 5.7M13.6 50.4l5.7-5.7M44.7 19.3l5.7-5.7"/></svg>'
};

window.QN_ARTICULOS = [
  {
    slug: "psicologo-o-psiquiatra",
    titulo: "¿Psicólogo o psiquiatra? Diferencias y a quién acudir",
    tag: "Primeros pasos",
    icono: "brain", color: "c-teal", minutos: 4,
    resumen: "Los dos cuidan la salud mental, pero trabajan de forma distinta. Te explicamos cuándo conviene cada uno.",
    cuerpo: `
<p>Es una de las dudas más comunes antes de pedir ayuda. Los dos profesionales cuidan la salud mental, pero su formación y su forma de trabajar son diferentes, y muchas veces trabajan juntos.</p>
<h2>¿Qué hace un psicólogo?</h2>
<p>El psicólogo estudió Psicología en la universidad. En el Perú, para atender debe estar colegiado en el Colegio de Psicólogos del Perú. Su trabajo es <strong>evaluar y acompañar</strong> a las personas mediante la conversación y técnicas terapéuticas: te ayuda a entender lo que sientes, a cambiar formas de pensar o actuar que te hacen daño y a desarrollar herramientas para el día a día.</p>
<p>El psicólogo <strong>no receta medicamentos</strong>. Atiende, por ejemplo, ansiedad, estrés, problemas de autoestima, duelo, dificultades de pareja o de familia, y también realiza evaluaciones psicológicas.</p>
<h2>¿Qué hace un psiquiatra?</h2>
<p>El psiquiatra es un <strong>médico</strong> que se especializó en Psiquiatría. Puede diagnosticar trastornos mentales y <strong>recetar medicamentos</strong> cuando son necesarios, por ejemplo en una depresión grave, un trastorno bipolar o una psicosis.</p>
<h2>¿A quién acudo primero?</h2>
<p>Si sientes que algo no va bien, pero puedes seguir con tu vida diaria aunque te cueste, un psicólogo suele ser un buen primer paso. Si en la evaluación ve que necesitas apoyo médico, te recomendará consultar también con un psiquiatra.</p>
<ul>
<li>Busca a un <strong>psicólogo</strong> si quieres hablar de lo que te pasa, entender tus emociones o mejorar tus relaciones.</li>
<li>Busca a un <strong>psiquiatra</strong> si tus síntomas son muy intensos, no te dejan dormir, comer o trabajar desde hace semanas, o si ya tomas medicación.</li>
</ul>
<p>Lo más importante es no esperar a que el malestar sea muy grande. Pedir ayuda a tiempo hace la diferencia.</p>`
  },
  {
    slug: "ansiedad-senales",
    titulo: "Ansiedad: señales frecuentes y qué puedes hacer hoy",
    tag: "Ansiedad",
    icono: "wave", color: "c-pink", minutos: 5,
    resumen: "Sentir ansiedad a veces es normal. Aprende a reconocer cuándo se vuelve un problema y qué te puede ayudar.",
    cuerpo: `
<p>La ansiedad es una reacción natural del cuerpo ante algo que percibimos como una amenaza. Nos prepara para actuar: el corazón late más rápido, respiramos más deprisa y estamos más alerta. Sentirla antes de un examen o una entrevista es normal.</p>
<p>El problema aparece cuando la ansiedad <strong>es muy intensa, dura mucho tiempo o aparece sin un motivo claro</strong>, y empieza a afectar tu sueño, tu trabajo, tus estudios o tus relaciones.</p>
<h2>Señales frecuentes</h2>
<ul>
<li>Preocupación constante que cuesta controlar.</li>
<li>Nerviosismo, inquietud o sensación de estar “con los nervios de punta”.</li>
<li>Dificultad para dormir o para concentrarse.</li>
<li>Tensión muscular, dolor de cabeza o molestias en el estómago.</li>
<li>Palpitaciones, falta de aire o sensación de mareo.</li>
<li>Evitar lugares o situaciones por miedo a sentirse mal.</li>
</ul>
<h2>Qué puedes hacer hoy</h2>
<p><strong>Respira despacio.</strong> Inhala por la nariz contando hasta cuatro, sostén el aire dos segundos y exhala por la boca contando hasta seis. Repite durante dos o tres minutos.</p>
<p><strong>Mueve el cuerpo.</strong> Caminar 20 o 30 minutos ayuda a bajar la tensión.</p>
<p><strong>Cuida lo básico.</strong> Dormir a horas parecidas, comer a tus horas y reducir el café, las bebidas energéticas y el alcohol ayuda mucho más de lo que parece.</p>
<p><strong>Habla con alguien de confianza.</strong> Contar lo que sientes ya alivia una parte del peso.</p>
<h2>¿Cuándo pedir ayuda?</h2>
<p>Si la ansiedad dura varias semanas, si te impide hacer tu vida normal o si sufres ataques de pánico, conviene consultar con un psicólogo. La ansiedad responde muy bien a la terapia, y aprender a manejarla es posible.</p>
<p>Si quieres una primera idea de cómo estás, puedes hacer nuestro <a href="test.html?t=ansiedad">test de ansiedad</a>. No es un diagnóstico, pero te ayuda a ponerle nombre a lo que sientes.</p>`
  },
  {
    slug: "mi-hijo-necesita-psicologo",
    titulo: "¿Cómo saber si mi hijo o hija necesita ir al psicólogo?",
    tag: "Niños y adolescentes",
    icono: "child", color: "c-peach", minutos: 5,
    resumen: "Algunos cambios de conducta son parte de crecer y otros piden atención. Estas señales te pueden orientar.",
    cuerpo: `
<p>Los niños y adolescentes no siempre saben poner en palabras lo que sienten. Muchas veces el malestar se nota en su <strong>conducta</strong>: cómo duermen, cómo juegan, cómo les va en el colegio o cómo se relacionan.</p>
<h2>Señales que vale la pena observar</h2>
<ul>
<li>Cambios bruscos de humor, tristeza o irritabilidad que duran semanas.</li>
<li>Problemas para dormir, pesadillas frecuentes o volver a mojar la cama.</li>
<li>Bajada repentina en las notas o rechazo a ir al colegio.</li>
<li>Aislarse de sus amigos o dejar de disfrutar lo que antes le gustaba.</li>
<li>Rabietas o peleas muy frecuentes, más de lo esperable para su edad.</li>
<li>Miedos intensos que le impiden hacer cosas cotidianas.</li>
<li>En adolescentes: cambios en la alimentación, consumo de alcohol u otras sustancias, o hablar de no querer vivir.</li>
</ul>
<h2>Momentos que pueden afectarles</h2>
<p>Una separación de los padres, una mudanza, el nacimiento de un hermano, la muerte de un familiar, el acoso escolar o un cambio de colegio son situaciones que pueden necesitar acompañamiento, aunque el niño parezca estar bien.</p>
<h2>¿Cómo es la terapia para niños?</h2>
<p>Con los más pequeños, el psicólogo usa el <strong>juego, el dibujo y las historias</strong>, porque así se expresan mejor. Con los adolescentes, la conversación ocupa más espacio. En los dos casos, la familia participa: los padres reciben orientación para acompañar en casa.</p>
<h2>Un consejo</h2>
<p>Explícale a tu hijo o hija, con palabras sencillas, que va a ir a hablar con alguien que ayuda a las personas a sentirse mejor. Evita presentarlo como un castigo. Si tienes dudas, escríbenos: podemos orientarte antes de la primera cita.</p>`
  },
  {
    slug: "terapia-en-linea",
    titulo: "Terapia en línea: cómo prepararte para tu primera sesión",
    tag: "Terapia en línea",
    icono: "laptop", color: "c-teal", minutos: 4,
    resumen: "La terapia por videollamada es una opción práctica y eficaz. Estos consejos te ayudan a aprovecharla al máximo.",
    cuerpo: `
<p>La terapia en línea permite recibir atención psicológica desde tu casa, sin viajes ni tiempos de espera. Diversos estudios muestran que, para muchos problemas frecuentes como la ansiedad o la depresión, puede ser <strong>tan útil como la terapia presencial</strong>.</p>
<h2>Antes de la sesión</h2>
<ul>
<li><strong>Busca un lugar privado</strong>, donde nadie te escuche y puedas hablar con tranquilidad. Si en casa es difícil, algunas personas usan el auto o un espacio prestado.</li>
<li><strong>Revisa tu conexión</strong> a internet y carga el celular o la laptop.</li>
<li><strong>Usa audífonos</strong>: mejoran el sonido y te dan más privacidad.</li>
<li><strong>Ten a mano</strong> agua, pañuelos y algo para tomar notas.</li>
<li><strong>Conéctate unos minutos antes</strong> para probar la cámara y el micrófono.</li>
</ul>
<h2>Durante la sesión</h2>
<p>Habla con la misma confianza que tendrías en un consultorio. Lo que conversas es confidencial. Si la conexión falla, no te preocupes: tu psicólogo te volverá a llamar o te escribirá para continuar.</p>
<h2>Después de la sesión</h2>
<p>Date unos minutos antes de volver a tus actividades. Anota lo que te quedó dando vueltas: te servirá para la próxima sesión.</p>
<h2>¿Es para mí?</h2>
<p>La terapia en línea es una buena opción si vives lejos, si tienes poco tiempo o si te sientes más cómodo hablando desde casa. En situaciones de crisis o cuando el psicólogo lo considera necesario, se recomienda la atención presencial. En Qhali Nuna puedes elegir: atendemos en línea y en nuestros locales de Espinar y Sicuani.</p>`
  },
  {
    slug: "tipos-de-terapia",
    titulo: "Terapia individual, de pareja o familiar: ¿cuál necesito?",
    tag: "Tipos de terapia",
    icono: "people", color: "c-pink", minutos: 4,
    resumen: "Cada tipo de terapia tiene su momento. Te contamos en qué consiste cada una y cómo elegir.",
    cuerpo: `
<p>No todas las terapias son iguales. Según lo que estés viviendo, puede convenirte trabajar a solas con tu psicólogo, con tu pareja o con tu familia.</p>
<h2>Terapia individual</h2>
<p>Es un espacio solo para ti. Sirve para trabajar emociones como la ansiedad, la tristeza o el enojo, la autoestima, el estrés, el duelo o decisiones difíciles. Tú y tu psicólogo eligen juntos los objetivos y el ritmo.</p>
<h2>Terapia de pareja</h2>
<p>Asisten los dos miembros de la pareja. Ayuda cuando hay discusiones frecuentes, problemas de comunicación, celos, una infidelidad, diferencias en la crianza o cuando están pensando en separarse y quieren hacerlo de la mejor manera. El psicólogo no toma partido: ayuda a que los dos se escuchen.</p>
<h2>Terapia familiar</h2>
<p>Participan varios miembros de la familia. Es útil en conflictos entre padres e hijos, cambios importantes como una separación o una mudanza, la llegada de un nuevo integrante, una enfermedad o la pérdida de un ser querido.</p>
<h2>Terapia para niños y adolescentes</h2>
<p>Se adapta a la edad: con los niños se trabaja con juegos y dibujos, y con los adolescentes con conversación. Los padres también participan para acompañar el proceso en casa.</p>
<h2>¿Y si no sé cuál elegir?</h2>
<p>No necesitas saberlo antes de escribirnos. Cuéntanos qué está pasando y te orientamos sobre el tipo de atención que mejor se adapta a ti.</p>`
  },
  {
    slug: "duelo",
    titulo: "Duelo: cómo atravesar la pérdida de un ser querido",
    tag: "Duelo",
    icono: "leaf", color: "c-peach", minutos: 5,
    resumen: "El duelo no tiene un tiempo fijo ni una forma correcta. Estas ideas te pueden acompañar en el proceso.",
    cuerpo: `
<p>El duelo es la respuesta natural a una pérdida. Suele asociarse a la muerte de un ser querido, pero también aparece tras una separación, la pérdida de un trabajo, una mudanza lejos de casa o una enfermedad.</p>
<h2>No hay una forma “correcta” de vivirlo</h2>
<p>Cada persona vive el duelo a su manera y a su ritmo. Es común sentir tristeza, enojo, culpa, cansancio, dificultad para concentrarse o incluso alivio, y pasar de una emoción a otra en el mismo día. Todo eso es parte del proceso.</p>
<h2>Lo que puede ayudarte</h2>
<ul>
<li><strong>Permítete sentir.</strong> Llorar o hablar de la persona que se fue no te hace más débil.</li>
<li><strong>Apóyate en otros.</strong> Familia, amigos o tu comunidad pueden acompañarte aunque no tengan las palabras exactas.</li>
<li><strong>Mantén rutinas sencillas:</strong> comer, dormir y salir a caminar, aunque cueste.</li>
<li><strong>Busca tus propios rituales:</strong> una misa, visitar un lugar, escribir una carta o guardar un recuerdo especial.</li>
<li><strong>Ten paciencia con las fechas importantes</strong>, como cumpleaños o aniversarios: es normal que el dolor regrese con fuerza.</li>
</ul>
<h2>¿Cuándo buscar ayuda profesional?</h2>
<p>Conviene consultar si, pasados varios meses, el dolor no disminuye y te impide hacer tu vida diaria, si te aíslas por completo, si sientes una culpa que no te deja en paz o si piensas que no vale la pena seguir viviendo. La terapia te ofrece un espacio seguro para atravesar la pérdida.</p>
<p>Si tienes pensamientos de hacerte daño, busca ayuda de inmediato: llama a la <strong>Línea 113, opción 5</strong>, del Ministerio de Salud, o al <strong>106</strong> (SAMU) en una emergencia.</p>`
  }
];
