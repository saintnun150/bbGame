let comNumber = [];
let userNumber = [];

//서로 다른 4자리 랜덤 수 생성
let createRandomNum = () => {
    const numList = [0,1,2,3,4,5,6,7,8,9]
    let randomNum = []
    for (let i = 0; i < 4; i++) {
        let pick = Math.floor(Math.random() * numList.length)
        randomNum[i] = numList.splice(pick, 1)[0]
    }
    comNumber.push(randomNum)
}

// 입력받은 수 배열 변환
function inputNumber(num) {
    const inputArray = num.toString().split('')
    userNumber.push(inputArray)
}

// 판정
function decisionNumber() {
    let result = {
        strike : 0,
        ball : 0,
        out : 0,
        count : 0
    }
    if (comNumber.equals())

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (comNumber[i] == userNumber[j]) {
                if (i === j) {
                    result.strike++;
                } else {
                    result.ball++
                }
                break;
            }
        }
    }
    result.count++
    if (result.strike === 4) {
        console.log()
    }
    
}



