"use client"

import HomeHero from "@/components/Home/HomeHero"
import PopularSection from "@/components/Home/PopularSection"

export default function Home() {
  return(
    <div>
      <section className="pb-16">
        <HomeHero/>
      </section>
      <section className="py-16 px-6">
        <PopularSection />
      </section>
      <section>
        Your favourites
      </section>
    </div>
  )
}
