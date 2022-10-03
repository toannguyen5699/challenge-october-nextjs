import React, { FC, ReactElement, useEffect } from 'react'
import { NextRouter, useRouter } from 'next/router'
import classes from './main-layout.module.scss'

interface MainLayoutProps {
  children: React.ReactElement
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter()

  return (
    <div className={classes.container}>
      <div>Author: Toan Nguyen</div>
      <div className={classes.body}>{children}</div>
    </div>
  )
}

export function renderMainLayout({ children }: MainLayoutProps) {
  return <MainLayout>{children}</MainLayout>
}
