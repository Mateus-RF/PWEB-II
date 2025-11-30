function registrarEvento(tipo, ...metadados) {
  console.log("Tipo:", tipo);
  console.log("Metadados:", metadados);
}

registrarEvento("click");
// Tipo: click
// Metadados: []

registrarEvento("login", "user123", "sucesso");
// Tipo: login
// Metadados: ["user123", "sucesso"]

registrarEvento("erro", 404, "not found", { critical: true });
// Tipo: erro
// Metadados: [404, "not found", { critical: true }]
