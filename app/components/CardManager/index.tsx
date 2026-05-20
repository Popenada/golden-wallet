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
// Use useCardStore import to add and remove cards from component
export default function CardManager() {
    const { cards, addCard, removeCard } = useCardStore();

    // Define different useStates for the component variables to hold
    const [name, setName] = useState("");
    const [issuer, setIssuer] = useState("")
    const [rates, setRates] = useState<RewardRates>(initialRates)

    // Handle add card function that validates name is not empty string
    // Call addCard that expects an object with name, issuer, and rates
    // Reset the form to initial values so form clears
    function handleAddCard() {
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
                value={}
            />
            
        </form>
    </section>
    );
}