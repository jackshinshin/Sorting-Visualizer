import React, { useState } from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Tooltip } from '@chakra-ui/react';
import MinMaxSlider from './MinMaxSlider';
import { useTypedDispatch, useTypedSelector } from '../../hooks/typed-store-hooks';
import { sortingStateActions } from '../../store/sorting-slice';
import { FiShuffle, FiPlay } from 'react-icons/fi';

type sideBarProps = {
    generateArr: () => void;
    sort: () => void;
}
const SideBar = ({ generateArr, sort }: sideBarProps) => {
    const formState = useTypedSelector((state) => state.sortingStateReducer.controllable);
    const [sizeValue, setSizeValue] = useState(formState.size);
    const [showSize, setShowSize] = useState(false);
    const dispatch = useTypedDispatch();

    return (
        <Box
            minW='xs'
            bg='gray.100'
            p={'4'}
            borderRadius='lg'
            overflow='hidden'
            color='black'
        >
            <FormControl>
                <FormLabel htmlFor='size'>
                    {`Array Size: (${formState.size})`}
                </FormLabel>
                <Slider
                    onChangeEnd={(v) => dispatch(sortingStateActions.updateSize(v))}
                    aria-label={'10'}
                    min={10}
                    max={200}
                    defaultValue={10}
                    onChange={(v) => setSizeValue(v)}
                    onMouseEnter={() => setShowSize(true)}
                    onMouseLeave={() => setShowSize(false)}
                >
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <Tooltip
                        hasArrow
                        placement='top'
                        isOpen={showSize}
                        label={sizeValue}>
                        <SliderThumb />
                    </Tooltip>
                </Slider>
                <MinMaxSlider setFormState={(v: { min: number, max: number }) => dispatch(sortingStateActions.updateMinMax(v))} />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='algorithm'>Algorithm</FormLabel>
                <Select
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => dispatch(sortingStateActions.updateAlgo(e.target.value))}
                    bg={'white'}
                    id='algorithm'
                    variant={'outline'}>
                    <option value="bubble">Bubble</option>
                    <option value="selection">Selection</option>
                    <option value="Insertion">Insertion</option>
                </Select>
            </FormControl>
            <Flex gap={'3'} mt={'5'}>
                <Button
                    onClick={generateArr}
                    colorScheme='purple'
                >
                    <FiShuffle />
                </Button>
                <Button
                    onClick={sort}
                    colorScheme='purple'
                    variant='outline'>
                    <FiPlay />
                </Button>
            </Flex>
        </Box>
    )
}

export default SideBar;