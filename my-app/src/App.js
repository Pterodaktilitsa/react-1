import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [calc, setCalc] = useState('');
	let [isResult, setIsResult] = useState(false);

	const createDigits = () => {
		const digits = [];
		for (let i = 1; i < 10; i++) {
			digits.push(
				<button onClick={() => updateCalc(i.toString())} key={i}>
					{i}
				</button>,
			);
		}
		digits.push(
			<button onClick={() => updateCalc('0')} key={0}>
				0
			</button>,
		);
		return digits;
	};

	const calcResult = () => {
		setIsResult(true);

		const result = eval(calc);
		setCalc(result ? result : '');
	};

	const updateCalc = (value) => {
		setIsResult(false);

		if (!value) {
			setCalc('');
		} else {
			setCalc((previousState) =>
				previousState !== '' ? previousState + value : value,
			);
		}
	};

	const cssClasses = [styles.display, isResult ? styles.resulted : ' '];

	return (
		<div className={styles.app}>
			<div className={styles.calculator}>
				<div className={cssClasses.join(' ')}>{calc ? calc : '0'}</div>

				<div className={styles.operators}>
					<button onClick={() => updateCalc('+')}>+</button>
					<button onClick={() => updateCalc('-')}>-</button>
					<button onClick={calcResult}>=</button>
					<button onClick={() => updateCalc('')}>C</button>
				</div>

				<div className={styles.digits}>{createDigits()}</div>
			</div>
		</div>
	);
};
