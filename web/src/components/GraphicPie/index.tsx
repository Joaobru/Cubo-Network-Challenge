import './styles.css'

import React, { useEffect, useState } from 'react'

import { TableProps } from '../Table'

import { Doughnut } from 'react-chartjs-2'
import { MDBContainer } from 'mdbreact'

import { filteredParticipation } from '../../utils/filteredParticipation'
import { filteredName } from '../../utils/filteredName'
import { filteredColors } from '../../utils/filteredColors'

function GraphicPie ({ listTable }:TableProps) {
  const [dataDoughnut, setDataDoughnut] = useState({})
  const [dataList, setDataList] = useState({})
  const [participation, setParticipation] = useState([])
  const [names, setNames] = useState([])
  const [colors, setColors] = useState([])

  useEffect(() => {
    filteredParticipation(listTable, setParticipation)
    filteredName(listTable, setNames)
    filteredColors(listTable, setColors)
    setDataList(listTable)
  }, [listTable])

  useEffect(() => {
    if (dataList === '') {
      console.log('Error')
    } else {
      setDataDoughnut({
        labels: names,
        datasets: [
          {
            data: participation,
            backgroundColor: colors,
            hoverBackgroundColor: colors
          }
        ]
      })
    }
  }, [dataList, colors, participation, names])

  return (
    <MDBContainer className="containerGraphicPie" >
      <Doughnut width={400} data={dataDoughnut} legend={{ position: 'right' }} options={{ responsive: true }} />
    </MDBContainer>
  )
}

export default GraphicPie
