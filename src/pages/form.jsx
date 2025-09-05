import { useState } from "react";

function form() {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobre] = useState("")
    const [profissao, setProfissao] = useState("")
    const [exibir, setExibir] = useState(false)

    function hadleSubmit(e) {
        e.preventDefault()
        setExibir(true)
    }

    return(
        <div>
            <h1 className="bg-amber-500">Formulário com useState</h1>

            <form onSubmit={hadleSubmit}>
                <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} className=""/>
                <input type="text" placeholder="Digite seu SobreNome" value={sobrenome} onChange={(e) => setSobre(e.target.value)} className=""/>
                
                <input type="text" placeholder="Digite sua profissão" value={profissao} onChange={(e) => setProfissao(e.target.value)} className=""/>



                <button type="submit">Enviar</button>
            </form>
            
            {exibir && <h2 className="bg-amber-400">Olá, {nome} {sobrenome}! Sua profissão é {profissao}</h2>}
        </div>
    )

}

export default form