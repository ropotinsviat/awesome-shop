export const paymentFilterOptions = ['All', 'Pending', 'Complete', 'Failed'];
export type PaymentStatusOption = (typeof paymentFilterOptions)[number];

export const deliveryFilterOptions = [
	'All',
	'Pending',
	'In Transit',
	'Delivered',
];
export type DeliveryStatusOption = (typeof deliveryFilterOptions)[number];

export const sortOptions = ['Asc', 'Desc'];
export type SortOption = (typeof sortOptions)[number];
