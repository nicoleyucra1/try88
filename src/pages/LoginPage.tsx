import {useState} from 'react';
import type {FormEvent} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { loginRequest } from '../services';
import { getErrorMessage } from '../api';
import { useAuth } from '../auth';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const data = await loginRequest({email, password});
            login (data.token);
            navigate('/collection-points');
        } catch (err) {
            setError(getErrorMessage(err));
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 p-6 max-w-sm'>
            <h1 className='font-bold'>Iniciar sesión</h1>
            {error && <div className="alert alert-error">{error}</div>}
            <input type="email" placeholder="Correo" required value={email} onChange={(e) => setEmail(e.target.value)} className='input'/>
            <input type="password" placeholder="Contraseña" required value={password} onChange={(e) => setPassword(e.target.value)} className='input'/>
            <button className='btn btn-primary'>Ingresar</button>
            <p>¿No tienes cuenta_<Link to="/register" className="linl link-primary">Registrate</Link></p>
        </form>
    )
}
