import {useState} from 'react';
import type {FormEvent} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { registerRequest } from '../services';
import { getErrorMessage } from '../api';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            await registerRequest({name, email, password});
            setSuccess('Cuenta creada, ahora inicia sesion');
            setTimeout(() => navigate('/login'), 1500);
        } catch (err) {
            setError(getErrorMessage(err));
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 p-6 max-w-sm'>
            <h1 className='font-bold'>Crear cuenta</h1>
            {error && <div className="alert alert-error">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <input placeholder="Nombre" required maxLength={100} value={name} onChange={(e) => setName(e.target.value)} className='input'/>
            <input type="email" placeholder="Correo" required value={email} onChange={(e) => setEmail(e.target.value)} className='input'/>
            <input type="password" placeholder="Contraseña" required minLength={8} maxLength={72} pattern="[ -~]" title="Solo letras sin tilde, numeros y simbolos" value={password} onChange={(e) => setPassword(e.target.value)} className='input'/>
            <p>¿Ya tienes cuenta?<Link to="/login" className="linl link-primary">Inicia sesion</Link></p>
        </form>
    )
}
