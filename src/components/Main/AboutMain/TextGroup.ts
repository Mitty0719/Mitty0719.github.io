import Text from "./Text";

const ABOUT_ME = [
  'TEXT1', 'TEXT2', 'TEXT3', 'TEXT4', 'TEXT5', 'TEXT6', 'TEXT7', 'TEXT8', 'TEXT9', 'TEXT10',
  'TEXT11', 'TEXT12', 'TEXT13', 'TEXT14', 'TEXT15', 'TEXT16', 'TEXT17', 'TEXT18', 'TEXT19', 'TEXT20',
]

class TextGroup{
  private textList : Array<Text>;
  constructor(){
    this.textList = [];
    this.create();
  }

  create(){
    for(let aboutText of ABOUT_ME){
      this.textList.push(new Text(aboutText));
    }
  }

  draw(ctx : CanvasRenderingContext2D){
    for(let text of this.textList){
      text.draw(ctx);
    }
  }
}

export default TextGroup;