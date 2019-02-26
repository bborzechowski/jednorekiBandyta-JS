class Statistics {
    constructor(){
        this.gameResults = [];

    }

    addGameToStatistics(win, bid){
        let gameResult = {
            win,
            bid
        }
        
        this.gameResults.push(gameResult)
    }

    showGameStatistics(){
        let games = this.gameResults.length;
        //ile wygranych
        let wins = this.gameResults.filter(result => result.win).length; 
        //ile przegranych
        let losses = this.gameResults.filter(result => !result.win).length;

        // console.log(games, wins, losses);
        return [games, wins, losses]
    }
}

const stats = new Statistics()