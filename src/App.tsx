import React, { useCallback } from 'react';
import './App.css';
import Button from './Components/Button';
import Count from './Components/Count';
import SubTitle from './Components/SubTitle';
import Title from './Components/Title';
import { useState } from 'react';

function App() {
    const [countA, setCountA] = useState<number>(0);
    const [countB, setCountB] = useState<number>(0);

    //React.memoの中では、違う関数だと認識される

    //useCallbackでメモ化
    const handleCountUpA = useCallback(() => {
        // setCountA(countA + 1);
        setCountA((prevCount) => prevCount + 1);
        // }, [countA]);
    }, []);

    const handleCountUpB = useCallback(() => {
        setCountB((prevCount) => prevCount + 1);
    }, []);

    console.log('---------------');

    return (
        <div
            style={{
                textAlign: 'center',
                marginTop: 32,
            }}
            className="App"
        >
            <Title titleText={'useCallback'} />
            <SubTitle subTitleText={'A者？or B者？'} />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                <div
                    style={{
                        marginRight: 16,
                    }}
                >
                    <Count countTitle={'A者'} count={countA} />
                    <Button buttonText={'A者でOK'} onClick={handleCountUpA} />
                </div>
                <div>
                    <Count countTitle={'B者'} count={countB} />
                    <Button buttonText={'B者でOK'} onClick={handleCountUpB} />
                </div>
            </div>
        </div>
    );
}

export default App;
