import { NextRequest, NextResponse } from "next/server";
import { analyzeText } from "./logic/analyze";
import { ok } from "assert";

export const POST = async(req: NextRequest, res: NextResponse ) => {
    
    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Unsupported method' }, { status: 405 });
    }
    
    try {
        const data = await req.json()
        const {textToAnalyze} = await data

        //analyze sentiment
        const results = analyzeText(textToAnalyze)

        return NextResponse.json({ message: "success", data: results }, { status: 200  })

    } catch (error) {
        console.log(error as any)
        return NextResponse.json({ message: error }, { status: 500 });
    }
}