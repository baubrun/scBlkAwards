export const convertSecondsToMinutes = (time) => {
    if (time === 0){
        return "0: 00"
    }
    const minutes = Math.floor(time / 60)
    const seconds = time - minutes * 60
    return `${minutes} : 0${seconds}`
}


