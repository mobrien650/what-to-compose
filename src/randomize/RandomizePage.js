import React, { useReducer, useContext } from 'react';
import { DefaultViewModel } from '../base/DefaultPage';
import { build } from '../utils/ActionBuilder';
import Randomizer from './Randomizer';
import { save, load } from '../utils/SaveUtil';

import Checkbox from './checkbox/Checkbox';

import './RandomizePage.css'

// TODO: 
//  - Better interval elements in array
//  - Syncopation element (1st beat, 3rd beat, down beat, anticipations, suspensions)

// Actions - Clunky?
const RandomizeValues = 'randomize-values';
const UpdateCheckbox = 'update-checkbox';

// Label Names - To Strings Const File
const harmonic = "Harmonic Requirement"
const melodic = "Melodic Requirement"
const advancedMeter = "Allow Advanced Meters"
const fullSong = "Full Song"

// View Model / Reducer for Screen State
class RandomizeScreenViewModel extends DefaultViewModel {
    randomizer = new Randomizer();

    actionMappings = {
        [RandomizeValues]: this.randomizeStateValues,
        [UpdateCheckbox]: this.updateCheckbox,
    }

    initialState() {
        const existingState = this.getState()

        if(existingState && existingState.songForm) {
            return existingState
        } else {
            return { 
                ...this.randomizeStateValues()             
            }
        }
    }

    randomizeStateValues(existingState) {
        const oldState = existingState ? existingState : {}

        const songForm = this.randomizer.getSongForm()
        const state = {
            songForm,
            themeForm: this.randomizer.getThemeForm(songForm),
            tempo: this.randomizer.getTempo(),
            meter: this.randomizer.getMeter(),
            key: this.randomizer.getKey(),
            extras: this.randomizer.getThemeExtras(),
            toneImage: this.randomizer.getSceneImage(),
            restoreDate: null,
            harmonic: oldState.harmonic !== undefined  ? oldState.harmonic : true,
            melodic: oldState.melodic !== undefined  ? oldState.melodic : true,
            advancedMeter: oldState.advancedMeter !== undefined ? oldState.advancedMeter : false,
            fullSong: oldState.fullSong !== undefined ? oldState.fullSong : false,
        }

        state.simple = this.randomizer.isSimpleMeter(state.meter) ? state.meter : this.randomizer.getSimpleMeter()

        this.saveState(state);
        return state
    }

    updateCheckbox(oldState, payload) {
        let newState = oldState
        
        switch(payload.label) {
            case harmonic:
                newState = {
                    ...oldState,
                    harmonic: payload.isChecked
                }
                break;
            case melodic:
                newState = {
                    ...oldState,
                    melodic: payload.isChecked
                }
                break;
            case advancedMeter:
                newState = {
                    ...oldState,
                    advancedMeter: payload.isChecked
                }
                break;
            case fullSong:
                newState = {
                    ...oldState,
                    fullSong: payload.isChecked
                }
                break;
            default:
                break;
        }

        this.saveState(newState)
        return newState
    }

    saveState(state) {
        const newState = { 
            ...state,
            restoreDate: new Date(),
        }
        save('state', newState)
    }

    getState() {
        return load('state')
    }
}

// Context to use the VM on the screen
const RandomPageViewModelContext = React.createContext(new RandomizeScreenViewModel());

// Display only UI, loading the VM and setuping a reducer with it
export default function RandomizeScreen(props) {
    const viewModel = useContext(RandomPageViewModelContext)
    const [state, dispatch] = useReducer(viewModel.reduce, viewModel.initialState())

    const onToggle = (label, isChecked) => {
        dispatch(build(UpdateCheckbox, {label, isChecked}))
    }

    return (
        <>
            <div>
                <div className='checkbox-holder'>
                    <Checkbox label={harmonic} isChecked={state.harmonic} onToggle={onToggle} />
                    <Checkbox label={melodic} isChecked={state.melodic} onToggle={onToggle}/>
                    <Checkbox label={advancedMeter} isChecked={state.advancedMeter} onToggle={onToggle}/>
                    <Checkbox label={fullSong} isChecked={state.fullSong} onToggle={onToggle}/>
                    <button onClick={() => dispatch(build(RandomizeValues))}>Generate</button>
                </div>
                {/* {state.restoreDate != null ? <p>Restore data from {state.restoreDate.split("T")[0]}</p> : null} */}
                <p>Compose a {state.fullSong ? "song" : "theme"} with:</p>
                <ul className="song-requirements">
                    {state.fullSong ? <li><span className="option-title">Song Form:</span>{state.songForm}</li> : null }
                    <li>
                        <span className="option-title">Phrase Form:</span>
                        { state.fullSong ? <ul>
                            <li>{state.fullSong ? "Section A:" : null} {state.themeForm[0]}</li>
                            {state.fullSong && state.themeForm.length > 1 ? <li>Section B: {state.themeForm[1]}</li> : null}
                        </ul> : ` ${state.themeForm[0]} ` }
                    </li>
                    <li><span className="option-title">Tempo:</span>~{state.tempo} in {state.advancedMeter ? state.meter : state.simple} </li>
                    <li><span className="option-title">Music Key:</span>{state.key} </li>
                    {state.harmonic ? <li><span className="option-title">Key Harmonic Element:</span>{state.extras.harmony} </li> : null }
                    {state.melodic ? <li> { getIntervalsSection(state.extras) }</li> : null }
                    <li className="tone-image"><span className="option-title">Tone Image:</span><a target="_blank" rel="noreferrer" href={state.toneImage}><img alt="Tone for Composition" src={state.toneImage} className='tone-image' /></a> </li>
                </ul>
            </div>
        </>
    )
}

function getIntervalsSection(extras) {
    const sections = []
    sections.push(
        <> 
            <span className="option-title">Primary Interval:</span> {extras.interval}
        </>
    )

    if(extras.secondaryInterval) {
        sections.push(
            <> 
                <br/>
                <span className="option-title">Secondary Interval:</span> {extras.secondaryInterval}
            </>
        ) 
    }

    return sections
}