import React from 'react';
import { Link } from 'react-router-dom'
import { styled } from '@stitches/react';
import { purple } from '@radix-ui/colors';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: purple.purple5,
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
});

export const Separator = StyledSeparator;
const Box = styled('div', {});
const Flex = styled('div', { display: 'flex' });
const Text = styled('div', {
  fontFamily: 'Cinzel',
  fontWeight: '500',
  lineHeight: '20px',
});

export const LoggedOutNavBar = () => (
  <Box className='text-purple-50 w-full sm:max-w-[400px] '>
    <Text>Login System</Text>
    <Separator />
    <Flex css={{ height: 20, alignItems: 'center' }}>
      <Text className='m-2 z-50 transition-all hover:text-purple-400 hover:border-b-2 hover:border-purple-50 text-[10px] sm:text-[12px]'>
        <Link to='/'> Home </Link> 
      </Text>
      <Separator decorative orientation="vertical" />
      <Text className='m-2 z-50 transition-all hover:text-purple-400 hover:border-b-2 hover:border-purple-50 text-[10px] sm:text-[12px]'>
        <Link to='/about'> About </Link>
      </Text>
      <Separator decorative orientation="vertical"  />
      <Text className='m-2 z-50 transition-all hover:text-purple-400 hover:border-b-2 hover:border-purple-50 text-[10px] sm:text-[12px]'>
      <Link to='/contact'> Contact </Link>
      </Text>
      <Separator decorative orientation="vertical"  />
      <Text className='m-2 z-50 transition-all hover:text-purple-400 hover:border-b-2 hover:border-purple-50 text-[10px] sm:text-[12px]'>
      <Link to='/createaccount'> Create Account </Link>
      </Text>
    </Flex>
  </Box>
);

