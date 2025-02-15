'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import React, { useState } from 'react';

const orders = [
	{
		id: '235',
		items: [
			{ name: 'Momos', quantity: 2 },
			{ name: 'Pizza', quantity: 1 },
		],
	},
	{
		id: '236',
		items: [
			{ name: 'Burger', quantity: 1 },
			{ name: 'Fries', quantity: 1 },
			{ name: 'Coke', quantity: 2 },
		],
	},
];

const Order = () => {
	const [ready, setReady] = useState(false);

	const handleReadyClick = () => {
		setReady(ready ? false : true);
	};

	return (
		<>
			<Card className='text-center font-bold m-5 py-5 bg-primary text-primary-foreground text-2xl'>
				Current Orders
			</Card>
			{orders.map((order) => (
				<Card className='m-5' key={order.id}>
					<CardHeader>
						<h1 className='text-center'>
							Order id: 50SOG<span className='font-bold'>{order.id}</span>
						</h1>
					</CardHeader>
					<CardContent>
						<div className='grid grid-cols-2 font-bold'>
							<h1>Item</h1>
							<h1>Quantity</h1>
						</div>

						{order.items.map((item) => (
							<div className='grid grid-cols-2' key={item.name}>
								<h1>{item.name}</h1>
								<h1>{item.quantity}</h1>
							</div>
						))}
					</CardContent>

					<CardFooter>
						<div className='flex justify-between w-full'>
							{ready ? (
								<div className='px-2 py-2 rounded-sm text-green-800 text-sm'>
									Notified Customer
								</div>
							) : (
								<Button onClick={handleReadyClick}>Ready</Button>
							)}

							<Button variant='destructive'>Complete</Button>
						</div>
					</CardFooter>
				</Card>
			))}
		</>
	);
};

export default Order;
