import prisma from '@/db/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const currentOrders = await prisma.order.findMany();

    if(!currentOrders) {
      return res.status(404).json({error: "no orders found"})
    }
    return res.status(200).json(currentOrders)
  } catch (error) {
    return res.status(500).json({error: "error fetching orders"})
  } 
}
