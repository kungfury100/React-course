import { useRef, useState } from 'react'

function Tagasiside() {
  const [tagasisided, setTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"])

  const deleteFeedback = (index) => {
    tagasisided.splice(index, 1);
    setTagasisided(tagasisided.slice());
  }

  const tagasisideRef = useRef();

  const lisaUusTagasiside = () => {
    tagasisided.push(tagasisideRef.current.value)
    setTagasisided(tagasisided.slice())
    tagasisideRef.current.value = ""
  }

  return (
    <div>
        <br /><br />
        {tagasisided.map((tagasiside, index) =>  
            <table key={tagasiside}>
                <tr>
                    <td>{tagasiside}</td>
                    <td><button onClick={() => deleteFeedback(index)}>X</button></td>
                </tr>
            </table>
            
        )}
        <br /><br />
        Lisa uus tagasiside <br />
        <input ref={tagasisideRef} type="text" />
        <button onClick={lisaUusTagasiside}>Lisa</button>
    </div>
  )
}

export default Tagasiside