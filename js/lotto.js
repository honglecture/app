const MAX_LOTTO_NUMBER = 45;
let tempLottoArray = [];

// 로또번호를 반환한다.
function getLottoNumbers(){
    while(tempLottoArray.length < 6){

        let lottoNumber = getLottoNumber();
        
        // 가능한 로또번호라면
        if(isPossibleNumber(lottoNumber)){
            tempLottoArray.push(lottoNumber);
        }

    }
    sortNumbers();
}


// 난수를 발생시켜 로또 번호를 얻어낸다.
function getLottoNumber(){
    let lottoNumber = Math.floor(Math.random() * MAX_LOTTO_NUMBER) + 1;
    return lottoNumber
}


function isPossibleNumber(number){
    if(tempLottoArray.includes(number)){
        return false;
    }
    return true;
}

function sortNumbers(){
    tempLottoArray.sort(function (f, s) { return f-s; });
}


// 문서가 완성된 후
window.addEventListener('load', function(){

    let lottoSection = document.querySelector('#lotto-section');
    let btnCreate = document.querySelector('#btn-create');
    let btnInit = document.querySelector('#btn-init');

    // 로또 생성 버튼
    btnCreate.onclick = function(){
        getLottoNumbers();
        let appendHtml = '';
        for(let i = 0; i < tempLottoArray.length; i++){
            appendHtml += `<img src="./image/lotto/ball_${tempLottoArray[i]}.png" />`
        }
        lottoSection.innerHTML = appendHtml;
        tempLottoArray = [];
    }

    // 로또 초기화 버튼
    btnInit.onclick = function(){
        lottoSection.innerHTML = '';
    }


})