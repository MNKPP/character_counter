export const countCharacter = (value) => {
    return value.length;
}

export const countWord = (value) => {
    return value.split(' ').length - 1;
}

export const countSentence = (value) => {
    return value.split('.').length - 1;
}