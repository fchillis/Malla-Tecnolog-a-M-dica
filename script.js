function mostrarInfo(ramo) {
  const info = {
    'introduccion_a_la_tecnologia_medica': 'Ramo: Introducción a la Tecnología Médica',
    'biologia_celular': 'Ramo: Biología Celular',
    'quimica_general': 'Ramo: Química General',
    'principios_matematicos': 'Ramo: Principios Matemáticos',
    'taller_de_competencias_comunicativas': 'Ramo: Taller de Competencias Comunicativas',
    'taller_de_competencias_para_el_aprendizaje': 'Ramo: Taller de Competencias para el Aprendizaje',
    'taller_de_desarrollo_personal_i': 'Ramo: Taller de Desarrollo Personal I (*)',
    // Continúa con el resto de los ramos...
  };

  const contenedor = document.getElementById("infoRamo");
  contenedor.innerText = info[ramo];
  contenedor.style.display = "block";
}

