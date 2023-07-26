import React from 'react'
import { createRoot } from 'react-dom/client'

class CounterApp extends React.Component {
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
