 // Import
 const { OpenAI} = require("openai");

 // Make HTTP request asynchronously to prevent blocking main thread & keep app responsive 
 async function generateResponse() {

     // Instance of OpenAI class
     const openai = new OpenAI({
     apiKey: "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",
   });
 
     // Function will pause and wait for API call to complete before moving to next step 
     const response = await openai.chat.completions.create({
     model: "gpt-3.5-turbo",
     messages: [
     {
         // Instructions for model 
       "role": "system",
       "content": "You will be provided with meeting notes, and your task is to summarize the meeting as follows:\n\n-Overall summary of discussion\n-Action items (what needs to be done and who is doing it)\n-If applicable, a list of topics that need to be discussed more fully in the next meeting."
     },
     {
         // User message 
       "role": "user",
       "content": userInput
     }
     ],
     // Parameters for model x
     temperature: 0,
     max_tokens: 1024,
     top_p: 1,
     frequency_penalty: 0,
     presence_penalty: 0,
   });
 
   // Extract and print the generated summmary 
   const summary = response.choices[0].message.content;
   console.log(summary);
 }
 
 // Take user input
 const userInput = "Meeting Date: March 5th, 2050\nMeeting Time: 2:00 PM\nLocation: Conference Room 3B, Intergalactic Headquarters\n\nAttendees:\n- Captain Stardust\n- Dr. Quasar\n- Lady Nebula\n- Sir Supernova\n- Ms. Comet\n\nMeeting called to order by Captain Stardust at 2:05 PM\n\n1. Introductions and welcome to our newest team member, Ms. Comet\n\n2. Discussion of our recent mission to Planet Zog\n- Captain Stardust: \"Overall, a success, but communication with the Zogians was difficult. We need to improve our language skills.\"\n- Dr. Quasar: \"Agreed. I'll start working on a Zogian-English dictionary right away.\"\n- Lady Nebula: \"The Zogian food was out of this world, literally! We should consider having a Zogian food night on the ship.\"\n\n3. Addressing the space pirate issue in Sector 7\n- Sir Supernova: \"We need a better strategy for dealing with these pirates. They've already plundered three cargo ships this month.\"\n- Captain Stardust: \"I'll speak with Admiral Starbeam about increasing patrols in that area.\n- Dr. Quasar: \"I've been working on a new cloaking technology that could help our ships avoid detection by the pirates. I'll need a few more weeks to finalize the prototype.\"\n\n4. Review of the annual Intergalactic Bake-Off\n- Lady Nebula: \"I'm happy to report that our team placed second in the competition! Our Martian Mud Pie was a big hit!\"\n- Ms. Comet: \"Let's aim for first place next year. I have a secret recipe for Jupiter Jello that I think could be a winner.\"\n\n5. Planning for the upcoming charity fundraiser\n- Captain Stardust: \"We need some creative ideas for our booth at the Intergalactic Charity Bazaar.\"\n- Sir Supernova: \"How about a 'Dunk the Alien' game? We can have people throw water balloons at a volunteer dressed as an alien.\"\n- Dr. Quasar: \"I can set up a 'Name That Star' trivia game with prizes for the winners.\"\n- Lady Nebula: \"Great ideas, everyone. Let's start gathering the supplies and preparing the games.\"\n\n6. Upcoming team-building retreat\n- Ms. Comet: \"I would like to propose a team-building retreat to the Moon Resort and Spa. It's a great opportunity to bond and relax after our recent missions.\"\n- Captain Stardust: \"Sounds like a fantastic idea. I'll check the budget and see if we can make it happen.\"\n\n7. Next meeting agenda items\n- Update on the Zogian-English dictionary (Dr. Quasar)\n- Progress report on the cloaking technology (Dr. Quasar)\n- Results of increased patrols in Sector 7 (Captain Stardust)\n- Final preparations for the Intergalactic Charity Bazaar (All)\n\nMeeting adjourned at 3:15 PM. Next meeting scheduled for March 19th, 2050 at 2:00 PM in Conference Room 3B, Intergalactic Headquarters.";
 generateResponse(userInput);

  // Call the async function
 generateResponse();
 