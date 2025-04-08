import s from './Image.module.css'

type Props = {
  image: string
}

export const Image = ({image}: Props) => {
    return (
      <div className={s.wrapper}>
        {image ? <img src={image} alt='news' className={s.image}/> : null}
        image
      </div>
    )
}
