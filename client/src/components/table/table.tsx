import { type DataType } from "@/services/user-service";

type TableProps = {
    data: DataType[];
}

export default function Table({ data }: TableProps) {
    return (
        <table className="table-fixed w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        NAME
                    </th>
                    <th scope="col" className="px-6 py-3">
                        E-MAIL
                    </th>
                    <th scope="col" className="px-6 py-3">
                        AGE
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((data: DataType) => (
                    <tr
                        key={data.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {data.id}
                        </th>
                        <td className="px-6 py-4">
                            {data.name}
                        </td>
                        <td className="px-6 py-4">
                            {data.email}
                        </td>
                        <td className="px-6 py-4">
                            {data.age}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}