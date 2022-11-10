import { Th, Thead, Tr } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { BagSection } from '../../../core/domain/bag.model';
import { DeleteBagSectionFn, UpdateBagSectionFn } from '../../interface';
import { Header } from './header';

type Props = {
  bagSection: BagSection;
  deleteBagSection: DeleteBagSectionFn;
  updateBagSection: UpdateBagSectionFn;
};

export const TableHead: FunctionComponent<Props> = ({
  bagSection,
  deleteBagSection,
  updateBagSection,
}) => {
  return (
    <Thead>
      <Tr>
        <Th>
          <Header
            bagSection={bagSection}
            deleteBagSection={deleteBagSection}
            updateBagSection={updateBagSection}
          ></Header>
        </Th>
        <Th></Th>
        <Th isNumeric>Weight</Th>
        <Th isNumeric>Quantity</Th>
      </Tr>
    </Thead>
  );
};
