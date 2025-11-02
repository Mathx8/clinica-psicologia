import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api-psicanalise.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPsicologos = () => apiClient.get("/psicologos/");
export const getPsicologoById = (id) => apiClient.get(`/psicologos/${id}`);
export const createPsicologo = (data) => apiClient.post("/psicologos/", data);
export const updatePsicologo = (id, data) => apiClient.put(`/psicologos/${id}`, data);
export const deletePsicologo = (id) => apiClient.delete(`/psicologos/${id}`);

export const getPacientes = () => apiClient.get("/pacientes/");
export const getPacienteById = (id) => apiClient.get(`/pacientes/${id}`);
export const createPaciente = (data) => apiClient.post("/pacientes/", data);
export const updatePaciente = (id, data) => apiClient.put(`/pacientes/${id}`, data);
export const deletePaciente = (id) => apiClient.delete(`/pacientes/${id}`);

export const getSalas = () => apiClient.get("/salas/");
export const getSalaById = (id) => apiClient.get(`/salas/${id}`);
export const createSala = (data) => apiClient.post("/salas/", data);
export const updateSala = (id, data) => apiClient.put(`/salas/${id}`, data);
export const deleteSala = (id) => apiClient.delete(`/salas/${id}`);

export const getDisponibilidades = () => apiClient.get("/disponibilidades/");
export const getDisponibilidadeById = (id) => apiClient.get(`/disponibilidades/${id}`);
export const createDisponibilidade = (data) => apiClient.post("/disponibilidades/", data);
export const updateDisponibilidade = (id, data) => apiClient.put(`/disponibilidades/${id}`, data);
export const deleteDisponibilidade = (id) => apiClient.delete(`/disponibilidades/${id}`);
export const getDisponibilidadeDia = (data) => apiClient.get(`/disponibilidades/dia/${data}`);
export const getDisponibilidadeSemana = (inicio, fim) =>
  apiClient.get(`/disponibilidades/semana/${inicio}/${fim}`);

export const getTerapias = () => apiClient.get("/terapias/");
export const getTerapiaById = (id) => apiClient.get(`/terapias/${id}`);
export const createTerapia = (data) => apiClient.post("/terapias/", data);
export const updateTerapia = (id, data) => apiClient.put(`/terapias/${id}`, data);
export const deleteTerapia = (id) => apiClient.delete(`/terapias/${id}`);
export const getTerapiaDia = (data, psicologoId) =>
  apiClient.get(`/terapias/dia/${data}/${psicologoId || ""}`);
export const getTerapiaSemana = (inicio, fim, psicologoId) =>
  apiClient.get(`/terapias/semana/${inicio}/${fim}/${psicologoId || ""}`);

export const getLaudos = () => apiClient.get("/laudos/");
export const getLaudoById = (id) => apiClient.get(`/laudos/${id}`);
export const createLaudo = (data) => apiClient.post("/laudos/", data);
export const updateLaudo = (id, data) => apiClient.put(`/laudos/${id}`, data);
export const deleteLaudo = (id) => apiClient.delete(`/laudos/${id}`);

export const loginPsicologo = async (login, senha) => {
  const { data: psicologos } = await getPsicologos();
  const user = psicologos.find(
    (p) =>
      (p.email === login || p.crp === login) &&
      p.senha === senha
  );
  if (user) return user;
  throw new Error("Credenciais inválidas");
};

export const loginPaciente = async (email, senha) => {
  const { data: pacientes } = await getPacientes();
  const user = pacientes.find(
    (p) => p.email === email && p.senha === senha
  );
  if (user) return user;
  throw new Error("Credenciais inválidas");
};

export default apiClient;
