import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react'

import SideBar from './components/controller/SideBar';
import useGenerate from './hooks/useGenerate';
import { useTypedSelector } from './hooks/typed-store-hooks';
import Visualizer from './Visualizer';
import { useSort } from './hooks/sortings-hooks';

const App = () => {
    const [generating, setGenerating] = useState(false);
    const [sorting, setSorting] = useState(false);
    const formState = useTypedSelector((state) => state.sortingStateReducer.controllable);
    const { sort, arr, generateArr, colorCode } = useSort(formState, 600);
    return (
        <Box p='4'>
            <Flex gap='4'>
                <SideBar
                    generateArr={generateArr}
                    sort={sort}
                />
                <Visualizer arr={arr} colorCode={colorCode} />
            </Flex>
        </Box>
    )
};

export default App;