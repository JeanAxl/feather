import { Box, Table, TableContainer } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

import { BagSection } from '../../core/domain/bag.model';
import {
  AddItemInBagSectionFn,
  DeleteBagSectionFn,
  UpdateBagSectionFn,
  UpdateItemInBagFn,
} from '../interface';
import { TableBody } from './sub-components/table-body';
import { TableFoot } from './sub-components/table-foot';
import { TableHead } from './sub-components/table-head';

type BagSectionProps = {
  bagSection: BagSection;
  addItemInBag: AddItemInBagSectionFn;
  updateItemInBag: UpdateItemInBagFn;
  deleteItemInBag: DeleteBagSectionFn;
  deleteBagSection: DeleteBagSectionFn;
  updateBagSection: UpdateBagSectionFn;
};

export const BagSectionComponent: FunctionComponent<BagSectionProps> = ({
  bagSection,
  addItemInBag,
  updateItemInBag,
  deleteItemInBag,
  deleteBagSection,
  updateBagSection,
}) => {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius={'sm'}
      boxShadow="md"
      p="2"
      rounded="md"
      bg="white"
    >
      <TableContainer>
        <Table variant="simple" size="sm">
          <TableHead
            bagSection={bagSection}
            deleteBagSection={deleteBagSection}
            updateBagSection={updateBagSection}
          />
          <TableBody
            bagSectionContent={bagSection.getContent()}
            updateItemInBag={updateItemInBag}
            deleteItemInBag={deleteItemInBag}
          />
          <TableFoot
            bagSectionTotalWeight={bagSection.getTotalWeight()}
            bagSectionTotalItems={bagSection.getTotalItems()}
            bagSectionId={bagSection.getId()}
            addItemInBag={addItemInBag}
          />
        </Table>
      </TableContainer>
    </Box>
  );
};
