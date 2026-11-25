interface PaginationProps{
    page: number;
    totalPages: number;
    onChange: (page:number) => void;
}

export default function Pagination({page, totalPages, onChange}: PaginationProps){
    return (
        <div className="join">
            <button className="join-item btn" disabled={page <= 1} onClick={() => onChange(page-1)}>Anterior</button>
            <span className="join-item btn btn disabled">Página {page} de {totalPages}</span>
            <button className="join-item btn" disabled={page >= totalPages} onClick={() => onChange(page+1)}>Siguiente</button>
        </div>
    )
}