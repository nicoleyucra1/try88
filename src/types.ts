export interface LoginRequest{
    email: string;
    password: string; 
}

export interface RegisterRequest{
    name: string;
    email: string;
    password: string; 
}

export interface AuthResponse{
    token: string;
}

export interface Material {
    id: number;
    name: string;
    active: boolean;
}

export interface Collection {
    id: number;
    name: string;
    zone: string;
    status: string;
    materials: Material[];
}

export interface CollectionPage{
    items: Collection[];
    page: number;
    size: number;
    totalItems: number;
    totalPages:number;
}

export interface DeliveryRequest{
    materialId: number;
    weightKg: number;
}

export interface DeliveryResponse{
    id: number;
    materialId: number;
    material: string;
    weightKg: number;
}