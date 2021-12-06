class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //Les différentes lumières
        this.load.image('blue-light','assets/light/bluelight.png');
        this.load.image('green-light','assets/light/greenlight.png');
        this.load.image('red-light','assets/light/redlight.png');
        this.load.image('white-light','assets/light/whitelight.png');
        this.load.image('yellow-light','assets/light/yellowlight.png');
        //Le paysage
        this.load.image('building','assets/level/building.png');

        //Les différents éléments (avions, corbeaux et autre)
    }

    /**
     * Créer la scène
     */
    create() {


        //Paysage

        let building = this.add.image(0, -50, 'building').setOrigin(0, 0);
        building.scale = 0.76


        //Lumières (touches de A à P)

        let blueLight = this.add.image(190, 95, 'blue-light').setOrigin(0, 0);
        blueLight.scale = 2


        let greenLight = this.add.image(100, 85, 'green-light').setOrigin(0, 0);


        let whiteLight = this.add.image(655, 200, 'white-light').setOrigin(0, 0);


        let yellowLight = this.add.image(460, 100, 'yellow-light').setOrigin(0, 0);
        yellowLight.scale = 2


        let redLight = this.add.image(240, 185, 'red-light').setOrigin(0, 0);
        redLight.scale = 2.3


        this.brightYellow = this.add.image(600, 40, 'white-light').setOrigin(0, 0);
        this.brightYellow.setTintFill(0xFFF933)


        this.turquoiseLight = this.add.image(280, 30, 'white-light').setOrigin(0, 0);
        this.turquoiseLight.setTintFill(0x00FFF7)


        this.purpleLight = this.add.image(823, 186, 'red-light').setOrigin(0, 0);
        this.purpleLight.setTintFill(0x9300FF)
        this.purpleLight.scale = 0.3


        this.greenLight1 = this.add.image(5, 230, 'white-light').setOrigin(0, 0);
        this.greenLight1.setTintFill(0x4FFF03)
        this.greenLight1.scale = 1.2



        this.redLight1 = this.add.image(165, 375, 'white-light').setOrigin(0, 0);
        this.redLight1.setTintFill(0xFF0303)
        this.redLight1.scale = 0.7

        //Emojis (touches de Q à M)

        initKeyboard(){
            let me=this;
            this.input.keyboard.on('space', function(kevent)
            {
                switch (kevent.keyCode)
                {
                    case Phaser.Input.Keyboard.KeyCodes.SPACE:
                        me.speed=1;
                        break;
                }
            });
            this.input.keyboard.on('space', function(kevent)
            {
                switch (kevent.keyCode)
                {
                    case Phaser.Input.Keyboard.KeyCodes.SPACE:
                        me.speed=0;
                        break;
                }
            });
        }


    }




}
