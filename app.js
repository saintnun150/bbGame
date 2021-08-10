let BBGame = function () {

}

// 서로 다른 4자리 랜덤 수 생성
BBGame.getComAnswer = () => {
    const numList = [0,1,2,3,4,5,6,7,8,9]
    let randomNum = []
    for (let i = 0; i < 4; i++) {
        let pick = Math.floor(Math.random() * numList.length)
        randomNum[i] = numList.splice(pick, 1)[0]
    }
    return randomNum
}

// 입력 받은 수 배열 변환
BBGame.getUserAnswer = (enterNum) => {
    const array = [];
    const strArray = enterNum.toString().split('')
    for (let i = 0; i < strArray.length; i++) {
        array.push(Number(strArray[i]))
    }
    return array
}

// 컴퓨터 랜덤 수와 입력한 수 비교
BBGame.compareAnswers = (comAnswer, userAnswer) => {
    let result = {
        strike : 0,
        ball : 0,
        homeRun : 0
    }

    if (JSON.stringify(comAnswer) === JSON.stringify(userAnswer)) {
        result.homeRun++
        return result;
    } else {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (comAnswer[i] == userAnswer[j]) {
                    if (i === j) {
                        result.strike++;
                    } else {
                        result.ball++
                    }
                }
            }
        }
        return result
    }
}



