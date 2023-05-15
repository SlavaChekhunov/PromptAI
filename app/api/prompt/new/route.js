import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    //this is how api routes work in next.js
    //you can extract all the data you passed through the post request.
    const { userId, prompt, tag } = await request.json();

    try {
        //connect to db every time because this is like a lambda function and it will die out once it does its job.
        await connectToDB();
        const newPrompt = new Prompt({ creator: userId, prompt, tag });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}