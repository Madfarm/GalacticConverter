import { useState } from 'react'

export default function PlanetForm({ weight, setWeight, planet, setPlanet, setResult }) {
    function handleSubmit(e) {
        e.preventDefault();

        switch(planet) {
            case "Earth":
                setResult(weight);
                break;
            case "Mars":
                setResult(weight * .38);
                break;
            case "Mercury":
                setResult(weight * .38);
                break;
            case "Venus":
                setResult(weight * .91);
                break;
            case "Jupiter":
                setResult(weight * 2.34);
                break;
            case "Saturn":
                setResult(weight * 1.06);
                break;
            case "Uranus":
                setResult(weight * .92);
                break;
            case "Neptune":
                setResult(weight * 1.19);
                break;
            default:
                setResult(weight);
        }
    }

    function planetChange(e) {
        setPlanet(e.target.value);
        setResult(null);
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
                <select value={planet} onChange={e => planetChange(e)}>
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