'use client';
import CatalogTypes from '@/types/catalog-types';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  SortDescriptor,
} from '@nextui-org/react';
import { useMemo, useState } from 'react';

const columns = [
  {
    key: 'brand',
    label: 'MARCA',
  },
  {
    key: 'model',
    label: 'MODELO',
  },
  {
    key: 'year',
    label: 'AÑO',
  },
  {
    key: 'version',
    label: 'VERSIÓN',
  },
  {
    key: 'comments',
    label: 'COMENTARIOS',
  },
];

export default function ApplicationsTable({
  applications,
}: {
  applications: CatalogTypes['Applications'][];
}) {
  const [page, setPage] = useState(1);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: 'name',
    direction: 'ascending',
  });

  const ROWS_PER_PAGE = 5;

  const pages = Math.ceil(applications.length / ROWS_PER_PAGE);

  const sortedItems = useMemo(() => {
    return [...applications].sort((a, b) => {
      const keyA = getKeyValue(a, sortDescriptor.column || 'brand');
      const keyB = getKeyValue(b, sortDescriptor.column || 'brand');
      if (keyA < keyB) {
        return sortDescriptor.direction === 'ascending' ? -1 : 1;
      }
      if (keyA > keyB) {
        return sortDescriptor.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [applications, sortDescriptor.column, sortDescriptor.direction]);

  const items = useMemo(() => {
    const start = (page - 1) * ROWS_PER_PAGE;
    const end = start + ROWS_PER_PAGE;
    return sortedItems.slice(start, end);
  }, [page, sortedItems]);

  return (
    <Table
      aria-label="Example static collection table"
      isStriped
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
      bottomContent={
        <>
          {pages > 1 && (
            <div className="flex w-full justify-center">
              <Pagination
                classNames={{ cursor: 'bg-primary text-black' }}
                isCompact
                showControls
                color="secondary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          )}
        </>
      }
      removeWrapper
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={items} emptyContent={'No se encontraron aplicaciones'}>
        {(item) => (
          <TableRow
            key={`${item.brand}-${item.model}-${item.year}-${item.version}-${item.comments}`}
          >
            {(columnKey) => (
              <TableCell>
                <p>{getKeyValue(item, columnKey)}</p>
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
