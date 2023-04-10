import { Flex, Text } from '@chakra-ui/layout';
import { HiOutlineTrash } from 'react-icons/hi';
import { RxCopy } from 'react-icons/rx';
import React from 'react';

type Props = {
  text: string;
  onDelete?: Function;
  onCopy?: () => void;
}

export const TextItem = ({ text, onDelete, onCopy }: Props) => {
  return (
    <Flex width="full" textColor="#555555" transition="all" transitionDuration="400ms" _hover={{ shadow: "lg", bg: "#fafafa" }} py={2} px={2} borderRadius={8} my={2} bg="#fff" flexDirection="row" justifyContent="space-between" alignItems="center">
      <Text>{text}</Text>

      <Flex flexDirection="row" gap={4}>
        <button onClick={onCopy}>
          <RxCopy size={18} cursor="pointer" />
        </button>
        <HiOutlineTrash size={18} color='#f79090' cursor="pointer" />
      </Flex>
    </Flex>
  )
}
