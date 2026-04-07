import { useState } from "react";

function Form({ children }){
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [submitData, setSubmitData ] = useState(null);

    const handleSubmit = (e)=> {
        e.preventDefault();

        setSubmitData({
            name: name,
            email:email
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <button type="submit">INVIA</button>
            </form>

            {submitData && (
                <div>
                    <h2>Dati inseriti:</h2>
                    <p>Nome: {submitData.name}</p>
                    <p>Email: {submitData.email}</p>
                </div>
            )}
        </>
    );

}

export default Form;


//per questo esercizio mi sono fatta aiutare dall'intelligenza artificiale, ho bisogno di qualche chiarimento. 