import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import Header from '../../components/Header'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Textarea from '../../components/Textarea'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

function WorkForm() {
  const history = useHistory()

  const [techsSelected, setTechsSelected] = useState<string[]>([''])

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('Por Hora')
  const [cost, setCost] = useState('')

  function handleCreateWork(event: FormEvent) {
    event.preventDefault()

    const data = {
      name,
      description,
      price,
      cost,
      techs: techsSelected
    }


    console.log(data)

    history.push("/")
  }

  async function setTechsItemsValues(position: number, value: string) {
    const updatedTechsItems = techsSelected.map((TechsItem, index) => {
      if (index === position) return value

      return TechsItem
    })

    setTechsSelected(updatedTechsItems)
  }

  function addNewTechs() {
    setTechsSelected([...techsSelected, ''])
  }


  return (
    <div id="page-work-form" className="container">
      <Header
        title="Que incrível que você tem um projeto em mente."
      />

      <main>
        <form onSubmit={handleCreateWork}>
          <fieldset>
            <legend>Sobre o Projeto</legend>
            <Input name="name" label="Nome do Projeto" changeState={setName} required />

            <div className="input-group">
              <Select
                name="subject"
                label="Preço"
                value={price}
                changeState={setPrice}
                options={[
                  { value: 'Por Hora', label: 'Por Hora' },
                  { value: 'Preço Fixo', label: 'Preço Fixo' },
                ]}
              />

              <Input name="cost" label={`Custo / ${price}`} changeState={setCost} required />
            </div>
            <Textarea name="Description" label="Descrição" changeState={setDescription} required />
          </fieldset>

          <fieldset>
            <legend>
              Tecnologías utilizadas
              <button type="button" onClick={addNewTechs}>+ Novo Tecnología</button>
            </legend>

            {
              techsSelected.map((tech, index) => (
                <div key={index} className="techs-items">
                  <Select
                    label="Tecnologías"
                    name="techs"
                    value={tech}
                    onChange={(e) => setTechsItemsValues(index, e.target.value)}
                    required
                    options={[
                      { label: 'Javascript', value: 'JS' },
                      { label: 'HTML', value: 'HTML' },
                      { label: 'CSS', value: 'CSS' },
                      { label: 'React.js', value: 'React' },
                      { label: 'Node.js', value: 'Node' },
                      { label: 'MySQL', value: 'MySQL' }
                    ]}
                  />
                </div>
              ))
            }
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante" />
              Importante! <br />
              Preencha todos os Dados!
            </p>

            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default WorkForm