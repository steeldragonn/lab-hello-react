import "./style.css";
import pic1 from "../assets/declarative.png";
import pic2 from "../assets/components.png";
import pic3 from "../assets/singleway.png";
import pic4 from "../assets/laptoppic.png";

function List() {
  return (
    <div className="list-wrapper">
      <div className="pics">
        <img src={pic1} alt="pic1" />
        <p> React makes it painless to create interactive UIs.</p>
      </div>

      <div className="pics">
        <img src={pic2} alt="pic2" />
        <p>Build encapsuled components that manage their state.</p>
      </div>
      <div className="pics">
        <img src={pic3} alt="pic3" />
        <p> A set of immutable values are passed to the components.</p>
      </div>
      <div className="pics">
        <img src={pic4} alt="pic4" />
        <p> Statically-typed designed to run on modern browsers</p>
      </div>
    </div>
  );
}

export default List;
