// const baseUrl = `http://localhost:3001`;
const baseUrl = `https://randomuser.me/api`;

type ResultsType = {
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    dob: {
        date: string;
        age: number;
    };
    id: {
        name: string;
        value: string
    }
}

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
    // const result = await fetch(`${baseUrl}/${page}/${limit}`, {
    //     method: "GET",
    //     cache: "no-store"
    // });
    
    // return await result.json();

    const result = await fetch(`${baseUrl}/?page=${page}&results=${limit}&inc=id,name,email,dob`, {
        method: "GET",
        cache: "no-store"
    });
    
    const { results } = await result.json();
    
    const data = results.map((result: ResultsType, index: number) => ({
        name: `${result.name.first} ${result.name.last}`,
        email: result.email,
        age: result.dob.age,
        id: result.id.value ?? index + 1
    }));

    return {
        result: data,
        total: 290
    }
}