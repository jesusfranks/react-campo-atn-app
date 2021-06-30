const today = (resta = 0) => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear() - resta;
  return today = `${yyyy}-${mm}-${dd}`;
}

export const interviewInicialState = {
  name: "",
  name2: "",
  first_last_name: "",
  sec_last_name: "",
  civil_status: "",
  gender: "",
  type_housing: "",
  living_there_y: 0,
  living_there_m: 0,
  email: "",
  cellphone: "",
  phone: "",// Info del cliente que no esta en sus documentos
  dependence: "INSTITUTO HIDALGUENSE DE EDUCACIÓN",
  place: "",
  occupation: "",
  job: "",
  time_working_y: 0,
  time_working_m: 0,
  job_phone: "",
  extension: "",
  type: "",
  street: "",
  number: "",
  int_number: "",
  suburb: "",
  crosses: "",
  town: "",
  state: "Hidalgo",
  postal_code: "",
  term: "24",
  msg: "Normal",
  code: "",
  promotor_name: "",
  amount: "",
  city: "",
  date: today(),
  question: "",
  con_name: "",
  con_name2: "",
  con_first_last_name: "",
  con_sec_last_name: "",
  con_nacionality: "Mexicana",
  con_birth: today(30),
  ref1_name: "",
  ref1_name2: "",
  ref1_first_last_name: "",
  ref1_sec_last_name: "",
  ref1_phone: "",
  ref1_relationship: "AMISTAD",
  ref1_longer: "",
  ref2_name: "",
  ref2_name2: "",
  ref2_first_last_name: "",
  ref2_sec_last_name: "",
  ref2_phone: "",
  ref2_relationship: "AMISTAD",
  ref2_longer: "",
};

export const dependencies = [
  'INSTITUTO HIDALGUENSE DE EDUCACIÓN',
  'GOBIERNO DEL ESTADO DE HIDALGO',
  'COLEGIO DE BACHILLERES DEL ESTADO DE HIDALGO',
  'SERVICIOS DE SALUD MORELOS 3',
  'SERVICIOS DE SALUD MORELOS 3.5',
  'CODISPERSA',
  'FYDNEMS',
  'SERV DE CONTRAL. ADMÓN. Y DE PERSONAL',
  'SERVICIOS DE PERSONAL AUTOMOTRIZ',
  'TENENCIA Y ADMINIST. ACCIONARIA',
  'TRASINMEX',
]

export const estadosDeVentas = [
  'HIDALGO',
  'MORELOS',
  'CDMX',
  'OAXACA',
]

export const plazo = [
  '24',
  '36',
  '48',
  '72',
  '96',
]

export const tipoCredito = [
  'Normal',
  'Refinanciamiento'
]

export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTYyNDQwMTA3Nn0.tVGzVrj_UhnqLc_0g2yjKHZNXWk6d1ju-DaUgAIANGU"

export const clienteRespuesta = {
  name: "",
  name2: "",
  first_last_name: "",
  sec_last_name: "",
  civil_status: "",
  gender: "",
  type_housing: "",
  living_there_y: "",
  living_there_m: "",
  email: "",
  cellphone: "",
  phone: "",
  nacionality: "",
  country: "",
  state: "",
  fiel: "",
  birth: "",
  contact_schedule: "",
  rfc: "",
  curp: "",
  id: 0,
}

export const tiposReferencias = [
  'AMISTAD',
  'FAMILIAR'
]

export const rutas = [
  'ineA',
  'ineR',
  'cDomicilio',
  'eCuenta',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
]
export const rutaspre = [
  'ineA',
  'ineR',
  'cDomicilio',
  'eCuenta',
  'precaptura',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
  'talones',
]

export const rutasPrueba = [
  'ineA',
  'ineR',
  'cDomicilio',
  'eCuenta'
]

export const APIURL = 'https://atn-api.herokuapp.com'