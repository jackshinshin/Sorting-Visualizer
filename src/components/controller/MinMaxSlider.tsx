import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Tooltip } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useTypedSelector } from '../../hooks/typed-store-hooks';

type minMaxSliderProp = {
    setFormState: (obj: { min: number; max: number }) => void
}
const MinMaxSlider = ({ setFormState }: minMaxSliderProp) => {
    const formState = useTypedSelector(state => state.sortingStateReducer.controllable);
    // console.log(formState);

    return (
        <RangeSlider
            aria-label={['min', 'max']}
            defaultValue={[0, 10]}
            min={0}
            max={200}
            minStepsBetweenThumbs={formState.size}
            onChangeEnd={v => setFormState({ min: v[0], max: v[1] })}>
            <RangeSliderTrack>
                <RangeSliderFilledTrack />
            </RangeSliderTrack>

            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
        </RangeSlider>
    )
}

export default MinMaxSlider