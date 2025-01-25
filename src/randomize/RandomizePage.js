import React, {useContext, useEffect, useReducer} from 'react';
import {DefaultViewModel} from '../base/DefaultPage';
import {build} from '../utils/ActionBuilder';
import Randomizer from './Randomizer';
import {load, save} from '../utils/SaveUtil';
import {Buffer} from 'buffer';

import Checkbox from './checkbox/Checkbox';

import './RandomizePage.css'

const BaseUrl = 'https://www.whattocompose.com';

// Actions - Clunky?
const RandomizeValues = 'randomize-values';
const UpdateCheckbox = 'update-checkbox';
const ShowPopup = 'show-popup';
const FadePopup = 'fade-popup';
const RestoreSavedState = 'restore-saved-state';

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
        [ShowPopup]: this.showPopup,
        [FadePopup]: this.fadePopup,
        [RestoreSavedState]: this.setupSharedState,
    }

    initialState() {
        const existingState = this.getState()

        if(existingState?.songForm === true) {
            return existingState
        } else {
            return {
                ...this.randomizeStateValues()
            }
        }
    }

    setupSharedState(oldState, payload) {
        const stateString = payload.shareString

        let newState = {
            ...oldState,
            copied: false,
            restored: false,
        }

        if(stateString) {
            let buffer = Buffer.from(stateString, "base64");
            let decodedShareString = buffer.toString("utf8");
            newState = {
                ...JSON.parse(decodedShareString),
                copied: false,
                restored: true,
            };
        }

        this.saveState(newState);
        return newState;
    }

    showPopup(oldState) {
        const newState = {
            ...oldState,
            copied: true,
        }

        this.saveState(newState)
        return newState
    }

    fadePopup(oldState) {
        const newState = {
            ...oldState,
            copied: false,
        }

        this.saveState(newState)
        return newState
    }

    randomizeStateValues(existingState) {
        const queryParams = new URLSearchParams(window.location.search)
        const share = queryParams.get("share")

        let state = {
            ...existingState
        }

        if(share && existingState?.restored === true) {
            window.location.href = BaseUrl;
        } else {
            const oldState = existingState ?? {}

            const songForm = this.randomizer.getSongForm()
            state = {
                songForm,
                themeForm: this.randomizer.getThemeForm(songForm),
                tempo: this.randomizer.getTempo(),
                meter: this.randomizer.getMeter(),
                key: this.randomizer.getKey(),
                extras: this.randomizer.getThemeExtras(),
                toneImage: this.randomizer.getSceneImage(),
                restoreDate: null,
                harmonic: oldState.harmonic !== undefined ? oldState.harmonic : true,
                melodic: oldState.melodic !== undefined ? oldState.melodic : true,
                advancedMeter: oldState.advancedMeter !== undefined ? oldState.advancedMeter : false,
                fullSong: oldState.fullSong !== undefined ? oldState.fullSong : false,
                copied: false,
                restored: false,
            }

            state.simple = this.randomizer.isSimpleMeter(state.meter) ? state.meter : this.randomizer.getSimpleMeter()
            this.saveState(state);
        }

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

// Display only UI, loading the VM and setting up a reducer with it
export default function RandomizeScreen(props) {
    const viewModel = useContext(RandomPageViewModelContext)

    const [state, dispatch] = useReducer(viewModel.reduce, null, viewModel.initialState.bind(viewModel))

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search)
        const share = queryParams.get("share")

        if(share) {
            dispatch(build(RestoreSavedState, {shareString: share}));
        }
    }, [])

    const onToggle = (label, isChecked) => {
        dispatch(build(UpdateCheckbox, {label, isChecked}))
    }

    const shareState = () => {
        const copyState = {
            ...state,
        }
        delete copyState.copied;
        delete copyState.restored;

        const shareState = JSON.stringify(copyState)
        const base64String = Buffer.from(shareState).toString('base64');
        const shareUrl = `${BaseUrl}?share=${base64String}`;

        navigator.clipboard.writeText(shareUrl).then(() => {
            setTimeout(() => {
                dispatch(build(FadePopup, {}))
            }, 5000);
        }).catch((err) => {
            console.log("Failed to copy: ", err);
            dispatch(build(FadePopup, {}))
        })

        dispatch(build(ShowPopup, {}))
    }

    let sections = '';

    if(state.fullSong) {
        const sectionA = "Section A: " + state.themeForm[0]
        const sectionB = state.themeForm.length > 1 ? " / Section B: " + state.themeForm[1] : "";

        sections = sectionA + sectionB;
    } else {
        sections = state.themeForm[0]
    }

    return (
        <div>
            <div className='checkbox-holder'>
                <Checkbox label={harmonic} isChecked={state.harmonic} onToggle={onToggle}/>
                <Checkbox label={melodic} isChecked={state.melodic} onToggle={onToggle}/>
                <Checkbox label={advancedMeter} isChecked={state.advancedMeter} onToggle={onToggle}/>
                <Checkbox label={fullSong} isChecked={state.fullSong} onToggle={onToggle}/>
                <button onClick={() => dispatch(build(RandomizeValues, {}))}>Generate</button>
            </div>
            <p>Compose a {state.fullSong ? "song" : "theme"} with:</p>
            <div className="song-content">
                <ul className="song-requirements">
                        {state.fullSong ? <li><span className="option-title">Song Form:</span>{state.songForm}</li> : null}
                        <li>
                            <span className="option-title">Phrase Form:</span>
                            <span>{sections}</span>
                        </li>
                        <li><span
                            className="option-title">Tempo:</span>~{state.tempo} in {state.advancedMeter ? state.meter : state.simple}
                        </li>
                        <li><span className="option-title">Music Key:</span>{state.key} </li>
                        {state.harmonic ?
                            <li>
                                <span className="option-title">Key Harmonic Element:</span>{state.extras.harmony}
                            </li> : null}
                        {state.melodic ?
                            <li>
                                <span className="option-title">Primary Interval:</span> {state.extras.interval}
                            </li>
                            : null }
                        {state.melodic && state.extras.secondaryInterval ?
                            <li>
                                <span className="option-title" key="secondary-interval">Secondary Interval:</span> {state.extras.secondaryInterval}
                            </li> : null
                        }
                        <li className="tone-image">
                            <span className="option-title">Tone Image:</span>
                            <a target="_blank"
                               rel="noreferrer"
                               href={state.toneImage}>
                                <img alt="Tone for Composition" src={state.toneImage} className='tone-image'/>
                            </a>
                        </li>
                </ul>
                <button className="share-button" onClick={shareState}>Share</button>
                <div className={"share-confirmed" + (state.copied ? "" : "hidden")}>
                    Saved to clipboard
                </div>
            </div>
        </div>
    )
}
