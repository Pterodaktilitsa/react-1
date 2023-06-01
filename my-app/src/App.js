import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [calc, setCalc] = useState('');
	const [result, setResult] = useState('');

	const ops = ['+', '-'];
	const updateCalc = (value) => {
		setCalc(calc + value);
	};
	const createDigits = () => {
		const digits = [];
		for (let i = 1; i < 10; i++) {
			digits.push(
				<button onClick={() => updateCalc(i.toString())} key={i}>
					{i}
				</button>,
			);
		}
		return digits;
	};
	return (
		<div className={styles.app}>
			<div className="calculator">
				<div className="display">
					{result ? <span>(0)</span> : ''} {calc || '0'}
				</div>

				<div className="operators">
					<button onClick={() => updateCalc('+')}>+</button>
					<button onClick={() => updateCalc('-')}>-</button>
					<button onClick={() => updateCalc('=')}>=</button>
					<button>C</button>
				</div>
				<div className="digits">
					{createDigits()}
					<button onClick={() => updateCalc('0')}>0</button>
				</div>
			</div>
		</div>
	);
};
