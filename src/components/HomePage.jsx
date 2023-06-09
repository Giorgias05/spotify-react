import { CardComponent } from "./CardComponent";
import { useSelector } from "react-redux";

export const HomePage = () => {

  const rock = useSelector((state) => state.songs.rock);
  const pop = useSelector((state) => state.songs.pop);
  const hipHop = useSelector((state) => state.songs.hiphop);

  return (
    <>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>ROCK </h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              {rock.map((data, index) => (
                <CardComponent artistName={rock[index]} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>POP</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              {pop.map((data, index) => (
                <CardComponent artistName={pop[index]} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>HIP HOP</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              {hipHop.map((data, index) => (
                <CardComponent artistName={hipHop[index]} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
