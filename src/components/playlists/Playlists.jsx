import "../../styles/playlists/playlists.css";

function Playlist(props) {
  return (
    <>
      <div className="card-playlists">
        <a className="link-playlists" href="">
          <img
            className="img-playlists"
            src="/image/playlists/Rockeando.jpg"
            alt=""
          />
          <h2 className="name-playlists">{props.namePlaylists}</h2>
          <h4 className="name-users">{props.nameUsers}</h4>
        </a>
      </div>
    </>
  );
}

export default Playlist;
