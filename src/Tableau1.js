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

        let building=this.add.image(400,100, 'building').setOrigin(0,0);
        this.building.add(building);

        //Lumières

        let blueLight=this.add.image(0,100, 'blue-light').setOrigin(0,0);
        this.blueLight.add(blueLight);




    }
}
