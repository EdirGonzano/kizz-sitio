// Generado por excel_a_datos.py desde preguntas.xlsx. No editar a mano: edita el Excel.
const UNIDADES = {
  "1": "Unidad 1 — Fundamentos matemáticos",
  "2": "Unidad 2 — Geometría",
  "3": "Unidad 3 — Estadística y análisis de datos",
  "4": "Unidad 4 — Ecuaciones e inecuaciones",
  "5": "Unidad 5 — Funciones en ciencias de la salud"
};

const SESSIONS = [
  {
    "numero": 1,
    "unidad": 1,
    "tema": "Lenguaje matemático",
    "inicio": [
      {
        "pregunta": "¿Cuál de estos símbolos matemáticos se lee 'para todo'?",
        "alternativas": [
          "∃",
          "∀",
          "∈",
          "⊂"
        ],
        "correcta": 1
      },
      {
        "pregunta": "'El doble de un número aumentado en 3' se traduce como:",
        "alternativas": [
          "2x + 3",
          "x + 2·3",
          "2(x + 3)",
          "x/2 + 3"
        ],
        "correcta": 0
      },
      {
        "pregunta": "'El triple de la suma de un número y 4, disminuido en 5' se traduce como:",
        "alternativas": [
          "3x + 4 − 5",
          "3x + 4 · 5",
          "3(x + 4) − 5",
          "3(x − 4) + 5"
        ],
        "correcta": 2
      },
      {
        "pregunta": "'El cuádruple de un número, disminuido en 7' se traduce como:",
        "alternativas": [
          "4x − 7",
          "4(x − 7)",
          "x/4 − 7",
          "4x + 7"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "El símbolo ∈ se lee como:",
        "alternativas": [
          "Está contenido en",
          "Pertenece a",
          "Es diferente de",
          "Es mayor que"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Si d es la dosis de un medicamento, 'la mitad de la dosis' se escribe:",
        "alternativas": [
          "2d",
          "d/2",
          "d − 2",
          "d + 2"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Lenguaje matemático",
          "Números reales y sus operaciones",
          "Conjuntos y relaciones",
          "Representación gráfica de datos"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 2,
    "unidad": 1,
    "tema": "Conjuntos y relaciones",
    "inicio": [
      {
        "pregunta": "¿Qué símbolo matemático se lee 'existe al menos un'?",
        "alternativas": [
          "∈",
          "∃",
          "∀",
          "∪"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cómo se escribe '7 más la mitad de un número'?",
        "alternativas": [
          "2x + 7",
          "7x/2",
          "(7 + x)/2",
          "7 + x/2"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Si p es la dosis base, la dosis diaria es 'el triple de p, menos 100 mg'. Con p = 500 mg, ¿cuál es la dosis diaria?",
        "alternativas": [
          "1200 mg",
          "400 mg",
          "1600 mg",
          "1400 mg"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Si n es la edad de un paciente, 'su edad dentro de 5 años' se escribe:",
        "alternativas": [
          "n + 5",
          "n − 5",
          "5n",
          "n/5"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Con A = diabéticos y B = hipertensos, ¿qué representa A ∪ B?",
        "alternativas": [
          "Solo quienes tienen ambas",
          "Quienes tienen diabetes, hipertensión, o ambas",
          "Quienes no tienen ninguna",
          "Solo los diabéticos"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Una relación entre dos conjuntos asigna a cada elemento del primero:",
        "alternativas": [
          "Ningún elemento del segundo",
          "Uno o más elementos del segundo",
          "Siempre todos los elementos del segundo",
          "Un número negativo"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Conjuntos y relaciones",
          "Lenguaje matemático",
          "Números reales y sus operaciones",
          "Aplicaciones en Ciencias de la Salud"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 3,
    "unidad": 1,
    "tema": "Números reales y sus operaciones",
    "inicio": [
      {
        "pregunta": "Si A = {1, 2, 3} y B = {3, 4}, ¿cuál es A ∩ B?",
        "alternativas": [
          "{1, 2, 3, 4}",
          "{1, 2}",
          "{4}",
          "{3}"
        ],
        "correcta": 3
      },
      {
        "pregunta": "18 pacientes tienen hipertensión y 12 tienen diabetes, y ninguno tiene ambas. ¿Cuántos pacientes hay en la unión de ambos grupos?",
        "alternativas": [
          "216",
          "18",
          "30",
          "6"
        ],
        "correcta": 2
      },
      {
        "pregunta": "De 40 pacientes, 25 tienen hipertensión, 18 tienen diabetes y 7 tienen ambas. ¿Cuántos tienen al menos una de las dos condiciones?",
        "alternativas": [
          "33",
          "40",
          "36",
          "43"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Si A = {1, 3, 5, 7} y B = {3, 7, 9}, ¿cuál es A − B (los elementos de A que no están en B)?",
        "alternativas": [
          "{1, 5}",
          "{9}",
          "{3, 7}",
          "{1, 3, 5, 7, 9}"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Un paciente pesaba 72.5 kg y bajó 4.8 kg. ¿Cuánto pesa ahora?",
        "alternativas": [
          "67.7 kg",
          "68.7 kg",
          "77.3 kg",
          "66.7 kg"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál es el resultado de (−6) × (−3)?",
        "alternativas": [
          "−18",
          "18",
          "−9",
          "9"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Números reales y sus operaciones",
          "Conjuntos y relaciones",
          "Notación científica",
          "Ecuaciones de primer grado y aplicaciones en cálculos médicos"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 4,
    "unidad": 1,
    "tema": "Notación científica",
    "inicio": [
      {
        "pregunta": "¿Cuál de estos números es irracional?",
        "alternativas": [
          "4/5",
          "0.25",
          "−3",
          "√2"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Cuál es el resultado de (−4) − (−9)?",
        "alternativas": [
          "−13",
          "−5",
          "5",
          "13"
        ],
        "correcta": 2
      },
      {
        "pregunta": "La glucosa de un paciente era 96.5 mg/dl; bajó 12.3 y luego subió 4.8. ¿Cuál es su glucosa final?",
        "alternativas": [
          "79.4 mg/dl",
          "104.0 mg/dl",
          "113.6 mg/dl",
          "89.0 mg/dl"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Cuál es el resultado de 2/3 + 1/6?",
        "alternativas": [
          "5/6",
          "3/9",
          "2/18",
          "7/6"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Una muestra de laboratorio pesa 0.00032 gramos. ¿Cómo se escribe en notación científica?",
        "alternativas": [
          "\\( 3.2 \\times 10^{-4} \\)",
          "\\( 3.2 \\times 10^{4} \\)",
          "\\( 32 \\times 10^{-5} \\)",
          "\\( 3.2 \\times 10^{-3} \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál de estos números en notación científica es el mayor?",
        "alternativas": [
          "\\( 2.1 \\times 10^{3} \\)",
          "\\( 2.1 \\times 10^{-3} \\)",
          "\\( 2.1 \\times 10^{0} \\)",
          "\\( 2.1 \\times 10^{1} \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Notación científica",
          "Números reales y sus operaciones",
          "Porcentajes y su aplicación en ciencias de la salud",
          "Sistemas de ecuaciones lineales y métodos de resolución"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 5,
    "unidad": 1,
    "tema": "Porcentajes y su aplicación en ciencias de la salud",
    "inicio": [
      {
        "pregunta": "¿Cuál es la notación científica de 3 500?",
        "alternativas": [
          "\\( 3.5 \\times 10^{2} \\)",
          "\\( 3.5 \\times 10^{3} \\)",
          "\\( 3.5 \\times 10^{-3} \\)",
          "\\( 3.5 \\times 10^{4} \\)"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cómo se escribe \\( 6.2 \\times 10^{-3} \\) en forma decimal?",
        "alternativas": [
          "6200",
          "0.00062",
          "0.0062",
          "0.062"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Un glóbulo rojo mide \\( 7 \\times 10^{-6} \\) m y un cabello, \\( 7 \\times 10^{-5} \\) m de grosor. ¿Cuántas veces mayor es el cabello?",
        "alternativas": [
          "10 veces",
          "0.1 veces",
          "100 veces",
          "7 veces"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál es el producto de \\( 2 \\times 10^{3} \\) por \\( 3 \\times 10^{2} \\)?",
        "alternativas": [
          "\\( 6 \\times 10^{5} \\)",
          "\\( 5 \\times 10^{5} \\)",
          "\\( 6 \\times 10^{6} \\)",
          "\\( 5 \\times 10^{6} \\)"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Una solución salina al 9% contiene 9 gramos de sal por cada:",
        "alternativas": [
          "100 ml de solución",
          "9 ml de solución",
          "1000 ml de solución",
          "90 ml de solución"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Un medicamento cuesta S/ 80 y tiene 25% de descuento. ¿Cuál es el precio final?",
        "alternativas": [
          "S/ 55",
          "S/ 60",
          "S/ 65",
          "S/ 20"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Porcentajes y su aplicación en ciencias de la salud",
          "Notación científica",
          "Regla de tres simple y compuesta",
          "Ecuaciones cuadráticas y aplicaciones en modelado biológico"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 6,
    "unidad": 1,
    "tema": "Regla de tres simple y compuesta",
    "inicio": [
      {
        "pregunta": "¿Cuánto es el 10% de 250?",
        "alternativas": [
          "2.5",
          "50",
          "25",
          "10"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Un paciente pesaba 80 kg y aumentó 5%. ¿Cuánto pesa ahora?",
        "alternativas": [
          "76 kg",
          "85 kg",
          "84 kg",
          "80.5 kg"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Un antibiótico cuesta S/ 50. Sube 20% y luego baja 10%. ¿Cuál es el precio final?",
        "alternativas": [
          "S/ 54",
          "S/ 60",
          "S/ 55",
          "S/ 52"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué porcentaje de 60 es 15?",
        "alternativas": [
          "25%",
          "15%",
          "40%",
          "4%"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "4 enfermeras atienden a 20 pacientes por turno. Con la misma proporción, ¿cuántas enfermeras se necesitan para 35 pacientes?",
        "alternativas": [
          "5",
          "6",
          "7",
          "8"
        ],
        "correcta": 2
      },
      {
        "pregunta": "8 obreros construyen una obra en 15 días. Para terminarla en solo 6 días, ¿se necesitan más o menos obreros?",
        "alternativas": [
          "Más",
          "Menos",
          "Los mismos",
          "No se puede saber"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Regla de tres simple y compuesta",
          "Porcentajes y su aplicación en ciencias de la salud",
          "Elementos básicos de geometría",
          "Inecuaciones y su interpretación en problemas de salud"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 7,
    "unidad": 1,
    "tema": "Sesión integradora 1",
    "inicio": [
      {
        "pregunta": "Si 2 kg de un alimento cuestan S/ 10, ¿cuánto cuestan 5 kg?",
        "alternativas": [
          "S/ 50",
          "S/ 25",
          "S/ 15",
          "S/ 20"
        ],
        "correcta": 1
      },
      {
        "pregunta": "4 enfermeras terminan un registro en 6 horas. Al mismo ritmo, ¿cuánto tardarían 8 enfermeras?",
        "alternativas": [
          "3 horas",
          "2 horas",
          "12 horas",
          "6 horas"
        ],
        "correcta": 0
      },
      {
        "pregunta": "3 enfermeras atienden 30 pacientes en 2 horas. ¿Cuántos pacientes atenderían 6 enfermeras en 4 horas?",
        "alternativas": [
          "90",
          "120",
          "240",
          "60"
        ],
        "correcta": 1
      },
      {
        "pregunta": "2 bombas de infusión vacían un tanque en 12 horas. Al mismo ritmo, ¿cuánto tardarían 3 bombas?",
        "alternativas": [
          "8 horas",
          "18 horas",
          "6 horas",
          "10 horas"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "0.00045 en notación científica se escribe:",
        "alternativas": [
          "\\( 4.5 \\times 10^{-4} \\)",
          "\\( 4.5 \\times 10^{4} \\)",
          "\\( 45 \\times 10^{-4} \\)",
          "\\( 4.5 \\times 10^{-3} \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "2 ampollas contienen 500 mg de un medicamento. ¿Cuántos mg contienen 6 ampollas?",
        "alternativas": [
          "1000 mg",
          "1500 mg",
          "2000 mg",
          "2500 mg"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué hicimos hoy en la sesión?",
        "alternativas": [
          "Repasamos los temas de la primera unidad para la Práctica Calificada 1",
          "Iniciamos el tema de geometría",
          "Rendimos la Práctica Calificada 2",
          "Presentamos el Caso integrador"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 9,
    "unidad": 2,
    "tema": "Elementos básicos de geometría",
    "inicio": [
      {
        "pregunta": "¿Cuál de estas cantidades está escrita en notación científica?",
        "alternativas": [
          "\\( 4.2 \\times 10^{5} \\)",
          "\\( 0.42 \\times 10^{6} \\)",
          "\\( 420 \\times 10^{3} \\)",
          "\\( 42 \\times 10^{4} \\)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Si A = {2, 4, 6} y B = {4, 6, 8}, ¿cuál es A ∪ B?",
        "alternativas": [
          "{2, 4, 6, 8}",
          "{2, 8}",
          "{2}",
          "{4, 6}"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Una dosis de 250 mg corresponde a 10 kg de peso (proporcional). ¿Cuántos mg corresponden a un niño de 24 kg?",
        "alternativas": [
          "240 mg",
          "480 mg",
          "600 mg",
          "520 mg"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Un medicamento cuesta S/ 40 y tiene 15% de descuento. ¿Cuál es el precio final?",
        "alternativas": [
          "S/ 34",
          "S/ 6",
          "S/ 46",
          "S/ 25"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "¿Cuántos grados suman los ángulos internos de un triángulo?",
        "alternativas": [
          "90°",
          "180°",
          "270°",
          "360°"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Dos líneas que nunca se cruzan y mantienen siempre la misma distancia se llaman:",
        "alternativas": [
          "Perpendiculares",
          "Paralelas",
          "Secantes",
          "Oblicuas"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Elementos básicos de geometría",
          "Regla de tres simple y compuesta",
          "Medidas y proporciones en figuras geométricas",
          "Concepto de función y su representación gráfica"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 10,
    "unidad": 2,
    "tema": "Medidas y proporciones en figuras geométricas",
    "inicio": [
      {
        "pregunta": "Un ángulo de 120° se clasifica como:",
        "alternativas": [
          "Llano",
          "Recto",
          "Agudo",
          "Obtuso"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Dos ángulos son complementarios cuando suman:",
        "alternativas": [
          "360°",
          "180°",
          "90°",
          "45°"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Dos ángulos son suplementarios y uno mide 65°. ¿Cuánto mide el otro?",
        "alternativas": [
          "125°",
          "115°",
          "295°",
          "25°"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Un triángulo tiene ángulos de 50° y 60°. ¿Cuánto mide el tercer ángulo?",
        "alternativas": [
          "70°",
          "110°",
          "130°",
          "80°"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Una camilla mide 1.8 m de largo. A escala 1:20 en un plano, ¿cuánto mide en el dibujo?",
        "alternativas": [
          "0.9 cm",
          "9 cm",
          "90 cm",
          "18 cm"
        ],
        "correcta": 1
      },
      {
        "pregunta": "En dos figuras semejantes, los ángulos correspondientes son:",
        "alternativas": [
          "Siempre diferentes",
          "Iguales",
          "Suplementarios",
          "Complementarios"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Medidas y proporciones en figuras geométricas",
          "Elementos básicos de geometría",
          "Razones trigonométricas y su aplicación en problemas de salud",
          "Funciones lineales"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 11,
    "unidad": 2,
    "tema": "Razones trigonométricas y su aplicación en problemas de salud",
    "inicio": [
      {
        "pregunta": "¿Cuál es el área de un rectángulo de 6 cm por 4 cm?",
        "alternativas": [
          "\\( 48\\ \\text{cm}^{2} \\)",
          "\\( 20\\ \\text{cm}^{2} \\)",
          "\\( 10\\ \\text{cm}^{2} \\)",
          "\\( 24\\ \\text{cm}^{2} \\)"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Cuál es el perímetro de un cuadrado de 5 cm de lado?",
        "alternativas": [
          "15 cm",
          "20 cm",
          "10 cm",
          "25 cm"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Un plano usa escala 1:50. Una habitación mide 6 cm de largo en el plano. ¿Cuántos metros mide en la realidad?",
        "alternativas": [
          "3 m",
          "30 m",
          "300 m",
          "0.3 m"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Dos figuras semejantes tienen razón de semejanza 1:3. Si un lado de la menor mide 4 cm, ¿cuánto mide el lado correspondiente de la mayor?",
        "alternativas": [
          "12 cm",
          "7 cm",
          "1.3 cm",
          "3 cm"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Si sen(θ) = opuesto / hipotenusa, ¿cuál es la fórmula de cos(θ)?",
        "alternativas": [
          "opuesto / adyacente",
          "adyacente / hipotenusa",
          "hipotenusa / adyacente",
          "opuesto / hipotenusa"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Un brazo se eleva 30° respecto a la horizontal del suelo, con vértice en el hombro. Si el brazo (hipotenusa) mide 60 cm, ¿qué razón da la altura vertical de la mano respecto al hombro (cateto opuesto)?",
        "alternativas": [
          "Tangente",
          "Coseno",
          "Seno",
          "Secante"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Razones trigonométricas y su aplicación en problemas de salud",
          "Medidas y proporciones en figuras geométricas",
          "Plano cartesiano",
          "Funciones cuadráticas"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 12,
    "unidad": 2,
    "tema": "Plano cartesiano",
    "inicio": [
      {
        "pregunta": "En un triángulo rectángulo, sen(θ) es la razón entre:",
        "alternativas": [
          "cateto opuesto a θ e hipotenusa",
          "cateto opuesto a θ y cateto adyacente a θ",
          "cateto adyacente a θ e hipotenusa",
          "hipotenusa y cateto opuesto a θ"
        ],
        "correcta": 0
      },
      {
        "pregunta": "En un triángulo rectángulo, el cateto opuesto a θ mide 3 y el adyacente a θ mide 3. ¿Cuánto vale tan(θ)?",
        "alternativas": [
          "0",
          "√3",
          "3",
          "1"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Una rampa para camillas forma 30° con el suelo horizontal y mide 10 m (hipotenusa). ¿Qué altura vertical alcanza? (sen 30° = 0.5)",
        "alternativas": [
          "8.7 m",
          "10 m",
          "20 m",
          "5 m"
        ],
        "correcta": 3
      },
      {
        "pregunta": "En un triángulo rectángulo, el cateto adyacente a θ mide 4 y la hipotenusa mide 5. ¿Cuánto vale cos(θ)?",
        "alternativas": [
          "4/5",
          "3/5",
          "5/4",
          "3/4"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "En un gráfico donde se registra la presión arterial en el tiempo, ¿qué eje representa el tiempo (la variable independiente)?",
        "alternativas": [
          "Eje Y",
          "Eje X",
          "El origen",
          "Ninguno"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Si un punto en el plano es (0, 0), ¿cómo se llama ese punto?",
        "alternativas": [
          "Vértice",
          "Intersección",
          "Origen",
          "Cuadrante"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Plano cartesiano",
          "Razones trigonométricas y su aplicación en problemas de salud",
          "Conceptos básicos de estadística",
          "Funciones exponenciales y logarítmicas"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 13,
    "unidad": 2,
    "tema": "Sesión integradora 2",
    "inicio": [
      {
        "pregunta": "El punto (4, −2) se ubica en el cuadrante:",
        "alternativas": [
          "I",
          "IV",
          "II",
          "III"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuáles son las coordenadas del origen del plano cartesiano?",
        "alternativas": [
          "(1, 1)",
          "(0, 0)",
          "(1, 0)",
          "(0, 1)"
        ],
        "correcta": 1
      },
      {
        "pregunta": "En un gráfico (eje X: horas, eje Y: temperatura en °C) hay dos puntos: (2, 37) y (6, 39). ¿Cuánto subió la temperatura y en cuánto tiempo?",
        "alternativas": [
          "2 °C en 8 horas",
          "4 °C en 2 horas",
          "39 °C en 6 horas",
          "2 °C en 4 horas"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Cuáles son las coordenadas de un punto ubicado 3 unidades a la derecha y 2 unidades arriba del origen?",
        "alternativas": [
          "(3, 2)",
          "(2, 3)",
          "(−3, 2)",
          "(3, −2)"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Una sala de rehabilitación mide 4 m de largo y 3 m de ancho. ¿Cuál es su área?",
        "alternativas": [
          "\\( 7\\ \\text{m}^{2} \\)",
          "\\( 12\\ \\text{m}^{2} \\)",
          "\\( 14\\ \\text{m}^{2} \\)",
          "\\( 10\\ \\text{m}^{2} \\)"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué unidad usamos normalmente para medir ángulos en trigonometría aplicada a salud?",
        "alternativas": [
          "Metros",
          "Grados",
          "Litros",
          "Kilogramos"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué hicimos hoy en la sesión?",
        "alternativas": [
          "Repasamos geometría y trigonometría para la Tarea Académica 1",
          "Repasamos estadística",
          "Iniciamos el tema de ecuaciones",
          "Presentamos el Caso integrador"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 15,
    "unidad": 3,
    "tema": "Conceptos básicos de estadística",
    "inicio": [
      {
        "pregunta": "¿En qué cuadrante están los puntos con x negativa e y positiva?",
        "alternativas": [
          "II",
          "I",
          "IV",
          "III"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál es el área de un círculo de radio 3 cm? (π ≈ 3.14)",
        "alternativas": [
          "\\( 18.84\\ \\text{cm}^{2} \\)",
          "\\( 9.42\\ \\text{cm}^{2} \\)",
          "\\( 28.26\\ \\text{cm}^{2} \\)",
          "\\( 56.52\\ \\text{cm}^{2} \\)"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Una rampa de 8 m (hipotenusa) forma 30° con el suelo horizontal. ¿Qué altura vertical alcanza? (sen 30° = 0.5)",
        "alternativas": [
          "16 m",
          "8 m",
          "6.9 m",
          "4 m"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Un rectángulo mide 8 cm de largo y 5 cm de ancho. ¿Cuál es su perímetro?",
        "alternativas": [
          "26 cm",
          "40 cm",
          "13 cm",
          "18 cm"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "El tipo de sangre (A, B, AB, O) es un ejemplo de variable:",
        "alternativas": [
          "Cuantitativa continua",
          "Cuantitativa discreta",
          "Cualitativa",
          "Numérica"
        ],
        "correcta": 2
      },
      {
        "pregunta": "El número de latidos por minuto es una variable:",
        "alternativas": [
          "Cualitativa",
          "Cuantitativa",
          "Nominal",
          "Ordinal"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Conceptos básicos de estadística",
          "Plano cartesiano",
          "Medidas de tendencia central y dispersión",
          "Funciones trigonométricas"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 16,
    "unidad": 3,
    "tema": "Medidas de tendencia central y dispersión",
    "inicio": [
      {
        "pregunta": "El conjunto de todos los elementos que se desea estudiar se llama:",
        "alternativas": [
          "Frecuencia",
          "Variable",
          "Muestra",
          "Población"
        ],
        "correcta": 3
      },
      {
        "pregunta": "La talla de un paciente (en cm) es una variable:",
        "alternativas": [
          "Cuantitativa discreta",
          "Cualitativa",
          "Nominal",
          "Cuantitativa continua"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Se pregunta a 50 pacientes su nivel de dolor: leve, moderado o severo. ¿Qué tipo de variable es?",
        "alternativas": [
          "Cualitativa ordinal",
          "Cuantitativa discreta",
          "Cuantitativa continua",
          "Cualitativa nominal"
        ],
        "correcta": 0
      },
      {
        "pregunta": "El número de hijos de una familia es una variable:",
        "alternativas": [
          "Cuantitativa discreta",
          "Cuantitativa continua",
          "Cualitativa nominal",
          "Cualitativa ordinal"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "¿Qué medida indica qué tan dispersos están los datos respecto a la media?",
        "alternativas": [
          "Mediana",
          "Moda",
          "Desviación estándar",
          "Media aritmética"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Las presiones arteriales de un grupo son 110, 120, 120, 130 y 200. ¿Qué medida se ve más afectada por el valor atípico 200?",
        "alternativas": [
          "Mediana",
          "Media aritmética",
          "Moda",
          "Ninguna"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Medidas de tendencia central y dispersión",
          "Conceptos básicos de estadística",
          "Representación gráfica de datos",
          "Aplicación de funciones en el análisis de crecimiento poblacional y farmacocinética"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 17,
    "unidad": 3,
    "tema": "Representación gráfica de datos",
    "inicio": [
      {
        "pregunta": "¿Cuál es la media de los datos 4, 6, 8, 10 y 12?",
        "alternativas": [
          "6",
          "8",
          "40",
          "10"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuál es la mediana de los datos 3, 5, 7, 9 y 100?",
        "alternativas": [
          "24.8",
          "7",
          "9",
          "100"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Los pesos (kg) de 4 pacientes son 60, 70, 80 y 90. ¿Cuál es el rango y cuál es la media?",
        "alternativas": [
          "Rango 60 y media 70",
          "Rango 30 y media 75",
          "Rango 90 y media 75",
          "Rango 30 y media 80"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuál es la moda de los datos 4, 6, 6, 8, 6, 9?",
        "alternativas": [
          "6",
          "4",
          "6.5",
          "8"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "En un gráfico circular (de pastel), ¿qué representa cada porción?",
        "alternativas": [
          "Un valor absoluto sin relación al total",
          "Un porcentaje del total",
          "La media de los datos",
          "La desviación estándar"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuál es el propósito principal de un histograma?",
        "alternativas": [
          "Comparar categorías",
          "Mostrar la distribución de frecuencias de datos numéricos",
          "Mostrar proporciones",
          "Mostrar relaciones causales"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Representación gráfica de datos",
          "Medidas de tendencia central y dispersión",
          "Aplicaciones en Ciencias de la Salud",
          "Lenguaje matemático"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 18,
    "unidad": 3,
    "tema": "Aplicaciones en Ciencias de la Salud",
    "inicio": [
      {
        "pregunta": "En un gráfico circular, la suma de los porcentajes de todas las porciones es:",
        "alternativas": [
          "360%",
          "10%",
          "100%",
          "50%"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En un gráfico de barras, la altura de cada barra representa:",
        "alternativas": [
          "El promedio de todos los datos",
          "El nombre de la categoría",
          "La cantidad (frecuencia) de cada categoría",
          "El ángulo de la categoría"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En un gráfico circular, una categoría ocupa 90° de los 360°. ¿Qué porcentaje del total representa?",
        "alternativas": [
          "90%",
          "50%",
          "25%",
          "10%"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Para mostrar cómo cambia la temperatura de un paciente a lo largo del día conviene usar un gráfico de:",
        "alternativas": [
          "Líneas",
          "Circular",
          "Histograma",
          "Pictograma"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Un hospital compara la efectividad de dos tratamientos usando datos de muchos pacientes. ¿Qué rama de la matemática está aplicando principalmente?",
        "alternativas": [
          "Geometría",
          "Álgebra",
          "Estadística",
          "Trigonometría"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué medida usarías para saber el valor 'típico' de glucosa en un grupo de pacientes?",
        "alternativas": [
          "Rango",
          "Una medida de tendencia central",
          "Varianza",
          "Ninguna"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Aplicaciones en Ciencias de la Salud",
          "Representación gráfica de datos",
          "Ecuaciones de primer grado y aplicaciones en cálculos médicos",
          "Conjuntos y relaciones"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 19,
    "unidad": 3,
    "tema": "Sesión integradora 3",
    "inicio": [
      {
        "pregunta": "¿Cuál es la media de la glucosa de 3 pacientes con 90, 100 y 110 mg/dl?",
        "alternativas": [
          "110 mg/dl",
          "300 mg/dl",
          "90 mg/dl",
          "100 mg/dl"
        ],
        "correcta": 3
      },
      {
        "pregunta": "En un estudio, la presión sistólica tiene media 122 mmHg y desviación estándar de 4 mmHg (muy pequeña). ¿Qué indica una desviación estándar pequeña?",
        "alternativas": [
          "Que la media es incorrecta",
          "Los valores están cerca de la media",
          "Los valores están muy alejados de la media",
          "Que hay pocos pacientes"
        ],
        "correcta": 1
      },
      {
        "pregunta": "El grupo A tiene media 80 y desviación estándar 2; el grupo B tiene media 80 y desviación estándar 15. ¿Qué grupo es más homogéneo?",
        "alternativas": [
          "El grupo B",
          "El grupo A",
          "Ambos por igual",
          "No se puede saber"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuál es el rango de los datos 12, 7, 20 y 15?",
        "alternativas": [
          "13",
          "20",
          "8",
          "54"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Si los datos de presión arterial de un grupo tienen mucha dispersión, ¿qué medida será alta?",
        "alternativas": [
          "Moda",
          "Mediana",
          "Desviación estándar",
          "Media"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En un consultorio se recolectan datos de 30 pacientes de un total de 5000 registrados. Ese grupo de 30 es:",
        "alternativas": [
          "La población total",
          "Una muestra",
          "Una variable",
          "Un parámetro"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué hicimos hoy en la sesión?",
        "alternativas": [
          "Repasamos estadística para la Tarea Académica 2",
          "Repasamos geometría",
          "Iniciamos el tema de funciones",
          "Rendimos la Práctica Calificada 1"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 21,
    "unidad": 4,
    "tema": "Ecuaciones de primer grado y aplicaciones en cálculos médicos",
    "inicio": [
      {
        "pregunta": "La moda de un conjunto de datos es el valor que:",
        "alternativas": [
          "Es el mayor",
          "Está en el medio",
          "Más se repite",
          "Es el promedio"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cuál es la mediana de los datos 11, 2, 9, 3 y 5?",
        "alternativas": [
          "5",
          "9",
          "6",
          "3"
        ],
        "correcta": 0
      },
      {
        "pregunta": "El 40% de los pacientes de un gráfico circular son de Pediatría. Si hay 250 pacientes en total, ¿cuántos son de Pediatría?",
        "alternativas": [
          "10",
          "40",
          "150",
          "100"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Cuál es la mediana de los datos 4, 8, 10 y 20?",
        "alternativas": [
          "9",
          "10",
          "8",
          "10.5"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Un enfermero debe preparar 60 ml de suero dividido en partes iguales entre 3 pacientes. Si x es la cantidad para cada uno, ¿qué ecuación resuelve el problema?",
        "alternativas": [
          "3x = 60",
          "x + 3 = 60",
          "x − 3 = 60",
          "60x = 3"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Resolviendo 3x = 60, ¿cuánto suero recibe cada paciente?",
        "alternativas": [
          "15 ml",
          "20 ml",
          "25 ml",
          "30 ml"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Ecuaciones de primer grado y aplicaciones en cálculos médicos",
          "Aplicaciones en Ciencias de la Salud",
          "Sistemas de ecuaciones lineales y métodos de resolución",
          "Números reales y sus operaciones"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 22,
    "unidad": 4,
    "tema": "Sistemas de ecuaciones lineales y métodos de resolución",
    "inicio": [
      {
        "pregunta": "Resuelve: x + 7 = 15",
        "alternativas": [
          "8",
          "−8",
          "22",
          "105"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Resuelve: 3x − 4 = 11",
        "alternativas": [
          "15",
          "7",
          "3",
          "5"
        ],
        "correcta": 3
      },
      {
        "pregunta": "La dosis inicial x (mg) más 20 mg equivale al doble de esa dosis menos 10 mg. ¿Cuánto vale x?",
        "alternativas": [
          "30 mg",
          "20 mg",
          "50 mg",
          "10 mg"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Resuelve: 4x − 7 = 13",
        "alternativas": [
          "x = 5",
          "x = 3.5",
          "x = 20",
          "x = 1.5"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "En el sistema x + y = 10 y x − y = 2, ¿cuánto vale x?",
        "alternativas": [
          "4",
          "5",
          "6",
          "8"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Una farmacia combina dos soluciones (x e y) para obtener 10 litros de una mezcla con cierta concentración. ¿Qué herramienta matemática ayuda a hallar cuánto usar de cada una?",
        "alternativas": [
          "Una sola ecuación",
          "Un sistema de ecuaciones",
          "Una razón trigonométrica",
          "Un gráfico circular"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Sistemas de ecuaciones lineales y métodos de resolución",
          "Ecuaciones de primer grado y aplicaciones en cálculos médicos",
          "Ecuaciones cuadráticas y aplicaciones en modelado biológico",
          "Notación científica"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 23,
    "unidad": 4,
    "tema": "Ecuaciones cuadráticas y aplicaciones en modelado biológico",
    "inicio": [
      {
        "pregunta": "En el sistema x + y = 7 y x − y = 1, ¿cuánto vale x?",
        "alternativas": [
          "6",
          "3",
          "8",
          "4"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué método consiste en despejar una incógnita de una ecuación y reemplazarla en la otra?",
        "alternativas": [
          "Reducción",
          "Graficación",
          "Igualación",
          "Sustitución"
        ],
        "correcta": 3
      },
      {
        "pregunta": "2 cajas de A y 1 de B cuestan S/ 25; 1 caja de A y 1 de B cuestan S/ 15. ¿Cuánto cuesta una caja de A?",
        "alternativas": [
          "S/ 20",
          "S/ 5",
          "S/ 10",
          "S/ 15"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En el sistema x + y = 8 y x − y = 2, ¿cuánto vale y?",
        "alternativas": [
          "3",
          "5",
          "10",
          "6"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "¿Cuáles son las soluciones de \\( x^{2} - 5x + 6 = 0 \\)?",
        "alternativas": [
          "1 y 6",
          "2 y 3",
          "−2 y −3",
          "5 y 6"
        ],
        "correcta": 1
      },
      {
        "pregunta": "El crecimiento de una población de bacterias en un modelo simplificado se representa con una ecuación cuadrática. ¿Qué suele representar la variable x en ese modelo?",
        "alternativas": [
          "El tiempo u otra magnitud que varía",
          "Siempre el número 0",
          "Una constante fija",
          "El nombre de la bacteria"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Ecuaciones cuadráticas y aplicaciones en modelado biológico",
          "Sistemas de ecuaciones lineales y métodos de resolución",
          "Inecuaciones y su interpretación en problemas de salud",
          "Porcentajes y su aplicación en ciencias de la salud"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 24,
    "unidad": 4,
    "tema": "Inecuaciones y su interpretación en problemas de salud",
    "inicio": [
      {
        "pregunta": "En una ecuación cuadrática \\( ax^{2} + bx + c = 0 \\), ¿qué debe cumplir 'a'?",
        "alternativas": [
          "a ≠ 0",
          "a < 0",
          "a = 0",
          "a = 1"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuáles son las soluciones de \\( x^{2} - 9 = 0 \\)?",
        "alternativas": [
          "3 solamente",
          "3 y −3",
          "9 y −9",
          "0 y 9"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Resuelve \\( x^{2} - 7x + 12 = 0 \\).",
        "alternativas": [
          "x = 1 y x = 12",
          "x = 3 y x = 4",
          "x = −3 y x = −4",
          "x = 2 y x = 6"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Resuelve \\( x^{2}-3x+2=0 \\).",
        "alternativas": [
          "x = 1 y x = 2",
          "x = −1 y x = −2",
          "x = 1 y x = −2",
          "x = 2 y x = 3"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Resuelve la inecuación x + 3 < 10. ¿Cuál es el conjunto solución?",
        "alternativas": [
          "x < 7",
          "x > 7",
          "x < 13",
          "x > 13"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Un medicamento es seguro si la dosis x cumple 200 ≤ x ≤ 500 mg. ¿Qué herramienta matemática describe ese rango seguro?",
        "alternativas": [
          "Ecuación cuadrática",
          "Sistema de ecuaciones",
          "Inecuación",
          "Razón trigonométrica"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Inecuaciones y su interpretación en problemas de salud",
          "Ecuaciones cuadráticas y aplicaciones en modelado biológico",
          "Concepto de función y su representación gráfica",
          "Regla de tres simple y compuesta"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 25,
    "unidad": 4,
    "tema": "Sesión integradora 4",
    "inicio": [
      {
        "pregunta": "Resuelve: x − 2 > 5",
        "alternativas": [
          "x < 7",
          "x > 7",
          "x < 3",
          "x > 3"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Al multiplicar ambos lados de una inecuación por un número negativo, el sentido del signo:",
        "alternativas": [
          "Se mantiene",
          "Desaparece",
          "Se invierte",
          "Se convierte en ="
        ],
        "correcta": 2
      },
      {
        "pregunta": "Resuelve: −2x + 6 ≤ 10",
        "alternativas": [
          "x ≥ 2",
          "x ≥ −2",
          "x ≤ −2",
          "x ≤ 2"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Resuelve la inecuación 3x − 6 > 9.",
        "alternativas": [
          "x > 5",
          "x < 5",
          "x > 1",
          "x > 15"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Una ecuación cuadrática bien planteada puede tener hasta ___ soluciones reales.",
        "alternativas": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué tipo de ecuación usarías para calcular una dosis médica que depende de una sola incógnita en proporción directa?",
        "alternativas": [
          "Ecuación de primer grado",
          "Ecuación cuadrática",
          "Inecuación",
          "Sistema de ecuaciones"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué hicimos hoy en la sesión?",
        "alternativas": [
          "Repasamos ecuaciones e inecuaciones para la Práctica Calificada 2",
          "Repasamos estadística",
          "Iniciamos el tema de funciones",
          "Presentamos el Caso integrador"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 27,
    "unidad": 5,
    "tema": "Concepto de función y su representación gráfica",
    "inicio": [
      {
        "pregunta": "Resuelve: 4x = 28",
        "alternativas": [
          "112",
          "7",
          "32",
          "24"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuál es el conjunto solución de x + 1 < 6?",
        "alternativas": [
          "x < 5",
          "x > 5",
          "x > 7",
          "x < 7"
        ],
        "correcta": 0
      },
      {
        "pregunta": "La dosis x (mg) debe cumplir: el doble de la dosis, disminuido en 50, es menor o igual que 350. ¿Qué inecuación y qué solución corresponden?",
        "alternativas": [
          "2x − 50 ≤ 350, luego x ≤ 200",
          "2x + 50 ≤ 350, luego x ≤ 150",
          "x − 50 ≤ 350, luego x ≤ 400",
          "2x − 50 ≥ 350, luego x ≥ 200"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuántas soluciones reales tiene la ecuación \\( x^{2}+4=0 \\)?",
        "alternativas": [
          "Ninguna solución real",
          "Una solución",
          "Dos soluciones",
          "Infinitas soluciones"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Si f(x) = 2x + 1, ¿cuánto vale f(3)?",
        "alternativas": [
          "5",
          "6",
          "7",
          "8"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En una gráfica, ¿cómo se comprueba si una curva representa una función (prueba de la línea vertical)?",
        "alternativas": [
          "Ninguna línea vertical debe cortar la curva en más de un punto",
          "La curva debe ser una línea recta",
          "Debe pasar por el origen",
          "Debe tener pendiente positiva"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Concepto de función y su representación gráfica",
          "Inecuaciones y su interpretación en problemas de salud",
          "Funciones lineales",
          "Elementos básicos de geometría"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 28,
    "unidad": 5,
    "tema": "Funciones lineales",
    "inicio": [
      {
        "pregunta": "Si f(x) = x + 4, ¿cuánto vale f(6)?",
        "alternativas": [
          "24",
          "6",
          "10",
          "2"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cuál de estas relaciones NO es una función de x?",
        "alternativas": [
          "La regla y = 3x",
          "Cada persona (x) con su DNI (y)",
          "Los pares (1, 2), (1, 5), (2, 7)",
          "Los pares (1, 2), (2, 4), (3, 6)"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Si \\( f(x) = 2x^{2} - 3 \\), ¿cuánto vale \\( f(-2) \\)?",
        "alternativas": [
          "5",
          "−7",
          "−11",
          "1"
        ],
        "correcta": 0
      },
      {
        "pregunta": "El conjunto de todos los valores que puede tomar la variable x en una función se llama:",
        "alternativas": [
          "Dominio",
          "Rango",
          "Imagen",
          "Función"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Una enfermera registra que el peso de un bebé aumenta 0.5 kg cada mes desde un peso inicial de 3 kg. ¿Qué tipo de función modela esta situación?",
        "alternativas": [
          "Cuadrática",
          "Lineal",
          "Exponencial",
          "Trigonométrica"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Con el modelo peso = 3 + 0.5 × mes, ¿cuánto pesará el bebé a los 4 meses?",
        "alternativas": [
          "4 kg",
          "4.5 kg",
          "5 kg",
          "5.5 kg"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Funciones lineales",
          "Concepto de función y su representación gráfica",
          "Funciones cuadráticas",
          "Medidas y proporciones en figuras geométricas"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 29,
    "unidad": 5,
    "tema": "Funciones cuadráticas",
    "inicio": [
      {
        "pregunta": "La gráfica de una función lineal es:",
        "alternativas": [
          "Una parábola",
          "Una curva exponencial",
          "Una recta",
          "Una onda"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En f(x) = 3x + 2, ¿cuál es la pendiente?",
        "alternativas": [
          "3",
          "2",
          "5",
          "1/3"
        ],
        "correcta": 0
      },
      {
        "pregunta": "La glucosa de un paciente es 120 mg/dl y baja 5 mg/dl cada hora. Con g = glucosa y t = horas, ¿qué función lo modela y cuánto habrá a las 4 horas?",
        "alternativas": [
          "g = 120 − 5t; 115 mg/dl",
          "g = 5t − 120; −100 mg/dl",
          "g = 120 − 5t; 100 mg/dl",
          "g = 120 + 5t; 140 mg/dl"
        ],
        "correcta": 2
      },
      {
        "pregunta": "La gráfica de \\( f(x)=4x-3 \\) corta al eje y en el punto:",
        "alternativas": [
          "(0, −3)",
          "(0, 4)",
          "(3, 0)",
          "(−3, 0)"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Si \\( f(x) = x^{2} - 4 \\), ¿cuál es \\( f(2) \\)?",
        "alternativas": [
          "0",
          "2",
          "4",
          "−4"
        ],
        "correcta": 0
      },
      {
        "pregunta": "La trayectoria de un objeto lanzado, como en un ejercicio de rehabilitación, suele modelarse con una función:",
        "alternativas": [
          "Lineal",
          "Cuadrática",
          "Logarítmica",
          "Constante"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Funciones cuadráticas",
          "Funciones lineales",
          "Funciones exponenciales y logarítmicas",
          "Razones trigonométricas y su aplicación en problemas de salud"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 30,
    "unidad": 5,
    "tema": "Funciones exponenciales y logarítmicas",
    "inicio": [
      {
        "pregunta": "La gráfica de \\( f(x) = x^{2} \\) es:",
        "alternativas": [
          "Una recta",
          "Una parábola que abre hacia abajo",
          "Una parábola que abre hacia arriba",
          "Una curva que crece sin vértice"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En \\( f(x) = -x^{2} + 4 \\), ¿hacia dónde abre la parábola?",
        "alternativas": [
          "Hacia arriba",
          "Hacia abajo",
          "Hacia la izquierda",
          "Hacia la derecha"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuáles son los cortes con el eje x de \\( f(x) = x^{2} - 4x + 3 \\)?",
        "alternativas": [
          "x = −1 y x = −3",
          "x = 1 y x = 3",
          "x = 2",
          "x = 0 y x = 3"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Si \\( f(x)=-x^{2}+2x+1 \\), ¿cuánto vale \\( f(3) \\)?",
        "alternativas": [
          "−2",
          "2",
          "4",
          "−14"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "El crecimiento de una colonia de bacterias que se duplica cada hora se modela mejor con una función:",
        "alternativas": [
          "Lineal",
          "Cuadrática",
          "Exponencial",
          "Constante"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En farmacología, la eliminación de un medicamento del cuerpo con el tiempo suele seguir una función:",
        "alternativas": [
          "Exponencial decreciente",
          "Lineal creciente",
          "Cuadrática",
          "Constante"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Funciones exponenciales y logarítmicas",
          "Funciones cuadráticas",
          "Funciones trigonométricas",
          "Plano cartesiano"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 31,
    "unidad": 5,
    "tema": "Funciones trigonométricas",
    "inicio": [
      {
        "pregunta": "¿Cuánto vale \\( \\log_{10}(100) \\)?",
        "alternativas": [
          "100",
          "10",
          "1",
          "2"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Una colonia de bacterias inicia con 100 y se duplica cada hora. ¿Cuántas bacterias hay a las 3 horas?",
        "alternativas": [
          "800",
          "300",
          "400",
          "600"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Un fármaco tiene 80 mg/L de concentración y se reduce a la mitad cada 3 horas. ¿Cuál es su concentración a las 9 horas?",
        "alternativas": [
          "10 mg/L",
          "26.7 mg/L",
          "20 mg/L",
          "40 mg/L"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuánto vale \\( \\log_{2}(8) \\)?",
        "alternativas": [
          "3",
          "4",
          "2",
          "16"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "¿Cuál es el rango de valores de la función seno?",
        "alternativas": [
          "[0, 1]",
          "[−1, 1]",
          "Todos los reales",
          "[−90°, 90°]"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Un electrocardiograma (ECG) muestra un patrón que se repite en el tiempo. ¿Qué tipo de función describe mejor ese comportamiento periódico?",
        "alternativas": [
          "Lineal",
          "Cuadrática",
          "Trigonométrica",
          "Logarítmica"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Funciones trigonométricas",
          "Funciones exponenciales y logarítmicas",
          "Aplicación de funciones en el análisis de crecimiento poblacional y farmacocinética",
          "Conceptos básicos de estadística"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 32,
    "unidad": 5,
    "tema": "Aplicación de funciones en el análisis de crecimiento poblacional y farmacocinética",
    "inicio": [
      {
        "pregunta": "¿Cuánto vale sen(90°)?",
        "alternativas": [
          "0.5",
          "1",
          "0",
          "−1"
        ],
        "correcta": 1
      },
      {
        "pregunta": "La función seno repite su patrón cada 360°. ¿Cómo se llama esa longitud del ciclo?",
        "alternativas": [
          "Amplitud",
          "Pendiente",
          "Período",
          "Dominio"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Un sensor de respiración registra f(t) = 3·sen(t). ¿Cuál es la amplitud (valor máximo que alcanza)?",
        "alternativas": [
          "1",
          "3",
          "6",
          "0"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuánto vale cos(0°)?",
        "alternativas": [
          "1",
          "0",
          "−1",
          "0.5"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Si la concentración de un fármaco en sangre disminuye a la mitad cada 4 horas, ¿qué tipo de función describe esa disminución?",
        "alternativas": [
          "Exponencial decreciente",
          "Lineal decreciente",
          "Cuadrática",
          "Trigonométrica"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Por qué es importante para un profesional de salud entender el modelo matemático detrás de la farmacocinética?",
        "alternativas": [
          "Para calcular dosis y tiempos de administración de forma segura",
          "Es solo un ejercicio académico sin uso real",
          "Para reemplazar los análisis de laboratorio",
          "No es relevante en la práctica clínica"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Hoy aprendimos sobre:",
        "alternativas": [
          "Aplicación de funciones en el análisis de crecimiento poblacional y farmacocinética",
          "Funciones trigonométricas",
          "Funciones exponenciales y logarítmicas",
          "Medidas de tendencia central y dispersión"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  },
  {
    "numero": 33,
    "unidad": 5,
    "tema": "Sesión integradora 5",
    "inicio": [
      {
        "pregunta": "En farmacocinética, la 'vida media' de un fármaco es el tiempo en que su concentración:",
        "alternativas": [
          "Se reduce a la mitad",
          "Llega a cero",
          "Se duplica",
          "Se mantiene constante"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Una población se triplica cada día y hoy hay 100 individuos. ¿Cuántos habrá dentro de 2 días?",
        "alternativas": [
          "900",
          "300",
          "600",
          "200"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Un fármaco tiene vida media de 6 horas y se administra una dosis de 400 mg. ¿Cuántos mg quedan en el cuerpo tras 12 horas?",
        "alternativas": [
          "300 mg",
          "0 mg",
          "200 mg",
          "100 mg"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Una población de bacterias se duplica cada 2 horas. Si ahora hay 50, ¿cuántas habrá dentro de 6 horas?",
        "alternativas": [
          "400",
          "150",
          "300",
          "200"
        ],
        "correcta": 0
      }
    ],
    "cierre": [
      {
        "pregunta": "Una función que crece cada vez más rápido con el tiempo, como una infección viral sin control, probablemente sea:",
        "alternativas": [
          "Lineal",
          "Exponencial",
          "Constante",
          "Logarítmica decreciente"
        ],
        "correcta": 1
      },
      {
        "pregunta": "A lo largo de esta unidad, ¿qué tipo de función NO se revisó en el curso?",
        "alternativas": [
          "Lineal",
          "Cuadrática",
          "Trigonométrica",
          "Función de variable compleja"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué hicimos hoy en la sesión?",
        "alternativas": [
          "Repasamos funciones y aplicaciones para el Caso integrador",
          "Repasamos ecuaciones para la Práctica Calificada 2",
          "Iniciamos el tema de estadística",
          "Rendimos la Práctica Calificada 1"
        ],
        "correcta": 0,
        "posicion": "final"
      }
    ]
  }
];

const HITOS = {
  "7": {
    "codigo": "PC1",
    "nombre": "Práctica Calificada 1",
    "detalle": "Sesión 8 · Individual"
  },
  "13": {
    "codigo": "TA1",
    "nombre": "Tarea Académica 1",
    "detalle": "Sesión 14 · Grupal"
  },
  "19": {
    "codigo": "TA2",
    "nombre": "Tarea Académica 2",
    "detalle": "Sesión 20 · Grupal"
  },
  "25": {
    "codigo": "PC2",
    "nombre": "Práctica Calificada 2",
    "detalle": "Sesión 26 · Individual"
  },
  "33": {
    "codigo": "CASO",
    "nombre": "Caso integrador",
    "detalle": "Sesiones 34-35 · Grupal"
  }
};
