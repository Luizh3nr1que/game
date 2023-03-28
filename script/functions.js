const defaultCaracter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defence: 0
}
const createKnight = (name) => {
    return {
        ...defaultCaracter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defence: 8

    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCaracter,
        name,
        life: 50,
        maxLife: 50,
        attack: 14,
        defence: 3
    }
}

const createLittleMonster = () => {
    return {
        ...defaultCaracter,
        name: 'Vision',

        life: 100,
        maxLife: 100,
        attack: 14,
        defence: 3
    }
}

const createBigMonster = () => {
    return {
        ...defaultCaracter,
        name: 'Big Monster',
        life: 120,
        maxLife: 120,
        attack: 16,
        defence: 6
    }
}

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1EL: null,
    fighter2EL: null,

    Start(fighter1, fighter2, fighter1EL, fighter2EL) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1EL = fighter1EL;
        this.fighter2EL = fighter2EL;

        this.fighter1EL.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));

        this.fighter2EL.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

        this.update();
    },
    update() {
        //fighter1
        this.fighter1EL.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)}HP`;

        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1EL.querySelector('.bar').style.width = `${f1Pct}%`;





        //fighter2
        this.fighter2EL.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)}HP`;

        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2EL.querySelector('.bar').style.width = `${f2Pct}%`;
    },

    doAttack(attacking, attacked) {
        if (attacking.life <= 0) {
            alert(` Você morreu não pode atacar`);
            return;
        } else if (attacked.life <= 0) {
            alert(`${attacked.name} esta morto vitória de ${attacking.name}`);
            return;
        }
        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenceFactor = (Math.random() * 2).toFixed(2);

        const actualAttack = attacking.attack * attackFactor;
        const actualdefense = attacking.defence * defenceFactor;

        if (actualAttack > actualdefense) {
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;

            log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} dano em ${attacked.name}`)
        } else {
            log.addMessage(`${attacked.name} conseguil defender...`)
        }

        this.update()
    }
}

const log = {
    list: [],
    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },
    render() {
        const logEL = document.querySelector('.log');
        logEL.innerHTML = '';

        for (let i in this.list) {
            logEL.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}