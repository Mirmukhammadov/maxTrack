import Input from "../input/input";
import addIcon from "../../assets/icons/Add.svg";
import Button from "../button/button";

function fiveTab() {
  return (
    <>
      <div className="tab__div">
        <Input placeholder="Имя" type="text">
          *
        </Input>
        <Input placeholder="Значение" />

        <Button plusButton={true}>
          <img src={addIcon} alt="" className="plusButtonIcon" />
        </Button>
      </div>
    </>
  );
}

export default fiveTab;
