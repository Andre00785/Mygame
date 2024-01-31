class Main extends Phaser.Scene {
    // Ця функція 
    preload() {
      this.load.spritesheet("monster", "assets/monster.png", {
        frameWidth: 178,
        frameHeight: 178,
      });
    }
    create() {
        //Додаємо монстра на сцену
        this.plane = this.physics.add.sprite(0, 0, "monster");
        //Масштабуємо монстра
        this.plane.setScale(0.2, 0.2);
         //Встановлюємо опорну точку монстра
      this.plane.setOrigin(0, 0);
      this.anims.create({
        key: "monsterAnimation",
        frames: this.anims.generateFrameNumbers("monster", {
          frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        }),
        frameRate: 10,
        repeat: -1,
      });
      this.plane.play("monsterAnimation");
  
      this.plane.body.gravity.y = 1000;
      this.spaceBar = this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.W
      );
      this.spaceBar = this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.A
      );
      this.spaceBar = this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.D
      );
      this.score = 0;
      this.labelScore = this.add.text(20, 20, "0", {
        fontSize: 24,
        color: "black",
      });
    
    
    }

}