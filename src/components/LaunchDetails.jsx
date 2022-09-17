import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box, Flex, Text, Tag, Spacer, Icon, Heading, Link, Spinner } from '@chakra-ui/react';
import { SiWikipedia, SiYoutube } from "react-icons/si";
import { BiNews } from "react-icons/bi";
import { format } from 'date-fns';
import * as API from '../services/launches';

export function LaunchDetails() {
  const { launchId } = useParams();

  const [launchDetails, setLaunchDetails] = useState({});
  const [launchpad, setLaunchpad] = useState({});

  useEffect(() => {
    API.getLaunchById(launchId).then(setLaunchDetails).catch(console.error);
  }, [launchId]);

  useEffect(() => {
    if (launchDetails.launchpad) {
      API.getLaunchpadById(launchDetails.launchpad).then(setLaunchpad).catch(console.error);
    }
  }, [launchDetails])

  return (
    <>
      <Heading as="h1" size="xl" align='center' margin={4}>
        Launch Details
      </Heading>
      <Box bg="gray.100" padding={4} margin={4} borderRadius="lg">
        {
          Object.keys(launchDetails).length === 0 || Object.keys(launchpad).length === 0
            ? (
              <Box align='center'>
                <Spinner size="lg" />
              </Box>
            )
            : (
              <>
                <Flex>
                  <Text fontSize="2xl">
                    Mission <strong>{launchDetails.name}</strong> ({launchDetails.date_local && format(new Date(launchDetails.date_local), 'dd-MM-yyyy')})
                  </Text>
                  <Spacer />
                  <Tag padding={2} colorScheme={launchDetails.success ? 'green' : 'red'}>
                    {launchDetails.success ? 'Success' : 'Failure'}
                  </Tag>
                </Flex>
                <Box>
                  <Text><strong>Flight number:</strong> {launchDetails.flight_number}</Text>
                  <Text><strong>Launchpad:</strong> {launchpad.full_name}</Text>
                  <Heading as="h3" size="xs" marginTop={3}>Links</Heading>
                  <Box marginTop={2} marginLeft={3}>
                    <Link href={launchDetails.links?.wikipedia} isExternal>
                      <Icon as={SiWikipedia} color="gray.500" />
                    </Link>
                    <Link href={launchDetails.links?.webcast} isExternal>
                      <Icon marginLeft={2} as={SiYoutube} color="gray.500" />
                    </Link>
                    <Link href={launchDetails.links?.article} isExternal>
                      <Icon marginLeft={2} as={BiNews} color="gray.500" />
                    </Link>
                  </Box>
                </Box>
              </>
            )
        }
      </Box>
    </>
  )
}