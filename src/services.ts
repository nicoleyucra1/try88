import {api} from './api';
import type {LoginRequest, RegisterRequest, AuthResponse, Collection, CollectionPage, DeliveryRequest, DeliveryResponse } from './types';

export async function loginRequest(data: LoginRequest): Promise<AuthResponse> {
    const res = await api.post<AuthResponse>('/api/auth/login', data);
    return res.data;
}


export async function registerRequest(data: RegisterRequest): Promise<void> {
    await api.post<AuthResponse>('/api/auth/register', data);
}

export async function getCollections(page: number): Promise<CollectionPage>{
    const res = await api.get<CollectionPage>('/api/collection-points', {params:{page, size: 5}} );
    return res.data
}

export async function getCollection(id: number): Promise<Collection> {
    const res = await api.get<Collection>(`/api/collection-points/${id}`);
    return res.data;
}

export async function createDelifery(id: number, data: DeliveryRequest): Promise<DeliveryResponse>{
    const res = await api.post<DeliveryResponse>(`/api/collecions-points/${id}/deliveries`, data);
    return res.data;
}