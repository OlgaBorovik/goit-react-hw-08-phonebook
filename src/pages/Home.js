import { Heading, Flex} from "@chakra-ui/react";
import {Icon} from '@chakra-ui/icon'
import {BsBook} from 'react-icons/bs'


// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

export default function Home() {
  return (
    <Flex direction={'column'} >
      <Heading as='h1' textAlign={'center'} mt='64px'>
        Phonebook
      </Heading>
      <Icon as={BsBook} boxSize={16} mr='auto' ml="auto" mt="24px"/>
    </Flex>
  );
}