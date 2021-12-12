import { Reciepe } from "./reciepe.model";

export class ReciepeService {
    private reciepes: Reciepe[] = [
        new Reciepe(
          'A Test Reciepe',
          'This is reciepe description',
          'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
        ),
        new Reciepe(
          'Another Reciepe',
          'This is another reciepe description',
          'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
        )
      ];

    getReciepes(){
        return this.reciepes.slice();
    }

}