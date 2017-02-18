var letterDict = null;

// Loads every usable character into memory as a 8x6 matrix
function initializeLetters () {
	letterDict = JSON.parse ('{"A":[[0, 1, 1, 1, 0, 0], \
								[1, 0, 0, 0, 1, 0], \
								[1, 0, 0, 0, 1, 0], \
								[1, 1, 1, 1, 1, 0], \
								[1, 0, 0, 0, 1, 0], \
								[1, 0, 0, 0, 1, 0], \
								[1, 0, 0, 0, 1, 0], \
								[0, 0, 0, 0, 0, 0]]}');
}