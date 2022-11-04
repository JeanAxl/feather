import { AddIcon } from '@chakra-ui/icons';
import { Button, Center } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

export const AddBagSection: FunctionComponent = () => {
  return (
    <Button border="1px" borderColor="gray.200" borderRadius={'sm'}>
      <Center margin={'6px'}>
        <AddIcon boxSize={8} color="teal" />
      </Center>
    </Button>
  );
};
