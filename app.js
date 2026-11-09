(() => {
  // src/data/units.js
  var units = [
    {
      id: 9,
      title: "Enrutamiento",
      summary: "Selección de rutas y tablas de enrutamiento",
      icon: "route",
      tone: "violet",
      questions: [
        {
          text: "¿Cuál es la función de un router?",
          options: [
            "Su funcionamiento depende de la cantidad de puertos que tenga el equipo.",
            "El administrador de red selecciona la interfaz más apropiada para el router.",
            "Transmite paquetes de un enlace a otro mediante la función de conmutación.",
            "Transmite paquetes de un enlace a otro mediante una función de determinación de la ruta y la función de conmutación."
          ],
          correct: 3
        },
        {
          text: "Enrutamiento dinámico: ¿Cuál de todas es correcta?",
          options: [
            "Decisiones basadas en el estado de la red y la topología actual.",
            "Todas las decisiones son basadas en la información local.",
            "El enrutamiento estático tiene mejores ventajas.",
            "Las decisiones son basadas en el administrador de red."
          ],
          correct: 0
        },
        {
          text: "¿Qué es el ruteo?",
          options: [
            "Elije la mejor ruta en base al direccionamiento MAC.",
            "Mantiene y verifica controles de acceso.",
            "Requiere conocer la ruta origen y destino.",
            "El ruteo es el proceso de selección de un camino sobre el que se enviarán datagramas."
          ],
          correct: 3
        },
        {
          text: "En el concepto de enrutamiento orientado a la conexión:",
          options: [
            "La decisión la toma el administrador de red.",
            "La decisión depende del peso que tenga el enlace.",
            "La decisión se toma datagrama a datagrama.",
            "La decisión se toma una vez."
          ],
          correct: 3
        },
        {
          text: "Cuando IP recibe un paquete que es para ese nodo debe pasar los datos al protocolo correcto de la capa de transporte (TCP ó UDP):",
          options: ["TCP y UDP 17", "TCP 6 y UDP 17", "TCP 6 y UDP 7", "TCP 16 y UDP 17"],
          correct: 1
        },
        {
          text: "Enrutamiento estático. ¿Cuál de todas es falsa?",
          options: [
            "Inapropiado para redes con topología cambiante.",
            "Considera las condiciones actuales de la red.",
            "Las rutas se determinan antes de la puesta en servicio de la red.",
            "Simple y de buenos resultados para tráfico y topología constantes."
          ],
          correct: 1
        },
        {
          text: "¿Cuál de los siguientes conceptos de ruteo es falso?",
          options: [
            "Función correspondiente al nivel IP.",
            "Las tablas pueden ser estáticas o dinámicas (si se utiliza un protocolo de ruteo).",
            "La decisión se toma en base a tablas de ruteo.",
            "Para un datagrama (originado en el equipo o entrante) debe decidirse, en base a su dirección de origen, hacia qué equipo enviarlo."
          ],
          correct: 3
        },
        {
          text: "¿Cuáles son los tipos de enrutamiento dinámico?",
          options: [
            "Adaptativo centralizado y distribuido.",
            "Adaptativo centralizado, adaptativo aislado y distribuido.",
            "Adaptativo centralizado, vector distancia y estado de enlace.",
            "Adaptativo centralizado, adaptativo aislado y vector distancia."
          ],
          correct: 1
        },
        {
          text: "Protocolos de enrutamiento. ¿Cuál de todas no es correcta?",
          options: [
            "Flexibilidad: adaptarse rápidamente a los cambios.",
            "Alto costo y mayor ingeniería para redes grandes o pequeñas.",
            "Optimización: seleccionar la mejor ruta, según las métricas y su peso.",
            "Convergencia rápida: llegar rápidamente a un acuerdo común de rutas disponibles.",
            "Solidez y estabilidad: funcionar ante fallas o errores."
          ],
          correct: 1
        },
        {
          text: "Una tabla de enrutamiento contiene pares (N, R) donde:",
          options: [
            "N es la dirección IP de una red origen y R la dirección IP del “salto siguiente”.",
            "N es la dirección IP de una red destino y R la dirección MAC del “salto siguiente”.",
            "N es la dirección IP de una red destino y R la dirección MAC del “salto siguiente”.",
            "N es la dirección IP de una red destino y R la dirección IP del “salto siguiente”."
          ],
          correct: 3
        }
      ]
    },
    {
      id: 10,
      title: "Protocolos de enrutamiento",
      summary: "Rutas estáticas y dinámicas",
      icon: "swap",
      tone: "blue",
      questions: [
        {
          text: "¿Cuáles de las siguientes alternativas soportan enrutamiento classless?",
          options: [
            "Internet, RIPv1, OSPF",
            "EIGRP, RIPv1, OSPF, BGP",
            "EIGRP, RIPv2, OSPF, BGP",
            "IGRP, RIPv1, IS-IS"
          ],
          correct: 2
        },
        {
          text: "Una dirección IP y una máscara de subred en una interfaz cumplen determinados propósitos:",
          options: [
            "Procesamiento de la recepción y transmisión de paquetes, especifique la dirección local del dispositivo, y que especifique un intervalo de dirección entre el intervalo y el dispositivo.",
            "Especifique la dirección local del dispositivo, y que especifique un intervalo de dirección entre el intervalo y el dispositivo.",
            "Procesamiento de la recepción y transmisión de paquetes, especifique la dirección del destino y las direcciones de los vecinos."
          ],
          correct: 0
        },
        {
          text: "¿Cuáles de las siguientes opciones es falsa?",
          options: [
            "Los protocolos de enrutamiento exterior se utilizan para las comunicaciones entre sistemas autónomos (Ej.: BGP).",
            "Los protocolos de enrutamiento interior se utilizan dentro de un mismo sistema autónomo.",
            "Los protocolos de enrutamiento son el conjunto de reglas utilizadas por un enrutador para que cuando este se comunique con otros routers pueda llegar a compartir información de enrutamiento.",
            "Todos los protocolos de enrutamiento toman las decisiones basándose en las reglas del classfull."
          ],
          correct: 3
        },
        {
          text: "¿Qué es un sistema autónomo?",
          options: [
            "Los routers pueden ser manejados por diferentes administraciones.",
            "El Centro de Información de la Red (NIC) asigna un sistema autónomo único a las empresas. Este sistema autónomo equivale a un número de 32 bits.",
            "El sistema autónomo equivale a un número de 16 bits. Lo forman routers bajo una administración común.",
            "El rango reservado por el RFC 1930 para sistemas autónomos privados es del 1 al 65535."
          ],
          correct: 2
        },
        {
          text: "Seleccione la opción falsa. Las rutas estáticas se definen de la siguiente manera:",
          options: [
            "Establecen rutas específicas que han de seguir los paquetes para pasar de un puerto de origen hasta un puerto de destino.",
            "Se establece un control preciso del enrutamiento según los parámetros del administrador.",
            "Son definidas dinámicamente para que el router aprenda sobre una red remota.",
            "Un administrador debe actualizar manualmente la entrada de ruta estática siempre que un cambio en la topología de la red requiera una actualización."
          ],
          correct: 2
        },
        {
          text: "¿Cuáles de las siguientes no es una desventaja del enrutamiento estático?",
          options: [
            "Fácil de configurar.",
            "Requiere de un configuración y mantenimiento constante por parte del administrador.",
            "Propenso a errores cuando se aplica en redes extensas.",
            "No es adecuado para redes en crecimiento rápido."
          ],
          correct: 0
        },
        {
          text: "¿Cuáles son los componentes de un protocolo de enrutamiento?",
          options: [
            "Estructura de datos, RAM y NVRAM.",
            "Estructura de datos, algoritmo y mensajes del protocolo de enrutamiento.",
            "CPU, algoritmo y mensajes del protocolo de enrutamiento.",
            "CPU, estructura de datos y algoritmo."
          ],
          correct: 1
        },
        {
          text: "¿Cuáles de las siguientes es una ventaja del enrutamiento dinámico?",
          options: [
            "Requiere de menos comandos para la solución de problemas.",
            "Se usa para enrutamiento desde y hacia redes de conexión única.",
            "Poco uso del CPU ya que no requiere ejecutar cálculos y algoritmos ante cambios en la red.",
            "Es más escalable, el crecimiento de la red normalmente no representa un problema."
          ],
          correct: 3
        },
        {
          text: "La distancia administrativa de OSPF es:",
          options: ["10", "110", "50", "90"],
          correct: 1
        },
        {
          text: "La distancia administrativa de RIP es:",
          options: ["110", "120", "50", "90"],
          correct: 1
        }
      ]
    },
    {
      id: 11,
      title: "RIP y OSPF",
      summary: "Vector distancia y estado de enlace",
      icon: "net",
      tone: "rose",
      questions: [
        {
          text: "¿Cuál de los siguientes no es un protocolo de enrutamiento vector distancia?",
          options: ["RIP", "EIGRP", "IS-IS", "IGRP"],
          correct: 2
        },
        {
          text: "¿Cuál de las siguientes no es una característica de enrutamiento de vector de distancia?",
          options: [
            "Actualizaciones periódicas",
            "Actualizaciones multicast",
            "Vecinos",
            "Toda la tabla de enrutamiento se incluye en la actualización de enrutamiento"
          ],
          correct: 1
        },
        {
          text: "Los criterios que se usan para comparar protocolos de enrutamiento incluyen:",
          options: [
            "La distancia, el tiempo de convergencia, escalabilidad.",
            "Tiempo de convergencia, escalabilidad, uso de recursos e implementación y mantenimiento.",
            "Administración, escalabilidad, uso de recursos e implementación y mantenimiento.",
            "La dirección hacia dónde va el tráfico, escalabilidad, recursos y mantenimiento."
          ],
          correct: 1
        },
        {
          text: "Para detectar redes, el router comprueba si hay actualizaciones de información nueva, y si hay hace lo siguiente. ¿Cuál es falso?",
          options: [
            "Se actualiza la métrica.",
            "Se almacena la información nueva en la tabla de enrutamiento.",
            "Intercambia información de enrutamiento.",
            "Actualiza la métrica de los routers vecinos."
          ],
          correct: 3
        },
        {
          text: "¿Cuáles son características de RIP?",
          options: [
            "Protocolo enrutamiento de estado de enlace.",
            "Utiliza el conteo de saltos como su única métrica para la selección de rutas.",
            "Las rutas publicadas con conteo de saltos mayores que 16 son inalcanzables.",
            "Se transmiten mensajes cada 5 segundos."
          ],
          correct: 1
        },
        {
          text: "¿Qué es la distancia administrativa?",
          options: [
            "Define la velocidad de transmisión entre dos puntos.",
            "Es el protocolo que determina la cantidad de saltos para el enrutamiento.",
            "Es la confiabilidad (o preferencia) del origen de la ruta.",
            "Para verificar la distancia administrativa se realiza mediante los comandos show ip protocol."
          ],
          correct: 2
        },
        {
          text: "Para el mantenimiento de las tablas de enrutamiento, RIP usa 4 temporizadores:",
          options: [
            "Temporizador de actualizaciones, de costos, de velocidad y de purga.",
            "Temporizador de actualizaciones, no válido, de espera y de purga.",
            "Temporizador de actualizaciones, no válido, de vecinos y de purga.",
            "Temporizador de actualizaciones, no válido, de vecinos y de saltos."
          ],
          correct: 1
        },
        {
          text: "El proceso de OSPF guarda 3 tablas en memoria:",
          options: [
            "Tablas de vecinos, LSDB y tabla de enrutamiento.",
            "Tablas de vecinos, tablas de saltos y tabla de enrutamiento.",
            "LSDB, distancia administrativa y saltos.",
            "LSDB, tabla de enrutamiento y tabla de costos."
          ],
          correct: 0
        },
        {
          text: "OSPF organiza las redes de forma jerárquica en zonas llamadas áreas que pueden ser de dos grupos:",
          options: [
            "Área intermedia y área de tránsito.",
            "Área de vecinos y área de tránsito.",
            "Área de tránsito y área regular.",
            "Área de tránsito y área cero."
          ],
          correct: 2
        },
        {
          text: "¿Cuál de los siguientes atributos no cumple con estado de enlace?",
          options: [
            "Actualizaciones cuando hay cambios en la red.",
            "Base de datos con la topología de la red. Conocimiento de redes distantes.",
            "Poca carga CPU y memoria.",
            "OSPF, IS-IS."
          ],
          correct: 2
        }
      ]
    },
    {
      id: 12,
      title: "Routers Cisco",
      summary: "Acceso, memoria y comandos de configuración",
      icon: "terminal",
      tone: "mint",
      questions: [
        {
          text: "¿Qué debe tener un administrador para reestablecer una contraseña perdida en un router?",
          options: [
            "Acceso a otro router.",
            "Acceso físico al router.",
            "Un server TFTP.",
            "Un cable cruzado."
          ],
          correct: 1
        },
        {
          text: "¿Cuál es una característica de un port enrutado en un switch de capa 3?",
          options: [
            "Soporta troncales.",
            "No está asignada a una VLAN.",
            "Se utiliza comúnmente como enlace WAN.",
            "No puede tener una dirección IP asignada."
          ],
          correct: 1
        },
        {
          text: "¿Cómo está compuesta la memoria de un enrutador Cisco?",
          options: [
            "ROM, NVRAN, CPU.",
            "ROM, IOS, Monitor, NVRAM.",
            "ROM, NVRAM, Flash, Bootstrap.",
            "RAM, ROM, NVRAM, Flash."
          ],
          correct: 3
        },
        {
          text: "¿Cuáles son los modos de acceso a un router?",
          options: [
            "Modo usuario, modo privilegiado.",
            "Modo usuario, modo privilegiado, modo setup, modo fichero.",
            "Modo usuario, modo privilegiado, ROM monitor, mono setup.",
            "Modo usuario, modo privilegiado, modo config."
          ],
          correct: 2
        },
        {
          text: "Comando para mostrar la configuración:",
          options: [
            "“show running-configuration” para ver la configuración corriente.",
            "“show configuration” para ver la configuración guardada en NVRAM.",
            "“show running-startup” para ver la configuración corriente.",
            "“show startup” para ver la configuración guardada en NVRAM."
          ],
          correct: 0
        },
        {
          text: "Para obtener ayuda en línea usamos:",
          options: ["router#help", "router#show ?", "router#memory", "router#config"],
          correct: 1
        },
        {
          text: "Las “access lists” se utilizan para implementar seguridad en los enrutadores. Seleccionar cuál es falsa.",
          options: [
            "Permiten alto grado de control en la red.",
            "Filtran el flujo de paquetes entrando o saliendo de las interfaces del enrutador.",
            "Restringen el uso de la red a ciertos usuarios o equipos.",
            "Usada para permitir todo tipo de tráfico."
          ],
          correct: 3
        },
        {
          text: "El ROM monitor es muy útil para resolver problemas tales como:",
          options: [
            "Recuperación de contraseñas.",
            "Instalar una nueva IOS cuando el enrutador no tiene ninguna.",
            "Cambiar la tasa de bits de la consola para cargar la IOS más rápidamente.",
            "Cargar un sistema operativo desde la RAM."
          ],
          correct: 0
        },
        {
          text: "¿Cuál es el modo configuración de una interfaz?",
          options: ["Router>", "Router#", "Router(config-subif)#", "Router(Config-if)#"],
          correct: 3
        },
        {
          text: "¿Cuál es el modo configuración enrutamiento?",
          options: [
            "Router(config-route-map)#",
            "Router(config-router)#",
            "Router(config-line)#",
            "Router(config-vlan)#"
          ],
          correct: 1
        }
      ]
    },
    {
      id: 13,
      title: "VLAN",
      summary: "Segmentación, enlaces y puertos de switch",
      icon: "layers",
      tone: "amber",
      questions: [
        {
          text: "¿Qué tipo de VLAN está diseñada para tener un retraso de menos de 150ms en la red?",
          options: ["VLAN troncal.", "VLAN deseable.", "VLAN de seguridad.", "VLAN de voz."],
          correct: 3
        },
        {
          text: "¿Qué tipo de VLAN admite tráfico sin etiquetar?",
          options: ["VLAN de seguridad.", "VLAN de voz.", "VLAN de servicio.", "VLAN nativa."],
          correct: 3
        },
        {
          text: "¿Qué tipo de VLAN se utiliza para separar la red en grupos de usuarios o dispositivos?",
          options: ["VLAN de administración.", "VLAN de datos.", "VLAN nativa.", "VLAN de voz."],
          correct: 1
        },
        {
          text: "¿Qué tipo de VLAN no debería transportar tráfico de administración de red y voz?",
          options: [
            "VLAN de datos.",
            "VLAN de seguridad.",
            "VLAN de voz.",
            "VLAN de administración."
          ],
          correct: 0
        },
        {
          text: "Un switch que está configurado con varias VLANs. ¿Qué comando eliminará solo la VLAN 100 del switch?",
          options: [
            "Switch(config-if)# no switchport trunk allowed vlan 100",
            "Switch(config-if)# no switchport access vlan 100",
            "Switch(config)# no vlan 100",
            "Switch(config)# delete flash: vlan.dat"
          ],
          correct: 2
        },
        {
          text: "¿Qué tipo de VLAN es inicialmente la VLAN de administración?",
          options: ["VLAN de gestión.", "VLAN de datos.", "VLAN nativa.", "VLAN predeterminada."],
          correct: 3
        },
        {
          text: "Un administrador de red emite el comando #show vlan brief mientras resuelven problemas de un ticket de soporte de usuario, ¿qué le muestra?",
          options: [
            "La asignación y membresía de la VLAN para todos los port del switch.",
            "La asignación de VLAN y la VLAN nativa.",
            "La asignación y membresía de la VLAN para las direcciones MAC del dispositivo.",
            "La asignación de VLAN y encapsulación de los enlaces."
          ],
          correct: 0
        },
        {
          text: "¿Qué tipo de VLAN está diseñada para reservar ancho de banda para garantizar la calidad del teléfono IP?",
          options: ["VLAN de administración.", "VLAN de voz.", "VLAN de seguridad.", "VLAN troncal."],
          correct: 1
        },
        {
          text: "Una red contiene varias VLANs que abarcan varios switch. ¿Qué sucede cuando un dispositivo en la VLAN 20 envía una trama Ethernet de transmisión?",
          options: [
            "Solo los dispositivos que están conectados al switch local ven la trama.",
            "Todos los dispositivos de todas las VLANs ven la trama.",
            "Solo los dispositivos de la VLAN20 ven la trama.",
            "Los dispositivos de la VLAN20 y la VLAN de administración ven la trama."
          ],
          correct: 2
        },
        {
          text: "¿Qué sucede con los port de switch después de que se elimina la VLAN a la que están asignados?",
          options: [
            "Los port se colocan en modo TRUNK o troncal.",
            "Los port dejan de comunicarse con los dispositivos conectados.",
            "Los port están asignados a la VLAN1 y la VLAN predeterminada.",
            "Los port están desactivados."
          ],
          correct: 1
        }
      ]
    }
  ];

  // src/data/simulacro-1.js
  var writtenQuestions = [
    {
      text: "¿Cómo es el funcionamiento de OSPF? ¿Cuáles son sus ventajas y desventajas?",
      model: [
        [
          "Funcionamiento",
          "OSPF es un protocolo de estado de enlace. Cada router descubre y mantiene a sus vecinos con mensajes Hello. Los routers intercambian anuncios sobre sus enlaces y construyen una base de datos de la topología de su área (LSDB). Con esa información, cada router ejecuta SPF, calcula los caminos de menor costo y obtiene las rutas que puede instalar en su tabla de enrutamiento."
        ],
        [
          "Ventajas",
          "Cuando cae un enlace, el cambio se comunica y los routers pueden recalcular sus rutas rápidamente. Dividir la red en áreas limita la propagación de esos cambios y permite trabajar con redes más grandes."
        ],
        [
          "Desventajas",
          "Guardar la topología consume memoria y recalcular caminos utiliza CPU. Diseñar las áreas y diagnosticar problemas de vecindad requiere más conocimientos que configurar un protocolo sencillo como RIP."
        ]
      ],
      refs: [["tipos", "19–22, 24 y 27"]]
    },
    {
      text: "¿Qué es un sistema autónomo y qué es la distancia administrativa?",
      model: [
        [
          "Sistema autónomo",
          "Un sistema autónomo (AS) reúne redes y routers bajo una administración común que aplica una política de enrutamiento. Se identifica con un número de sistema autónomo (ASN). La red de un proveedor de Internet es un ejemplo."
        ],
        [
          "Distancia administrativa",
          "Es el valor que usa un router para decidir qué origen de información prefiere cuando aprende rutas al mismo prefijo por fuentes diferentes. Cuanto menor es el valor, mayor es la preferencia."
        ],
        [
          "Ejemplo",
          "Si un router Cisco aprende la ruta a 10.20.0.0/16 por OSPF y por RIP, con los valores predeterminados elige OSPF. Su distancia administrativa es 110 y la de RIP es 120."
        ]
      ],
      refs: [
        ["protocolos", "9, 10 y 17"],
        ["tipos", "14"]
      ]
    }
  ];
  function fromUnit(unitNumber, questionNumber, optionOrder, explanation2, refs) {
    const unit = units.find((item) => item.id === unitNumber);
    const original = unit.questions[questionNumber - 1];
    const indices = Array.from(optionOrder, (letter) => letter.charCodeAt(0) - 65);
    return {
      text: original.text,
      options: indices.map((i) => original.options[i]),
      correct: indices.indexOf(original.correct),
      explanation: explanation2,
      refs
    };
  }
  var firstExam = {
    id: "simulacro",
    title: "Simulacro Prueba",
    tone: "mint",
    writtenQuestions,
    questions: [
      // Preguntas 3–7
      fromUnit(
        10,
        10,
        "DACB",
        "La distancia administrativa predeterminada de RIP en un router Cisco es 120.",
        [
          ["protocolos", "17"],
          ["tipos", "14"]
        ]
      ),
      fromUnit(10, 9, "DACB", "La tabla de distancias administrativas asigna 110 a OSPF.", [
        ["protocolos", "17"]
      ]),
      fromUnit(
        10,
        4,
        "ADBC",
        "La opción D reúne la administración común y el formato de ASN de 16 bits que describe este apunte.",
        [["protocolos", "9–10"]]
      ),
      fromUnit(
        10,
        2,
        "CBA",
        "La IP identifica la interfaz y, junto con la máscara, permite determinar qué direcciones pertenecen a la misma subred. La interfaz usa esa configuración para enviar y recibir paquetes.",
        [["protocolos", "7"]]
      ),
      fromUnit(
        13,
        7,
        "CADB",
        "El listado muestra las VLAN y los puertos de acceso asignados a cada una. En el ejemplo del apunte aparecen Fa0/13 y Fa0/14 dentro de la VLAN 2.",
        [["vlan", "17–18"]]
      ),
      // Esta consigna solo aparece en el parcial.
      {
        text: "¿Qué característica describe la VLAN nativa?",
        options: [
          "Es el tráfico de alta prioridad, como el tráfico de voz.",
          "Diseñada para transportar el tráfico que generan usuarios, también conocida como VLAN predeterminada.",
          "Es necesaria para la gestión remota de un switch.",
          "Proporciona un identificador para ambos extremos de un tronco y el tráfico a través de la VLAN nativa no se etiqueta a través del enlace troncal."
        ],
        correct: 3,
        explanation: "En un enlace troncal 802.1Q con la configuración predeterminada, las tramas sin etiqueta se asocian a la VLAN nativa. Ambos extremos deben usar el mismo identificador de VLAN nativa.",
        refs: [["vlan", "9 y 13"]]
      },
      // Preguntas 9–13
      fromUnit(
        13,
        9,
        "DCBA",
        "Cada VLAN constituye un dominio de difusión. La trama puede atravesar enlaces troncales y llegar a otros switches dentro de la VLAN 20.",
        [["vlan", "4, 6 y 14"]]
      ),
      fromUnit(
        13,
        5,
        "DBAC",
        "En configuración global, no vlan 100 elimina esa VLAN del switch. Cambiar la VLAN de acceso de un puerto o la lista permitida de un troncal modifica ese enlace.",
        []
      ),
      fromUnit(
        13,
        3,
        "DCAB",
        "La VLAN de datos agrupa a los usuarios o dispositivos y transporta su tráfico. También se llama VLAN de usuario.",
        [["vlan", "7"]]
      ),
      fromUnit(
        13,
        4,
        "BADC",
        "La VLAN de datos transporta el tráfico generado por los usuarios. El apunte indica que el tráfico de voz y el de administración se separan del tráfico de datos.",
        [["vlan", "7"]]
      ),
      fromUnit(
        13,
        2,
        "CDBA",
        "En un enlace troncal 802.1Q, el switch asocia las tramas recibidas sin etiqueta a la VLAN nativa.",
        [["vlan", "9 y 13"]]
      ),
      // Preguntas 14–20
      fromUnit(
        11,
        9,
        "ABDC",
        "El material distingue áreas de tránsito y áreas regulares. El área 0 es el área troncal que interconecta las demás en un diseño de varias áreas.",
        [["tipos", "21"]]
      ),
      fromUnit(
        11,
        7,
        "BDCA",
        "RIP mantiene sus rutas con los temporizadores de actualización, de ruta no válida, de espera y de purga.",
        [["tipos", "17–18"]]
      ),
      fromUnit(
        11,
        6,
        "CDBA",
        "La distancia administrativa expresa la confianza que el router asigna a la fuente que le comunicó una ruta.",
        [["tipos", "14"]]
      ),
      fromUnit(
        11,
        10,
        "ADBC",
        "Un protocolo de estado de enlace almacena la topología y recalcula rutas. La baja carga de CPU y memoria es el atributo que el apunte asocia con vector distancia.",
        [["tipos", "20 y 27"]]
      ),
      fromUnit(
        11,
        3,
        "DCAB",
        "La comparación considera cuánto tarda la convergencia, cómo escala el protocolo, qué recursos consume y qué exige implementarlo y mantenerlo.",
        [["tipos", "5"]]
      ),
      fromUnit(
        11,
        1,
        "DABC",
        "IS-IS pertenece a los protocolos de estado de enlace. RIP, IGRP y EIGRP aparecen en el grupo de vector distancia.",
        [["tipos", "3 y 27"]]
      ),
      fromUnit(
        11,
        8,
        "CBDA",
        "OSPF mantiene información sobre sus vecinos, una base de datos de estado de enlace (LSDB) y una tabla con las rutas elegidas.",
        [["tipos", "20"]]
      ),
      // Preguntas 21–27
      fromUnit(
        12,
        5,
        "CADB",
        "La B describe la configuración en ejecución, guardada en RAM. La diapositiva 5 muestra el comando de consola show running-config. Para la configuración de inicio muestra show startup-config.",
        [["routers", "5 y 16"]]
      ),
      fromUnit(
        12,
        7,
        "DCBA",
        "Una lista de acceso filtra paquetes mediante reglas que permiten o deniegan tráfico. Por eso la afirmación general de que permite todo el tráfico es la falsa.",
        [["routers", "21"]]
      ),
      fromUnit(
        12,
        6,
        "DACB",
        "El signo de interrogación solicita ayuda contextual. Escribir show seguido de un espacio y ? muestra los subcomandos disponibles.",
        [["routers", "16"]]
      ),
      fromUnit(
        12,
        10,
        "BADC",
        "El indicador Router(config-router)# identifica el modo de configuración de un protocolo de enrutamiento.",
        [["routers", "12"]]
      ),
      fromUnit(
        12,
        1,
        "BCDA",
        "El procedimiento de recuperación de la materia requiere acceso físico al equipo y a su consola.",
        [["routers", "7–8 y 22–23"]]
      ),
      fromUnit(
        12,
        4,
        "DCBA",
        "La lista del apunte incluye EXEC de usuario, EXEC privilegiado, ROM Monitor y modo Setup.",
        [["routers", "7"]]
      ),
      fromUnit(
        12,
        3,
        "ABDC",
        "El router usa RAM para los datos en uso, ROM para el arranque, NVRAM para la configuración de inicio y Flash para la imagen de IOS.",
        [["routers", "3 y 5"]]
      ),
      // Preguntas 28–34
      fromUnit(
        9,
        3,
        "DCAB",
        "El ruteo selecciona el camino que seguirá un datagrama hacia su destino.",
        [["principios", "3"]]
      ),
      fromUnit(
        9,
        10,
        "BCDA",
        "En el par (N, R), N identifica la red de destino y R es la dirección IP del router que actúa como siguiente salto.",
        [["principios", "7"]]
      ),
      fromUnit(
        9,
        6,
        "BACD",
        "Las rutas estáticas se configuran de antemano. Si cambia la topología, el administrador debe actualizar las entradas afectadas.",
        [
          ["principios", "21"],
          ["protocolos", "11"]
        ]
      ),
      fromUnit(
        9,
        1,
        "CBDA",
        "El router determina la ruta y, a continuación, conmuta el paquete desde la interfaz de entrada a la de salida.",
        [["principios", "6"]]
      ),
      fromUnit(
        9,
        2,
        "BDAC",
        "El enrutamiento dinámico toma decisiones usando el estado de la red y su topología actual.",
        [["principios", "21"]]
      ),
      fromUnit(
        9,
        7,
        "BCAD",
        "Para reenviar el datagrama, el router consulta la tabla con la dirección IP de destino. La opción D es falsa porque usa la dirección de origen.",
        [["principios", "4"]]
      ),
      fromUnit(
        9,
        9,
        "ACEBD",
        "Los objetivos de diseño incluyen simplicidad y bajo costo, además de flexibilidad, optimización, estabilidad y convergencia rápida.",
        [["principios", "14"]]
      )
    ]
  };

  // src/data/simulacro-2.js
  function fromBank(examNumber, unitId, unitQuestion, explanation2, refs = []) {
    const unit = units.find((item) => item.id === unitId);
    const question = unit.questions[unitQuestion - 1];
    return { ...question, examNumber, unitId, unitQuestion, explanation: explanation2, refs };
  }
  var secondExam = {
    id: "simulacro-2",
    title: "Simulacro Prueba 2",
    tone: "blue",
    // El progreso de esta edición identifica que falta la pregunta 14.
    storageId: "simulacro-2.sin-14",
    intro: "Las opciones siguen el orden del banco de las unidades. La pregunta 14 queda pendiente porque falta su enunciado.",
    writtenQuestions: [
      {
        examNumber: 19,
        text: "Explicar enrutamiento estático y dinámico. Detallar sus diferencias.",
        model: [
          [
            "Estático",
            "El administrador indica por qué interfaz o hacia qué siguiente salto se llega a una red de destino. Mantener unas pocas rutas manuales en una red estable es sencillo y consume pocos recursos, porque los routers no necesitan intercambiar anuncios de rutas."
          ],
          [
            "Dinámico",
            "Los routers intercambian información mediante un protocolo como RIP u OSPF. Cada uno aprende destinos y actualiza su tabla cuando cambia la topología. Esto facilita el crecimiento de la red, a cambio de usar CPU, memoria y ancho de banda y de requerir más conocimientos para configurarla."
          ],
          [
            "Si se corta un enlace",
            "Con una única ruta estática, el administrador debe configurar otro camino para recuperar el servicio. Con enrutamiento dinámico, si existe un camino alternativo anunciado, el protocolo puede descubrirlo y utilizarlo una vez que converge."
          ]
        ],
        refs: [
          ["protocolos", "11 y 13–15"],
          ["principios", "21"]
        ]
      },
      {
        examNumber: 20,
        text: "¿Cómo es el funcionamiento de RIP, ventajas y desventajas?",
        model: [
          [
            "Funcionamiento",
            "RIP es un protocolo de vector distancia. Cada router aprende las redes que anuncian sus vecinos, suma un salto y prefiere el camino con menos saltos. Envía actualizaciones periódicas, normalmente cada 30 segundos, y puede anunciar un cambio antes del siguiente envío. En Cisco, su distancia administrativa predeterminada es 120."
          ],
          [
            "Mantenimiento",
            "Usa cuatro temporizadores para actualizar las rutas, marcar las que dejan de ser válidas, mantenerlas en espera y purgarlas. Una métrica de 16 saltos indica que un destino es inalcanzable."
          ],
          [
            "Ventajas",
            "Es sencillo de configurar y permite el intercambio de rutas entre equipos de distintos fabricantes. Resulta práctico en redes pequeñas."
          ],
          [
            "Desventajas",
            "El máximo útil es de 15 saltos. La convergencia puede ser lenta y pueden producirse bucles transitorios. Como solo compara saltos, puede preferir un enlace lento de un salto antes que un camino más rápido de dos."
          ]
        ],
        refs: [["tipos", "11 y 13–19"]]
      }
    ],
    questions: [
      fromBank(
        1,
        12,
        3,
        "La RAM guarda datos en uso, la ROM contiene código de arranque, la NVRAM conserva la configuración de inicio y la Flash almacena la imagen de IOS.",
        [["routers", "3 y 5"]]
      ),
      fromBank(
        2,
        12,
        7,
        "La afirmación falsa dice que una lista de acceso permite todo el tráfico. Sus reglas permiten o deniegan paquetes según los criterios configurados.",
        [["routers", "21"]]
      ),
      fromBank(
        3,
        12,
        9,
        "El indicador Router(config-if)# señala que los comandos se aplican a la interfaz seleccionada.",
        [["routers", "12"]]
      ),
      fromBank(
        4,
        12,
        2,
        "La devolución del parcial indica que este puerto funciona como interfaz de capa 3. Se le asigna una dirección IP directamente y queda fuera de las VLAN de acceso."
      ),
      fromBank(
        5,
        12,
        1,
        "En el procedimiento que describe el apunte, el administrador necesita acceso físico al router y a su consola.",
        [["routers", "7–8 y 22–23"]]
      ),
      fromBank(
        6,
        12,
        10,
        "Router(config-router)# es el indicador del modo en el que se configura un protocolo de enrutamiento.",
        [["routers", "12"]]
      ),
      fromBank(
        7,
        12,
        8,
        "La clave de la unidad 12 acepta «Recuperación de contraseñas». El apunte también enumera otras funciones de ROM Monitor presentes entre las opciones, así que la consigna admite más de una lectura.",
        [["routers", "22"]]
      ),
      fromBank(
        8,
        11,
        2,
        "La clave acepta «Actualizaciones multicast». La diapositiva 4 describe un modelo clásico con envíos periódicos por broadcast. El modo de envío concreto depende del protocolo y de su versión.",
        [["tipos", "3–4"]]
      ),
      fromBank(
        9,
        11,
        10,
        "Mantener una base de la topología y recalcular los caminos requiere CPU y memoria. «Poca carga CPU y memoria» es el atributo que queda fuera de la descripción de estado de enlace.",
        [["tipos", "20 y 27"]]
      ),
      fromBank(
        10,
        11,
        7,
        "Los cuatro temporizadores controlan la actualización, la declaración de una ruta como no válida, la espera y su eliminación de la tabla.",
        [["tipos", "17–18"]]
      ),
      fromBank(
        11,
        11,
        8,
        "OSPF guarda las vecindades, la base de datos de estado de enlace (LSDB) y la tabla de enrutamiento con los caminos seleccionados.",
        [["tipos", "20"]]
      ),
      {
        ...fromBank(
          12,
          11,
          4,
          "El router receptor actualiza en su propia tabla la métrica y la información de la ruta aprendida. Cada vecino mantiene su tabla por separado.",
          [["tipos", "8"]]
        ),
        text: "Para detectar redes, el router comprueba si hay actualizaciones de información nueva, y si hay hace lo siguiente. ¿Cuál es falsa?"
      },
      fromBank(
        13,
        11,
        1,
        "IS-IS usa estado de enlace. El material agrupa a RIP, IGRP y EIGRP entre los protocolos de vector distancia.",
        [["tipos", "3 y 27"]]
      ),
      fromBank(
        15,
        10,
        6,
        "La facilidad de configurar unas pocas rutas estáticas es una ventaja. El mantenimiento manual se hace costoso cuando hay muchos routers o cambios frecuentes.",
        [["protocolos", "11 y 13"]]
      ),
      fromBank(
        16,
        10,
        4,
        "Un sistema autónomo reúne routers y redes bajo una administración común. La opción aceptada usa el formato histórico de ASN de 16 bits que presenta la diapositiva.",
        [["protocolos", "9–10"]]
      ),
      fromBank(
        17,
        10,
        8,
        "El enrutamiento dinámico escala mejor porque los routers pueden aprender nuevas redes y ajustar sus rutas cuando cambia la topología.",
        [["protocolos", "14–15"]]
      ),
      fromBank(
        18,
        10,
        1,
        "EIGRP, RIPv2, OSPF y BGP admiten prefijos de longitud variable. El anuncio de la ruta incluye la información necesaria para identificar la longitud del prefijo.",
        [
          ["protocolos", "3–5"],
          ["tipos", "12"]
        ]
      ),
      fromBank(
        21,
        9,
        9,
        "Los objetivos de diseño incluyen simplicidad, bajo costo, estabilidad y convergencia rápida. La opción que propone un costo alto y mayor esfuerzo de ingeniería es la incorrecta.",
        [["principios", "14"]]
      ),
      fromBank(
        22,
        9,
        8,
        "El apunte distingue los algoritmos adaptativos centralizado, aislado y distribuido según quién toma las decisiones y qué información utiliza.",
        [["principios", "21–23"]]
      ),
      fromBank(
        23,
        9,
        4,
        "En el modelo orientado a la conexión, se elige el camino al establecerla y los paquetes de esa conexión siguen el camino elegido.",
        [["principios", "20"]]
      ),
      fromBank(
        24,
        9,
        1,
        "El router determina la ruta hacia el destino y conmuta el paquete desde la interfaz de entrada hacia la interfaz de salida correspondiente.",
        [["principios", "6"]]
      ),
      fromBank(
        25,
        9,
        6,
        "Una ruta estática conserva la decisión configurada por el administrador. La afirmación falsa le atribuye un recálculo automático a partir de las condiciones actuales de la red.",
        [
          ["principios", "21"],
          ["protocolos", "11"]
        ]
      ),
      fromBank(
        26,
        9,
        5,
        "En IPv4, el campo Protocolo identifica qué protocolo debe recibir los datos. El valor 6 corresponde a TCP y el 17 a UDP.",
        [["principios", "5"]]
      ),
      fromBank(
        27,
        9,
        3,
        "Rutear es seleccionar el camino que seguirá un datagrama para llegar a la red de destino.",
        [["principios", "3–4"]]
      ),
      fromBank(
        28,
        13,
        7,
        "El listado de show vlan brief muestra las VLAN, su estado y los puertos de acceso asignados a cada una. En el ejemplo del apunte, Fa0/13 y Fa0/14 pertenecen a la VLAN 2.",
        [["vlan", "17–18"]]
      ),
      fromBank(
        29,
        13,
        8,
        "La VLAN de voz identifica el tráfico de los teléfonos IP. La reserva de ancho de banda y la prioridad se implementan con políticas de calidad de servicio (QoS)."
      ),
      fromBank(
        30,
        13,
        10,
        "Los puertos de acceso conservan el identificador de la VLAN eliminada y dejan de transportar tráfico en ella. Recuperan la comunicación si se restablece la VLAN o si se les asigna otra que esté activa."
      ),
      fromBank(
        31,
        13,
        6,
        "En la configuración inicial del switch Cisco del apunte, la administración utiliza la VLAN predeterminada, que es la VLAN 1.",
        [["vlan", "8 y 10"]]
      ),
      fromBank(
        32,
        13,
        3,
        "La VLAN de datos agrupa usuarios o dispositivos y transporta el tráfico que generan.",
        [["vlan", "7"]]
      ),
      fromBank(
        33,
        13,
        2,
        "En un troncal IEEE 802.1Q con la configuración predeterminada, las tramas que llegan sin etiqueta se asignan a la VLAN nativa.",
        [["vlan", "9 y 13"]]
      ),
      fromBank(
        34,
        13,
        1,
        "El objetivo de retardo de la consigna corresponde al tráfico de voz. Separarlo en una VLAN de voz permite aplicarle la prioridad necesaria mediante QoS."
      )
    ]
  };

  // src/data/catalog.js
  var exams = [firstExam, secondExam];
  var assessments = [...units, ...exams];
  var byId = new Map(assessments.map((assessment) => [String(assessment.id), assessment]));
  function findAssessment(id) {
    return byId.get(String(id));
  }

  // src/domain/quiz.js
  var PASS_PERCENT = 60;
  function isExam(assessment) {
    return Array.isArray(assessment?.writtenQuestions);
  }
  function questionCount(assessment) {
    return assessment.questions.length + (assessment.writtenQuestions?.length ?? 0);
  }
  function writtenAnswered(written) {
    return written.drafts.filter((answer) => answer.trim().length > 0).length;
  }
  function minimumCorrect(total) {
    return Math.ceil(total * PASS_PERCENT / 100);
  }
  function scoreAttempt(assessment, attempt) {
    const total = assessment.questions.length;
    const answered = attempt.answers.length;
    const correct = attempt.answers.reduce((count, answer, index) => {
      return count + Number(answer === assessment.questions[index].correct);
    }, 0);
    return {
      total,
      answered,
      correct,
      wrong: answered - correct,
      percent: total ? 100 * correct / total : 0,
      pass: total > 0 && correct >= minimumCorrect(total)
    };
  }
  function emptyAttempt() {
    return { index: 0, answers: [], finished: false };
  }
  function restoreAttempt(questions, saved) {
    if (!saved || !Array.isArray(saved.answers)) return emptyAttempt();
    const { index, answers } = saved;
    if (!Number.isInteger(index) || index < 0 || index >= questions.length) return emptyAttempt();
    if (answers.length !== index && answers.length !== index + 1) return emptyAttempt();
    const valid = answers.every(
      (choice, i) => Number.isInteger(choice) && choice >= 0 && choice < questions[i].options.length
    );
    if (!valid) return emptyAttempt();
    return {
      index,
      answers: [...answers],
      finished: saved.finished === true && answers.length === questions.length
    };
  }
  function restoreRecord(assessment, saved = null) {
    const total = assessment.questions.length;
    const attempt = restoreAttempt(assessment.questions, saved?.attempt);
    const previousBest = saved?.best;
    const validBest = Number.isInteger(previousBest) && previousBest >= 0 && previousBest <= total;
    const record = { best: validBest ? previousBest : null, attempt };
    if (attempt.finished)
      record.best = Math.max(record.best ?? 0, scoreAttempt(assessment, attempt).correct);
    if (isExam(assessment)) {
      const written = saved?.written;
      const steps = assessment.writtenQuestions.length;
      const step = Number.isInteger(written?.step) ? written.step : 0;
      record.written = {
        step: attempt.answers.length ? steps : Math.max(0, Math.min(steps, step)),
        drafts: assessment.writtenQuestions.map(
          (_, i) => typeof written?.drafts?.[i] === "string" ? written.drafts[i] : ""
        ),
        shown: assessment.writtenQuestions.map((_, i) => written?.shown?.[i] === true)
      };
    }
    return record;
  }
  function chooseAnswer(assessment, record, index, option) {
    const { attempt } = record;
    if (attempt.finished || attempt.index !== index || attempt.answers.length !== index) return false;
    if (!Number.isInteger(option) || option < 0 || option >= assessment.questions[index].options.length)
      return false;
    attempt.answers.push(option);
    return true;
  }
  function advanceQuestion(assessment, record, index) {
    const { attempt } = record;
    if (attempt.finished || attempt.index !== index || attempt.answers.length !== index + 1)
      return false;
    if (attempt.answers.length === assessment.questions.length) {
      attempt.finished = true;
      record.best = Math.max(record.best ?? 0, scoreAttempt(assessment, attempt).correct);
    } else {
      attempt.index += 1;
    }
    return true;
  }

  // src/storage/progress.js
  var PREFIX = "nexo.redes.v1.unidad.";
  function keyFor(assessment) {
    return PREFIX + (assessment.storageId ?? assessment.id);
  }
  function createProgressStore(assessments2, storage) {
    const records = /* @__PURE__ */ new Map();
    function load(assessment) {
      let saved = null;
      try {
        saved = JSON.parse(storage?.getItem(keyFor(assessment)) ?? "null");
      } catch {
      }
      records.set(assessment.id, restoreRecord(assessment, saved));
    }
    function save(assessment) {
      try {
        storage?.setItem(keyFor(assessment), JSON.stringify(records.get(assessment.id)));
      } catch {
      }
    }
    assessments2.forEach(load);
    return {
      get: (assessment) => records.get(assessment.id),
      save,
      restart(assessment) {
        const { best } = records.get(assessment.id);
        records.set(assessment.id, restoreRecord(assessment, { best }));
        save(assessment);
      },
      synchronize(changedKey) {
        const changed = changedKey === null ? assessments2 : assessments2.filter((item) => keyFor(item) === changedKey);
        changed.forEach(load);
        return changed;
      }
    };
  }

  // src/router.js
  function resolveRoute(hash, progress2) {
    const [section, id, question] = (hash || "#/simulacro-2").replace(/^#\/?/, "").split("/");
    const exam = findAssessment(section);
    if (isExam(exam)) {
      const { attempt, written } = progress2.get(exam);
      let view = written.step < exam.writtenQuestions.length ? "escrito" : "practica";
      if (attempt.finished) view = id === "revision" ? "revision" : "resultado";
      return { view, assessment: exam };
    }
    const unit = units.find((item) => String(item.id) === id);
    if (section === "banco")
      return { view: "banco", assessment: unit ?? units[0], question: Number(question) };
    if (unit && ["practica", "resultado", "revision"].includes(section)) {
      const finished = progress2.get(unit).attempt.finished;
      const view = finished ? section === "revision" ? "revision" : "resultado" : "practica";
      return { view, assessment: unit };
    }
    return { view: "inicio", assessment: null };
  }

  // src/ui/icons.js
  var paths = {
    grid: ["M3 3H9V9H3Z M15 3H21V9H15Z M3 15H9V21H3Z M15 15H21V21H15Z"],
    book: ["M3 4.5Q8 3 12 6Q16 3 21 4.5V19Q16 18 12 21Q8 18 3 19Z M12 6V21"],
    route: [
      "M7 5.5H16Q20 5.5 20 9Q20 12.5 16 12.5H8Q4 12.5 4 16Q4 19.5 8 19.5H17 M14 16.5L17 19.5L14 22.5"
    ],
    swap: ["M3 7H20M16 3L20 7L16 11 M21 17H4M8 13L4 17L8 21"],
    net: ["M6 17L11 7 M13.2 7L18.5 17 M7.6 19H16.4"],
    terminal: ["M3 6Q3 4 5 4H19Q21 4 21 6V18Q21 20 19 20H5Q3 20 3 18Z M7 9L10 12L7 15 M13 15H17"],
    layers: ["M2.5 7L12 2.5L21.5 7L12 11.5Z M3 12L12 16.5L21 12 M3 17L12 21.5L21 17"],
    arrow: ["M4.5 12H19M13 6L19 12L13 18"],
    left: ["M19 12H5M11 6L5 12L11 18"],
    upRight: ["M6 18L18 6M7 6H18V17"],
    down: ["M6 9L12 15L18 9"],
    list: ["M9 6H21M9 12H21M9 18H21"],
    file: ["M6 3H14L19 8V19Q19 21 17 21H6Q4 21 4 19V5Q4 3 6 3Z M14 3V8H19M8 13H15M8 17H13"],
    target: ["M11 13L20.5 3.5M17 3.5H20.5V7"],
    check: ["M4 12L9.5 17.5L20 6"],
    x: ["M6 6L18 18M18 6L6 18"],
    chart: ["M4 20H21M7 16V12M12 16V8M17 16V4"],
    retry: ["M4 10A8 8 0 1 1 5.2 17M4 4.8V10H9.3"]
  };
  var circles = {
    route: [[5, 5.5, 2.1]],
    net: [
      [12, 5, 2.5],
      [5, 19, 2.4],
      [19, 19, 2.4]
    ],
    list: [
      [4, 6, 0.65],
      [4, 12, 0.65],
      [4, 18, 0.65]
    ],
    target: [
      [11, 13, 8],
      [11, 13, 4]
    ]
  };
  var icon = (name) => '<i class="icon" data-i="' + name + '" aria-hidden="true"></i>';
  function paint(root) {
    for (const el of root.querySelectorAll("[data-i]")) {
      const name = el.dataset.i;
      if (el.firstChild || !paths[name]) continue;
      const cv = document.createElement("canvas");
      cv.width = cv.height = 72;
      const c = cv.getContext("2d");
      if (!c) continue;
      c.scale(3, 3);
      c.strokeStyle = getComputedStyle(el).color;
      c.lineWidth = 1.7;
      c.lineCap = "round";
      c.lineJoin = "round";
      for (const path of paths[name]) c.stroke(new Path2D(path));
      for (const [x, y, r] of circles[name] ?? []) {
        c.beginPath();
        c.arc(x, y, r, 0, Math.PI * 2);
        c.stroke();
      }
      el.append(cv);
    }
  }

  // src/ui/shared.js
  var entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => entities[character]);
  }
  function formatText(value) {
    const text = escapeHtml(value);
    if (/^(?:router|switch)[#(>]/i.test(value)) return "<code>" + text + "</code>";
    return text.replace(/“(show [^”]+)”/g, "<code>$1</code>").replace(/#show vlan brief/g, "<code>#show vlan brief</code>");
  }
  function optionLetter(index) {
    return String.fromCharCode(65 + index);
  }
  function pad(number) {
    return String(number).padStart(2, "0");
  }
  function assessmentTag(assessment) {
    const label = isExam(assessment) ? assessment.title : "Unidad " + assessment.id;
    return `<span class="unit-tag"><i></i>${escapeHtml(label)}</span>`;
  }
  function backToUnits() {
    return `<a class="back" href="#/">${icon("left")}Volver a unidades</a>`;
  }

  // src/ui/home.js
  function examCard(exam, progress2) {
    const { written, attempt } = progress2.get(exam);
    const started = written.step > 0 || writtenAnswered(written) > 0 || written.shown.some(Boolean);
    const action = attempt.finished ? "Ver resultado" : started ? "Continuar" : "Empezar";
    return `<a class="mock-entry glass ${exam.tone}" href="#/${exam.id}">
    <span class="icon-box">${icon("file")}</span>
    <div><h2>${escapeHtml(exam.title)}</h2><p>${exam.writtenQuestions.length} de desarrollo · ${exam.questions.length} de opción múltiple</p></div>
    <span class="mock-entry-action">${action}${icon("arrow")}</span></a>`;
  }
  function unitCard(unit, progress2) {
    const { best, attempt } = progress2.get(unit);
    const count = unit.questions.length;
    const destination = attempt.finished ? "resultado" : "practica";
    const label = attempt.finished ? "Ver resultado de" : "Practicar";
    let status = "";
    if (attempt.finished)
      status = `<span class="card-status">${icon("check")}Mejor ${Math.round(100 * best / count)} %</span>`;
    else if (attempt.answers.length)
      status = `<span class="card-status">En curso · ${attempt.answers.length}/${count}</span>`;
    return `<a class="unit-card glass ${unit.tone}" href="#/${destination}/${unit.id}" aria-label="${label} la unidad ${unit.id}, ${escapeHtml(unit.title)}">
    <div class="card-top"><span class="icon-box">${icon(unit.icon)}</span><span class="card-arrow">${icon("upRight")}</span></div>
    <span class="eyebrow">Unidad ${unit.id}</span><h3>${escapeHtml(unit.title)}</h3><p>${escapeHtml(unit.summary)}</p>
    <div class="card-meta"><span>${icon("list")}${count} preguntas</span>${status}</div></a>`;
  }
  function renderHome(progress2) {
    const completed = units.filter((unit) => progress2.get(unit).best !== null).length;
    const questions = units.reduce((total, unit) => total + unit.questions.length, 0);
    return `<section class="hero glass"><div class="hero-mesh" aria-hidden="true"></div>
    <div class="hero-copy"><div class="scope"><i></i>Unidades ${units[0].id}–${units[units.length - 1].id}</div>
    <h1 tabindex="-1">Práctica de <em>redes</em></h1><p>Repasá una pregunta por vez y comprobá tus respuestas al instante.</p>
    <div class="hero-stats"><span>${icon("layers")}${units.length} unidades</span><span>${icon("file")}${questions} preguntas</span><span>${icon("target")}${PASS_PERCENT} % para aprobar</span></div></div>
    <div class="hero-visual" aria-hidden="true"><span class="switch-face"></span></div></section>
    <section class="mock-entries" aria-label="Simulacros de prueba">${exams.map((exam) => examCard(exam, progress2)).join("")}</section>
    <section class="units"><div class="section-bar"><h2>Elegí una unidad</h2><span class="completion"><i><b style="width:${100 * completed / units.length}%"></b></i>${completed} de ${units.length} completadas</span></div>
    <div class="grid">${units.map((unit) => unitCard(unit, progress2)).join("")}</div></section>`;
  }

  // src/data/sources.js
  const sourceTitles = {
    principios: "Principios de enrutamiento",
    protocolos: "Enrutamiento y protocolos",
    tipos: "Tipos de enrutamiento",
    routers: "Configuración de router y enrutamiento",
    vlan: "LAN virtuales"
  };

  // src/ui/sources.js
  function renderReferences(question) {
    const references = question.refs.map(([key, pages]) =>
      `${escapeHtml(sourceTitles[key])} · diap. ${escapeHtml(pages)}`
    );
    if (question.unitId) {
      references.push(
        `<a href="#/banco/${question.unitId}/${question.unitQuestion}" target="_blank" rel="noopener">Unidad ${question.unitId} · pregunta ${question.unitQuestion}</a>`
      );
    }
    if (references.length === 0) return "";
    return `<div class="source-links">${icon("book")}<div>${references.join('<span aria-hidden="true"> · </span>')}</div></div>`;
  }
  function modelAnswer(question) {
    const paragraphs = question.model.map(
      ([heading, text]) => `<p><strong>${escapeHtml(heading)}.</strong> ${escapeHtml(text)}</p>`
    );
    return `<div class="answer-model"><h3>Respuesta modelo</h3>${paragraphs.join("")}${renderReferences(question)}</div>`;
  }
  function explanation(question) {
    return `<div class="mock-explanation"><p>${formatText(question.explanation)}</p>${renderReferences(question)}</div>`;
  }

  // src/ui/practice.js
  function sessionPanel(assessment, record) {
    const { attempt, written } = record;
    const score = scoreAttempt(assessment, attempt);
    const target = minimumCorrect(score.total);
    const counters = `<div><dt>Correctas</dt><dd class="green" data-stat="correct">${score.correct}</dd></div>
    <div><dt>Incorrectas</dt><dd class="red" data-stat="wrong">${score.wrong}</dd></div>`;
    const answered = `<dd data-stat="answered">${score.answered}<small> / ${score.total}</small></dd>`;
    if (isExam(assessment)) {
      return `<aside class="session mock-session glass" aria-label="Progreso del simulacro">
      <h2>${icon("chart")}Tu simulacro</h2>
      <progress max="${questionCount(assessment)}" value="${written.step + score.answered}" aria-label="Avance en el examen"></progress>
      <dl><div><dt>Desarrollos escritos</dt><dd><span data-stat="written">${writtenAnswered(written)}</span><small> / ${assessment.writtenQuestions.length}</small></dd></div>
      <div><dt>Opciones respondidas</dt>${answered}</div>${counters}</dl>
      <p>${icon("target")}Para aprobar necesitás ${target} de ${score.total} aciertos en opción múltiple.</p></aside>`;
    }
    const segments = assessment.questions.map((question, index) => {
      let state = index === attempt.index ? "current" : "";
      if (index < score.answered)
        state = attempt.answers[index] === question.correct ? "win" : "lose";
      return `<i class="${state}"></i>`;
    }).join("");
    return `<aside class="session glass" aria-label="Contadores de la práctica"><h2>${icon("chart")}Tu sesión</h2>
    <div class="segments" aria-hidden="true">${segments}</div>
    <dl><div><dt>Respondidas</dt>${answered}</div>${counters}</dl><p>${icon("target")}Se aprueba con ${target} de ${score.total}.</p></aside>`;
  }
  function header(assessment, showIntro = false) {
    const intro = showIntro && assessment.intro ? `<p class="exam-note">${escapeHtml(assessment.intro)}</p>` : "";
    return `${backToUnits()}<header class="page-head">${isExam(assessment) ? "" : assessmentTag(assessment)}<h1 tabindex="-1">${escapeHtml(assessment.title)}</h1>${intro}</header>`;
  }
  function counter(step, total, phase, originalNumber) {
    const original = originalNumber ? ` · Pregunta ${originalNumber} del parcial` : "";
    return `<div class="question-meta"><span class="q-count">${originalNumber ? "Paso" : "Pregunta"} ${pad(step)} <small>/ ${pad(total)}</small></span>
    ${phase ? `<span class="phase-label">${phase}${original}</span>` : ""}</div>`;
  }
  function renderWritten(exam, record) {
    const { step, drafts, shown } = record.written;
    const question = exam.writtenQuestions[step];
    const visible = shown[step];
    const nextText = step + 1 === exam.writtenQuestions.length ? "Pasar a opción múltiple" : "Siguiente pregunta";
    return `<div class="page ${exam.tone}" data-exam="${exam.id}">${header(exam, step === 0)}<div class="exam">
    <article class="question glass">${counter(step + 1, questionCount(exam), "Desarrollo", question.examNumber)}
      <h2 id="question" tabindex="-1">${escapeHtml(question.text)}</h2>
      <label class="essay-label" for="essay">Tu respuesta</label>
      <textarea id="essay" data-written="${step}" rows="5" spellcheck="true" aria-describedby="essay-hint">${escapeHtml(drafts[step])}</textarea>
      <p class="essay-hint" id="essay-hint">Compará tu desarrollo con el modelo. El puntaje se calcula sobre las preguntas de opción múltiple.</p>
      <button type="button" class="secondary show-model" data-a="model" data-q="${step}" aria-expanded="${visible}" aria-controls="model-answer">${icon("book")}${visible ? "Ocultar respuesta correcta" : "Mostrar respuesta correcta"}</button>
      <div id="model-answer" ${visible ? "" : "hidden"}>${visible ? modelAnswer(question) : ""}</div>
      <div class="actions">
        ${step > 0 ? `<button type="button" class="text-btn" data-a="previous-written" data-q="${step}">${icon("left")}Anterior</button>` : "<span></span>"}
        <button type="button" class="primary" data-a="next-written" data-q="${step}">${nextText}${icon("arrow")}</button></div>
    </article>${sessionPanel(exam, record)}</div></div>`;
  }
  function renderChoice(assessment, index, question, option, choice, selected) {
    const answered = selected !== void 0;
    const correct = answered && choice === question.correct;
    const wrong = answered && choice === selected && !correct;
    let verdict = "";
    if (correct) verdict = selected === choice ? "Correcto" : "Respuesta correcta";
    if (wrong) verdict = "Incorrecto";
    return `<button type="button" class="option ${correct ? "good" : wrong ? "bad" : ""}" data-a="choose" data-u="${assessment.id}" data-q="${index}" data-iopt="${choice}" aria-pressed="${selected === choice}" ${answered ? "disabled" : ""}>
    <span class="letter">${optionLetter(choice)}</span><span class="opt-text">${formatText(option)}</span>
    ${verdict ? `<span class="verdict">${icon(correct ? "check" : "x")}${verdict}</span>` : ""}</button>`;
  }
  function renderQuiz(assessment, record) {
    const { index, answers } = record.attempt;
    const question = assessment.questions[index];
    const selected = answers[index];
    const answered = selected !== void 0;
    const step = index + 1 + (assessment.writtenQuestions?.length ?? 0);
    const phase = isExam(assessment) ? "Opción múltiple" : "";
    const options = question.options.map(
      (option, choice) => renderChoice(assessment, index, question, option, choice, selected)
    );
    const nextText = index + 1 === assessment.questions.length ? "Ver resultado" : "Siguiente pregunta";
    return `<div class="page ${assessment.tone}">${header(assessment)}<div class="exam">
    <article class="question glass">${counter(step, questionCount(assessment), phase, question.examNumber)}
      <h2 id="question" tabindex="-1">${formatText(question.text)}</h2><div class="options" aria-labelledby="question">${options.join("")}</div>
      ${isExam(assessment) && answered ? explanation(question) : ""}
      <div class="actions"><span>${answered ? "Respuesta registrada" : "Elegí una opción"}</span>
      <button type="button" class="primary" data-a="next" data-q="${index}" data-u="${assessment.id}" ${answered ? "" : "disabled"}>${nextText}${icon("arrow")}</button></div>
    </article>${sessionPanel(assessment, record)}</div></div>`;
  }

  // src/ui/review.js
  var percentFormat = new Intl.NumberFormat("es-AR", { maximumFractionDigits: 2 });
  function renderResult(assessment, record) {
    const score = scoreAttempt(assessment, record.attempt);
    const exam = isExam(assessment);
    const reviewPath = exam ? `#/${assessment.id}/revision` : `#/revision/${assessment.id}`;
    const detail = exam ? `preguntas de opción múltiple. Completaste ${writtenAnswered(record.written)} de ${assessment.writtenQuestions.length} desarrollos.` : `preguntas de ${escapeHtml(assessment.title)}.`;
    return `<div class="page ${assessment.tone}">${backToUnits()}<section class="result glass ${score.pass ? "passed" : "failed"}">
    <div class="ring ${exam ? "mock-ring" : ""}" style="--value:${score.percent}%"><div><strong>${percentFormat.format(score.percent)}<small>%</small></strong><span>Puntaje final</span></div></div>
    <div class="result-copy">${assessmentTag(assessment)}<h1 tabindex="-1">${score.pass ? "Aprobado" : "Desaprobado"}</h1>
    <p>Acertaste <strong>${score.correct} de ${score.total}</strong> ${detail}</p>
    <div class="result-counts"><span class="green">${icon("check")}${score.correct} correctas</span><span class="red">${icon("x")}${score.wrong} incorrectas</span></div>
    <p class="threshold">Se aprueba con el ${PASS_PERCENT} %.</p>
    <div class="result-actions"><a href="${reviewPath}" class="primary">Revisar respuestas${icon("arrow")}</a>
    <button type="button" class="secondary" data-a="retry" data-u="${assessment.id}">${icon("retry")}Volver a practicar</button></div>
    </div></section></div>`;
  }
  function reviewOptions(question, selected) {
    return question.options.map((option, index) => {
      const correct = index === question.correct;
      const chosen = index === selected;
      let label = "";
      if (correct) label = chosen ? "Tu respuesta · Correcta" : "Respuesta correcta";
      else if (chosen) label = "Tu respuesta · Incorrecta";
      return `<div class="bank-option ${correct ? "good" : chosen ? "bad" : ""}">
      <span class="letter">${optionLetter(index)}</span><span class="opt-text">${formatText(option)}</span>
      ${label ? `<span class="verdict">${icon(correct ? "check" : "x")}${label}</span>` : ""}</div>`;
    }).join("");
  }
  function reviewQuestion(assessment, question, index, selected) {
    const exam = isExam(assessment);
    const number = question.examNumber ?? index + 1 + (assessment.writtenQuestions?.length ?? 0);
    return `<details class="item glass" id="pregunta-${number}" ${exam ? "" : "open"}>
    <summary><span class="num">${pad(number)}</span><span>${formatText(question.text)}</span>${icon("down")}</summary>
    <div class="bank-options">${reviewOptions(question, selected)}${exam ? explanation(question) : ""}</div></details>`;
  }
  function writtenReview(exam, record) {
    return exam.writtenQuestions.map((question, index) => {
      const draft = record.written.drafts[index].trim() ? escapeHtml(record.written.drafts[index]) : "Dejaste esta respuesta en blanco.";
      return `<details class="item glass"><summary><span class="num">${pad(question.examNumber ?? index + 1)}</span><span>${escapeHtml(question.text)}</span>${icon("down")}</summary>
      <div class="written-review"><h3>Tu respuesta</h3><p class="saved-answer">${draft}</p>${modelAnswer(question)}</div></details>`;
    }).join("");
  }
  function renderBank(assessment, record, review) {
    const questions = assessment.questions.map(
      (question, index) => reviewQuestion(
        assessment,
        question,
        index,
        review ? record.attempt.answers[index] : void 0
      )
    ).join("");
    if (isExam(assessment)) {
      return `<div class="page ${assessment.tone}"><a class="back" href="#/${assessment.id}/resultado">${icon("left")}Volver al resultado</a>
      <header class="page-head">${assessmentTag(assessment)}<h1 tabindex="-1">Tus respuestas</h1></header>
      <div class="section-bar"><h2>Desarrollo</h2><button type="button" class="text-btn" data-a="fold">Expandir todas</button></div>
      <div class="bank-list">${writtenReview(assessment, record)}</div><h2 class="review-part">Opción múltiple</h2>
      <div class="bank-list">${questions}</div></div>`;
    }
    const pills = units.map(
      (unit) => `<a class="unit-pill ${unit.tone}" href="#/banco/${unit.id}" ${unit.id === assessment.id ? 'aria-current="page"' : ""}><b></b>Unidad ${unit.id}</a>`
    ).join("");
    return `<div class="page ${assessment.tone}">
    ${review ? `<a class="back" href="#/resultado/${assessment.id}">${icon("left")}Volver al resultado</a>` : ""}
    <header class="page-head"><h1 tabindex="-1">${review ? "Tus respuestas" : "Banco de preguntas"}</h1>
    <p>${review ? "Compará cada elección con la respuesta correcta." : "Consultá todas las opciones y la respuesta que acepta el cuestionario."}</p></header>
    ${review ? "" : `<nav class="pills" aria-label="Unidades del banco">${pills}</nav>`}
    <div class="section-bar bank-bar"><div>${assessmentTag(assessment)}<h2>${escapeHtml(assessment.title)}</h2></div>
    <button type="button" class="text-btn" data-a="fold">Contraer todas</button></div><div class="bank-list">${questions}</div></div>`;
  }

  // src/main.js
  var main = document.querySelector("#contenido");
  var notice = document.querySelector("#notice");
  var tabs = Array.from(document.querySelectorAll(".mast nav a"));
  var bankTab = document.querySelector("#bank-tab");
  var titles = {
    banco: "Banco de preguntas",
    resultado: "Resultado",
    revision: "Tus respuestas",
    practica: "Práctica",
    escrito: "Desarrollo"
  };
  function browserStorage() {
    try {
      return window.localStorage;
    } catch {
      return null;
    }
  }
  var progress = createProgressStore(assessments, browserStorage());
  function screenFor(view, assessment) {
    if (view === "inicio") return renderHome(progress);
    const record = progress.get(assessment);
    switch (view) {
      case "escrito":
        return renderWritten(assessment, record);
      case "practica":
        return renderQuiz(assessment, record);
      case "resultado":
        return renderResult(assessment, record);
      default:
        return renderBank(assessment, record, view === "revision");
    }
  }
  function render({ top = true, focus = null } = {}) {
    const { view, assessment, question } = resolveRoute(location.hash, progress);
    if (view === "banco") bankTab.href = "#/banco/" + assessment.id;
    const currentTab = isExam(assessment) ? assessment.id : view === "banco" ? "bank" : "practice";
    for (const tab of tabs) {
      if (tab.dataset.tab === currentTab) tab.setAttribute("aria-current", "page");
      else tab.removeAttribute("aria-current");
    }
    main.innerHTML = screenFor(view, assessment);
    const name = isExam(assessment) ? assessment.title : "Unidad " + assessment?.id;
    document.title = view === "inicio" ? "Nexo · Práctica de redes" : `${titles[view]} · ${name} · Nexo`;
    paint(document);
    if (top && view === "banco" && Number.isInteger(question)) {
      const item = document.getElementById("pregunta-" + question);
      if (item) {
        item.scrollIntoView({ block: "start" });
        item.querySelector("summary").focus({ preventScroll: true });
        return;
      }
    }
    if (top) window.scrollTo(0, 0);
    if (focus) (main.querySelector(focus) ?? main).focus({ preventScroll: true });
  }
  function go(path) {
    if (location.hash === path) render({ focus: "h1" });
    else location.hash = path;
  }
  function updateFoldLabel() {
    const button = main.querySelector('[data-a="fold"]');
    if (!button) return;
    const expanded = Array.from(main.querySelectorAll("details")).every((item) => item.open);
    button.textContent = expanded ? "Contraer todas" : "Expandir todas";
  }
  function toggleAll() {
    const items = Array.from(main.querySelectorAll("details"));
    const expand = items.some((item) => !item.open);
    items.forEach((item) => {
      item.open = expand;
    });
    updateFoldLabel();
  }
  function editDraft(event) {
    const field = event.target.closest("textarea[data-written]");
    if (!field) return;
    const exam = findAssessment(field.closest("[data-exam]")?.dataset.exam);
    if (!isExam(exam)) return;
    const { written } = progress.get(exam);
    const step = Number(field.dataset.written);
    if (step !== written.step) return;
    written.drafts[step] = field.value;
    progress.save(exam);
    const count = main.querySelector('[data-stat="written"]');
    if (count) count.textContent = writtenAnswered(written);
  }
  function handleWritten(button, action) {
    const exam = findAssessment(button.closest("[data-exam]")?.dataset.exam);
    if (!isExam(exam)) return;
    const { written } = progress.get(exam);
    const step = Number(button.dataset.q);
    if (step !== written.step || step < 0 || step >= exam.writtenQuestions.length) return;
    if (action === "model") {
      written.shown[step] = !written.shown[step];
      progress.save(exam);
      render({ top: false, focus: '[data-a="model"]' });
    } else {
      written.step = action === "next-written" ? step + 1 : Math.max(0, step - 1);
      progress.save(exam);
      render({ focus: "#question" });
    }
  }
  function handleClick(event) {
    const button = event.target.closest("button[data-a]");
    if (!button || button.disabled) return;
    const action = button.dataset.a;
    if (action === "fold") return toggleAll();
    if (["model", "next-written", "previous-written"].includes(action))
      return handleWritten(button, action);
    const assessment = findAssessment(button.dataset.u);
    if (!assessment) return;
    const record = progress.get(assessment);
    const index = Number(button.dataset.q);
    switch (action) {
      case "choose": {
        const choice = Number(button.dataset.iopt);
        if (!chooseAnswer(assessment, record, index, choice)) return;
        progress.save(assessment);
        render({ top: false, focus: event.detail === 0 ? '[data-a="next"]' : null });
        const question = assessment.questions[index];
        notice.textContent = choice === question.correct ? "Correcto." : `Incorrecto. La respuesta correcta es ${optionLetter(question.correct)}. ${question.options[question.correct]}`;
        break;
      }
      case "next":
        if (!advanceQuestion(assessment, record, index)) return;
        progress.save(assessment);
        if (record.attempt.finished)
          go(isExam(assessment) ? `#/${assessment.id}/resultado` : `#/resultado/${assessment.id}`);
        else render({ focus: "#question" });
        break;
      case "retry":
        progress.restart(assessment);
        go(isExam(assessment) ? `#/${assessment.id}` : `#/practica/${assessment.id}`);
        break;
    }
  }
  main.addEventListener("input", editDraft);
  main.addEventListener("click", handleClick);
  main.addEventListener(
    "toggle",
    (event) => {
      if (event.target.matches("details")) updateFoldLabel();
    },
    true
  );
  document.querySelector(".skip").addEventListener("click", (event) => {
    event.preventDefault();
    main.focus();
  });
  window.addEventListener("hashchange", () => {
    notice.textContent = "";
    render({ focus: "h1" });
  });
  window.addEventListener("storage", (event) => {
    const changed = progress.synchronize(event.key);
    if (!changed.length) return;
    const { view, assessment } = resolveRoute(location.hash, progress);
    if (view === "inicio" || changed.includes(assessment)) render({ top: false });
  });
  render();
})();
