import "./propertyList.css";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://www.srilankaauthenticholidays.com/wp-content/uploads/2020/08/aditya.jpg",
    "https://th.bing.com/th/id/OIP.ckbLj6XtXXdjR1xRkeMWGQHaEL?pid=ImgDet&rs=1",
    "https://i.pinimg.com/originals/53/53/67/5353677a4ecc495f0abd316b2a4658a7.jpg",
    "https://www.villanovo.com/images/landing_pages/landing_51_114_1507649397.1920.jpg",
    "https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/09/28/18/a.jpg?width=968",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
