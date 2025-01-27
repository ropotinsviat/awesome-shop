import Svg, { Path } from 'react-native-svg';

interface SettingsIconProps {
	width?: number | string;
	height?: number | string;
	stroke?: string;
}

export default function SettingsIcon({
	width = 21,
	height = 24,
	stroke = '#1C274C',
}: SettingsIconProps) {
	return (
		<Svg width={width} height={height} viewBox="0 0 21 24" fill="none">
			<Path
				d="M10.5 15.182C12.2573 15.182 13.6819 13.7574 13.6819 12C13.6819 10.2427 12.2573 8.81808 10.5 8.81808C8.74267 8.81808 7.31807 10.2427 7.31807 12C7.31807 13.7574 8.74267 15.182 10.5 15.182Z"
				stroke={stroke}
			/>
			<Path
				d="M12.3725 1.55503C11.9826 1.39355 11.4884 1.39355 10.5 1.39355C9.51159 1.39355 9.01744 1.39355 8.62754 1.55503C8.10779 1.77033 7.69483 2.18329 7.47953 2.70306C7.38125 2.94034 7.34278 3.21628 7.32773 3.61878C7.30562 4.21029 7.00227 4.75781 6.48964 5.05377C5.97703 5.34972 5.3512 5.33867 4.82787 5.06208C4.47177 4.87385 4.21357 4.76919 3.95894 4.73567C3.40114 4.66223 2.83703 4.81339 2.39069 5.15588C2.05593 5.41275 1.80883 5.84074 1.31463 6.69671C0.820432 7.5527 0.573333 7.98068 0.518254 8.39903C0.444825 8.95681 0.595978 9.52093 0.938471 9.96729C1.09479 10.171 1.31449 10.3422 1.65548 10.5565C2.15675 10.8715 2.47928 11.4081 2.47925 12C2.47922 12.592 2.1567 13.1284 1.65547 13.4433C1.31444 13.6577 1.0947 13.829 0.938365 14.0327C0.595872 14.4791 0.444719 15.0431 0.518158 15.6009C0.573227 16.0192 0.820326 16.4473 1.31452 17.3033C1.80873 18.1592 2.05583 18.5873 2.39058 18.8441C2.83692 19.1865 3.40104 19.3377 3.95883 19.2643C4.21344 19.2308 4.47163 19.1261 4.82771 18.9379C5.35107 18.6613 5.97694 18.6503 6.4896 18.9462C7.00225 19.2422 7.30562 19.7897 7.32773 20.3814C7.34279 20.7838 7.38125 21.0597 7.47953 21.297C7.69483 21.8167 8.10779 22.2297 8.62754 22.4451C9.01744 22.6065 9.51159 22.6065 10.5 22.6065C11.4884 22.6065 11.9826 22.6065 12.3725 22.4451C12.8922 22.2297 13.3052 21.8167 13.5204 21.297C13.6187 21.0597 13.6572 20.7838 13.6723 20.3812C13.6944 19.7897 13.9977 19.2422 14.5103 18.9462C15.0229 18.6502 15.6488 18.6613 16.1722 18.9379C16.5283 19.1261 16.7865 19.2307 17.041 19.2642C17.5988 19.3377 18.163 19.1865 18.6093 18.8441C18.944 18.5872 19.1912 18.1592 19.6853 17.3031C20.1796 16.4472 20.4267 16.0192 20.4818 15.6009C20.5551 15.0431 20.404 14.479 20.0615 14.0326C19.9052 13.8289 19.6854 13.6576 19.3444 13.4433C18.8433 13.1284 18.5207 12.5919 18.5207 11.9999C18.5207 11.408 18.8433 10.8716 19.3444 10.5567C19.6855 10.3423 19.9053 10.1711 20.0616 9.96729C20.4041 9.521 20.5553 8.95689 20.4819 8.39909C20.4268 7.98075 20.1797 7.55276 19.6854 6.69679C19.1913 5.84081 18.9441 5.41282 18.6094 5.15595C18.1631 4.81346 17.5989 4.66231 17.0411 4.73575C16.7866 4.76926 16.5284 4.87392 16.1722 5.06212C15.6489 5.33872 15.023 5.34979 14.5104 5.0538C13.9977 4.75783 13.6944 4.21027 13.6723 3.61873C13.6572 3.21625 13.6187 2.94033 13.5204 2.70306C13.3052 2.18329 12.8922 1.77033 12.3725 1.55503Z"
				stroke={stroke}
			/>
		</Svg>
	);
}
