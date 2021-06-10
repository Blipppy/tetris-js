class Tetromino {
    constructor(piece) {
        this.piece = piece;
        this.color = dicts.pieceInfo.color[piece];
        this.rotation = 0;
        this.pos = { x: 3, y: -2 };
        this.width = piece == 'i' || piece == 'o' ? 4 : 3;
        // this.height = piece == 'i' ? 4 : 3;
        this.grid = dicts.pieceInfo.grid[piece][this.rotation];
    }

    getGlobalPos() {
        let minoes = [];
        for (let i = 0; i < this.grid.length; i++) {
            let x = this.pos.x + (i % this.width);
            let y = this.pos.y + (Math.floor(i / this.width));
            if (this.grid[i] == 1) {
                minoes.push((y * board.width) + x);
            }
        }

        return minoes;
    }

    getMinoPairs() {
        let minoes = [];
        for (let i = 0; i < this.grid.length; i++) {
            let x = this.pos.x + (i % this.width);
            let y = this.pos.y + (Math.floor(i / this.width));
            if (this.grid[i] == 1) {
                minoes.push([x, y]);
            }
        }

        return minoes;
    }
}