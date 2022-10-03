import { ReactElement } from 'react'
import { AppContext, AppInitialProps } from 'next/app'

declare function appGetInitialProps({ Component, ctx }: AppContext): Promise<AppInitialProps>

export interface ComponentStatic {
  getInitialProps: typeof appGetInitialProps
}

export interface PageWithLayout {
  renderLayout?: ({ children }: { children: ReactElement }) => ReactElement
}
export interface PaginationModel {
  page?: number
  pageSize?: number
  totalItem?: number
  totalPage?: number
  sort?: string
  dateRangeType?: string
  credentialId?: string
}

export type GenericData<T> = {
  data: T
}

export type GenericDataList<T> = {
  data: {
    data: Array<T>
    totalItem: number
    totalPage: number
    page: number
    pageSize: number
    totalUnread?: number
  }
}
