import Navigation from '../components/navigation';
import React from 'react';
import {Flex, Image, Link, Text} from '@chakra-ui/core';
import {graphql, useStaticQuery} from 'gatsby';

export default function Contact() {
  const data = useStaticQuery(
    graphql`
      {
        contentfulContact {
          contactImage {
            file {
              url
            }
          }
          email
          instagram
        }
      }
    `
  );
  return (
    <>
      <Flex
        p="25vh 0 0 0"
        align="start"
        justify="center"
        w={['100%', '100%', '70%', '70%']}
        mx="auto"
        direction={['column', 'column', 'row', 'row']}
      >
        <Navigation />

        <Flex w={['100%', '100%', '20%']} direction="column">
          <Text as="h2" fontFamily="sans-serif" m="0 0 15px 0" p="0">
            Contact
          </Text>
          <Link
            target="_blank"
            fontFamily="sans-serif"
            color="gray"
            href={`mailto:${data.contentfulContact.email}`}
            title="contact Isaac"
          >
            {data.contentfulContact.email}
          </Link>
          <Link
            target="_blank"
            fontFamily="sans-serif"
            color="gray"
            href={`https://instagram.com/${data.contentfulContact.instagram}`}
            title="contact Isaac"
          >
            @{data.contentfulContact.instagram}
          </Link>
        </Flex>
        <Flex w={['100%', '100%', '50%']} direction="column">
          <Image
            w="100%"
            src={data.contentfulContact.contactImage.file.url}
            alt="contact"
          />
        </Flex>
      </Flex>
    </>
  );
}
