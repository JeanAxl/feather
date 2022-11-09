import { Th, Thead, Tr } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { BagSection } from '../../../core/domain/bag.model';
import { Header } from './header';

type Props = {
  bagSection: BagSection;
  deleteBagSection: (id: BagSection['id']) => void;
};

export const TableHead: FunctionComponent<Props> = ({
  bagSection,
  deleteBagSection,
}) => {
  return (
    <Thead>
      <Tr>
        <Th>
          <Header
            bagSection={bagSection}
            deleteBagSection={deleteBagSection}
          ></Header>
        </Th>
        <Th></Th>
        <Th isNumeric>Weight</Th>
        <Th isNumeric>Quantity</Th>
      </Tr>
    </Thead>
  );
};
