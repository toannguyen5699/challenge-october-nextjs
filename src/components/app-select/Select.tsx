import React, { FC, useState } from 'react'
import Select from 'react-select'

import styles from './select.module.scss'

import DataSelect from '../../../public/data/data-select.json'

interface Props {
  state?: string
  disabled?: boolean
  isDesktop?: boolean
  onChangeState?: (value: string) => void
}

const SelectState: FC<Props> = ({ disabled, state, onChangeState, isDesktop }) => {
  const [selectedOption, setSelectedOption] = useState<any>(null)

  const data = DataSelect.map((item) => ({
    label: `Ca ${item.shiftName} (${item.from.hour}:${item.from.minute} - ${item.to.hour}:${item.to.minute})`,
    value: item.shiftName,
  }))

  return (
    <div className={styles.appSelect}>
      <Select
        defaultValue={data[0]}
        options={data}
        onChange={(event: any) => {
          onChangeState(event?.value)
        }}
      />
    </div>
  )
}

export default SelectState
