import { useState } from 'react'

export default function PlanetForm({ weight, setWeight, planet, setPlanet }) {
    return (
        <form id="form">
            <label>
                Weight:
                <input
                    value={weight}
                    type="number"
                    onChange={e => setWeight(e.target.value)}
                />

            </label>

            <label>
                Planet:
                <select>
                    <option value="Earth">Earth</option>
                    <option value="Mars">Mars</option>
                    <option value="Venus">Venus</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}