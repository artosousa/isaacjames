import Navigation from '../components/navigation';
import React from 'react';
import {Flex, Image} from '@chakra-ui/core';
import {Helmet} from 'react-helmet';
import {graphql, useStaticQuery} from 'gatsby';

export default function Index() {
  const data = useStaticQuery(
    graphql`
      {
        contentfulHome {
          heroImage {
            file {
              url
            }
            id
            title
          }
        }
      }
    `
  );
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Isaac James W</title>
        <meta name="description" content="Ontario Canada based artist." />
      </Helmet>
      <Flex
        p="25vh 0 0 0"
        align="start"
        justify="center"
        w={['100%', '100%', '70%', '70%']}
        mx="auto"
        direction={['column', 'column', 'row', 'row']}
      >
        <Navigation />

        <Flex w={['100%', '100%', '70%']} direction="column">
          <Image
            w="100%"
            src={data.contentfulHome.heroImage.file.url}
            alt={data.contentfulHome.heroImage.title}
          />
        </Flex>
      </Flex>
    </>
  );
}
