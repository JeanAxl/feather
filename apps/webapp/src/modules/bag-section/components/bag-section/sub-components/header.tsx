import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Heading,
  Spacer,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { BagSection } from '../../../core/domain/bag.model';
import { DeleteBagSectionFn, UpdateBagSectionFn } from '../../interface';

type Props = {
  bagSection: BagSection;
  deleteBagSection: DeleteBagSectionFn;
  updateBagSection: UpdateBagSectionFn;
};

export const Header: FunctionComponent<Props> = ({
  bagSection,
  deleteBagSection,
  updateBagSection,
}) => {
  return (
    <Flex>
      <Center>
        <Heading>
          <EditableHeader
            bagSectionId={bagSection.getId()}
            bagSectionName={bagSection.getName()}
            updateBagSection={updateBagSection}
          />
        </Heading>
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

type EditableHeaderProps = {
  bagSectionId: string;
  bagSectionName: string;
  updateBagSection: UpdateBagSectionFn;
};

const EditableHeader: FunctionComponent<EditableHeaderProps> = ({
  bagSectionId,
  bagSectionName,
  updateBagSection,
}) => {
  return (
    <Editable
      isPreviewFocusable={true}
      onSubmit={(input) => updateBagSection(bagSectionId, { name: input })}
      defaultValue={bagSectionName}
      placeholder={'name'}
    >
      <EditablePreview width={'100%'} />
      <EditableInput value={bagSectionName} />
    </Editable>
  );
};
