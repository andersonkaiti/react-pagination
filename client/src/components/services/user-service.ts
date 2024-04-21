const baseUrl = `http://localhost:3001`;

export type DataType = {
    id: number;
    name: string;
    email: string;
    age: number;
}

type DataPromiseType = {
    result: DataType[],
    total: number
}

export async function getData(page: number, limit: number): Promise<DataPromiseType> {
    const result = await fetch(`${baseUrl}/${page}/${limit}`, {
        method: "GET",
        cache: "no-store"
    });
    
    return await result.json();
}