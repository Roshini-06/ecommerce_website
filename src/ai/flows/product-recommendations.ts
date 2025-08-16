'use server';

/**
 * @fileOverview Product recommendation AI agent.
 *
 * - getProductRecommendations - A function that handles the product recommendation process.
 * - GetProductRecommendationsInput - The input type for the getProductRecommendations function.
 * - GetProductRecommendationsOutput - The return type for the getProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetProductRecommendationsInputSchema = z.object({
  cartItems: z
    .array(z.string())
    .describe('The list of product IDs in the user cart.'),
});
export type GetProductRecommendationsInput = z.infer<typeof GetProductRecommendationsInputSchema>;

const GetProductRecommendationsOutputSchema = z.object({
  recommendedProducts: z
    .array(z.string())
    .describe('The list of recommended product IDs based on the cart items.'),
});
export type GetProductRecommendationsOutput = z.infer<typeof GetProductRecommendationsOutputSchema>;

export async function getProductRecommendations(input: GetProductRecommendationsInput): Promise<GetProductRecommendationsOutput> {
  return productRecommendationsFlow(input);
}

const getFrequentlyPurchasedTogether = ai.defineTool({
  name: 'getFrequentlyPurchasedTogether',
  description: 'Returns a list of product IDs that are frequently purchased together with the given product IDs.',
  inputSchema: z.object({
    productIds: z.array(z.string()).describe('The list of product IDs to find related products for.'),
  }),
  outputSchema: z.array(z.string()).describe('The list of product IDs frequently purchased together.'),
},
async (input) => {
  // TODO: Replace with actual implementation to fetch frequently purchased together products.
  // This is just a placeholder implementation.
  const frequentlyPurchased: Record<string, string[]> = {
    '1': ['2', '3'],
    '2': ['1', '4'],
    '3': ['1', '5'],
    '4': ['2', '6'],
    '5': ['3', '6'],
    '6': ['4', '5'],
  };

  const recommendations = input.productIds.flatMap(productId => frequentlyPurchased[productId] || []);
  // Remove duplicates
  return [...new Set(recommendations)];
});

const productRecommendationsPrompt = ai.definePrompt({
  name: 'productRecommendationsPrompt',
  input: {schema: GetProductRecommendationsInputSchema},
  output: {schema: GetProductRecommendationsOutputSchema},
  tools: [getFrequentlyPurchasedTogether],
  prompt: `Based on the items in the user's cart, what other products would you recommend?

  Cart items: {{cartItems}}

  Use the getFrequentlyPurchasedTogether tool to find related products.

  Return a list of product IDs in the recommendedProducts field.
  `,
});

const productRecommendationsFlow = ai.defineFlow(
  {
    name: 'productRecommendationsFlow',
    inputSchema: GetProductRecommendationsInputSchema,
    outputSchema: GetProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await productRecommendationsPrompt(input);
    return output!;
  }
);
