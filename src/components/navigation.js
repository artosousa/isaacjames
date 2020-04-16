import React from 'react';
import {Box, Flex, Link, List, ListItem, Text} from '@chakra-ui/core';

class Navigation extends React.Component {
  render() {
    return (
      <>
        <Flex
          w={['100%', '100%', '25%', '25%']}
          borderBottom={['1px solid #f1f1f1', '1px solid #f1f1f1', 'none']}
          marginBottom={['25px', '25px', '0']}
        >
          <Box p="0 35px 0 0" textAlign={['left', 'left', 'right']} w="100%">
            <Text
              as="h2"
              fontFamily="sans-serif"
              w="100%"
              lineHeight="29px"
              m="0px"
            >
              <Link href="/" color="black">
                Isaac Watamaniuk
              </Link>
            </Text>
            <Text
              m="-5px 0 0 0"
              as="h5"
              fontFamily="sans-serif"
              fontWeight="lighter"
              color="grey"
            >
              Ontario, Canada
            </Text>
            <List fontFamily="sans-serif" paddingX="0" marginX="0">
              <ListItem m="5px 0 0 0">
                <Link color="gray" href="/exhibits">
                  exhibits
                </Link>
              </ListItem>
              <ListItem m="5px 0 0 0">
                <Link color="gray" href="/cv">
                  cv
                </Link>
              </ListItem>
              <ListItem m="5px 0 0 0">
                <Link color="gray" href="/contact">
                  contact
                </Link>
              </ListItem>
              <ListItem m="5px 0 0 0">
                <Link
                  target="_blank"
                  color="gray"
                  href="https://isaacjamesw.bigcartel.com/"
                  title="Shop Art"
                >
                  shop
                </Link>
              </ListItem>
            </List>
          </Box>
        </Flex>
      </>
    );
  }
}

export default Navigation;
