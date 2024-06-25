import { useState } from 'react'
import Section from '../Section'
import { Items, Item, Action, Modal, ModalContent } from './styles'
import zelda from '../../assets/images/zelda.png'
import spiderMan from '../../assets/images/banner.png'
import hogwards from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/close.png'

interface GalleryItems {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItems[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: hogwards
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=ZkrooJ7QPICI4sEg'
  }
]

type Props = {
  defaultCover: string
  name: string
}

interface ModalState extends GalleryItems {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItems) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItems) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Media ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'show' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={close}
              alt="Icone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe src={modal.url}></iframe>
          )}
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
