// 1678 - Goal Parser Interpretation

function interpret(command) {
    return command.replaceAll('()', 'o').replace(/\W/g, '');
}
