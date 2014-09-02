app = {
    hits: 0,
    time: 0,
    score: [],
    face: [],
    drops: 0,
    doubles: 0,
    state: false,
    achievement: 0,
    start: function() {
        this.state = true;
        this.time = $.now();
        this.face[1] = 0;
        this.face[2] = 0;
        this.face[3] = 0;
        this.face[4] = 0;
        this.face[5] = 0;
        this.face[6] = 0;
    },
    hit: function() {
        return this.hits++;
    },
    drop: function(left, right) {
        this.drops++;
        this.face[left]++;
        this.face[right]++;
        this.score.push(left, right);    
        if (left == right)
            this.doubles++;
    },
    results: function() {
        return {
            hits: this.hits,
            drops: this.drops,
            doubles: this.doubles,
            score: this.score.sum(),
            time: (this.time) ? ($.now() - this.time).toHMS() : 0,
            player1: player.name(0),
            player2: player.name(1),
            face1: this.face[1],
            face2: this.face[2],
            face3: this.face[3],
            face4: this.face[4],
            face5: this.face[5],
            face6: this.face[6],
        };
    },
    reset: function() {
        this.hits = 0;
        this.time = 0;
        this.drops = 0;
        this.doubles = 0;
        this.score = [];
        player.all = [];
        player.active = 0;
        this.state = false;
        this.face = [];
        this.achievement = 0;
    }
};
