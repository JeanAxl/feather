import { Table, TableCaption, TableContainer } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

import { BagSection } from '../../core/domain/bag.model';
import { Item } from '../../core/domain/item.model';
import { TableBody } from './components/table-body';
import { TableFoot } from './components/table-foot';
import { TableHead } from './components/table-head';

type BagSectionProps = {
  bagSection: BagSection;
  addItemInBag: (item: Item) => void;
  updateItemInBag: (id: Item['id'], input: Partial<Item>) => void;
  deleteItemInBag: (id: Item['id']) => void;
};

export const BagSectionComponent: FunctionComponent<BagSectionProps> = ({
  bagSection,
  addItemInBag,
  updateItemInBag,
  deleteItemInBag,
}) => {
  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <TableHead bagSectionName={bagSection.getName()} />
        <TableBody
          bagSectionContent={bagSection.getContent()}
          updateItemInBag={updateItemInBag}
          deleteItemInBag={deleteItemInBag}
        />
        <TableFoot
          bagSectionTotalWeight={bagSection.getTotalWeight()}
          bagSectionTotalItems={bagSection.getTotalItems()}
          bagSectionContentLength={bagSection.getContent().length}
          addItemInBag={addItemInBag}
        />
      </Table>
    </TableContainer>
  );
};
