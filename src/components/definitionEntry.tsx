import imgPlayUrl from '../assets/images/icon-play.svg'
import imgNewWindowUrl from '../assets/images/icon-new-window.svg'

const DefinitionEntry = () => {
  return (
    <section className="section-definition">
      <div className="banner">
        <div className="banner-word-container">
          <h1 className="banner-word">keyboard</h1>
          <h2 className="banner-phonetic">kibod</h2>
        </div>
        <button
          type="button"
          className="btn-play-audio"
        >
          <img
            className="img-play-icon"
            src={imgPlayUrl}
            alt="play button"
          />
        </button>
      </div>
        <div className="source-section">
          <div className="source-line">
            <h5 className="source-heading">Source</h5>
            <a
              className="source-url"
              href={''}
              rel="noreferrer"
              target="_blank"
            >
              
              <img
                className="img-source-link"
                src={imgNewWindowUrl}
                alt="Open source link in new window"
              />
            </a>
          </div>
        </div>
    </section>
  );
};

export default DefinitionEntry;
