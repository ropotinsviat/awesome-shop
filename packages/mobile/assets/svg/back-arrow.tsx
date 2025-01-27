import Svg, { Path } from 'react-native-svg';

interface ArrowIconProps {
	width?: number | string;
	height?: number | string;
	fill?: string;
	stroke?: string;
}

export default function ArrowBackIcon({
	width = 16,
	height = 29,
	fill = 'black',
	stroke = 'black',
}: ArrowIconProps) {
	return (
		<Svg width={width} height={height} viewBox="0 0 16 29" fill="none">
			<Path
				d="M3.93839 13.8687L3.58484 14.2223L3.93839 14.5758L15.1258 25.7632C15.6247 26.2622 15.6247 27.0713 15.1258 27.5703C14.6268 28.0692 13.8177 28.0692 13.3187 27.5703L0.874248 15.1258L0.87422 15.1257C0.634646 14.8862 0.5 14.5611 0.5 14.2223C0.5 13.8834 0.634646 13.5583 0.87422 13.3188L0.874248 13.3187L13.3187 0.874248L13.3188 0.874239C13.8177 0.375254 14.6268 0.375254 15.1258 0.874235C15.6247 1.37325 15.6247 2.1823 15.1258 2.68132C15.1258 2.68132 15.1258 2.68133 15.1258 2.68133L3.93839 13.8687Z"
				fill={fill}
				stroke={stroke}
			/>
		</Svg>
	);
}
