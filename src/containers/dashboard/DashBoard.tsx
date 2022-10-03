import React, { FC, useMemo, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './dashboard.module.scss'
import SelectState from 'components/app-select/Select'
import TableSchedule from 'components/table-schedule/TableSchedule'
import DataScheduleOne from '../../../public/data/data-schedule-one.json'
import DataScheduleTwo from '../../../public/data/data-schedule-two.json'
import DataTimeOne from '../../../public/data/data-time-one.json'
import DataTimeTwo from '../../../public/data/data-time-two.json'

const DashBoard: FC = () => {
  const [editState, setEditState] = useState<string>('A')
  const [listHourA, setListHourA] = useState<any>([8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
  const [machineDataForShiftA, setMachineDataForShiftA] = useState<any>(DataScheduleOne)
  const [dataTime, setDataTime] = useState<any>(DataTimeOne)

  const listHourB = [0, 1, 2, 3, 4, 5, 6, 7, 20, 21, 22, 23]

  const convertNumber = (number: number, length: number) => {
    let numberString = `${number}`
    while (numberString.length < length) {
      numberString = '0' + numberString
    }
    return numberString
  }

  const resultListSchedule = useMemo(() => {
    const result = listHourA.reduce((data: any, nextData: any) => {
      for (let i = 0; i < 60; i++) {
        for (let j = 0, len = listHourA.length; j < len; j++) {
          const findIndex = machineDataForShiftA.findIndex(
            (time: any) => +time.hour === listHourA[j] && +time.minute === i
          )
          if (findIndex === -1) {
            machineDataForShiftA.push({
              hour: convertNumber(listHourA[j], 2),
              minute: convertNumber(i, 2),
            })
          }
        }
      }
      data.push(
        machineDataForShiftA
          .filter((item: any) => +item.hour === nextData)
          .sort((a: any, b: any) => a.minute - b.minute)
      )
      return data
    }, [])
    return result
  }, [listHourA, machineDataForShiftA])

  const onHandleChangeState = (value: string) => {
    setEditState(value)
    setListHourA(
      value === 'A'
        ? [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
        : [0, 1, 2, 3, 4, 5, 6, 7, 20, 21, 22, 23]
    )
    setMachineDataForShiftA(value === 'A' ? DataScheduleOne : DataScheduleTwo)
    setDataTime(value === 'A' ? DataTimeOne : DataTimeTwo)
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerSelect}>
        <SelectState onChangeState={onHandleChangeState} />
      </div>

      <TableSchedule listTime={dataTime} listSchedule={resultListSchedule} />
    </div>
  )
}

export default DashBoard
