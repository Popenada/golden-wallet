// Any component using useState or useEffect needs use client
"use client";

import { useState } from "react";
import useCardStore from "@/app/store/useCardStore";
import { RewardRates } from "@/app/types";

const initialRates: RewardRates = {
    dining: 0,
    groceries: 0,
    travel: 0,
    entertainment: 0,
    gas: 0,
    other: 0,
}

const categories: (keyof RewardRates)[] = [
  "dining",
  "groceries",
  "travel",
  "gas",
  "entertainment",
  "other",
];

// Use useCardStore import to add and remove cards from component
export default function CardManager() {
    const { cards, addCard, removeCard } = useCardStore();

    // Define different useStates for the component variables to hold
    const [name, setName] = useState("");
    const [issuer, setIssuer] = useState("")
    const [rates, setRates] = useState<RewardRates>(initialRates)

    function handleRateChange(category: keyof RewardRates, value: string){
        // Parse string value to float
        const parsedVal = parseFloat(value) || 0
        // Set current rates to existing dictionary and updating user category rate
        setRates((rates) => ({
            ...rates, [category]: parsedVal
        }));
    }
    
    // Handle add card function that validates name is not empty string
    // Call addCard that expects an object with name, issuer, and rates
    // Reset the form to initial values so form clears
    function handleAddCard(event: React.FormEvent) {
        // Prevent form refresh upon page submit
        event.preventDefault()
        if (!name.trim()) return
        addCard({name, issuer, rates});

        setName("");
        setIssuer("");
        setRates(initialRates);
    } 
    return (
    <section className="flex w-full max-w-2xl flex-col gap-5">
        <form onSubmit={handleAddCard} className="flex flex-col gap-4">
            <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Card name"
                className="rounded border px-3 py-2"
            />
            <input
                value={issuer} 
                onChange={(event) => setIssuer(event.target.value)}
                placeholder="Issuer"
                className="rounded border px-3 py-2"
            />
            <div className="grid grid-cols-2 gap-3">
            {categories.map((category) => (
            <label key={category} className="flex flex-col gap-1">
              <span className="capitalize">{category}</span>
                <input
                    type="number"
                    value={rates[category]}
                    onChange={(event) => handleRateChange(category, event.target.value)}
                    className="rounded border px-3 py-2"
                    min="0"
                    max="20"
                    step="0.01"
                />
                </label>
              ))}
            </div>
            <button type="submit">Add Card</button>   
            
        </form>
        {cards.length === 0 && <p>No cards added yet</p>}
            <ul>
                {cards.map((card) => (
                    <li key={card.id}>
                        <div>
                            <strong>{card.name}</strong>

                            {card.issuer && <span>{card.issuer}</span>}
                        </div>

                        <button type="button" onClick={() => removeCard(card.id)}>Remove</button>
                    </li>
                ))}
            </ul>
    </section>
    );
}