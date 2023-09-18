function convertString(s: string, t: string): boolean {
	let currentIndex = -1;
	for (let i = 0; i < t.length; i++) {
		currentIndex = s.indexOf(t[i], currentIndex + 1);
		if (currentIndex == -1) {
			return false;
		}
	}

	return currentIndex !== -1;

}

console.log( convertString( '111cc222oo3d3dee3', 'ccooddee' ) );