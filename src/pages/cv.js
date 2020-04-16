import Navigation from '../components/navigation';
import React from 'react';
import {Flex, Link, Text} from '@chakra-ui/core';
import {graphql, useStaticQuery} from 'gatsby';

export default function Cv() {
  const data = useStaticQuery(
    graphql`
      {
        contentfulCv {
          cvFile {
            file {
              url
            }
            title
          }
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
        <Flex w={['100%', '100%', '70%']} direction="column">
          <Text as="h2" fontFamily="sans-serif" m="0 0 15px 0" p="0">
            Curriculum Vitae
          </Text>
          <Link
            target="_blank"
            fontFamily="sans-serif"
            color="gray"
            href={data.contentfulCv.cvFile.file.url}
            title={data.contentfulCv.cvFile.title}
          >
            Isaac Watamaniuk curriculum vitae download
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
