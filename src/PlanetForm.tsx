import { useState } 

export default function PlanetForm() {
    const [weight, setWeight] = useState(0);

    return (
        <section id="form">
            Weight: 
            <input
                value={weight}
                type="number"
            >
            </input>
        </section>
    )
}