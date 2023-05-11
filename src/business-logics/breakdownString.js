const breakdownString = (str) => {
	let letters = 0;
	let symbols = 0;
	let numerics = 0;

	str.split('').forEach((s) => {
		const char = s;

		if (/[a-zA-Z]/.test(char)) {
			letters++;
		} else if (/[0-9]/.test(char)) {
			numerics++;
		} else {
			symbols++;
		}
	});

	return { letters, numerics, symbols };
};

module.exports = breakdownString;
