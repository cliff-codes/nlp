
import {SentimentAnalyzer, PorterStemmer} from "natural"; 

interface IResults{
    sentiment: string
    score: number
}

const analyzer = new SentimentAnalyzer("English", PorterStemmer, "afinn");

function interpretSentiment(score: number): string {
    if(score > 0.5) return "Strongly Positive"
    if (score > 0) return "Positive";
    if (score === 0) return "Neutral";
    if (score > -0.5) return "Negative";
    return "Strongly Negative";
}

export function analyzeText(text: string): IResults{
    const result = analyzer.getSentiment(text.split(" "))
    const sentiment = interpretSentiment(result)
    return {sentiment, score: result}
}

