import { Heading } from '@chakra-ui/layout';
import { BagSectionsContainer } from '../modules/bag-section/components/bag-sections/bag-sections.container';

export function App() {
  return (
    <>
      <Heading as="h1" size="4xl" noOfLines={1}>
        Feather
      </Heading>
      <BagSectionsContainer />
    </>
  );
}

export default App;
