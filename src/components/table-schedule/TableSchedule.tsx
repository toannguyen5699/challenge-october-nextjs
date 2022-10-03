import React, { FC, useCallback, useState } from 'react'
import cx from 'classnames'

import DataSelect from '../../../public/data/data-select.json'
import styles from './table-schdule.module.scss'
import Tooltip from 'components/tooltip/tooltip'

interface Props {
  listTime?: any
  listSchedule?: any
}

const TableSchedule: FC<Props> = ({ listTime, listSchedule }) => {
  const handleTooltip = useCallback((downTimeType: number) => {
    if (downTimeType >= 1 && downTimeType <= 20) {
      return 'Máy dừng không kế hoạch'
    } else if (downTimeType > 20) {
      return 'Máy dừng có kế hoạch'
    } else if (downTimeType === 0) {
      return 'Máy chạy bình thường'
    }
    return ''
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.contentLeft}>
        <div>Gio</div>
        <div>
          {listTime.map((ele: any) => {
            return (
              <div className={styles.contentLeftTable} key={ele.id}>
                {ele?.name}
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.contentRight}>
        <div>Du lieu may chay trong 1h</div>
        <div>
          {listSchedule.map((ele: any, index: any) => {
            return (
              <div key={index} className={styles.contentRightRow}>
                {ele.map((element: any, index: any) => {
                  return (
                    <>
                      <Tooltip
                        content={
                          <div className={styles.tooltipContainer}>
                            <div className={styles.arrowTooltip} />
                            {`${element.hour}:${element.minute} ${handleTooltip(
                              element?.downTimeType
                            )}`}
                          </div>
                        }
                        position={'top'}
                      >
                        <div
                          className={cx(styles.contentRightRowTable, {
                            [styles.green]: element?.downTimeType === 0,
                            [styles.red]: element?.downTimeType >= 0 && element?.downTimeType <= 19,
                            [styles.yellow]: element?.downTimeType > 20,
                            [styles.gray]: !element?.downTimeType,
                          })}
                          key={`${element.hour} ${index}`}
                        >
                          {element.minute}
                        </div>
                      </Tooltip>
                    </>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TableSchedule
