import { useState } from "react"


export default function Batsman() {
    let [runs, setRuns] = useState(0);
    const [single, setSingle] = useState(0);
    let [four, setFour] = useState(0);
    const [Six, setSix] = useState(0);

    const singlesHandle = () => {
        const newRun = runs + 1;
        const totalSingle = single + 1;
        setSingle(totalSingle);
        setRuns(newRun);
    }
    const foursHandle = () => {
        const newRun = runs + 4;
        const totalFour = four + 1;
        setFour(totalFour);
        setRuns(newRun);
    }
    const sixesHandle = () => {
        const newRun = runs + 6;
        const totalSix = Six + 1;
        setSix(totalSix);
        setRuns(newRun);
    }

    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            {/* dynamic value set below line */}
            <p><small>Single: {single}</small></p>
            <p><small>Four: {four}</small></p>
            <p><small>Six: {Six}</small></p>

            {
                runs > 50 && <p>Your Team Total Score Is {runs}</p>
            }
            {
                runs > 100 && <p>Congrats!! Your Team Total Score Is {runs}</p>
            }

            <h2>Score: {runs}</h2>
            <button onClick={singlesHandle}>Singles</button>
            <button onClick={foursHandle}>Four</button>
            <button onClick={sixesHandle}>Six</button>
        </div>
    )
}