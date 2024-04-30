'use client';
import { Tabs, Tab } from '@nextui-org/react';
import { FaBalanceScale } from 'react-icons/fa';
import { FaCarBurst } from 'react-icons/fa6';
import CatalogTypes from '@/types/catalog-types';
import ApplicationsTable from './applications-table';
import EquivalencesTable from './equivalences-table';

export default function ProductTabs({
  equivalences,
  applications,
}: {
  equivalences: CatalogTypes['Equivalences'][];
  applications: CatalogTypes['Applications'][];
}) {
  return (
    <Tabs
      classNames={{
        tabList: 'p-0',
      }}
      aria-label="Opciones"
      variant="light"
      fullWidth
    >
      <Tab
        key="applications"
        title={
          <div className="flex items-center space-x-2">
            <FaCarBurst size={24} />
            <span>Aplicaciones</span>
          </div>
        }
      >
        <ApplicationsTable applications={applications} />
      </Tab>
      <Tab
        key="equivalences"
        title={
          <div className="flex items-center space-x-2">
            <FaBalanceScale size={20} />
            <span>Equivalencias</span>
          </div>
        }
      >
        <EquivalencesTable equivalences={equivalences} />
      </Tab>
    </Tabs>
  );
}
