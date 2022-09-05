import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box, Flex, Text, Tag, Spacer, Icon, Heading, Link, Spinner } from '@chakra-ui/react';
import { SiWikipedia, SiYoutube } from "react-icons/si";
import { BiNews } from "react-icons/bi";
import * as API from '../services/launches';

export function LaunchDetails(props) {
  const { launchId } = useParams();

  const [launchDetails, setLaunchDetails] = useState({});

  useEffect(() => {
    API.getLaunchByFlyNumber(launchId).then(setLaunchDetails).catch(console.error);
  }, [launchId]);

  return (
    <>
      <Heading as="h1" size="xl" align='center' margin={4}>
        Launch Details
      </Heading>
      <Box bg="gray.100" padding={4} margin={4} borderRadius="lg">
        {!launchDetails
          ? (
            <Box align='center'>
              <Spinner size="lg" />
            </Box>

          )
          : (
            <>
              <Flex>
                <Text fontSize="2xl">
                  Mission <strong>{launchDetails.mission_name}</strong> ({launchDetails.launch_year})
                </Text>
                <Spacer />
                <Tag padding={2} colorScheme={launchDetails.launch_success ? 'green' : 'red'}>
                  {launchDetails.launch_success ? 'Success' : 'Failure'}
                </Tag>
              </Flex>
              <Box>
                <Text><strong>Rocket name:</strong> {launchDetails.rocket?.rocket_name}</Text>
                <Text><strong>Launch site:</strong> {launchDetails.launch_site?.site_name_long}</Text>
                <Heading as="h3" size="xs" marginTop={3}>Links</Heading>
                <Box marginTop={2} marginLeft={3}>
                  <Link href={launchDetails.links?.wikipedia} isExternal>
                    <Icon as={SiWikipedia} color="gray.500" />
                  </Link>
                  <Link href={launchDetails.links?.video_link} isExternal>
                    <Icon marginLeft={2} as={SiYoutube} color="gray.500" />
                  </Link>
                  <Link href={launchDetails.links?.article_link} isExternal>
                    <Icon marginLeft={2} as={BiNews} color="gray.500" />
                  </Link>
                </Box>
              </Box>
            </>
          )}
      </Box>
    </>
  )
}