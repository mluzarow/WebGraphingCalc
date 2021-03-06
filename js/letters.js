/******************************************************************************************
** letters.js
**
** == Summary ==
** Contains matrices describing all characters usable within the calculator as matrices of
** 1s and 0s of dimension 6x8. Externally used via letterDict dictionary.
**
********************************************************************************************/

var letterDict = null;

// Loads every usable character into memory as a 8x6 matrix
function initializeLetters () {
    letterDict = JSON.parse  ('{"A":[[0, 1, 1, 1, 0, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [1, 1, 1, 1, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "B":[[1, 1, 1, 1, 0, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [1, 1, 1, 1, 0, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [1, 1, 1, 1, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "0":[[0, 1, 1, 1, 0, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [1, 0, 0, 1, 1, 0], \
                                     [1, 0, 1, 0, 1, 0], \
                                     [1, 1, 0, 0, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [0, 1, 1, 1, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "1":[[0, 0, 1, 0, 0, 0], \
                                     [0, 1, 1, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 1, 1, 1, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "2":[[0, 1, 1, 1, 0, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [0, 0, 0, 0, 1, 0], \
                                     [0, 0, 0, 1, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 1, 0, 0, 0, 0], \
                                     [1, 1, 1, 1, 1, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "3":[[1, 1, 1, 1, 1, 0], \
                                     [0, 0, 0, 1, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 0, 1, 0, 0], \
                                     [0, 0, 0, 0, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [0, 1, 1, 1, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "4":[[0, 0, 0, 1, 0, 0], \
                                     [0, 0, 1, 1, 0, 0], \
                                     [0, 1, 0, 1, 0, 0], \
                                     [1, 0, 0, 1, 0, 0], \
                                     [1, 1, 1, 1, 1, 0], \
                                     [0, 0, 0, 1, 0, 0], \
                                     [0, 0, 0, 1, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "5":[[1, 1, 1, 1, 1, 0], \
                                     [1, 0, 0, 0, 0, 0], \
                                     [1, 1, 1, 1, 0, 0], \
                                     [0, 0, 0, 0, 1, 0], \
                                     [0, 0, 0, 0, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [0, 1, 1, 1, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "6":[[0, 0, 1, 1, 0, 0], \
                                     [0, 1, 0, 0, 0, 0], \
                                     [1, 0, 0, 0, 0, 0], \
                                     [1, 1, 1, 1, 0, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [0, 1, 1, 1, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "7":[[1, 1, 1, 1, 1, 0], \
                                     [0, 0, 0, 0, 1, 0], \
                                     [0, 0, 0, 1, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 1, 0, 0, 0, 0], \
                                     [0, 1, 0, 0, 0, 0], \
                                     [0, 1, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "8":[[0, 1, 1, 1, 0, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [0, 1, 1, 1, 0, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [0, 1, 1, 1, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "9":[[0, 1, 1, 1, 0, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [0, 1, 1, 1, 1, 0], \
                                     [0, 0, 0, 0, 1, 0], \
                                     [0, 0, 0, 1, 0, 0], \
                                     [0, 1, 1, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "+":[[0, 0, 0, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [1, 1, 1, 1, 1, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "-":[[0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [1, 1, 1, 1, 1, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "*":[[0, 0, 0, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [1, 0, 1, 0, 1, 0], \
                                     [0, 1, 1, 1, 0, 0], \
                                     [1, 0, 1, 0, 1, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "/":[[0, 0, 0, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [1, 1, 1, 1, 1, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                ",":[[0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 1, 1, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 1, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                ".":[[0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 1, 1, 0, 0, 0], \
                                     [0, 1, 1, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "~":[[0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 1, 1, 1, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "(":[[0, 0, 0, 1, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 1, 0, 0, 0, 0], \
                                     [0, 1, 0, 0, 0, 0], \
                                     [0, 1, 0, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 0, 1, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                ")":[[0, 1, 0, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 0, 1, 0, 0], \
                                     [0, 0, 0, 1, 0, 0], \
                                     [0, 0, 0, 1, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 1, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "^":[[0, 0, 1, 0, 0, 0], \
                                     [0, 1, 0, 1, 0, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "a":[[0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 1, 1, 1, 0, 0], \
                                     [0, 0, 0, 0, 1, 0], \
                                     [0, 1, 1, 1, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [0, 1, 1, 1, 1, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "c":[[0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 1, 1, 1, 1, 0], \
                                     [1, 0, 0, 0, 0, 0], \
                                     [1, 0, 0, 0, 0, 0], \
                                     [1, 0, 0, 0, 0, 0], \
                                     [0, 1, 1, 1, 1, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "g":[[0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 1, 1, 1, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [0, 1, 1, 1, 1, 0], \
                                     [0, 0, 0, 0, 1, 0], \
                                     [1, 1, 1, 1, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "i":[[0, 0, 0, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "l":[[0, 1, 1, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 1, 1, 1, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "n":[[0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [1, 0, 1, 1, 0, 0], \
                                     [1, 1, 0, 0, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "o":[[0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 1, 1, 1, 0, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [1, 0, 0, 0, 1, 0], \
                                     [0, 1, 1, 1, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "s":[[0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 1, 1, 1, 1, 0], \
                                     [1, 0, 0, 0, 0, 0], \
                                     [0, 1, 1, 1, 0, 0], \
                                     [0, 0, 0, 0, 1, 0], \
                                     [1, 1, 1, 1, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                "t":[[0, 0, 1, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [1, 1, 1, 1, 1, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 1, 0, 0, 0], \
                                     [0, 0, 1, 0, 1, 0], \
                                     [0, 0, 0, 1, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]], \
                                " ":[[0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0], \
                                     [0, 0, 0, 0, 0, 0]]}');
}