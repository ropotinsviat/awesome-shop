export const formatDate = (dateStr: string): string => {
	// Replace 'T' with a space and remove 'Z' to ensure better compatibility
	const formattedDateStr = dateStr.replace('T', ' ').replace('Z', '');

	const date = new Date(formattedDateStr);

	if (isNaN(date.getTime())) {
		console.error('Invalid Date:', dateStr);
		return ''; // Return an empty string if the date is invalid
	}

	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const year = date.getFullYear();

	return `${day}.${month}.${year}`;
};
