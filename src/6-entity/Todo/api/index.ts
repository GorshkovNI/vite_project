import {api} from "../../../7-shared/api";

export async function getTodos() {
    return await api.get('todos')
}

export async function getTodo(id: number) {
    return await api.get(`todos/${id}`)
}
