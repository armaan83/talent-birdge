
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const getSystemInstruction = () => {
  const serviceContext = PRODUCTS.map(p => 
    `- ${p.name}: ${p.description}. Key Features: ${p.features.join(', ')}`
  ).join('\n');

  return `You are the Senior Growth Consultant for "Talent Bridge", a leading firm specializing in global recruitment, lead generation, and eCommerce development. 
  With over 14 years of experience, we bridge the gap between multinational companies and elite professionals.
  
  Your tone is professional, authoritative, strategic, and results-oriented. 
  
  Our key offerings include:
  ${serviceContext}
  
  Your goal is to help potential clients understand how we can support their growth—from sourcing talent to developing eCommerce platforms and managing global marketing.
  
  Keep responses concise and professional. If a user asks for a quote, encourage them to "add the service to their inquiry list" or use the contact form.`;
};

// Fixed initialization and updated to recommended gemini-3-flash-preview model
export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    // Initializing Gemini client with process.env.API_KEY directly as per guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      // Mapping history to strictly match SDK expected roles
      history: history.map(h => ({
        role: h.role === 'model' ? 'model' : 'user',
        parts: [{ text: h.text }]
      }))
    });

    // Extracting text from result using .text property (not a method)
    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I apologize, but I am unable to provide a response at this moment.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, our consultants are currently unavailable. Please try again in a moment.";
  }
};
