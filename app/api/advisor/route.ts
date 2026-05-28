import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Put outside POST function client agent 
const client = new OpenAI()

export async function POST(request: NextRequest) {
    const body = await request.json().catch(() => null)
    if (!body) {
        return NextResponse.json(
            { error: 'Could not read the request. Refresh and try again.' },
            { status: 400 }
        )
    }

    const { cards, spendingDescription } = body

    // Check if cards and spending description is there
    if (!Array.isArray(cards) || cards.length === 0 || !spendingDescription) {
        return NextResponse.json(
            { error: 'Add at least one card and describe your spending before asking for advice.' },
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
        console.error(error)
        return NextResponse.json(
            { error: 'The advisor could not generate a recommendation. Check your connection and try again.' },
            { status: 500 }
        )
    }
}
