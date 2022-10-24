// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }

    receiveDamage(damage){
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in combat`;
    }
}

// Função retirada do MDN para gerar um numero inteiro aleatório entre dois valores min e max
function generateRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        if (this.vikingArmy.length === 0 || this.saxonArmy.length === 0){
            return null;
        }
        let saxonIndex = generateRandomInt(0, this.saxonArmy.length);
        let vikingIndex = generateRandomInt(0, this.vikingArmy.length);
        let resultOfAttack = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].strength);
        if (this.saxonArmy[saxonIndex].health <= 0) {
            this.saxonArmy.splice(saxonIndex, 1);
        }
        return resultOfAttack;
    }

    saxonAttack(){
        if (this.vikingArmy.length === 0 || this.saxonArmy.length === 0){
            return null;
        }
        let saxonIndex = generateRandomInt(0, this.saxonArmy.length);
        let vikingIndex = generateRandomInt(0, this.vikingArmy.length);
        let resultOfAttack = this.vikingArmy[vikingIndex].receiveDamage( this.saxonArmy[saxonIndex].strength);
        if (this.vikingArmy[vikingIndex].health <= 0) {
            this.vikingArmy.splice(vikingIndex, 1);
        }
        return resultOfAttack;
    }

    attack(army){
        let resultOfAttack = "No known army has attacked!"
        if (this.vikingArmy.length === 0 || this.saxonArmy.length === 0){
            return null;
        }
        let saxonIndex = generateRandomInt(0, this.saxonArmy.length);
        let vikingIndex = generateRandomInt(0, this.vikingArmy.length);

        if (army === "viking") {
            resultOfAttack = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].strength );
            if (this.saxonArmy[saxonIndex].health <= 0) {
                this.saxonArmy.splice(saxonIndex, 1);
            }
        }

        if (army === "saxon") {
            resultOfAttack = this.vikingArmy[vikingIndex].receiveDamage( this.saxonArmy[saxonIndex].strength );
            if (this.vikingArmy[vikingIndex].health <= 0) {
                this.vikingArmy.splice(vikingIndex, 1);
            }
        }
        console.log("S:", this.saxonArmy.length, "V:", this.vikingArmy.length );
        return resultOfAttack;
    }

    showStatus(){
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }

        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }

        if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
