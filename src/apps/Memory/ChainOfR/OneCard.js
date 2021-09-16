class OneCard extends LogicGame {
    process(twice, item){
        if(twice.length == 0) {
            twice = [...twice, item];
        } else {
            this.next.process(twice, item, stateBoard, setStateBoard);
        }
    }
}
export default OneCard;