import React from 'react'
import { Box } from '@chakra-ui/react'
import { useTypedSelector } from './hooks/typed-store-hooks';

type visualizerProps = {
    arr: number[];
    colorCode: number[]
}
const Visualizer = ({ arr, colorCode }: visualizerProps) => {
    const formState = useTypedSelector(state => state.sortingStateReducer.controllable);
    const barColor = (color: number, colorVariant: string): string => {
        let currentColor = '';
        switch (color) {
            // untouched element
            case 0:
                currentColor = `purple.${colorVariant}`;
                break;
            // comparing elements 
            case 1:
                currentColor = `yellow.${colorVariant}`;
                break;
            // finished elements
            case 2:
                currentColor = `green.${colorVariant}`;
                break;
        }
        return currentColor;
    }
    return (
        <Box
            rounded={'lg'}
            display='grid'
            gridAutoFlow={'column'}
            gridAutoColumns='auto'
            bg='gray.100'
            minH={'full'}
            w='100vw'
            px={2}
        >
            {arr.map((d: number, index: number) => {
                return (
                    <Box
                        key={index}
                        display='flex'
                        justifyContent='flex-end'
                        textAlign='center'
                        flexDir='column'
                    >
                        <Box
                            maxWidth={`${100 / arr.length}%`}
                            roundedTop={'sm'}
                            border='1px'
                            borderColor={barColor(colorCode[index], '200')}
                            bg={barColor(colorCode[index], '300')}
                            h={`${d / (formState.selectedMax - formState.selectedMin) * 100}%`} />
                    </Box>
                );
            })}
        </Box >
    );
};

export default Visualizer;