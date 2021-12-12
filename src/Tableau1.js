class Tableau1 extends Phaser.Scene {
    /**
     * Précharge les assets
     */
    preload() {
        //Les différentes lumières
        this.load.image('blue-light', 'assets/light/simplelight/bluelight.png');
        this.load.image('green-light', 'assets/light/simplelight/greenlight.png');
        this.load.image('pink-light', 'assets/light/simplelight/pinklight.png');
        this.load.image('white-light', 'assets/light/simplelight/whitelight.png');
        this.load.image('orange-light', 'assets/light/simplelight/orangelight.png');
        this.load.image('red-light', 'assets/light/simplelight/redlight.png');
        this.load.image('dark-blue-light', 'assets/light/simplelight/darkbluelight.png');
        this.load.image('turquoise-light', 'assets/light/simplelight/turquoiselight.png');
        this.load.image('purple-light', 'assets/light/simplelight/purplelight.png');
        this.load.image('yellow-light', 'assets/light/simplelight/yellowlight.png');
        //Les différentes lumières pour l'immeuble en dégradé
        this.load.image('blue-gradient', 'assets/light/colorgradient/bluegradient.png');
        this.load.image('green-gradient', 'assets/light/colorgradient/greengradient.png');
        this.load.image('orange-gradient', 'assets/light/colorgradient/orangegradient.png');
        this.load.image('pink-gradient', 'assets/light/colorgradient/pinkgradient.png');
        this.load.image('flashy-green-gradient', 'assets/light/colorgradient/flashygreengradient.png');
        this.load.image('purple-gradient', 'assets/light/colorgradient/purplegradient.png');
        this.load.image('red-gradient', 'assets/light/colorgradient/redgradient.png');
        this.load.image('yellow-gradient', 'assets/light/colorgradient/yellowgradient.png');
        this.load.image('dark-blue-gradient', 'assets/light/colorgradient/darkbluegradient.png');

        //Le paysage
        this.load.image('building', 'assets/level/building.png');

        //Les différents éléments (avions, corbeaux et autre)
    }

    /**
     * Créer la scène
     */
    create() {

        //met en place les éléments
        this.creerFormes();

        /**
         * Liste des lettres
         * @type {string[]}
         */
        this.lettres = "azertyuiopqsdfghjklmwxcvbn".split("")
        console.log("liste des touches prises en charge...");
        console.log(this.lettres);

        // pour chaque lettre on va créer un élément graphique
        this.creerClavier();


        //initialise les écoutes de touches pressées et relâchées
        this.initKeyboard();

        /**
         * influera sur la vitesse de rotation
         * modifié par les touches J K L M
         * @type {number}
         */
        this.vitesse = 1;
    }

    creerClavier() {
        //espacement entre les lettres = largeur de la scène / nombre de lettres
        let espacement = (this.game.config.width - 2) / this.lettres.length; // -2 c'est pour avour une petite marge d'un pixel
        let x = 1;
        for (let lettre of this.lettres) {
            let objetGraphique = this.add.text(x, 1, lettre, {
                color: "#FFFFFF", //blanc
                align: "center",
                backgroundColor: "#000000", //noir
                fixedWidth: espacement - 1  // -1 c'est pour avoir une petite marge d'un pixel entre les lettres
            });
            //position X de la rouche suivante
            x += espacement;
            //donne un nom à l'élément graphique
            objetGraphique.name = lettre;
        }
    }

    /**
     * Crée le décor
     */
    creerFormes() {

        //Fond

        this.fond = this.add.image(480, 270, "building");
        this.fond.scale=0.78


        // lumières de A à P

        this.blue = this.add.image(115, 305, "blue-light");
        this.blue.scale=1.5

        this.pink = this.add.image(314, 200, "pink-light");
        this.pink.scale=2.2

        this.white = this.add.image(385, 305, "white-light");
        this.white.scale=3.7

        this.orange = this.add.image(725, 223, "orange-light");


        this.darkBlue = this.add.image(590, 460, "dark-blue-light");
        this.darkBlue.scale=2.2

        this.turquoise = this.add.image(395, 70, "turquoise-light");
        this.turquoise.scale=1.7

        this.yellow = this.add.image(650, 120, "yellow-light");
        this.yellow.scale=2.5

        this.red = this.add.image(850, 290, "red-light");
        this.red.scale=0.5

        this.green = this.add.image(70, 376, "green-light");
        this.green.scale=2.5

        // dégradés de lumière de Q à M

        this.redGradient = this.add.image(885, 240, "red-gradient");
        this.redGradient.scale=0.38
        this.pinkGradient = this.add.image(885, 265, "pink-gradient");
        this.pinkGradient.scale=0.38
        this.purpleGradient = this.add.image(885, 295, "purple-gradient");
        this.purpleGradient.scale=0.38
        this.darkBlueGrandient = this.add.image(885, 323, "dark-blue-gradient");
        this.darkBlueGrandient.scale=0.38
        this.blueGradient = this.add.image(885, 347, "blue-gradient");
        this.blueGradient.scale=0.38
        this.flashygreenGradient = this.add.image(885, 405, "flashy-green-gradient");
        this.flashygreenGradient.scale=0.38
        this.greenGradient = this.add.image(885, 375, "green-gradient");
        this.greenGradient.scale=0.38
        this.yellowGradient = this.add.image(885, 430, "yellow-gradient");
        this.yellowGradient.scale=0.38
        this.orangeGradient = this.add.image(885, 460, "orange-gradient");
        this.orangeGradient.scale=0.38
        this.redGradient1 = this.add.image(905, 483, "red-gradient");
        this.redGradient1.scale=0.38


        //a voir plus tard
        /**
         * this.blue.blendMode=Phaser.BlendModes.ADD;
         this.red.blendMode=Phaser.BlendModes.ADD;
         this.white.blendMode=Phaser.BlendModes.ADD;
         */


    }
}
