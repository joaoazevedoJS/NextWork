import React from 'react'

import PageHeader from '../../components/PageHeader'
import WorkItem from '../../components/WorkItem'

import './styles.css'

function WorkList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader
        title="Estes são os trabalhos disponíveis."
      >
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="profession">Profissão</label>
            <input type="text" id="profession" />
          </div>

          <div className="input-block">
            <label htmlFor="project">Projetos</label>
            <input type="text" id="project" />
          </div>

          <div className="input-block">
            {/* Preço Fixo e por hora */}
            <label htmlFor="price">Preço</label>
            <input type="text" id="price" />
          </div>
        </form>
      </PageHeader>

      <main>
        <WorkItem />
        <WorkItem />
        <WorkItem />
      </main>
    </div>
  )
}

export default WorkList