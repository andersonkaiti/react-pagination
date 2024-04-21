import Table from "@/components/table/table";
import Pagination from "@/components/pagination/pagination";
import { getData } from "@/components/services/user-service";

type HomeType = {
    searchParams: {
        page?: string;
        limit?: string;
    }
}

export default async function Home({ searchParams }: HomeType) {
    const page = Number(searchParams?.page) || 1;
    const limit = Number(searchParams?.limit) || 3;

    const data = await getData(page, limit);
    
    return (
        <main className="flex min-h-screen items-center justify-between p-24">
            <div className="relative overflow-x-auto">
                <Table data={data.result} />
                <Pagination
                    page={page}
                    limit={limit}
                    total={data.total}
                />
            </div>
        </main>
    );
}
