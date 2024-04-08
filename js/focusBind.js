function changeFocus(input, isWrong = false) {
    if (isWrong) {
        if (!rightChangeFocusFlag) {
            input.focus();
        }
        rightChangeFocusFlag = 0;
    } else {
        rightChangeFocusFlag = 1;
        input.focus();
    }
}