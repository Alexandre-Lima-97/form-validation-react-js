import React from 'react';
import InputMask from 'react-input-mask';

import { IoIosCloseCircle, IoIosCheckmarkCircle } from 'react-icons/io';
import { toast } from 'react-toastify';
import { Former, Icon, Line, Wrong, Right, Cont, MsgError} from './styled';
import validaCPF from './validacpf';


export default function Form() {

  const [nome, setNome] = React.useState('');
  const [nomeCorrect, setNomeCorrect] = React.useState(false);
  const [cpf, setCpf] = React.useState('');
  const [cpfCorrect, setCpfCorrect] = React.useState(false);
  const [cep, setCep] = React.useState('');
  const [cepCorrect, setCepCorrect] = React.useState(false);
  const [telefone, setTelefone] = React.useState('');
  const [telefoneCorrect, setTelefoneCorrect] = React.useState(false);
  const [msgErroCpf, setMsgErroCpf] = React.useState('');
  const [msgErroCep, setMsgErroCep] = React.useState(false);
  const handleName = async(e) => {
    setNome(e.target.value)
  }
  const handleCpf = async(e) => {
    setCpf(e.target.value)
  }

  const handleCep = async(e) => {
    setCep(e.target.value)
  }
  const handleTelefone = async(e) => {
    setTelefone(e.target.value)
  }

  React.useEffect(() =>  {
    function validarCpf () {
      if(!cpf) return false;
      setMsgErroCpf('');
      const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/g;
      if(cpf.match(cpfRegExp)){
       const valido = validaCPF(cpf);
       if(valido) return true;
       setMsgErroCpf('CPF inválido');
      }

      return false;
    }

    function validarNome () {
      if(!nome) return false;
      const nomeValidExp = /[A-Za-z]{3}\s+[A-Za-z]{3}/g;
      if(nome.match(nomeValidExp)) {
        return true;
      }
      return false;
    }

    async function validarCep () {
      const cepRegExp = /\d{5}-\d{3}/g;
      if(cep.match(cepRegExp))  {
        const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
          response =>response.json()
        );
        if (data.erro) {
          setCepCorrect(false);
          setMsgErroCep("CEP inválido!");
          return;
        }
        setCepCorrect(true);
        return;
      }
      setMsgErroCep('');
      setCepCorrect(false);
    }

    function validarTelefone () {
      if(!telefone) return false;
      const telRegExp =/^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g;
      if(telefone.match(telRegExp)) {
        return true;
      }

      return false;
    }


    setNomeCorrect(validarNome());
    setCpfCorrect(validarCpf())
    validarCep();
    setTelefoneCorrect(validarTelefone());
  }, [cep, cepCorrect, cpf, nome, telefone])

    const handleSubmit = e => {
    e.preventDefault();
    if(!nomeCorrect || !cpfCorrect || !cepCorrect || !telefoneCorrect){
      toast.error("Há erros no seu formulário");
    } else{
      toast.success("Informações válidas!");
    }
  }


  return (
    <Former>
      <h1>Form Validation</h1>
    <form onSubmit={handleSubmit}>
      <Line>
      <InputMask type="text" value={nome} placeholder='Nome Completo' onChange={handleName}/>
      <Cont>
        {
          nome ? <Icon>{
            nomeCorrect ? <Right><IoIosCheckmarkCircle size={22} /></Right> :
             <Wrong><IoIosCloseCircle size={22} /></Wrong>
           }</Icon> : <Icon />
        }
          </Cont>
      </Line>
      <Line>
      <InputMask type="text" value={cpf} mask="999.999.999-99" placeholder='CPF' onChange={handleCpf}/>
      {msgErroCpf ? <MsgError> {msgErroCpf} </MsgError> : <MsgError />}
      <Cont>
        {
          cpf ? <Icon>{
            cpfCorrect ? <Right><IoIosCheckmarkCircle size={22} /></Right> :
             <Wrong><IoIosCloseCircle size={22} /></Wrong>
           }</Icon> : <Icon />
        }
          </Cont>
      </Line>
      <Line>
      <InputMask mask="99999-999" type="text" value={cep} placeholder='CEP' onChange={handleCep}/>
      {msgErroCep !== '' ? <MsgError> {msgErroCep} </MsgError>: <MsgError />}
      <Cont>
        {
          cep ? <Icon>{
            cepCorrect ? <Right><IoIosCheckmarkCircle size={22} /></Right> :
             <Wrong><IoIosCloseCircle size={22} /></Wrong>
           }</Icon> : <Icon />
        }
          </Cont>
      </Line>
      <Line>
      <InputMask mask="(99) 9 9999-9999"  type="text" value={telefone} placeholder='Telefone' onChange={handleTelefone}/>
      <Cont>
        {
          telefone ? <Icon>{
            telefoneCorrect ? <Right><IoIosCheckmarkCircle size={22} /></Right> :
             <Wrong><IoIosCloseCircle size={22} /></Wrong>
           }</Icon> : <Icon />
        }
          </Cont>
      </Line>
      <button type="submit">Enviar</button>
    </form>
  </Former>
  )
};


