import { Table, TableContainer } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

import { BagSection } from '../../core/domain/bag.model';
import { Item } from '../../core/domain/item.model';
import { TableBody } from './sub-components/table-body';
import { TableFoot } from './sub-components/table-foot';
import { TableHead } from './sub-components/table-head';

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
          addItemInBag={() =>
            addItemInBag({
              bagSectionId: bagSection.getId(),
              id: '',
              name: '',
              description: '',
              quantity: 0,
              weight: 0,
            })
          }
        />
      </Table>
    </TableContainer>
  );
};
