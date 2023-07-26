import React from 'react'
import { createRoot } from 'react-dom/client'

const CounterDisplay = ({ count }) => {
    return <p>{count}</p>
}

const IncreaseButton = ({ increase }) => {
    return (
        <div>
            <button onClick={increase}>+ increase</button>
        </div>
    )
}

class CounterApp extends React.Component {
    constructor(props) {
        super(props)

        // inisialisasi nilai count di dalam state
        this.state = {
            count: 0,
        }
    }

    onIncreaseEventHandler() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            }
        })
    }

    onResetEventHandler() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <p>TODO: selesaikan komponennya!</p>
            </div>
        )
    }
}

const root = createRoot(document.getElementById('root'))
root.render(<CounterApp />)
