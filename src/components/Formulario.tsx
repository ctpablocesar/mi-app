import { useForm } from '../hooks/useForm';

interface FormData {
    email: string;
    nombre: string;
    edad: number;
}

export const Formulario = () => {

    const { formulario, handleChange, email, nombre, edad } = useForm<FormData>({
        email: 'Darckman201@gmail.com',
        nombre: 'Cordova Tapia Pablo Cesar',
        edad: 25
    });

    // const { email, nombre, edad } = formulario;

    return (
        <>
            <h1 className="mt-5">CutomHooks</h1>
            <hr />

            <form>

                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        />
                </div>

                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Edad:</label>
                    <input
                        type="number"
                        className="form-control"
                        name="edad"
                        value={edad}
                        onChange={handleChange}
                    />
                </div>

                <pre> {JSON.stringify(formulario)} </pre>

            </form>
        </>

    )
}
