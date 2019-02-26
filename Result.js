class Result {
    static moneyWinInGame(result, bid){
        if(result) return 3 *bid;
        else return 0;

    }
    static checkWinner(draw){
        // jeśli wygrywamy zwraca true
        if(draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[1] !== draw [2] && draw[2] !== draw[0])
        return true;
        // jeśli przegramy zwraca false
        else return false;
    }
}