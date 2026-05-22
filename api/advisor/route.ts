import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Put outside POST function client agent 
const client = new OpenAI()

export async function POST(request: NextRequest) {
    const body = await request.json()
    const { cards, spendingDescription } = body

    // Check if cards and spending description is there
    if (cards.length === 0 || !spendingDescription) {
        return NextResponse.json(
            { error: 'Missing required fields' },
            { status: 400 }
        )
    }

    try {
            const completed = await client.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                    { role: 'system', content: `You are a credit card rewards expert. Analyze the user's cards and spending habits. Give specific, actionable recommendations and be concise.` },
                    { role: 'user', content: `Here are my cards: ${JSON.stringify(cards, null, 2)} My spending habits: ${spendingDescription}` }
                ]
            })
            const message = completed.choices[0].message.content
            return NextResponse.json({ recommendation: message })
            
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to get recommendation' },
            { status: 500 }
        )

    }
}