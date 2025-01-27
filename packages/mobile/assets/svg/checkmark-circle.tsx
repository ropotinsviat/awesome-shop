import Svg, { Path } from 'react-native-svg';

interface CheckmarkCircleProps {
	width?: number | string;
	height?: number | string;
	fill?: string;
}

export default function CheckmarkCircle({
	width = 160,
	height = 160,
	fill = '#22BB00',
}: CheckmarkCircleProps) {
	return (
		<Svg width={width} height={height} viewBox="0 0 121 120" fill="none">
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M83.1012 34.0123C81.305 32.9623 79.0138 33.6002 77.9788 35.3627L53.9975 76.9125L40.58 64.5374C39.1625 63.0374 36.7888 62.9627 35.2775 64.3877C33.7663 65.7752 33.6875 68.1748 35.105 69.6748L52.25 85.5002C53.6638 87.0002 56.0375 87.0749 57.5487 85.6499C58.0062 85.2374 84.4737 39.1127 84.4737 39.1127C85.5087 37.3502 84.8938 35.0248 83.1012 34.0123ZM60.5 112.5C31.505 112.5 8 88.9875 8 60C8 31.0125 31.505 7.5 60.5 7.5C89.495 7.5 113 31.0125 113 60C113 88.9875 89.495 112.5 60.5 112.5ZM60.5 0C27.365 0 0.5 26.85 0.5 60C0.5 93.15 27.365 120 60.5 120C93.635 120 120.5 93.15 120.5 60C120.5 26.85 93.635 0 60.5 0Z"
				fill={fill}
			/>
		</Svg>
	);
}
