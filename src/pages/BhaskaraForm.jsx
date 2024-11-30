import { useState } from "react";
import "../styles/BhaskaraForm.css";
/*fórmula de bhaskara*/
/**
 * a função bhaskaraform realiza o cálculo dos inputs inseridos pelo cliente
 * @returns
 */
const BhaskaraForm = () => {
  //Estados que armazenam os valores, o Set faz a alteração dos valores
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();
  const [resultadoX1, setResultadoX1] = useState();
  const [resultadoX2, setResultadoX2] = useState();
  const [erro, setErro] = useState();

  //Função que é executada quando o usuário clica em calcular
  const handleSubmit = (e) => {
    //Evita que o formulário seja submetido antes de realizar os cálculos
    e.preventDefault();
    //Limpa os campos para realizar os novos cálulos
    setErro("");
    setResultadoX1("");
    setResultadoX2("");
    /* ! = negativo | = ou / = divisão */
    //Nesse if validamos se todos os campos estão preenchidos, se estiverem ele realiza o cálculo se não estiver ele retorna um erro.
    if (!a || !b || !c) {
      setErro("Informe todos os coeficientes!");
    } else {
      //Calcula a formula do Delta.
      let delta = b ** 2 - 4 * a * c;
      //Verifica se a formula de Delta retornou -1 ou -0, nesse caso não existem raizes reais.
      if (!(Math.sign(delta) === -1 || Math.sign(delta) === -0)) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        setResultadoX1(x1);
        setResultadoX2(x2);
      } else {
        setErro("não existem raízes reais pois o delta é negativo");
      }
    }
  };
  return (
    <div class="calculadora">
      <h2>Calculadora de Bhaskara</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Coeficiente A:
            <br></br>
            <input
              type="number"
              value={a}
              onChange={(e) => setA(e.target.value)}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Coeficiente B:
            <br></br>
            <input
              type="number"
              value={b}
              onChange={(e) => setB(e.target.value)}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Coeficiente C:
            <br></br>
            <input
              type="number"
              value={c}
              onChange={(e) => setC(e.target.value)}
            ></input>
          </label>
        </div>
        <br></br>
        <button type="submit">Calcular</button>
        <br></br>
      </form>
      <div>
        <p>Raiz 1: {resultadoX1} </p>
        <br></br>
        <p>Raiz 2: {resultadoX2} </p>
        <br></br>
        <div className="erroMsg">{erro} </div>
      </div>
    </div>
  );
};

export default BhaskaraForm;
