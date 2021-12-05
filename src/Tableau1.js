class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //Les différentes lumières
        this.load.image('blue-light','assets/light/bluelight.png');
        //Le paysage
        this.load.image('building','assets/level/building.png');

        //Les différents éléments (avions, corbeaux et autre)
    }

    /**
     * Créer la scène
     */
    create(){


        //Paysage

        let building=this.add.image(0,-50, 'building').setOrigin(0,0);
        building.scale=0.76




        //Lumières

        let blueLight=this.add.image(250,120, 'blue-light').setOrigin(0,0);
        blueLight.scale=0.1





    }
}
