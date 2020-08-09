import React, { useState } from 'react'

import Header from '../../components/Header'
import WorkItem from '../../components/WorkItem'
import Select from '../../components/Select'

import './styles.css'

function WorkList() {
  const [ techs, setTechs ] = useState('')
  const [ price, setPrice ] = useState('')

  return (
    <div id="page-work-list" className="container">
      <Header
        title="Estes são os trabalhos disponíveis."
      >
        <form id="search-work">
          <Select
            label="Tecnologías"
            name="techs"
            value={techs}
            changeState={setTechs}
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

          <Select
            label="Preço"
            name="price"
            changeState={setPrice}
            required
            value={price}
            options={[
              { label: "Preço Fixo", value: "P/F" },
              { label: "Por Hora", value: "P/H" }
            ]}
          />

          <button type="submit">Buscar</button>
        </form>
      </Header>

      <main>
        <WorkItem />
        <WorkItem />
        <WorkItem />
      </main>
    </div>
  )
}

export default WorkList