import { useState } from 'react'

export default function PlanetForm({ weight, setWeight }) {
    

    function calcResult() {

    }
    return (
        <section id="form">
            Weight: 
            <input
                value={weight}
                type="number"
                onChange={e => setWeight(e.target.value)}
            />
            
        </section>
    )
}