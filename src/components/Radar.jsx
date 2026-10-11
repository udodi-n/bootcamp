export default function Radar(){
    return (
        <>
        <div
              className="radar lg:w-99 w-60"
              role="img"
              aria-label="Live system activity">
                
              <div className="radar__sweep" aria-hidden="true"></div>
              <div className="radar__grid" aria-hidden="true"></div>
           
              <div className="radar__ring radar__ring--one" aria-hidden="true"></div>
              <div className="radar__ring radar__ring--two" aria-hidden="true"></div>
              <div className="radar__ring radar__ring--three" aria-hidden="true"></div>
           
              <span
                className="radar__label"
           
              >edge</span>
              <span
                className="radar__label"
           
              >worker</span>
           
              <span className="radar__blip" ></span>
              <span className="radar__blip" ></span>
              <span className="radar__blip" ></span>
              <span className="radar__blip" ></span>
              <span className="radar__blip" ></span>
              <span className="radar__blip" ></span>
            </div>
        </>
    )
}