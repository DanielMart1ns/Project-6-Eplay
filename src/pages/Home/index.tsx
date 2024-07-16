import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItems {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItems[]
  }
}

const Home = () => {
  const { data: onSalesGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        isLoading={isLoadingSale}
        games={onSalesGames}
        title="Promoções"
        background="gray"
        id="on-sale"
      />
      <ProductsList
        isLoading={isLoadingSoon}
        games={soonGames}
        title="Em breve"
        background="black"
        id="coming-soon"
      />
    </>
  )
}

export default Home
