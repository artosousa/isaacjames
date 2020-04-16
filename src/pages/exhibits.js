import Navigation from '../components/navigation';
import React from 'react';
import {Flex, List, ListItem, Text} from '@chakra-ui/core';
import {Helmet} from 'react-helmet';
import {graphql, useStaticQuery} from 'gatsby';

export default function Exhibits() {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulExhibits {
          nodes {
            dateStart(formatString: "dddd MMMM DD YYYY")
            dateEnd(formatString: "dddd MMMM DD YYYY")
            exhibitTitle
            id

            exhibitHost
            location {
              internal {
                content
              }
            }
            aboutExhibit {
              internal {
                content
              }
            }
          }
        }
      }
    `
  );
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Exhibits - Isaac James W</title>
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
          <Text as="h2" fontFamily="sans-serif" m="0 0 15px 0" p="0">
            Exhibits
          </Text>
          <List w="100%" m="0" p="0">
            {data.allContentfulExhibits.nodes.map(node => (
              <ListItem
                key={node.id}
                borderBottom="1px solid #f1f1f1"
                m="0px 0px 15px 0px"
              >
                <Text as="h3" fontFamily="sans-serif" color="#333" p="0" m="0">
                  {node.exhibitTitle}
                </Text>
                <Text
                  m="0"
                  as="h5"
                  fontFamily="sans-serif"
                  fontWeight="lighter"
                  color="grey"
                >
                  <strong>beginning date: </strong>
                  {node.dateStart}
                  <strong> end date:</strong>
                  {node.dateEnd}
                </Text>
                <Text fontFamily="sans-serif">{node.exhibitHost}</Text>
                <Text
                  fm="0"
                  as="h5"
                  fontFamily="sans-serif"
                  fontWeight="lighter"
                  color="grey"
                  m="-15px 0 0 0"
                >
                  {node.location.internal.content}
                </Text>
                <Text fontFamily="sans-serif">
                  {node.aboutExhibit.internal.content}
                </Text>
              </ListItem>
            ))}
          </List>
        </Flex>
      </Flex>
    </>
  );
}
