'use client';
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

const DATA = [
   {
      name: 'CILINDRO MAESTRO CLUTCH FORD TRUCK F-350 V8 5.4 LTS 2005-2010 F-450 V8 6.0 LTS 2003-2007 DIESEL F-450 V8 6.4 LTS 2008-2010 DIESEL F-450 V10 6.8 LTS 2005-2010 F-250 V8 6.0 LTS 2005-2007 DIESEL',
      key: '321-615-301D',
   },
   {
      name: 'Zoey Lang',
      key: 'Technical Lead',
   },
   {
      name: 'Jane Fisher',
      key: 'Senior Developer',
   },
   {
      name: 'William Howard',
      key: 'Community Manager',
   },
];

const ProductTable = () => {
   const [page, setPage] = useState(1);
   const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
      column: 'name',
      direction: 'ascending',
   });

   const ROWS_PER_PAGE = 5;

   const pages = Math.ceil(DATA.length / ROWS_PER_PAGE);

   const sortedItems = useMemo(() => {
      return [...DATA].sort((a, b) => {
         const keyA = getKeyValue(a, sortDescriptor.column || 'name');
         const keyB = getKeyValue(b, sortDescriptor.column || 'name');
         if (keyA < keyB) {
            return sortDescriptor.direction === 'ascending' ? -1 : 1;
         }
         if (keyA > keyB) {
            return sortDescriptor.direction === 'ascending' ? 1 : -1;
         }
         return 0;
      });
   }, [sortDescriptor]);

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
         }
         //removeWrapper
      >
         <TableHeader>
            <TableColumn className="bg-primary text-black" key="name" allowsSorting>
               NOMBRE
            </TableColumn>
            <TableColumn className="bg-primary text-black" key="key" allowsSorting>
               CLAVE
            </TableColumn>
         </TableHeader>
         <TableBody items={items}>
            {(item) => (
               <TableRow key={item.key}>
                  {(columnKey) => (
                     <TableCell>
                        {columnKey === 'name' ? (
                           <Tooltip content={item.name} className="max-w-[300px]">
                              <p className="truncate max-w-[400px]">
                                 {getKeyValue(item, columnKey)}
                              </p>
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
};

export default ProductTable;
