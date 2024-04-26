'use client';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';

const ProductTable = () => {
   return (
      <Table aria-label="Example static collection table" isStriped>
         <TableHeader>
            <TableColumn className="bg-primary text-black">NAME</TableColumn>
            <TableColumn className="bg-primary text-black">ROLE</TableColumn>
            <TableColumn className="bg-primary text-black">STATUS</TableColumn>
         </TableHeader>
         <TableBody>
            <TableRow key="1">
               <TableCell>Tony Reichert</TableCell>
               <TableCell>CEO</TableCell>
               <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
               <TableCell>Zoey Lang</TableCell>
               <TableCell>Technical Lead</TableCell>
               <TableCell>Paused</TableCell>
            </TableRow>
            <TableRow key="3">
               <TableCell>Jane Fisher</TableCell>
               <TableCell>Senior Developer</TableCell>
               <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
               <TableCell>William Howard</TableCell>
               <TableCell>Community Manager</TableCell>
               <TableCell>Vacation</TableCell>
            </TableRow>
         </TableBody>
      </Table>
   );
};

export default ProductTable;
