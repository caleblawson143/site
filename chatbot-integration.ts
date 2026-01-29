import type { Message } from "ai/react"; // Import Message type

// Scraped company data embedded in the file
const scrapedData = {"siteUrl":"https://reliantplumbing.com/","companyName":"Plumbing Repairs 24/7","companyDescription":"Affordable plumbing repairs from experts nearby. From repairs to installations, trust Reliant Plumbing for expert solutions. Book now!","pages":[{"url":"https://reliantplumbing.com/blog/"},{"url":"https://reliantplumbing.com/safe-drinking-water-with-a-reverse-osmosis-ro-system/"},{"url":"https://reliantplumbing.com/4-signs-your-may-need-a-water-softener/"},{"url":"https://reliantplumbing.com/sewer-maintenance-and-repair-tips/"},{"url":"https://reliantplumbing.com/water-heater-maintenance-tips-san-antonio/"}],"allImages":["https://reliantplumbing.com/jjwp/wp-content/uploads/2024/06/reliant-plumbing-logo.png","https://reliantplumbing.com/jjwp/wp-content/uploads/2020/10/RO-System.gif","https://reliantplumbing.com/jjwp/wp-content/uploads/2024/06/reliant-plumbing-logo.png","https://reliantplumbing.com/jjwp/wp-content/uploads/2024/06/reliant-plumbing-logo.png","https://reliantplumbing.com/jjwp/wp-content/uploads/2024/06/reliant-plumbing-logo.png","https://reliantplumbing.com/jjwp/wp-content/uploads/2024/06/reliant-plumbing-logo.png","https://reliantplumbing.com/jjwp/wp-content/uploads/2024/06/reliant-plumbing-logo.png","https://reliantplumbing.com/jjwp/wp-content/uploads/2024/06/reliant-plumbing-logo.png","https://reliantplumbing.com/jjwp/wp-content/uploads/2018/10/Featured-WH-Images-Website.png","https://reliantplumbing.com/jjwp/wp-content/uploads/2025/12/Jacob-Pointing-at-Leak-Expert-Leak-Detection-Reliant-Plumbing.jpg","https://reliantplumbing.com/jjwp/wp-content/uploads/2024/07/Grinder-Pump.jpg","https://reliantplumbing.com/jjwp/wp-content/uploads/2024/04/pipe-leak.jpg","https://reliantplumbing.com/jjwp/wp-content/uploads/2020/08/Why-isnt-my-water-hot.jpg","https://reliantplumbing.com/jjwp/wp-content/uploads/2024/07/Descaling-System-Installation.jpg","https://reliantplumbing.com/jjwp/wp-content/uploads/2025/09/Max8.jpg","https://reliantplumbing.com/jjwp/wp-content/uploads/2025/10/Screenshot-2025-10-15-094412.jpg","https://reliantplumbing.com/jjwp/wp-content/uploads/2024/12/grease-trap.jpeg","https://reliantplumbing.com/jjwp/wp-content/uploads/2025/09/Untitled-design.jpg","https://reliantplumbing.com/jjwp/wp-content/uploads/2025/09/Screenshot-2025-09-24-144013.jpg","https://reliantplumbing.com/jjwp/wp-content/uploads/2025/06/commercial-drain-cleaning.jpg"],"seoData":{"metaTitle":"Plumbing Repairs 24/7","metaDescription":"Affordable plumbing repairs from experts nearby. From repairs to installations, trust Reliant Plumbing for expert solutions. Book now!","keywords":["water","posts","recent","plumbing","tips","maintenance","benefits","signs","heater","why","does","top","leave","pressure","valve","replace","system","hard","systems","repair"]},"technologiesUsed":["WordPress"],"targetAudience":"General Audience","brandColors":{"primary":"#f3bc48","secondary":"#003b5d","tertiary":"#7a00df","background":"#f4b838"},"designStyle":"modern"};

export async function callAgent(messages: Message[]): Promise<string> {
  const agentApiUrl = "https://dynapt-mastra-instance-1.thankfulsmoke-9f4f1ce9.westus2.azurecontainerapps.io/api/agents/companyChatbotAgent/generate";

  try {
    const response = await fetch(agentApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer v1:8AvtuJqv0TMBkuf8TU8GnsCC:IUQBqXU3Ak7TND8G5SAkgKST",
      },
      body: JSON.stringify({
        messages: messages,
        context: JSON.stringify(scrapedData),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Agent API error: ${response.status} ${errorText}`);
      throw new Error(`Error from agent: ${errorText}`);
    }

    const responseData = await response.json();
    return responseData.text || "No response text from agent.";
  } catch (error) {
    console.error("Error calling agent API:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Failed to connect to the chatbot. Please ensure it's running."
    );
  }
}
