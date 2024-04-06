function Consultorio(nombre) {
  this.nombre = nombre;
  this.pacientes = [];
}

Consultorio.prototype.agregarPaciente = function (paciente) {
  this.pacientes.push(paciente);
};

Consultorio.prototype.mostrarPacientes = function () {
  console.log(`Pacientes del consultorio ${this.nombre}:`);
  this.pacientes.forEach((paciente) => {
    paciente.mostrarDatos();
    console.log("-------------------------");
  });
};

function Paciente(nombre, edad, rut, diagnostico) {
  let _nombre = nombre;
  let _edad = edad;
  let _rut = rut;
  let _diagnostico = diagnostico;

  // Getters y Setters
  Object.defineProperties(this, {
    nombre: {
      get: function () {
        return _nombre;
      },
      set: function (nombre) {
        _nombre = nombre;
      },
    },
    edad: {
      get: function () {
        return _edad;
      },
      set: function (edad) {
        _edad = edad;
      },
    },
    rut: {
      get: function () {
        return _rut;
      },
      set: function (rut) {
        _rut = rut;
      },
    },
    diagnostico: {
      get: function () {
        return _diagnostico;
      },
      set: function (diagnostico) {
        _diagnostico = diagnostico;
      },
    },
  });
}

Paciente.prototype.mostrarDatos = function () {
  console.log("Nombre:", this.nombre);
  console.log("Edad:", this.edad);
  console.log("RUT:", this.rut);
  console.log("Diagnóstico:", this.diagnostico);
};

let consultorio = new Consultorio("Clinica XYZ");

consultorio.agregarPaciente(
  new Paciente("Diego", 20, "11.111.111-1", "Covid-19")
);
consultorio.agregarPaciente(new Paciente("Ana", 25, "22.222.222-2", "Gripe"));
consultorio.agregarPaciente(
  new Paciente("Carlos", 30, "33.333.333-3", "Fractura")
);

consultorio.mostrarPacientes();
