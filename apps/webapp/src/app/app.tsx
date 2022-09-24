// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Heading } from '@chakra-ui/layout';
import { BagSectionContainer } from '../modules/bag-section/interface/bag-section.container';

export function App() {
  return (
    <>
      <Heading as="h1" size="4xl" noOfLines={1}>
        Feather
      </Heading>
      <BagSectionContainer />
    </>
  );
}

export default App;
