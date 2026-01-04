
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const getSystemInstruction = () => {
  const serviceContext = PRODUCTS.map(p => 
    `- ${p.name}: ${p.description}`
  ).join('\n');

  return `You are a Senior Growth Partner at "Talent Bridge", an ultra-premium global consultancy.
  We specialize in:
  ${serviceContext}

  Your tone is sophisticated, executive, and highly professional. 
  We do NOT sell retail products. We provide high-level consulting and lead generation for enterprise eCommerce.
  
  If users are interested in a solution, invite them to use the "Consult with Partner" button or fill out our Strategic Inquiry form.
  
  Always maintain the persona of a world-class consultant. Keep answers concise and high-impact.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role === 'model' ? 'model' : 'user',
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I apologize, but I am unable to provide a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, our consultants are currently unavailable. Please try again in a moment.";
  }
};
