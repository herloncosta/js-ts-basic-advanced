import { Validador } from "./ValidadorCPF.js";
const { log } = console;

const cpf = new Validador("070.987.720-03");

cpf.validar() ? log("CPF Válido!") : log("CPF Inválido!");
