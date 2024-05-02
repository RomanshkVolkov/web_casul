'use client';

import { url } from '@/app/url/url-utils';
import { Button, Tooltip } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { GrCatalog } from 'react-icons/gr';

export default function ButtonCatalog() {
  const router = useRouter();
  const handleCatalog = () => {
    router.push(url.catalog);
  };
  return (
    <Tooltip content="Ver Catálogo" placement="bottom">
      <Button id="search-nav--button" onClick={handleCatalog}>
        <GrCatalog size={25} />
      </Button>
    </Tooltip>
  );
}
