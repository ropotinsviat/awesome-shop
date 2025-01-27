import { Injectable } from '@nestjs/common';
import { Order, Payment, Prisma } from '@prisma/client';
import { generateRandomNumber } from './utils/generate-transaction.utils';

@Injectable()
export class PaymentService {
	async create(
		prisma: Prisma.TransactionClient,
		order: Order,
	): Promise<Payment> {
		const transactionId = generateRandomNumber();

		return prisma.payment.create({
			data: {
				orderId: order.id,
				totalAmount: order.totalAmount,
				transactionId,
				paymentStatus: 'COMPLETE',
			},
		});
	}
}
