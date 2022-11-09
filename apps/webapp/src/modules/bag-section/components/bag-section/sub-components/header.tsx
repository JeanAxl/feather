import { DeleteIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex, Heading, Spacer } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { BagSection } from '../../../core/domain/bag.model';

type Props = {
  bagSection: BagSection;
  deleteBagSection: (id: BagSection['id']) => void;
};

export const Header: FunctionComponent<Props> = ({
  bagSection,
  deleteBagSection,
}) => {
  return (
    <Flex>
      <Center>
        <Heading>{bagSection.getName()}</Heading>
      </Center>
      <Spacer />
      <Box p="4" bg="">
        <Button
          colorScheme="teal"
          variant="ghost"
          size="sm"
          onClick={() => deleteBagSection(bagSection.getId())}
        >
          <DeleteIcon />
        </Button>
      </Box>
    </Flex>
  );
};
