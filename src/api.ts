import axios from 'axios'
import type { Bus } from './types/Bus'

const API_BUS = "http://localhost:8080/api-v1"


export const obtenerBuses = async (): Promise<Bus[]> => {
    const response = await axios.get<Bus[]>(API_BUS)
    return response.data
 }

 export const obtenerBusPorId = async (id:number): Promise<Bus> => {
    const response = await axios.get<Bus>(`${API_BUS}/${id}`)
    return response.data
 }