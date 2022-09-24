import { useParams } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import {
  AspectRatio, Box, Button, Flex, Heading, Icon, Link, List, ListIcon, ListItem, Spacer, Spinner, Tag, Text
} from '@chakra-ui/react';
import { SiWikipedia } from 'react-icons/si';
import { BiArrowBack, BiNews } from 'react-icons/bi';
import { IoAirplaneSharp, IoLocationSharp, IoRocketSharp } from 'react-icons/io5';
import { format } from 'date-fns';
import { CrewModal } from './CrewModal';
import * as API from '../services/launches';

export function LaunchDetails() {
  const { launchId } = useParams();

  const [launchDetails, setLaunchDetails] = useState({});
  const [launchpad, setLaunchpad] = useState({});
  const [rocket, setRocket] = useState({});

  useEffect(() => {
    API.getLaunchById(launchId).then(setLaunchDetails).catch(console.error);
  }, [launchId]);

  useEffect(() => {
    if (launchDetails.launchpad) {
      API.getLaunchpadById(launchDetails.launchpad).then(setLaunchpad).catch(console.error);
    }
    if (launchDetails.rocket) {
      API.getRocketById(launchDetails.rocket).then(setRocket).catch(console.error);
    }
  }, [launchDetails]);

  return (
    <Box align="center" maxWidth="1024px" margin="auto">
      <Heading as="h1" size="xl" align="center" margin={4}>
        Launch Details
      </Heading>
      <Box bg="gray.100" padding={4} margin={4} borderRadius="lg">
        {
          Object.keys(launchDetails).length === 0
            || Object.keys(launchpad).length === 0
            || Object.keys(rocket).length === 0
            ? (
              <Box align="center">
                <Spinner size="lg" />
              </Box>
            )
            : (
              <>
                <Flex>
                  <Text fontSize={['l', 'l', '2xl']} textAlign={['left', 'left', 'center']}>
                    Mission <strong>{launchDetails.name}</strong>{' '}
                    ({launchDetails.date_local && format(new Date(launchDetails.date_local), 'dd-MM-yyyy')})
                  </Text>
                  <Spacer />
                  <Tag padding={2} colorScheme={launchDetails.success ? 'green' : 'red'}>
                    {launchDetails.success ? 'Success' : 'Failure'}
                  </Tag>
                </Flex>
                <Box textAlign="left" marginTop={5}>
                  <List>
                    <ListItem>
                      <ListIcon as={IoAirplaneSharp} />
                      <strong>Flight number:</strong> {launchDetails.flight_number}
                    </ListItem>
                    <ListItem>
                      <ListIcon as={IoLocationSharp} />
                      <strong>Launchpad:</strong> {launchpad.full_name}
                    </ListItem>
                    <ListItem>
                      <ListIcon as={IoRocketSharp} />
                      <strong>Rocket:</strong> {rocket.name} - {rocket.company} ({rocket.country})
                    </ListItem>
                  </List>
                  <CrewModal {...launchDetails} />
                  <Heading as="h3" size="xs" marginTop={3}>Links</Heading>
                  <Box marginTop={2} marginLeft={3}>
                    <Link href={launchDetails.links?.wikipedia} isExternal>
                      <Icon as={SiWikipedia} color="gray.500" />
                    </Link>
                    <Link href={launchDetails.links?.article} isExternal>
                      <Icon marginLeft={2} as={BiNews} color="gray.500" />
                    </Link>
                  </Box>
                </Box>
                <Box padding={7} maxWidth="700px" margin="auto">
                  <AspectRatio>
                    <iframe
                      src={`https://www.youtube.com/embed/${launchDetails.links?.youtube_id}`}
                      title="YouTube video"
                    />
                  </AspectRatio>
                </Box>
                <Link href="/" _hover={{ textDecoration: 'none' }}>
                  <Button size={['xs', 'xs', 'sm']} leftIcon={<BiArrowBack />} colorScheme="blackAlpha">
                    Go back
                  </Button>
                </Link>
              </>
            )
        }
      </Box>
    </Box>
  );
}
