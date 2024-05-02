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
  Tooltip,
  SortDescriptor,
} from '@nextui-org/react';
import { useMemo, useState } from 'react';

const columns = [
  {
    key: 'sku',
    label: 'CLAVE',
  },
  {
    key: 'description',
    label: 'DESCRIPCIÓN',
  },
  {
    key: 'brand',
    label: 'MARCA',
  },
];

export default function EquivalencesTable({
  equivalences,
}: {
  equivalences: CatalogTypes['Equivalences'][];
}) {
  const [page, setPage] = useState(1);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: 'name',
    direction: 'ascending',
  });

  const ROWS_PER_PAGE = 5;

  const pages = Math.ceil(equivalences.length / ROWS_PER_PAGE);

  const sortedItems = useMemo(() => {
    return [...equivalences].sort((a, b) => {
      const keyA = getKeyValue(a, sortDescriptor.column || 'sku');
      const keyB = getKeyValue(b, sortDescriptor.column || 'sku');
      if (keyA < keyB) {
        return sortDescriptor.direction === 'ascending' ? -1 : 1;
      }
      if (keyA > keyB) {
        return sortDescriptor.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [equivalences, sortDescriptor.column, sortDescriptor.direction]);

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
        {(column) => (
          <TableColumn key={column.key} allowsSorting>
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items} emptyContent={'No se encontraron equivalencias'}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>
                {columnKey === 'description' ? (
                  <Tooltip content={item.description} className="max-w-[300px]">
                    <p className="truncate max-w-[300px]">{getKeyValue(item, columnKey)}</p>
                  </Tooltip>
                ) : (
                  <p>{getKeyValue(item, columnKey)}</p>
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
