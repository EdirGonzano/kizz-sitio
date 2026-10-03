// Generado por excel_a_datos.py desde preguntas.xlsx. No editar a mano: edita el Excel.
const UNIDADES = {
  "1": "Unidad 1 — Rectas y secciones cónicas",
  "2": "Unidad 2 — Matrices",
  "3": "Unidad 3 — Sistema de ecuaciones",
  "4": "Unidad 4 — Funciones"
};

const SESSIONS = [
  {
    "numero": 1,
    "unidad": 1,
    "tema": "Plano cartesiano, puntos medios y distancia",
    "inicio": [
      {
        "pregunta": "¿En qué cuadrante del plano cartesiano se ubica el punto \\( (-3, 5) \\)?",
        "alternativas": [
          "I",
          "II",
          "III",
          "IV"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué representan las coordenadas \\( (x, y) \\) de un punto en el plano cartesiano?",
        "alternativas": [
          "Solo la distancia al origen",
          "Su posición respecto a los ejes horizontal y vertical",
          "El área que ocupa el punto",
          "La pendiente de una recta"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Si el punto medio de \\( \\overline{AB} \\) es \\( M(4,1) \\) y \\( A(2,-3) \\), ¿cuáles son las coordenadas de \\( B \\)?",
        "alternativas": [
          "(6, 5)",
          "(6, -1)",
          "(2, 5)",
          "(8, 2)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál es la distancia entre los puntos \\( (1,2) \\) y \\( (4,6) \\)?",
        "alternativas": [
          "5",
          "7",
          "3",
          "25"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "El punto medio entre \\( A(2,4) \\) y \\( B(6,8) \\) es:",
        "alternativas": [
          "(4, 6)",
          "(8, 12)",
          "(2, 2)",
          "(4, 4)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "La distancia entre \\( A(0,0) \\) y \\( B(3,4) \\) es:",
        "alternativas": [
          "5",
          "7",
          "25",
          "3.5"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Plano cartesiano, puntos medios y distancia",
          "Distancia punto-recta y rectas paralelas",
          "La recta: ecuación, ángulo y pendiente",
          "Determinantes de orden 2 y 3. Cofactores"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 2,
    "unidad": 1,
    "tema": "La recta: ecuación, ángulo y pendiente",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — ¿En qué cuadrante se ubica el punto \\( (4, -2) \\)?",
        "alternativas": [
          "I",
          "II",
          "III",
          "IV"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Repaso sesión anterior — El punto medio de un segmento se calcula promediando:",
        "alternativas": [
          "Las coordenadas x e y de sus extremos",
          "Solo las coordenadas x",
          "Solo las coordenadas y",
          "Las pendientes de las rectas"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Si \\( A(-2,3) \\) y \\( M(1,0) \\) es el punto medio de \\( \\overline{AB} \\), ¿cuál es el punto \\( B \\)?",
        "alternativas": [
          "(4, -3)",
          "(4, 3)",
          "(-4, -3)",
          "(0, -3)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — La distancia entre \\( (2,-1) \\) y \\( (2,5) \\) es:",
        "alternativas": [
          "6",
          "4",
          "36",
          "8"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "La ecuación punto-pendiente de una recta es:",
        "alternativas": [
          "\\( y - y_1 = m(x - x_1) \\)",
          "\\( y = mx \\)",
          "\\( Ax + By = 0 \\)",
          "\\( x = my + b \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Si una recta forma un ángulo de \\( 45° \\) con el eje x, su pendiente es:",
        "alternativas": [
          "0",
          "1",
          "-1",
          "Indefinida"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "La recta: ecuación, ángulo y pendiente",
          "Plano cartesiano, puntos medios y distancia",
          "Distancia punto-recta y rectas paralelas",
          "Determinantes de orden mayor a 3"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 3,
    "unidad": 1,
    "tema": "Distancia punto-recta y rectas paralelas",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — La pendiente de la recta que pasa por \\( (1,2) \\) y \\( (3,6) \\) es:",
        "alternativas": [
          "2",
          "1/2",
          "-2",
          "4"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Una recta horizontal tiene pendiente:",
        "alternativas": [
          "Indefinida",
          "Cero",
          "Positiva",
          "Negativa"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Repaso sesión anterior — ¿Cuál es la ecuación de la recta que pasa por \\( (2,1) \\) con pendiente \\( m=3 \\)?",
        "alternativas": [
          "\\( y=3x-5 \\)",
          "\\( y=3x+5 \\)",
          "\\( y=3x-1 \\)",
          "\\( y=-3x+5 \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Si una recta tiene pendiente \\( m=0 \\), la recta es:",
        "alternativas": [
          "Vertical",
          "Horizontal",
          "Diagonal creciente",
          "Diagonal decreciente"
        ],
        "correcta": 1
      }
    ],
    "cierre": [
      {
        "pregunta": "Las rectas paralelas \\( L_1: 2x+3y-6=0 \\) y \\( L_2: 2x+3y+9=0 \\), ¿qué tienen en común?",
        "alternativas": [
          "El mismo intercepto",
          "La misma pendiente",
          "El mismo punto de paso",
          "Ninguna característica"
        ],
        "correcta": 1
      },
      {
        "pregunta": "La distancia entre dos rectas paralelas se calcula tomando:",
        "alternativas": [
          "Un punto de una recta y la fórmula de distancia punto-recta con la otra",
          "El producto de sus pendientes",
          "La suma de sus interceptos",
          "El ángulo entre ellas"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Distancia punto-recta y rectas paralelas",
          "La recta: ecuación, ángulo y pendiente",
          "Rectas perpendiculares e intersección",
          "Matriz inversa: adjunta y Gauss-Jordan"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 4,
    "unidad": 1,
    "tema": "Rectas perpendiculares e intersección",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — Dos rectas son paralelas cuando:",
        "alternativas": [
          "Tienen pendientes iguales",
          "El producto de sus pendientes es -1",
          "Se cortan en un punto",
          "Tienen distinto intercepto y pendiente"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — La fórmula de distancia de un punto a una recta usa en el denominador:",
        "alternativas": [
          "\\( \\sqrt{A^2+B^2} \\)",
          "\\( A+B \\)",
          "\\( A^2+B^2 \\)",
          "\\( AB \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — ¿Cuál es la distancia del punto \\( (1,2) \\) a la recta \\( 3x+4y-6=0 \\)?",
        "alternativas": [
          "1",
          "5",
          "2",
          "0.2"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Dos rectas paralelas nunca:",
        "alternativas": [
          "Se intersecan",
          "Tienen la misma pendiente",
          "Están en el mismo plano",
          "Son verticales"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Para hallar el punto de intersección entre dos rectas se debe:",
        "alternativas": [
          "Sumar sus pendientes",
          "Resolver el sistema formado por ambas ecuaciones",
          "Multiplicar sus ecuaciones",
          "Igualar sus interceptos"
        ],
        "correcta": 1
      },
      {
        "pregunta": "El ángulo entre dos rectas se relaciona con:",
        "alternativas": [
          "La diferencia de sus pendientes mediante la función tangente",
          "La suma de sus interceptos",
          "El punto medio entre ambas",
          "Su distancia al origen"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Rectas perpendiculares e intersección",
          "Distancia punto-recta y rectas paralelas",
          "Secciones cónicas y completación de cuadrados",
          "Ecuación lineal y tipos de solución"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 5,
    "unidad": 1,
    "tema": "Secciones cónicas y completación de cuadrados",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — Dos rectas son perpendiculares si el producto de sus pendientes es:",
        "alternativas": [
          "-1",
          "0",
          "1",
          "Indefinido"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — El punto de intersección de dos rectas se halla:",
        "alternativas": [
          "Resolviendo el sistema de sus ecuaciones",
          "Sumando sus pendientes",
          "Promediando sus interceptos",
          "Graficando solamente"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — ¿Cuál es el punto de intersección de las rectas \\( y=x+1 \\) y \\( y=-x+5 \\)?",
        "alternativas": [
          "(2, 3)",
          "(3, 2)",
          "(1, 2)",
          "(2, 5)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Si \\( m_1\\cdot m_2=-1 \\), las rectas son:",
        "alternativas": [
          "Perpendiculares",
          "Paralelas",
          "Coincidentes",
          "Verticales"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "El método de completación de cuadrados sirve para:",
        "alternativas": [
          "Eliminar variables de una ecuación",
          "Transformar una ecuación general en su forma ordinaria o canónica",
          "Calcular pendientes",
          "Hallar el punto medio"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Al completar cuadrados en \\( x^2 + 6x \\), se debe sumar y restar:",
        "alternativas": [
          "6",
          "3",
          "9",
          "36"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Secciones cónicas y completación de cuadrados",
          "Rectas perpendiculares e intersección",
          "Circunferencia: ecuación y recta tangente",
          "Métodos algebraicos de solución de sistemas"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 6,
    "unidad": 1,
    "tema": "Circunferencia: ecuación y recta tangente",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — Las secciones cónicas se generan al intersecar un plano con:",
        "alternativas": [
          "Un cono doble",
          "Una esfera",
          "Un cilindro",
          "Un cubo"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — El método de completación de cuadrados transforma una expresión en:",
        "alternativas": [
          "Un binomio al cuadrado más una constante",
          "Un producto de factores lineales",
          "Una suma de fracciones",
          "Un determinante"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Al completar cuadrados en \\( x^2-8x+5 \\), la expresión equivalente es:",
        "alternativas": [
          "\\( (x-4)^2-11 \\)",
          "\\( (x-8)^2+5 \\)",
          "\\( (x-4)^2+11 \\)",
          "\\( (x+4)^2-11 \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Un lugar geométrico es el conjunto de puntos que cumplen:",
        "alternativas": [
          "Una condición común",
          "Ninguna condición",
          "Solo estar en el eje x",
          "Ser negativos"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "¿Cuáles son el centro y el radio de la circunferencia \\( x^2+y^2-4x+2y-4=0 \\)?",
        "alternativas": [
          "Centro (2, -1), radio 3",
          "Centro (-2, 1), radio 3",
          "Centro (2, -1), radio 9",
          "Centro (4, -2), radio 3"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Una recta tangente a una circunferencia la toca en:",
        "alternativas": [
          "Dos puntos",
          "Ningún punto",
          "Exactamente un punto",
          "Infinitos puntos"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Circunferencia: ecuación y recta tangente",
          "Secciones cónicas y completación de cuadrados",
          "Parábola: ecuación ordinaria, canónica y general",
          "Método de la matriz inversa o adjunta"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 7,
    "unidad": 1,
    "tema": "Parábola: ecuación ordinaria, canónica y general",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — La ecuación ordinaria de la circunferencia con centro \\( (h,k) \\) y radio \\( r \\) es:",
        "alternativas": [
          "\\( (x-h)^2+(y-k)^2=r^2 \\)",
          "\\( (x-h)^2-(y-k)^2=r^2 \\)",
          "\\( x^2+y^2=r \\)",
          "\\( (x-h)+(y-k)=r^2 \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Una recta tangente a una circunferencia la toca en:",
        "alternativas": [
          "Un solo punto",
          "Dos puntos",
          "Ningún punto",
          "Todo su perímetro"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — ¿Cuáles son el centro y el radio de la circunferencia \\( (x-3)^2+(y+2)^2=16 \\)?",
        "alternativas": [
          "Centro (3,-2), radio 4",
          "Centro (-3,2), radio 4",
          "Centro (3,-2), radio 16",
          "Centro (3,2), radio 4"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Los elementos que definen una circunferencia son:",
        "alternativas": [
          "Centro y radio",
          "Vértice y foco",
          "Dos focos",
          "Asíntotas"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Si el eje de una parábola es paralelo al eje y, su ecuación tiene la forma:",
        "alternativas": [
          "\\( y^2=4px \\)",
          "\\( (x-h)^2=4p(y-k) \\)",
          "\\( (y-k)^2=4p(x-h) \\)",
          "\\( x^2+y^2=r^2 \\)"
        ],
        "correcta": 1
      },
      {
        "pregunta": "En la parábola, la distancia del vértice al foco es igual a la distancia del vértice a:",
        "alternativas": [
          "El otro foco",
          "La directriz",
          "El centro",
          "El eje mayor"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Parábola: ecuación ordinaria, canónica y general",
          "Circunferencia: ecuación y recta tangente",
          "Elipse: ecuación ordinaria, canónica y general",
          "Método de Cramer"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 8,
    "unidad": 1,
    "tema": "Elipse: ecuación ordinaria, canónica y general",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — Los elementos principales de una parábola son:",
        "alternativas": [
          "Vértice, foco y directriz",
          "Centro y radio",
          "Dos focos",
          "Asíntotas"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — En \\( y^2=4px \\), si \\( p>0 \\), la parábola abre hacia:",
        "alternativas": [
          "La derecha",
          "La izquierda",
          "Arriba",
          "Abajo"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — ¿Cuál es el valor de \\( p \\) en la parábola \\( y^2=12x \\)?",
        "alternativas": [
          "3",
          "12",
          "4",
          "6"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — La distancia del vértice al foco de una parábola es igual a la distancia del vértice a:",
        "alternativas": [
          "La directriz",
          "El otro foco",
          "El eje mayor",
          "El centro"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "En una elipse, la relación entre \\( a \\), \\( b \\) y \\( c \\) (distancia al foco) es:",
        "alternativas": [
          "\\( a^2=b^2+c^2 \\)",
          "\\( c^2=a^2+b^2 \\)",
          "\\( a=b+c \\)",
          "\\( c^2=a^2-b^2 \\)"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Si el eje mayor de una elipse es paralelo al eje y, la ecuación ordinaria tiene la forma:",
        "alternativas": [
          "\\( \\dfrac{(x-h)^2}{a^2}+\\dfrac{(y-k)^2}{b^2}=1,\\ a>b \\)",
          "\\( \\dfrac{(x-h)^2}{b^2}+\\dfrac{(y-k)^2}{a^2}=1,\\ a>b \\)",
          "\\( x^2-y^2=1 \\)",
          "\\( y=ax^2+bx+c \\)"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Elipse: ecuación ordinaria, canónica y general",
          "Parábola: ecuación ordinaria, canónica y general",
          "Hipérbola: ecuación ordinaria, canónica y general",
          "Gauss-Jordan: soluciones determinadas"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 9,
    "unidad": 1,
    "tema": "Hipérbola: ecuación ordinaria, canónica y general",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — En una elipse, la suma de distancias de cualquier punto a los dos focos es:",
        "alternativas": [
          "Constante",
          "Variable",
          "Cero",
          "Igual al radio"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — En \\( \\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1 \\), si \\( a>b \\), el eje mayor es:",
        "alternativas": [
          "Horizontal",
          "Vertical",
          "Inexistente",
          "Igual al menor"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — En la elipse \\( \\dfrac{x^2}{25}+\\dfrac{y^2}{9}=1 \\), ¿cuánto vale \\( c \\) (distancia al foco)?",
        "alternativas": [
          "4",
          "16",
          "5",
          "3"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — La relación entre \\( a \\), \\( b \\) y \\( c \\) en una elipse es:",
        "alternativas": [
          "\\( c^2=a^2-b^2 \\)",
          "\\( c^2=a^2+b^2 \\)",
          "\\( a^2=b^2+c^2 \\)",
          "\\( a=b+c \\)"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Las rectas a las que se aproxima una hipérbola sin llegar a tocarlas se llaman:",
        "alternativas": [
          "Directrices",
          "Tangentes",
          "Asíntotas",
          "Normales"
        ],
        "correcta": 2
      },
      {
        "pregunta": "La ecuación \\( \\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1 \\) representa una hipérbola con eje transverso:",
        "alternativas": [
          "Vertical",
          "Horizontal",
          "Inclinado",
          "Inexistente"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Hipérbola: ecuación ordinaria, canónica y general",
          "Elipse: ecuación ordinaria, canónica y general",
          "Relación entre cónicas",
          "Gauss-Jordan: indeterminadas e inconsistentes"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 10,
    "unidad": 1,
    "tema": "Relación entre cónicas",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — En una hipérbola, la diferencia de distancias de un punto a los dos focos es:",
        "alternativas": [
          "Constante",
          "Cero",
          "Variable",
          "Igual a la suma de los ejes"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Las rectas a las que se acerca una hipérbola sin tocarlas se llaman:",
        "alternativas": [
          "Asíntotas",
          "Directrices",
          "Tangentes",
          "Normales"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — En la hipérbola \\( \\dfrac{x^2}{16}-\\dfrac{y^2}{9}=1 \\), ¿cuánto vale \\( c \\)?",
        "alternativas": [
          "5",
          "25",
          "7",
          "4"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — La relación entre \\( a \\), \\( b \\) y \\( c \\) en una hipérbola es:",
        "alternativas": [
          "\\( c^2=a^2+b^2 \\)",
          "\\( c^2=a^2-b^2 \\)",
          "\\( a=b+c \\)",
          "\\( a^2=b^2+c^2 \\)"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "En \\( Ax^2+By^2+Cx+Dy+E=0 \\), si \\( A \\) y \\( B \\) tienen signos opuestos, la cónica es:",
        "alternativas": [
          "Una circunferencia",
          "Una parábola",
          "Una elipse",
          "Una hipérbola"
        ],
        "correcta": 3
      },
      {
        "pregunta": "En \\( Ax^2+By^2+Cx+Dy+E=0 \\), si solo una de las variables aparece elevada al cuadrado (\\( A=0 \\) o \\( B=0 \\)), la cónica es:",
        "alternativas": [
          "Una parábola",
          "Una circunferencia",
          "Una hipérbola",
          "Una elipse"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Relación entre cónicas",
          "Hipérbola: ecuación ordinaria, canónica y general",
          "Matrices: definición y tipos",
          "Par ordenado, relación y función"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 11,
    "unidad": 1,
    "tema": "Sesión integradora 1: prep. Práctica Calificada 1",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — En la ecuación general \\( Ax^2+By^2+Cx+Dy+E=0 \\), si \\( A=B\\neq 0 \\), la cónica es:",
        "alternativas": [
          "Una circunferencia",
          "Una parábola",
          "Una elipse",
          "Una hipérbola"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Si \\( A \\) y \\( B \\) tienen signos opuestos en la ecuación general, la cónica es:",
        "alternativas": [
          "Una hipérbola",
          "Una circunferencia",
          "Una parábola",
          "Una elipse"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — La ecuación \\( 2x^2+2y^2-8x+4y-1=0 \\) representa:",
        "alternativas": [
          "Una circunferencia",
          "Una elipse",
          "Una parábola",
          "Una hipérbola"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Si solo \\( x \\) o solo \\( y \\) aparece al cuadrado en la ecuación general, la cónica es:",
        "alternativas": [
          "Una parábola",
          "Una circunferencia",
          "Una elipse",
          "Una hipérbola"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Repaso: la ecuación \\( (x-2)^2+(y+3)^2=25 \\) corresponde a una circunferencia de radio:",
        "alternativas": [
          "25",
          "5",
          "12.5",
          "10"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Repaso: en \\( \\dfrac{(x-1)^2}{16}+\\dfrac{(y+2)^2}{9}=1 \\), el valor de \\( a \\) es:",
        "alternativas": [
          "3",
          "4",
          "9",
          "16"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué hicimos hoy en la sesión?",
        "alternativas": [
          "Repasamos rectas y cónicas para la Práctica Calificada 1",
          "Iniciamos el tema de matrices",
          "Rendimos el Examen Parcial",
          "Repasamos funciones para el Examen Final"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 12,
    "unidad": 1,
    "tema": "Práctica Calificada 1",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — La sesión integradora previa a la Práctica Calificada 1 sirvió para repasar principalmente:",
        "alternativas": [
          "Rectas y las cuatro secciones cónicas",
          "Matrices y determinantes",
          "Funciones",
          "Sistemas de ecuaciones"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Antes de identificar el centro de una cónica en forma general, el primer paso es:",
        "alternativas": [
          "Completar cuadrados",
          "Calcular un determinante",
          "Graficar sin operar",
          "Aplicar Gauss-Jordan"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — En \\( (x+1)^2+(y-4)^2=49 \\), ¿cuáles son el centro y el radio?",
        "alternativas": [
          "Centro (-1,4), radio 7",
          "Centro (1,-4), radio 7",
          "Centro (-1,4), radio 49",
          "Centro (-1,-4), radio 7"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — En \\( \\dfrac{(x-2)^2}{36}+\\dfrac{(y+1)^2}{4}=1 \\), el valor de \\( a \\) es:",
        "alternativas": [
          "6",
          "4",
          "2",
          "36"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Al resolver un ejercicio de cónicas, el primer paso ante una ecuación en forma general suele ser:",
        "alternativas": [
          "Graficar sin operar",
          "Ordenar términos y completar cuadrados",
          "Calcular un determinante",
          "Aplicar Gauss-Jordan"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué unidad del curso se abre después de la Práctica Calificada 1?",
        "alternativas": [
          "Funciones",
          "Matrices",
          "Sistema de ecuaciones",
          "Secciones cónicas"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué hicimos hoy en la sesión?",
        "alternativas": [
          "Rendimos la Práctica Calificada 1 (rectas y cónicas)",
          "Rendimos la Práctica Calificada 2",
          "Iniciamos el tema de sistemas de ecuaciones",
          "Rendimos el Examen Final"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 13,
    "unidad": 2,
    "tema": "Matrices: definición y tipos",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — La Práctica Calificada 1 evaluó los contenidos de la unidad:",
        "alternativas": [
          "Rectas y secciones cónicas",
          "Matrices",
          "Funciones",
          "Sistema de ecuaciones"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — La herramienta clave para hallar centro y radio de una circunferencia en forma general fue:",
        "alternativas": [
          "Completación de cuadrados",
          "Regla de Cramer",
          "Método de cofactores",
          "Gauss-Jordan"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Al completar cuadrados en \\( x^2-10x \\), el término que se debe sumar y restar es:",
        "alternativas": [
          "25",
          "10",
          "5",
          "100"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Después de la Práctica Calificada 1, la nueva unidad que se abre es:",
        "alternativas": [
          "Matrices",
          "Funciones",
          "Sistema de ecuaciones",
          "Secciones cónicas"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Una matriz donde el número de filas es igual al número de columnas se llama:",
        "alternativas": [
          "Matriz fila",
          "Matriz cuadrada",
          "Matriz nula",
          "Matriz rectangular"
        ],
        "correcta": 1
      },
      {
        "pregunta": "La matriz identidad se caracteriza por tener:",
        "alternativas": [
          "Todos sus elementos en cero",
          "Unos en la diagonal principal y ceros fuera de ella",
          "Solo números negativos",
          "Una sola fila"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Matrices: definición y tipos",
          "Relación entre cónicas",
          "Operaciones con matrices",
          "Función lineal, cuadrática y raíz cuadrada"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 14,
    "unidad": 2,
    "tema": "Operaciones con matrices",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — Una matriz cuadrada es aquella donde:",
        "alternativas": [
          "El número de filas es igual al número de columnas",
          "Tiene una sola fila",
          "Tiene una sola columna",
          "Todos sus elementos son cero"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — La matriz identidad tiene:",
        "alternativas": [
          "Unos en la diagonal principal y ceros fuera de ella",
          "Todos sus elementos en uno",
          "Solo ceros",
          "Números negativos en la diagonal"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Una matriz \\( A \\) de tamaño \\( 4\\times 3 \\) tiene en total:",
        "alternativas": [
          "12 elementos",
          "7 elementos",
          "4 elementos",
          "3 elementos"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Una matriz de una sola fila se llama:",
        "alternativas": [
          "Matriz fila",
          "Matriz columna",
          "Matriz cuadrada",
          "Matriz nula"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Si \\( A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix} \\) y \\( B=\\begin{bmatrix}5&6\\\\7&8\\end{bmatrix} \\), entonces \\( A+B \\) es:",
        "alternativas": [
          "\\( \\begin{bmatrix}6&8\\\\10&12\\end{bmatrix} \\)",
          "\\( \\begin{bmatrix}5&12\\\\21&32\\end{bmatrix} \\)",
          "\\( \\begin{bmatrix}4&4\\\\4&4\\end{bmatrix} \\)",
          "\\( \\begin{bmatrix}-4&-4\\\\-4&-4\\end{bmatrix} \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Si \\( A=\\begin{bmatrix}2&0\\\\1&3\\end{bmatrix} \\), entonces \\( 2A \\) es:",
        "alternativas": [
          "\\( \\begin{bmatrix}4&0\\\\2&6\\end{bmatrix} \\)",
          "\\( \\begin{bmatrix}2&0\\\\1&3\\end{bmatrix} \\)",
          "\\( \\begin{bmatrix}1&0\\\\0.5&1.5\\end{bmatrix} \\)",
          "\\( \\begin{bmatrix}4&2\\\\0&6\\end{bmatrix} \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Operaciones con matrices",
          "Matrices: definición y tipos",
          "Producto y potencia de matrices",
          "Función valor absoluto y racional"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 15,
    "unidad": 2,
    "tema": "Producto y potencia de matrices",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — Para sumar dos matrices, ambas deben tener:",
        "alternativas": [
          "El mismo tamaño (filas y columnas)",
          "El mismo determinante",
          "Ser cuadradas",
          "Ser triangulares"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Al multiplicar una matriz por un escalar \\( k \\), se multiplica:",
        "alternativas": [
          "Cada elemento de la matriz por \\( k \\)",
          "Solo la primera fila",
          "Solo la diagonal",
          "El determinante por \\( k \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Si \\( A=\\begin{bmatrix}3&-1\\\\2&0\\end{bmatrix} \\) y \\( B=\\begin{bmatrix}-2&4\\\\1&5\\end{bmatrix} \\), \\( A-B \\) es:",
        "alternativas": [
          "\\( \\begin{bmatrix}5&-5\\\\1&-5\\end{bmatrix} \\)",
          "\\( \\begin{bmatrix}1&3\\\\3&5\\end{bmatrix} \\)",
          "\\( \\begin{bmatrix}-5&5\\\\-1&5\\end{bmatrix} \\)",
          "\\( \\begin{bmatrix}5&5\\\\1&5\\end{bmatrix} \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — La resta de matrices \\( A-B \\) equivale a:",
        "alternativas": [
          "\\( A+(-1)B \\)",
          "\\( A\\cdot B^{-1} \\)",
          "\\( B-A \\)",
          "\\( A\\cdot B \\)"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "La potencia \\( A^2 \\) de una matriz cuadrada \\( A \\) equivale a:",
        "alternativas": [
          "\\( A+A \\)",
          "\\( A\\cdot A \\)",
          "\\( 2A \\)",
          "\\( A/A \\)"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Si \\( A \\) es de tamaño \\( 2\\times 3 \\) y \\( B \\) de tamaño \\( 3\\times 4 \\), la matriz \\( AB \\) resulta de tamaño:",
        "alternativas": [
          "\\( 2\\times 4 \\)",
          "\\( 3\\times 3 \\)",
          "\\( 4\\times 2 \\)",
          "\\( 2\\times 3 \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Producto y potencia de matrices",
          "Operaciones con matrices",
          "Determinantes de orden 2 y 3. Cofactores",
          "Función inyectiva, inversa y por tramos"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 16,
    "unidad": 2,
    "tema": "Determinantes de orden 2 y 3. Cofactores",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — Para que el producto \\( AB \\) esté definido, se requiere que:",
        "alternativas": [
          "Las columnas de A sean iguales a las filas de B",
          "Las filas de A sean iguales a las filas de B",
          "A y B sean cuadradas",
          "A y B tengan el mismo tamaño"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — El producto de matrices, en general, es:",
        "alternativas": [
          "No conmutativo",
          "Conmutativo",
          "Igual a la suma",
          "Siempre cero"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Si \\( A \\) es \\( 3\\times 2 \\) y \\( B \\) es \\( 2\\times 5 \\), el tamaño de \\( AB \\) es:",
        "alternativas": [
          "\\( 3\\times 5 \\)",
          "\\( 2\\times 2 \\)",
          "\\( 5\\times 3 \\)",
          "\\( 3\\times 2 \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — La potencia \\( A^3 \\) de una matriz cuadrada equivale a:",
        "alternativas": [
          "\\( A\\cdot A\\cdot A \\)",
          "\\( 3A \\)",
          "\\( A+A+A \\)",
          "\\( A/3 \\)"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Para determinantes de orden 3, la regla de Sarrus es un método válido para calcular:",
        "alternativas": [
          "Solo determinantes 2x2",
          "Determinantes de orden 3",
          "Determinantes de cualquier orden",
          "Solo matrices inversas"
        ],
        "correcta": 1
      },
      {
        "pregunta": "El método de cofactores permite calcular un determinante expandiendo por:",
        "alternativas": [
          "Una fila o columna, usando menores y signos",
          "El promedio de sus elementos",
          "Solo la diagonal principal",
          "La suma de todos sus elementos"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Determinantes de orden 2 y 3. Cofactores",
          "Producto y potencia de matrices",
          "Determinantes de orden mayor a 3",
          "Álgebra y composición de funciones"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 17,
    "unidad": 2,
    "tema": "Determinantes de orden mayor a 3",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — El determinante de una matriz \\( 2\\times 2 \\) se calcula como:",
        "alternativas": [
          "\\( ad-bc \\)",
          "\\( ad+bc \\)",
          "\\( a+d-b-c \\)",
          "\\( ac-bd \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — El método de cofactores expande un determinante usando:",
        "alternativas": [
          "Menores y signos por fila o columna",
          "Solo la diagonal principal",
          "El promedio de los elementos",
          "La suma de las filas"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — El determinante de \\( \\begin{bmatrix}5&2\\\\3&4\\end{bmatrix} \\) es:",
        "alternativas": [
          "14",
          "26",
          "20",
          "6"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — La regla de Sarrus se usa para calcular determinantes de orden:",
        "alternativas": [
          "3",
          "2",
          "4 o más",
          "Cualquier orden"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Para un determinante de orden mayor a 3, el método de cofactores requiere expandir usando:",
        "alternativas": [
          "Menores complementarios y sus signos",
          "Solo la primera fila obligatoriamente",
          "La suma de todas las filas",
          "El promedio de la matriz"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Si se intercambian dos filas de una matriz, su determinante:",
        "alternativas": [
          "No cambia",
          "Cambia de signo",
          "Se hace cero",
          "Se duplica"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Determinantes de orden mayor a 3",
          "Determinantes de orden 2 y 3. Cofactores",
          "Matriz inversa: adjunta y Gauss-Jordan",
          "Plano cartesiano, puntos medios y distancia"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 18,
    "unidad": 2,
    "tema": "Matriz inversa: adjunta y Gauss-Jordan",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — Si dos filas de una matriz son iguales, su determinante es:",
        "alternativas": [
          "0",
          "1",
          "Igual al producto de la diagonal",
          "Siempre negativo"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Al intercambiar dos filas de una matriz, el determinante:",
        "alternativas": [
          "Cambia de signo",
          "No cambia",
          "Se hace cero",
          "Se duplica"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Si una fila de una matriz se multiplica por 3, su determinante queda multiplicado por:",
        "alternativas": [
          "3",
          "9",
          "1/3",
          "No cambia"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Sumar un múltiplo de una fila a otra, en términos del determinante:",
        "alternativas": [
          "No altera su valor",
          "Lo duplica",
          "Lo anula",
          "Cambia su signo"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "El método de Gauss-Jordan para hallar \\( A^{-1} \\) transforma \\( [A\\,|\\,I] \\) en:",
        "alternativas": [
          "\\( [0\\,|\\,A] \\)",
          "\\( [I\\,|\\,A^{-1}] \\)",
          "\\( [A\\,|\\,A] \\)",
          "\\( [I\\,|\\,I] \\)"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Si el determinante de una matriz es cero, la matriz se llama:",
        "alternativas": [
          "Invertible",
          "Singular (no invertible)",
          "Identidad",
          "Diagonal"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Matriz inversa: adjunta y Gauss-Jordan",
          "Determinantes de orden mayor a 3",
          "Ecuación lineal y tipos de solución",
          "La recta: ecuación, ángulo y pendiente"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 19,
    "unidad": 2,
    "tema": "Sesión integradora 2: prep. Examen Parcial",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — Una matriz cuadrada tiene inversa si y solo si su determinante es:",
        "alternativas": [
          "Distinto de cero",
          "Igual a cero",
          "Igual a uno",
          "Negativo"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — El método de Gauss-Jordan para hallar \\( A^{-1} \\) transforma \\( [A|I] \\) en:",
        "alternativas": [
          "\\( [I|A^{-1}] \\)",
          "\\( [A^{-1}|I] \\)",
          "\\( [0|A] \\)",
          "\\( [I|I] \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — ¿Cuál es la inversa de \\( A=\\begin{bmatrix}2&0\\\\0&5\\end{bmatrix} \\)?",
        "alternativas": [
          "\\( \\begin{bmatrix}1/2&0\\\\0&1/5\\end{bmatrix} \\)",
          "\\( \\begin{bmatrix}2&0\\\\0&5\\end{bmatrix} \\)",
          "\\( \\begin{bmatrix}-2&0\\\\0&-5\\end{bmatrix} \\)",
          "\\( \\begin{bmatrix}5&0\\\\0&2\\end{bmatrix} \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Una matriz sin inversa se llama:",
        "alternativas": [
          "Singular",
          "Identidad",
          "Diagonal",
          "Triangular"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Repaso: si \\( \\det(A)=0 \\), entonces \\( A \\):",
        "alternativas": [
          "Tiene inversa única",
          "No tiene inversa",
          "Es la matriz identidad",
          "Es una matriz fila"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Repaso: el producto \\( AB \\) solo está definido si el número de columnas de A es igual al número de:",
        "alternativas": [
          "Columnas de B",
          "Filas de B",
          "Filas de A",
          "Elementos de B"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué hicimos hoy en la sesión?",
        "alternativas": [
          "Repasamos matrices y determinantes para el Examen Parcial",
          "Repasamos rectas y cónicas para la Práctica Calificada 1",
          "Iniciamos el tema de funciones",
          "Rendimos el Examen Final"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 20,
    "unidad": 2,
    "tema": "Examen Parcial",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — La sesión integradora previa al examen parcial repasó principalmente:",
        "alternativas": [
          "Rectas/cónicas y matrices",
          "Solo funciones",
          "Solo sistemas de ecuaciones",
          "Solo determinantes"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Antes de aplicar la matriz inversa a un sistema, conviene verificar primero:",
        "alternativas": [
          "Que el determinante de la matriz sea distinto de cero",
          "Que la matriz sea simétrica",
          "Que tenga más de 3 filas",
          "Que sea diagonal"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Si \\( \\det(A)=0 \\) para la matriz de coeficientes de un sistema \\( AX=B \\), el método de la matriz inversa:",
        "alternativas": [
          "No se puede aplicar",
          "Da una solución única",
          "Funciona igual",
          "Se simplifica"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — El producto \\( AB \\) está definido cuando el número de columnas de A coincide con el número de:",
        "alternativas": [
          "Filas de B",
          "Columnas de B",
          "Filas de A",
          "Elementos de B"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Después del examen parcial, ¿qué unidad se inicia en el curso?",
        "alternativas": [
          "Funciones",
          "Sistema de ecuaciones",
          "Secciones cónicas",
          "Matrices"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Un repaso clave para la siguiente unidad (sistemas de ecuaciones) es dominar:",
        "alternativas": [
          "Solo el plano cartesiano",
          "Operaciones con matrices y determinantes",
          "Solo la ecuación de la recta",
          "Las asíntotas de la hipérbola"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué hicimos hoy en la sesión?",
        "alternativas": [
          "Rendimos el Examen Parcial (rectas, cónicas y matrices)",
          "Rendimos la Práctica Calificada 2",
          "Iniciamos el tema de funciones",
          "Repasamos sistemas de ecuaciones"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 21,
    "unidad": 3,
    "tema": "Ecuación lineal y tipos de solución",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — El examen parcial evaluó principalmente los temas de:",
        "alternativas": [
          "Rectas, secciones cónicas y matrices",
          "Solo funciones",
          "Solo sistemas de ecuaciones",
          "Solo funciones y matrices"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Ante un ejercicio de matrices en una evaluación, conviene primero identificar:",
        "alternativas": [
          "El tamaño y tipo de matriz",
          "El color de la matriz",
          "Si tiene letras",
          "Nada en particular"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Si \\( \\det(A) = 3 \\) y se intercambian dos filas de \\( A \\), el nuevo determinante es:",
        "alternativas": [
          "-3",
          "3",
          "9",
          "0"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Después del examen parcial, la unidad que se inicia es:",
        "alternativas": [
          "Sistema de ecuaciones",
          "Funciones",
          "Matrices",
          "Secciones cónicas"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Un sistema con una única solución se llama:",
        "alternativas": [
          "Compatible determinado",
          "Compatible indeterminado",
          "Incompatible",
          "Inconsistente y determinado"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Un sistema sin solución (rectas paralelas que no se cortan) se llama:",
        "alternativas": [
          "Compatible determinado",
          "Compatible indeterminado",
          "Incompatible (inconsistente)",
          "Homogéneo"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Ecuación lineal y tipos de solución",
          "Matriz inversa: adjunta y Gauss-Jordan",
          "Métodos algebraicos de solución de sistemas",
          "Distancia punto-recta y rectas paralelas"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 22,
    "unidad": 3,
    "tema": "Métodos algebraicos de solución de sistemas",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — Una ecuación lineal con dos variables tiene la forma:",
        "alternativas": [
          "\\( ax+by=c \\)",
          "\\( ax^2+by=c \\)",
          "\\( a/x+b/y=c \\)",
          "\\( a^x+b^y=c \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Un sistema con una única solución se llama:",
        "alternativas": [
          "Compatible determinado",
          "Compatible indeterminado",
          "Incompatible",
          "Homogéneo"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Un sistema de ecuaciones lineales sin solución representa gráficamente dos rectas:",
        "alternativas": [
          "Paralelas no coincidentes",
          "Que se cruzan en un punto",
          "Coincidentes",
          "Perpendiculares"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Un sistema con infinitas soluciones se llama:",
        "alternativas": [
          "Compatible indeterminado",
          "Compatible determinado",
          "Incompatible",
          "Homogéneo nulo"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Al resolver \\( x+y=5 \\) y \\( x-y=1 \\) por reducción, sumando ambas ecuaciones se obtiene:",
        "alternativas": [
          "\\( 2x=6 \\)",
          "\\( 2y=6 \\)",
          "\\( x=1 \\)",
          "\\( y=5 \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Al resolver \\( x+y=5 \\) y \\( x-y=1 \\) por reducción, el valor de \\( x \\) es:",
        "alternativas": [
          "2",
          "3",
          "6",
          "1"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Métodos algebraicos de solución de sistemas",
          "Ecuación lineal y tipos de solución",
          "Método de la matriz inversa o adjunta",
          "Rectas perpendiculares e intersección"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 23,
    "unidad": 3,
    "tema": "Método de la matriz inversa o adjunta",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — El método de sustitución consiste en:",
        "alternativas": [
          "Despejar una variable y reemplazarla en la otra ecuación",
          "Sumar ambas ecuaciones directamente",
          "Graficar el sistema",
          "Multiplicar las ecuaciones"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — El método de reducción busca:",
        "alternativas": [
          "Eliminar una variable sumando o restando ecuaciones",
          "Graficar el sistema",
          "Multiplicar las variables por cero",
          "Cambiar el orden de las incógnitas"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Al resolver \\( 2x+y=7 \\) y \\( x-y=2 \\) por reducción (sumando), se obtiene:",
        "alternativas": [
          "\\( 3x=9 \\)",
          "\\( x=2 \\)",
          "\\( y=7 \\)",
          "\\( 3y=9 \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Al resolver \\( 2x+y=7 \\) y \\( x-y=2 \\), el valor de \\( y \\) es:",
        "alternativas": [
          "1",
          "2",
          "3",
          "5"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "En el método de la adjunta, \\( X=A^{-1}B \\) usa \\( A^{-1} \\) obtenida mediante:",
        "alternativas": [
          "\\( \\dfrac{1}{\\det(A)}\\,\\text{adj}(A) \\)",
          "\\( \\det(A)\\cdot B \\)",
          "La suma de A y B",
          "La transpuesta de B"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Si \\( \\det(A) = 0 \\) en un sistema \\( AX=B \\), el método de la matriz inversa:",
        "alternativas": [
          "Funciona igual",
          "No se puede aplicar",
          "Da siempre solución única",
          "Se simplifica"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Método de la matriz inversa o adjunta",
          "Métodos algebraicos de solución de sistemas",
          "Método de Cramer",
          "Secciones cónicas y completación de cuadrados"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 24,
    "unidad": 3,
    "tema": "Método de Cramer",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — Un sistema \\( AX=B \\) se resuelve con la matriz inversa despejando X como:",
        "alternativas": [
          "\\( X=A^{-1}B \\)",
          "\\( X=BA \\)",
          "\\( X=B^{-1}A \\)",
          "\\( X=A+B \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Para aplicar el método de la matriz inversa, se requiere que:",
        "alternativas": [
          "\\( \\det(A)\\neq 0 \\)",
          "\\( \\det(A)=0 \\)",
          "A sea fila",
          "A tenga más filas que columnas"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Si \\( A^{-1}=\\begin{bmatrix}2&0\\\\0&3\\end{bmatrix} \\) y \\( B=\\begin{bmatrix}5\\\\4\\end{bmatrix} \\), la solución \\( X=A^{-1}B \\) es:",
        "alternativas": [
          "\\( \\begin{bmatrix}10\\\\12\\end{bmatrix} \\)",
          "\\( \\begin{bmatrix}5\\\\4\\end{bmatrix} \\)",
          "\\( \\begin{bmatrix}2\\\\3\\end{bmatrix} \\)",
          "\\( \\begin{bmatrix}7\\\\7\\end{bmatrix} \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — El método de la adjunta calcula \\( A^{-1} \\) mediante:",
        "alternativas": [
          "\\( \\dfrac{1}{\\det(A)}\\text{adj}(A) \\)",
          "\\( \\det(A)\\cdot A \\)",
          "\\( A^2 \\)",
          "\\( A+\\text{adj}(A) \\)"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "La regla de Cramer requiere que el determinante del sistema \\( \\Delta \\) sea:",
        "alternativas": [
          "Igual a cero",
          "Distinto de cero",
          "Igual a uno",
          "Negativo"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Si \\( \\Delta=2 \\) y \\( \\Delta_x=8 \\), entonces \\( x \\) vale:",
        "alternativas": [
          "4",
          "10",
          "6",
          "16"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Método de Cramer",
          "Método de la matriz inversa o adjunta",
          "Gauss-Jordan: soluciones determinadas",
          "Circunferencia: ecuación y recta tangente"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 25,
    "unidad": 3,
    "tema": "Gauss-Jordan: soluciones determinadas",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — La regla de Cramer expresa cada variable como el cociente de dos:",
        "alternativas": [
          "Determinantes",
          "Sumas",
          "Matrices identidad",
          "Productos escalares"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — La regla de Cramer requiere que el determinante del sistema sea:",
        "alternativas": [
          "Distinto de cero",
          "Igual a cero",
          "Igual a uno",
          "Negativo"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Si \\( \\Delta=5 \\), \\( \\Delta_x=15 \\) y \\( \\Delta_y=-10 \\), entonces \\( x \\) y \\( y \\) valen:",
        "alternativas": [
          "x=3, y=-2",
          "x=-2, y=3",
          "x=3, y=2",
          "x=75, y=-50"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Para hallar \\( y \\) con Cramer, se reemplaza en el determinante principal la columna de \\( y \\) por:",
        "alternativas": [
          "Los términos independientes",
          "Una columna de ceros",
          "La columna de x",
          "La diagonal principal"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Al aplicar Gauss-Jordan, si se obtiene una fila del tipo \\( [0\\ 0\\ 0\\ |\\ 5] \\), el sistema es:",
        "alternativas": [
          "Compatible determinado",
          "Compatible indeterminado",
          "Incompatible",
          "Homogéneo"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Las operaciones elementales entre filas permitidas en Gauss-Jordan son:",
        "alternativas": [
          "Intercambiar filas, multiplicar una fila por un escalar no nulo, sumar múltiplos de filas",
          "Solo intercambiar filas",
          "Solo sumar columnas",
          "Multiplicar filas por cero"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Gauss-Jordan: soluciones determinadas",
          "Método de Cramer",
          "Gauss-Jordan: indeterminadas e inconsistentes",
          "Parábola: ecuación ordinaria, canónica y general"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 26,
    "unidad": 3,
    "tema": "Gauss-Jordan: indeterminadas e inconsistentes",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — El método de Gauss-Jordan transforma la matriz aumentada en una forma:",
        "alternativas": [
          "Escalonada reducida (identidad en los coeficientes)",
          "Diagonal negativa",
          "Transpuesta",
          "Nula"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Un sistema compatible determinado tiene:",
        "alternativas": [
          "Una única solución",
          "Infinitas soluciones",
          "Ninguna solución",
          "Solo soluciones negativas"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Al aplicar Gauss-Jordan a un sistema 3x3 y obtener la fila \\( [1\\ 0\\ 0\\ |\\ 4] \\), esto significa que:",
        "alternativas": [
          "\\( x=4 \\)",
          "\\( y=4 \\)",
          "\\( z=4 \\)",
          "El sistema es incompatible"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Las operaciones elementales permitidas entre filas son:",
        "alternativas": [
          "Intercambiar filas, escalar una fila, sumar múltiplos de filas",
          "Solo sumar columnas",
          "Solo multiplicar por cero",
          "Solo intercambiar columnas"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Una fila de ceros igualada a cero, \\( [0\\ 0\\ 0\\ |\\ 0] \\), en Gauss-Jordan indica un sistema:",
        "alternativas": [
          "Incompatible",
          "Compatible indeterminado",
          "Compatible determinado",
          "Sin solución"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Un sistema compatible indeterminado expresa sus soluciones en función de:",
        "alternativas": [
          "Un parámetro o variable libre",
          "Solo números negativos",
          "La matriz identidad",
          "El determinante"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Gauss-Jordan: indeterminadas e inconsistentes",
          "Gauss-Jordan: soluciones determinadas",
          "Par ordenado, relación y función",
          "Elipse: ecuación ordinaria, canónica y general"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 27,
    "unidad": 3,
    "tema": "Sesión integradora 3: prep. Práctica Calificada 2",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — Un sistema compatible indeterminado tiene:",
        "alternativas": [
          "Infinitas soluciones",
          "Una única solución",
          "Ninguna solución",
          "Solución negativa"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Una fila del tipo \\( [0\\ 0\\ 0\\ |\\ k] \\) con \\( k\\neq 0 \\) indica un sistema:",
        "alternativas": [
          "Incompatible",
          "Compatible determinado",
          "Compatible indeterminado",
          "Homogéneo"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Al aplicar Gauss-Jordan se obtiene la fila \\( [0\\ 0\\ 0\\ |\\ 0] \\); esto indica que el sistema es:",
        "alternativas": [
          "Compatible indeterminado (hay al menos una ecuación redundante)",
          "Incompatible",
          "Compatible determinado",
          "Imposible de resolver"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — En un sistema compatible indeterminado, las soluciones se expresan en función de:",
        "alternativas": [
          "Un parámetro o variable libre",
          "La matriz identidad",
          "El determinante",
          "Solo números negativos"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Repaso: si \\( \\Delta=0 \\) en la regla de Cramer, el sistema:",
        "alternativas": [
          "Tiene solución única siempre",
          "No es compatible determinado; hay que analizar más",
          "Se resuelve igual con Cramer",
          "Tiene infinitas soluciones garantizado"
        ],
        "correcta": 1
      },
      {
        "pregunta": "La ventaja de Gauss-Jordan frente a Cramer es que también permite:",
        "alternativas": [
          "Calcular solo determinantes",
          "Identificar sistemas indeterminados e incompatibles claramente",
          "Evitar el uso de matrices",
          "Resolver ecuaciones cuadráticas"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué hicimos hoy en la sesión?",
        "alternativas": [
          "Repasamos sistemas de ecuaciones para la Práctica Calificada 2",
          "Repasamos matrices para el Examen Parcial",
          "Iniciamos el tema de matrices",
          "Rendimos el Examen Final"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 28,
    "unidad": 3,
    "tema": "Práctica Calificada 2",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — La sesión integradora previa a la Práctica Calificada 2 repasó los métodos de:",
        "alternativas": [
          "Matriz inversa, Cramer y Gauss-Jordan",
          "Solo completación de cuadrados",
          "Solo graficación de rectas",
          "Solo determinantes de orden 2"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Para elegir el método más eficiente al resolver un sistema, conviene considerar:",
        "alternativas": [
          "El tamaño del sistema y si se pide una variable o todas",
          "El color de los coeficientes",
          "Si las variables son mayúsculas",
          "Nada en particular"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Si \\( \\Delta=0 \\) en la regla de Cramer, lo correcto es:",
        "alternativas": [
          "Concluir que no es compatible determinado y analizar con Gauss-Jordan",
          "Aplicar Cramer igual, el resultado es válido",
          "Asumir que el sistema tiene solución única",
          "Asumir que el sistema es incompatible siempre"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Frente a Cramer, la ventaja de Gauss-Jordan es que también permite:",
        "alternativas": [
          "Identificar sistemas indeterminados e incompatibles con claridad",
          "Evitar el uso de matrices",
          "Resolver ecuaciones cuadráticas",
          "Calcular solo determinantes"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Después de esta evaluación, la siguiente unidad del curso trata sobre:",
        "alternativas": [
          "Matrices",
          "Funciones",
          "Rectas",
          "Determinantes"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Un concepto que conecta sistemas de ecuaciones con la siguiente unidad es:",
        "alternativas": [
          "La relación entre pares ordenados y correspondencias",
          "Las asíntotas",
          "El método de cofactores",
          "La distancia entre rectas"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué hicimos hoy en la sesión?",
        "alternativas": [
          "Rendimos la Práctica Calificada 2 (sistemas de ecuaciones)",
          "Rendimos el Examen Parcial",
          "Iniciamos el tema de rectas",
          "Repasamos funciones para el Examen Final"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 29,
    "unidad": 4,
    "tema": "Par ordenado, relación y función",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — La Práctica Calificada 2 evaluó principalmente:",
        "alternativas": [
          "Sistemas de ecuaciones lineales",
          "Secciones cónicas",
          "Funciones",
          "Solo determinantes de orden 2"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Un método rápido para hallar solo una variable en un sistema 3x3 es:",
        "alternativas": [
          "La regla de Cramer",
          "Graficar en 3D",
          "Completar cuadrados",
          "Buscar asíntotas"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Al resolver un sistema por Gauss-Jordan y llegar a \\( [0\\ 1\\ 0\\ |\\ -3] \\), se concluye que:",
        "alternativas": [
          "\\( y=-3 \\)",
          "\\( x=-3 \\)",
          "\\( z=-3 \\)",
          "El sistema no tiene solución"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — El concepto que conecta sistemas de ecuaciones con la unidad de funciones es:",
        "alternativas": [
          "La relación entre pares ordenados y correspondencias",
          "Las asíntotas",
          "El método de cofactores",
          "La distancia entre rectas"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Si \\( f(x)=2x+3 \\), el valor de \\( f(4) \\) es:",
        "alternativas": [
          "11",
          "8",
          "7",
          "14"
        ],
        "correcta": 0
      },
      {
        "pregunta": "En la notación \\( f(x) \\), la letra x representa:",
        "alternativas": [
          "La variable dependiente",
          "La variable independiente (dominio)",
          "El rango únicamente",
          "Una constante"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Par ordenado, relación y función",
          "Gauss-Jordan: indeterminadas e inconsistentes",
          "Función lineal, cuadrática y raíz cuadrada",
          "Hipérbola: ecuación ordinaria, canónica y general"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 30,
    "unidad": 4,
    "tema": "Función lineal, cuadrática y raíz cuadrada",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — Un par ordenado \\( (x,y) \\) representa:",
        "alternativas": [
          "Un elemento y su imagen correspondiente",
          "Dos valores sin relación",
          "Un conjunto vacío",
          "Solo la variable independiente"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Una relación es función cuando:",
        "alternativas": [
          "Cada x tiene una única imagen y",
          "Cada y tiene varias imágenes x",
          "No hay pares ordenados",
          "Todos los x son iguales"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Si \\( f(x)=3x-2 \\), el valor de \\( f(-1) \\) es:",
        "alternativas": [
          "-5",
          "5",
          "-1",
          "1"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — En \\( f(x) \\), el conjunto de todos los valores posibles de x se llama:",
        "alternativas": [
          "Dominio",
          "Rango",
          "Imagen",
          "Codominio únicamente"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "El rango de \\( f(x)=x^2 \\) es:",
        "alternativas": [
          "\\( (-\\infty,\\infty) \\)",
          "\\( [0,\\infty) \\)",
          "\\( (-\\infty,0] \\)",
          "Solo cero"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Para que \\( f(x)=\\sqrt{x} \\) esté definida en los reales, se requiere que:",
        "alternativas": [
          "\\( x<0 \\)",
          "\\( x\\geq 0 \\)",
          "\\( x\\neq 0 \\)",
          "\\( x \\) sea negativo"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Función lineal, cuadrática y raíz cuadrada",
          "Par ordenado, relación y función",
          "Función valor absoluto y racional",
          "Relación entre cónicas"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 31,
    "unidad": 4,
    "tema": "Función valor absoluto y racional",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — La gráfica de una función lineal \\( f(x)=mx+b \\) es:",
        "alternativas": [
          "Una recta",
          "Una parábola",
          "Una circunferencia",
          "Una V"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — El dominio de \\( f(x)=x^2 \\) es:",
        "alternativas": [
          "Todos los reales",
          "Solo positivos",
          "Solo el cero",
          "Ningún real"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — El vértice de la parábola \\( f(x)=(x-3)^2+2 \\) es:",
        "alternativas": [
          "(3, 2)",
          "(-3, 2)",
          "(3, -2)",
          "(2, 3)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Para que \\( f(x)=\\sqrt{x-4} \\) esté definida en los reales, se requiere:",
        "alternativas": [
          "\\( x\\geq 4 \\)",
          "\\( x\\leq 4 \\)",
          "\\( x\\neq 4 \\)",
          "\\( x>0 \\)"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "En la función racional \\( f(x)=\\dfrac{1}{x} \\), el valor que se debe excluir del dominio es:",
        "alternativas": [
          "\\( x=1 \\)",
          "\\( x=0 \\)",
          "\\( x=-1 \\)",
          "Ningún valor"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Las funciones racionales suelen presentar en su gráfica:",
        "alternativas": [
          "Vértices",
          "Asíntotas",
          "Focos",
          "Centros"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Función valor absoluto y racional",
          "Función lineal, cuadrática y raíz cuadrada",
          "Función inyectiva, inversa y por tramos",
          "Matrices: definición y tipos"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 32,
    "unidad": 4,
    "tema": "Función inyectiva, inversa y por tramos",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — La gráfica de \\( f(x)=|x| \\) tiene forma de:",
        "alternativas": [
          "V con vértice en el origen",
          "Recta sin quiebres",
          "Parábola invertida",
          "Circunferencia"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — En una función racional, se debe excluir del dominio:",
        "alternativas": [
          "Los valores que anulan el denominador",
          "Los valores negativos",
          "Los valores positivos",
          "El cero siempre"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — El valor que se debe excluir del dominio de \\( f(x)=\\dfrac{2}{x-5} \\) es:",
        "alternativas": [
          "\\( x=5 \\)",
          "\\( x=-5 \\)",
          "\\( x=2 \\)",
          "\\( x=0 \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Las funciones racionales suelen presentar en su gráfica:",
        "alternativas": [
          "Asíntotas",
          "Vértices",
          "Focos",
          "Centros"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Si \\( f(x)=2x+3 \\), su función inversa \\( f^{-1}(x) \\) es:",
        "alternativas": [
          "\\( \\dfrac{x-3}{2} \\)",
          "\\( 2x-3 \\)",
          "\\( \\dfrac{x+3}{2} \\)",
          "\\( \\dfrac{x}{2}+3 \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Una función por tramos (o a trozos) se caracteriza por:",
        "alternativas": [
          "Tener una sola regla para todo su dominio",
          "Definirse con distintas reglas según el intervalo de x",
          "No tener dominio",
          "Ser siempre lineal"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Función inyectiva, inversa y por tramos",
          "Función valor absoluto y racional",
          "Álgebra y composición de funciones",
          "Operaciones con matrices"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 33,
    "unidad": 4,
    "tema": "Álgebra y composición de funciones",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — Una función inyectiva se caracteriza porque:",
        "alternativas": [
          "Elementos distintos del dominio tienen imágenes distintas",
          "Todos los elementos tienen la misma imagen",
          "No tiene dominio",
          "Su gráfica es siempre una recta"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Para que una función tenga inversa, generalmente debe ser:",
        "alternativas": [
          "Inyectiva",
          "Racional",
          "Cuadrática",
          "Discontinua"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Si \\( f(x)=3x-6 \\), su inversa \\( f^{-1}(x) \\) es:",
        "alternativas": [
          "\\( \\dfrac{x+6}{3} \\)",
          "\\( \\dfrac{x-6}{3} \\)",
          "\\( 3x+6 \\)",
          "\\( \\dfrac{x}{3}-6 \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Una función definida por tramos usa:",
        "alternativas": [
          "Distintas reglas según el intervalo de x",
          "Una sola regla para todo x",
          "Ninguna regla",
          "Solo valores negativos"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Con \\( f(x)=x+1 \\) y \\( g(x)=x^2 \\), \\( (f\\circ g)(x) \\) es igual a:",
        "alternativas": [
          "\\( x^2+1 \\)",
          "\\( x^2+x \\)",
          "\\( (x+1)^2 \\)",
          "\\( x+1 \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Con \\( f(x)=x+1 \\) y \\( g(x)=x^2 \\), \\( (g\\circ f)(x) \\) es igual a:",
        "alternativas": [
          "\\( x^2+1 \\)",
          "\\( (x+1)^2 \\)",
          "\\( x^2+x \\)",
          "\\( 2x+1 \\)"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Álgebra y composición de funciones",
          "Función inyectiva, inversa y por tramos",
          "Función valor absoluto y racional",
          "Producto y potencia de matrices"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 34,
    "unidad": 4,
    "tema": "Sesión integradora 4: prep. Examen Final",
    "inicio": [
      {
        "pregunta": "Repaso sesión anterior — La composición \\( (f\\circ g)(x) \\) significa:",
        "alternativas": [
          "\\( f(g(x)) \\)",
          "\\( f(x)\\cdot g(x) \\)",
          "\\( g(f(x))+1 \\)",
          "\\( f(x)+g(x) \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Si \\( f(x)=x-2 \\) y \\( g(x)=x^2 \\), \\( (f+g)(x) \\) es:",
        "alternativas": [
          "\\( x^2+x-2 \\)",
          "\\( x^2-x-2 \\)",
          "\\( x^3-2 \\)",
          "\\( x-2 \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — Con \\( f(x)=x-2 \\) y \\( g(x)=x^2 \\), \\( (g\\circ f)(x) \\) es igual a:",
        "alternativas": [
          "\\( x^2-4x+4 \\)",
          "\\( x^2-2 \\)",
          "\\( x^2+4x+4 \\)",
          "\\( x-4 \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Repaso sesión anterior — La composición de funciones, en general, ¿es conmutativa?",
        "alternativas": [
          "No, en general \\( f\\circ g\\neq g\\circ f \\)",
          "Sí, siempre son iguales",
          "Solo si f y g son iguales",
          "Solo si son funciones lineales"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Repaso general: el examen final del curso evalúa:",
        "alternativas": [
          "Solo la última unidad",
          "Todas las unidades del curso",
          "Solo matrices",
          "Solo rectas"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Repaso: al componer funciones \\( (f\\circ g)(x) \\), el orden de evaluación es:",
        "alternativas": [
          "Primero f, luego g",
          "Primero g, luego f",
          "Da igual el orden",
          "Se evalúan por separado sin combinar"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué hicimos hoy en la sesión?",
        "alternativas": [
          "Repasamos todo el curso para el Examen Final",
          "Iniciamos el tema de funciones",
          "Rendimos la Práctica Calificada 2",
          "Aprendimos un tema nuevo de cónicas"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  }
];

const HITOS = {
  "34": {
    "codigo": "EXFN",
    "nombre": "Examen Final",
    "detalle": "Semana 18 · Individual"
  }
};
