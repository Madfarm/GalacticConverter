import { useState } from 'react'

export default function PlanetForm({ weight, setWeight, planet, setPlanet, setResult }) {
    function handleSubmit(e) {
        e.preventDefault();

        switch(planet) {
            case "Earth":
                setResult(weight);
        }
    }


    return (
        <form id="form" onSubmit={handleSubmit}>
            <label>
                Weight in pounds:
                <input
                    value={weight}
                    type="number"
                    onChange={e => setWeight(e.target.value)}
                />

            </label>

            <label>
                Planet:
                <select value={planet} onChange={e => setPlanet(e.target.value)}>
                    <option value="Earth">Earth</option>
                    <option value="Mars">Mars</option>
                    <option value="Venus">Venus</option>
                    <option value="Mercury">Mercury</option>
                    <option value="Saturn">Saturn</option>
                    <option value="Jupiter">Jupiter</option>
                    <option value="Neptune">Neptune</option>
                    <option value="Uranus">Uranus</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}