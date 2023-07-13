import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormFormik = () => {
  // Configuración de useFormik para el manejo del formulario
  const { handleSubmit, handleChange, errors } = useFormik({
    // Valores iniciales del formulario
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
      password: "",
      repetPassword: "",
    },
     // Función que se ejecuta al enviar el formulario
    onSubmit: (datos) => {
      console.log("el formulario se envió");
      // conecto con la api
      console.log(datos);
    },
    // Validación al cambiar el valor de los campos (deshabilitada en este caso)
    validateOnChange: false,
    // Esquema de validación definido con Yup
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es requerido")
        .min(3, "El campo debe tener al menos 3 caracteres"),
      telefono: Yup.string().required("Campo obligatorio"),
      email: Yup.string()
        .email("No corresponde a un email válido")
        .required("Es obligatorio"),
      password: Yup.string().required("Requerido").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
        message: "La contraseña debe tener al menos 6 caracteres, una mayúscula y una minúscula",
      }),
      repetPassword: Yup.string()
        .required("Requerido")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
  });

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ padding: "40px", gap: "5px" }}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="Telefono"
          variant="outlined"
          name="telefono"
          onChange={handleChange}
          error={errors.telefono ? true : false}
          helperText={errors.telefono}
          style={{ marginBottom: "5px" }}
        />
        <TextField
          label="Pass"
          variant="outlined"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="RepetPass"
          variant="outlined"
          name="repetPassword"
          onChange={handleChange}
          error={errors.repetPassword ? true : false}
          helperText={errors.repetPassword}
          style={{ marginBottom: "10px" }}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default FormFormik;

