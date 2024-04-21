import { ELLIPSIS_LEFT, ELLIPSIS_RIGHT, usePagination } from "./usePagination";
import Link from "next/link";

type PaginationProps = {
    page: number;
    limit: number;
    total: number;
}

const currentClassName = `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`;

export default function Pagination({ page, limit, total }: PaginationProps) {
    const { pages, isCurrentPage } = usePagination({ page, limit, total });

    return (
        <div>
            <ul className="inline-flex text-base my-2">
                {pages.map(page => {
                    let className = `py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`;
                    
                    const isCurrent = isCurrentPage(page);

                    if(isCurrent) className = currentClassName;

                    const isEllipsis = page === ELLIPSIS_LEFT || page === ELLIPSIS_RIGHT;

                    if(isEllipsis) {
                        return (
                            <span
                                key={page}
                                className={className}
                            >...</span>
                        );
                    }

                    return (
                        <Link
                            key={page}
                            type="button"
                            href={`/?page=${page}&limit=${limit}`}
                            className={className}
                        >{page}</Link>
                    )
                })}
            </ul>
        </div>
    );
}