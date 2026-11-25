import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { getCollections } from '../services';
import { getErrorMessage } from '../api';
import type { Collection } from '../types';
import Pagination from '../components/Pagination';

export default function CollectionsPage() {
    const [collections, setCollections] = useState<Collection[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            try {
                const data = await getCollections(page);
                setCollections(data.items);
                setTotalPages(data.totalPages);
            } catch (err) {
                setError(getErrorMessage(err));
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [page]);

    return (
        <div className="flex flex-col gap4">
            <h1 className='font-bold'>Colecciones</h1>
            {error &&  <div className='alert alert-error'>{error}</div>}
            {loading && <p>Cargando...</p>}
            {!loading && collections.length === 0 && <div className="alert alert-info"> No hay colecciones para mostrar </div>}
            {!loading && collections.length > 0 && (
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Zona</th>
                            <th>Estado</th>
                            <th>Materiales</th>
                        </tr>
                    </thead>
                    <tbody>
                        {collections.map((g) => (
                            <tr key={g.id}>
                                <td>{g.name}</td>
                                <td>{g.zone}</td>
                                <td>{g.status}</td>
                                <td>{g.materials.map((m) => m.name).join(', ')}</td>
                                <td><Link to={`collections/${g.id}`} className='btn btn-sm'>Ver</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination page={page} totalPages={totalPages} onChange={setPage}/>
        </div>
    );
}