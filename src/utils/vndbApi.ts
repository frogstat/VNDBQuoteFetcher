type RandomQuoteResponse = {
    more: boolean,
    results: Array<RandomQuote>
}

export type RandomQuote = {
    quote: string

    character: {
        id: string,
        name: string,
        image: Image | null
    } | null,

    vn: {
        id: string,
        title: string,
        image: Image | null
    } | null,
}

// sexual is a number between 0 and 2, 0.3 being mildly risqué and 2 being as NSFW as it gets.
// Needed to filter out, or blur certain results.
export type Image = {
    url: string
    sexual: number
}

const quoteUrl = "https://api.vndb.org/kana/quote"

export async function fetchRandomQuote(): Promise<RandomQuote> {

    const response = await fetch(quoteUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fields: "vn{id,title,image.url,image.sexual},character{id,name,image.url,image.sexual},quote",
            filters: ["random", "=", 1]
        })
    })

    if (!response.ok) {
        throw new Error(`VNDB request failed: ${response.status} ${response.statusText}`)
    }
    const data:RandomQuoteResponse = await response.json()
    const quote = data.results[0]
    if (!quote) {
        throw new Error("VNDB returned no random quote")
    }

    return quote
}

fetchRandomQuote().then(quote => {
    console.log(quote)
})