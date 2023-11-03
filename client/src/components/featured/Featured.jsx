import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const { data, loading, error } = useFetch("/hotels/countByCity?cities=NuwaraEliya,Ella,Anuradhapura")

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cdn.audleytravel.com/-/-/79/1333687-nuwara-eliya-tea-estate.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Nuwara Eliya</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://th.bing.com/th/id/R.8f557088e8fcc6e2b9d0e3a075925148?rik=U2iheim6gm0Wqg&riu=http%3a%2f%2fwww.viceregaltravels.com%2fwp-content%2fthemes%2fviceregal-travels%2fimages%2fsri-lanka-experience.jpg&ehk=181qTa%2f4R7c8R%2bpvQ%2bnw%2bxG%2fjObZkMazsHCrF3NHh7Y%3d&risl=&pid=ImgRaw&r=0"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ella</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/checkfront-rogue.appspot.com/o/accounts%2Fcf-94884%2Fimages%2F2020%2FAnuradhapura-1601008390688.jpg?alt=media&token=1375b526-fe4e-4658-b66e-a6d5b97df817"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Anuradhapura</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
