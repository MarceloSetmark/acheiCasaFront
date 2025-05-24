'use client'

import React, { useState, useEffect } from 'react'
import "./home.css"
import Filter from '../../(components)/Filter/filter'
import HouseCard from '@/app/(components)/Cards/HouseCard'
import Loader from '@/app/(components)/Loader/loader'
import APIPROPERTY from '@/app/Req/ApiProperty'
import NoResults from './homeComponents/homeNotFound'
const Home = () => {
  const [loading, setLoading] = useState(true)
  const [property, setProperty] = useState<any[]>([])

  useEffect(() => {
    async function fetchProperties() {
      try {
        const properties = await APIPROPERTY()
        setProperty(properties)
      } catch (error) {
        console.log("Erro ao pegar propriedades: ", error)
      }
    }
    fetchProperties()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  if (!loading && property.length === 0) {
    return <NoResults />;
  }

  return (
    <section className="mx-auto px-4 py-8 mt-[98px]">
      <Filter visible={false} />
      <div id="home" className="grid grid-cols-1 relative gap-[35px] py-[30px]">
        {property.map((casa, index) => (
          <HouseCard key={index} object={casa} />
        ))}
      </div>
    </section>
  )
}

export default Home