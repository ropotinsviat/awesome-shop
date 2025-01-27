import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface PayIconProps {
	width?: number | string;
	height?: number | string;
	fill?: string;
}

export default function PayIcon({
	width = 20,
	height = 17,
	fill = 'white',
}: PayIconProps) {
	return (
		<Svg width={width} height={height} viewBox="0 0 20 17" fill="none">
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 4.5C0 2.29086 1.79086 0.5 4 0.5H16C18.2091 0.5 20 2.29086 20 4.5V5C20 5.27614 19.7761 5.5 19.5 5.5H0.5C0.22386 5.5 0 5.27614 0 5V4.5ZM0.5 7.5C0.22386 7.5 0 7.7239 0 8V12.5C0 14.7091 1.79086 16.5 4 16.5H16C18.2091 16.5 20 14.7091 20 12.5V8C20 7.7239 19.7761 7.5 19.5 7.5H0.5ZM11 11.5C11 10.9477 11.4477 10.5 12 10.5H15C15.5523 10.5 16 10.9477 16 11.5C16 12.0523 15.5523 12.5 15 12.5H12C11.4477 12.5 11 12.0523 11 11.5Z"
				fill={fill}
			/>
		</Svg>
	);
}
